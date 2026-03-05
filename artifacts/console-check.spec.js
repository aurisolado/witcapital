const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('capture console errors on home route', async ({ page }) => {
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
});
