// One-off: capture the dark prototype screens for the Eticket case.
const { chromium } = require("playwright");
const shots = { "home": "/?theme=dark", "card": "/card?theme=dark", "routes-options": "/routes?to=work&theme=dark", "tap-success": "/?scenario=paid&theme=dark", "metro-map": "/metro?theme=dark" };
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, reducedMotion: "reduce" });
  for (const [n, u] of Object.entries(shots)) {
    const p = await ctx.newPage();
    await p.goto("http://localhost:5174" + u);
    await p.waitForTimeout(1200);
    await p.locator("#phone").screenshot({ path: `D:/Portfolio/public/case-eticket/dark/${n}.png` });
    await p.close();
  }
  await b.close();
})();
