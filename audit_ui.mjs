import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const outDir = './audit_screenshots';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const pagesToAudit = [
  { name: '01_onboarding', url: 'http://localhost:4321/' },
  { name: '02_beranda', url: 'http://localhost:4321/beranda' },
  { name: '03_prioritas', url: 'http://localhost:4321/prioritas' },
  { name: '04_jadwal', url: 'http://localhost:4321/jadwal' },
  { name: '05_beavy_ai', url: 'http://localhost:4321/beavy-ai' },
  { name: '06_progress', url: 'http://localhost:4321/progress' },
  { name: '07_profile', url: 'http://localhost:4321/profile' },
  { name: '08_login', url: 'http://localhost:4321/login' },
  { name: '09_upload', url: 'http://localhost:4321/upload' },
  { name: '10_tambah_tugas', url: 'http://localhost:4321/tambah-tugas' }
];

async function runAudit() {
  console.log('Launching browser for UI Audit...');
  let browser;
  try {
    browser = await chromium.launch({ channel: 'msedge', headless: true });
  } catch (e) {
    browser = await chromium.launch({ headless: true });
  }

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });

  const page = await context.newPage();

  for (const item of pagesToAudit) {
    console.log(`Auditing: ${item.name} (${item.url})`);
    await page.goto(item.url, { waitUntil: 'networkidle' });
    if (item.name === '01_onboarding') {
      await page.waitForTimeout(1600); // Wait for loading fadeout
    } else {
      await page.waitForTimeout(500);
    }

    const screenshotPath = path.join(outDir, `${item.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot: ${screenshotPath}`);
  }

  await browser.close();
  console.log('UI Audit screenshots completed!');
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
