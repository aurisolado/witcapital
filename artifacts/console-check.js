const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];

  page.on('pageerror', (error) => {
    errors.push({ type: 'pageerror', message: error.message });
  });
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push({ type: 'console', message: msg.text() });
    }
  });

  await page.goto('http://localhost:3031/', { waitUntil: 'networkidle' });

  const outPath = path.join(__dirname, 'console-errors.json');
  fs.writeFileSync(outPath, JSON.stringify(errors, null, 2));

  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
