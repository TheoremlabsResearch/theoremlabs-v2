#!/usr/bin/env node
/**
 * Theoremlabs Slideshow → PDF
 *
 * Requires the dev (or prod) server to be running.
 * Uses system Chrome and pdf-lib to capture each slide as a screenshot
 * and stitch them into a single PDF.
 *
 * Usage:
 *   npm run generate-pdf
 *   SLIDESHOW_URL=http://localhost:3000 node scripts/generate-pdf.mjs
 */

import puppeteer from 'puppeteer-core';
import { PDFDocument } from 'pdf-lib';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// ─── Config ───────────────────────────────────────────────────────────────────

const BASE_URL   = process.env.SLIDESHOW_URL ?? 'http://localhost:3001';
const WIDTH      = 1920;
const HEIGHT     = 1080;
const SCALE      = 2;          // retina — doubles resolution
const WAIT_MS    = 1800;       // ms to wait for Framer Motion animations to settle
const OUT_FILE   = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'theoremlabs-slideshow.pdf');

// macOS Chrome path — override with CHROME_PATH env var if needed
const CHROME_PATH = process.env.CHROME_PATH
  ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// Total slides — must match SLIDES.length in src/app/slideshow/page.tsx
const SLIDE_COUNT = 25;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function progress(current, total) {
  const pct   = Math.round((current / total) * 30);
  const bar   = '█'.repeat(pct) + '░'.repeat(30 - pct);
  process.stdout.write(`\r  [${bar}] ${current}/${total}`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

console.log('\n╔════════════════════════════════════════╗');
console.log('║  Theoremlabs Slideshow → PDF Export    ║');
console.log('╚════════════════════════════════════════╝\n');
console.log(`  Source : ${BASE_URL}/slideshow`);
console.log(`  Slides : ${SLIDE_COUNT}`);
console.log(`  Output : ${OUT_FILE}`);
console.log(`  Chrome : ${CHROME_PATH}\n`);

// Verify server is reachable
try {
  const res = await fetch(`${BASE_URL}/slideshow`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
} catch (err) {
  console.error(`\n❌  Cannot reach ${BASE_URL}/slideshow`);
  console.error('    Make sure the dev server is running: npm run dev\n');
  process.exit(1);
}

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process',
    '--force-device-scale-factor=' + SCALE,
  ],
});

const page = await browser.newPage();
await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: SCALE });

// Silence browser console noise
page.on('console', () => {});

const pdfDoc = await PDFDocument.create();

console.log('  Capturing slides:\n');

for (let i = 0; i < SLIDE_COUNT; i++) {
  progress(i, SLIDE_COUNT);

  const url = `${BASE_URL}/slideshow?slide=${i}&export=1`;

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 });
  await sleep(WAIT_MS); // let Framer Motion animations finish

  const screenshot = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT } });

  const png     = await pdfDoc.embedPng(screenshot);
  const pdfPage = pdfDoc.addPage([WIDTH, HEIGHT]);
  pdfPage.drawImage(png, { x: 0, y: 0, width: WIDTH, height: HEIGHT });
}

progress(SLIDE_COUNT, SLIDE_COUNT);
process.stdout.write('\n\n');

await browser.close();

const bytes = await pdfDoc.save();
writeFileSync(OUT_FILE, bytes);

const sizeMB = (bytes.byteLength / 1_048_576).toFixed(1);
console.log(`✅  Done! PDF written to:`);
console.log(`    ${OUT_FILE}`);
console.log(`    Size: ${sizeMB} MB  ·  Pages: ${SLIDE_COUNT}\n`);
