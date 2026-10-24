import { chromium } from 'playwright';

async function run() {
  let browser;
  try {
    browser = await chromium.launch({ channel: 'msedge', headless: true });
    console.log('Launched Microsoft Edge');
  } catch (e) {
    try {
      browser = await chromium.launch({ channel: 'chrome', headless: true });
      console.log('Launched Google Chrome');
    } catch (e2) {
      browser = await chromium.launch({ headless: true });
      console.log('Launched default Chromium');
    }
  }

  // 1. Desktop Test (1366x768)
  const desktopContext = await browser.newContext({
    viewport: { width: 1366, height: 768 }
  });
  const page = await desktopContext.newPage();
  
  await page.goto('http://localhost:4321/');

  // Capture Loading Screen before fadeout
  await page.screenshot({ path: 'screenshot-loading.png' });
  console.log('Captured screenshot-loading.png');

  // Wait for loading screen to fade out
  await page.waitForTimeout(2000);

  // Capture Desktop Onboarding
  await page.screenshot({ path: 'screenshot-desktop.png' });
  console.log('Captured screenshot-desktop.png');

  // 2. Mobile Test (390x844 - iPhone 14 style)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 }
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:4321/');
  await mobilePage.waitForTimeout(2000);

  // Capture Mobile Onboarding
  await mobilePage.screenshot({ path: 'screenshot-mobile.png' });
  console.log('Captured screenshot-mobile.png');

  await browser.close();
  console.log('All screenshots completed successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
