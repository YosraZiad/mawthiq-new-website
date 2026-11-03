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

  // 1. Desktop Viewport
  console.log('Capturing Desktop...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1200));

  // Hero Slider Viewport
  await page.screenshot({ path: path.join(screenshotsDir, 'desktop-hero-slider.png'), fullPage: false });
  await page.screenshot({ path: path.join(brainScreenshotsDir, 'desktop-hero-slider.png'), fullPage: false });

  // Vision Section
  console.log('Capturing Vision Section...');
  await page.evaluate(() => {
    const el = document.getElementById('vision');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, 'section-vision.png'), fullPage: false });
  await page.screenshot({ path: path.join(brainScreenshotsDir, 'section-vision.png'), fullPage: false });

  // Capabilities Section
  console.log('Capturing Capabilities Section...');
  await page.evaluate(() => {
    const el = document.getElementById('capabilities');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, 'section-capabilities.png'), fullPage: false });
  await page.screenshot({ path: path.join(brainScreenshotsDir, 'section-capabilities.png'), fullPage: false });

  // Partnership Section
  console.log('Capturing Partnership Section...');
  await page.evaluate(() => {
    const el = document.getElementById('partnership');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, 'section-partnership.png'), fullPage: false });
  await page.screenshot({ path: path.join(brainScreenshotsDir, 'section-partnership.png'), fullPage: false });

  // FAQ Section
  console.log('Capturing FAQ Section...');
  await page.evaluate(() => {
    const el = document.getElementById('faq');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, 'section-faq.png'), fullPage: false });
  await page.screenshot({ path: path.join(brainScreenshotsDir, 'section-faq.png'), fullPage: false });

  // Full Page Desktop
  console.log('Capturing Full Desktop...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(screenshotsDir, 'desktop-full.png'), fullPage: true });
  await page.screenshot({ path: path.join(brainScreenshotsDir, 'desktop-full.png'), fullPage: true });

  // 2. Mobile Viewport
  console.log('Capturing Mobile...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  await page.screenshot({ path: path.join(screenshotsDir, 'mobile-hero.png'), fullPage: false });
  await page.screenshot({ path: path.join(brainScreenshotsDir, 'mobile-hero.png'), fullPage: false });

  await page.screenshot({ path: path.join(screenshotsDir, 'mobile-full.png'), fullPage: true });
  await page.screenshot({ path: path.join(brainScreenshotsDir, 'mobile-full.png'), fullPage: true });

  console.log('All screenshots captured successfully!');
  await browser.close();
}

capture().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
