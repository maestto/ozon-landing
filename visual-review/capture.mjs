import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "screenshots");

const URL = process.env.URL || "http://localhost:3000/ozon-landing";
const LABEL = process.env.LABEL || "after";
const VIEWPORT = process.env.VIEWPORT || "desktop";

const viewports = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 744, height: 1024 },
  mobile: { width: 390, height: 844 },
};

const { width, height } = viewports[VIEWPORT];

const sections = [
  { id: "hero", selector: "section:first-of-type" },
  { id: "problems", selector: "#problems" },
  { id: "solution", selector: "#solution" },
  { id: "howitworks", selector: "#how-it-works" },
  { id: "telegram", selector: "#telegram" },
  { id: "cta", selector: "#cta" },
  { id: "footer", selector: "footer" },
];

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width, height },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

await page.goto(URL, { waitUntil: "networkidle" });
await page.waitForTimeout(500);

// Full page screenshot first
await page.screenshot({
  path: resolve(OUT_DIR, `00-full-${VIEWPORT}-${LABEL}.png`),
  fullPage: true,
});

// Per-section screenshots
for (const [i, s] of sections.entries()) {
  const el = await page.$(s.selector);
  if (!el) {
    console.log(`- skip ${s.id}: selector not found`);
    continue;
  }
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  const idx = String(i + 1).padStart(2, "0");
  await el.screenshot({
    path: resolve(OUT_DIR, `${idx}-${s.id}-${VIEWPORT}-${LABEL}.png`),
  });
  console.log(`  ${idx}-${s.id}-${VIEWPORT}-${LABEL}.png`);
}

await browser.close();
console.log("done");
