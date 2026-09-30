// One-off asset build for the Eticket case: v1 crops with markers, after shots (webp).
const sharp = require("sharp");
const fs = require("fs");
const SRC = "D:/E-ticket/src/", OUT = "D:/Portfolio/public/case-eticket/";
const find = (k) => SRC + fs.readdirSync(SRC).find((f) => f.startsWith(k) && f.endsWith(".png"));
const P = 1000 / 1920; // preview scale used when picking coordinates
const crops = [
  { name: "pay", k: "bc3688", x: 324, y: 275, w: 176, boxes: [[326, 448, 499, 482], [328, 512, 497, 578], [328, 618, 497, 646]] },
  { name: "stops", k: "70ed0d", x: 402, y: 160, w: 201, boxes: [[406, 388, 598, 535]] },
  { name: "onboarding", k: "63e46b", x: 195, y: 145, w: 197, boxes: [[203, 412, 384, 441]] },
  { name: "topup", k: "d540f2", x: 552, y: 310, w: 178, boxes: [[555, 562, 727, 664]] },
  { name: "route", k: "266754", x: 452, y: 212, w: 198, boxes: [[462, 264, 643, 318], [603, 596, 646, 624]] },
];
(async () => {
  for (const c of crops) {
    const w = c.w, h = Math.round((w * 844) / 390);
    const left = Math.round(c.x / P), top = Math.round(c.y / P), cw = Math.round(w / P), ch = Math.round(h / P);
    const s = 780 / w;
    const rel = c.boxes.map(([a, b, d, e]) => [(a - c.x) * s, (b - c.y) * s, (d - c.x) * s, (e - c.y) * s]);
    const shapes = rel.map(([a, b, d, e], i) => `<rect x="${a}" y="${b}" width="${d - a}" height="${e - b}" rx="14" fill="none" stroke="#F0553A" stroke-width="5"/>
      <circle cx="${a + 2}" cy="${b - 2}" r="21" fill="#F0553A"/><text x="${a + 2}" y="${b + 6}" font-family="Arial" font-weight="700" font-size="24" fill="#fff" text-anchor="middle">${i + 1}</text>`).join("");
    const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="780" height="1688">${shapes}</svg>`);
    await sharp(find(c.k)).extract({ left, top, width: cw, height: ch }).resize(780, 1688, { fit: "fill" })
      .composite([{ input: svg }]).webp({ quality: 85 }).toFile(OUT + `v1/${c.name}.webp`);
  }
  const after = "05-home 11-tap-success 17-route-live 12-tap-declined 08-stop-detail 01-welcome 19-visitor-tickets 14-top-up 16-routes-options 18-route-service-change 23-refund-done 26-lost-card 25-fare-renewal 20-visitor-ticket-wallet".split(" ");
  for (const n of after) await sharp(`D:/E-ticket/shots/${n}.png`).resize(780, 1688).webp({ quality: 82 }).toFile(OUT + `after/${n}.webp`);
  console.log("ok");
})();
