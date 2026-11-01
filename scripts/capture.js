import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  const brainScreenshotsDir = 'C:\\Users\\SRN\\.gemini\\antigravity\\brain\\df99cd25-c495-4a85-bbee-dee9b4f0266f\\screenshots';

  if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });
  if (!fs.existsSync(brainScreenshotsDir)) fs.mkdirSync(brainScreenshotsDir, { recursive: true });

  const page = await browser.newPage();

  // Desktop captures
  console.log('Capturing Desktop...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  // Hero Viewport
  await page.screenshot({ path: path.join(screenshotsDir, 'desktop-hero.png'), fullPage: false });
  await page.screenshot({ path: path.join(brainScreenshotsDir, 'desktop-hero.png'), fullPage: false });

  // Scroll to WhatHappensSection (SPC Feature) and screenshot
  console.log('Capturing WhatHappensSection...');
  const whatHappensEl = await page.evaluate(() => {
    const el = document.querySelector('section.bg-\\[\\#CAD8E4\\]');
    if (el) {
      el.scrollIntoView();
      return true;
    }
    return false;
  });

  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(screenshotsDir, 'what-happens-spc.png'), fullPage: false });
  await page.screenshot({ path: path.join(brainScreenshotsDir, 'what-happens-spc.png'), fullPage: false });

  // Mobile captures
  console.log('Capturing Mobile...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  await page.screenshot({ path: path.join(screenshotsDir, 'mobile-hero.png'), fullPage: false });
  await page.screenshot({ path: path.join(brainScreenshotsDir, 'mobile-hero.png'), fullPage: false });

  console.log('Screenshots captured successfully!');
  await browser.close();
}

capture().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
