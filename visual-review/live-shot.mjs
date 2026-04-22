import { chromium } from "playwright";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const errors = [];
page.on('requestfailed', r => errors.push(`FAIL ${r.url()} - ${r.failure()?.errorText}`));
page.on('response', r => {
  if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`);
});

await page.goto('https://maestto.github.io/ozon-landing/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);
await page.screenshot({ path: '/Users/maksim/Development/Dubai/landing/visual-review/screenshots/LIVE-full.png', fullPage: true });
await page.screenshot({ path: '/Users/maksim/Development/Dubai/landing/visual-review/screenshots/LIVE-viewport.png' });

console.log('=== errors:');
for (const e of errors) console.log(e);
await browser.close();
