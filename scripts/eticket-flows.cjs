// One-off: render the Eticket Mermaid flows to webp in the Miro legend colours.
const { chromium } = require("playwright");
const sharp = require("sharp");
const fs = require("fs");
const names = ["onboarding", "pay", "cards", "nearby", "route", "visitor", "account", "special"];
const md = fs.readFileSync("D:/E-ticket/docs/case-flows.md", "utf8");
const srcs = [...md.matchAll(/```mermaid\n([\s\S]*?)```/g)].map((m) => m[1]);
const style = (src) => {
  const start = [...src.matchAll(/\b(\w+)\(\[/g)].map((m) => m[1]);
  const dec = [...src.matchAll(/\b(\w+)\{\{/g)].map((m) => m[1]);
  const step = [...src.matchAll(/\b(\w+)\[(?!\[)/g)].map((m) => m[1]);
  return `${src}
classDef step fill:#FFE86D,stroke:#A28E26,color:#1c1c1c,stroke-width:1.5px
classDef dec fill:#9CE6FF,stroke:#2C97BB,color:#1c1c1c,stroke-width:1.5px
classDef end1 fill:#B3E65F,stroke:#6E9A24,color:#1c1c1c,stroke-width:1.5px
class ${[...new Set(step)].join(",")} step
class ${[...new Set(dec)].join(",")} dec
class ${[...new Set(start)].join(",")} end1
`;
};
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 2, viewport: { width: 1400, height: 900 } });
  await page.setContent(`<html><body style="margin:0;background:#fff"><div id="host" style="display:inline-block;padding:40px;background:#fff"></div></body></html>`);
  await page.addScriptTag({ url: "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js" });
  await page.evaluate(() => mermaid.initialize({ startOnLoad: false, theme: "base", securityLevel: "loose",
    themeVariables: { fontFamily: "Inter, 'Segoe UI', Arial, sans-serif", fontSize: "15px", lineColor: "#6b6b6b", primaryTextColor: "#1c1c1c", edgeLabelBackground: "#ffffff" },
    flowchart: { htmlLabels: true, wrappingWidth: 220, nodeSpacing: 40, rankSpacing: 55, padding: 12, curve: "basis" } }));
  for (let i = 0; i < names.length; i++) {
    const code = style(srcs[i]);
    const svg = await page.evaluate(async ([c, id]) => { const r = await mermaid.render("g" + id, c); return r.svg; }, [code, i]);
    await page.evaluate((s) => { const h = document.getElementById("host"); h.innerHTML = s; const e = h.querySelector("svg"); const vb = e.viewBox.baseVal; e.style.maxWidth = "none"; e.style.width = vb.width + "px"; e.style.height = vb.height + "px"; }, svg);
    const box = await page.locator("#host").boundingBox();
    const buf = await page.locator("#host").screenshot();
    const m = await sharp(buf).metadata();
    await sharp(buf).webp({ quality: 90 }).toFile(`D:/Portfolio/public/case-eticket/flows/${names[i]}.webp`);
    console.log(names[i], m.width, m.height);
  }
  await browser.close();
})();
