import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { getCvHtml } from './generate_cv_html.mjs';

// Try standard Chrome and Edge paths on Windows
const possibleBrowsers = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
];

const browserPath = possibleBrowsers.find((p) => fs.existsSync(p));
if (!browserPath) {
  console.error('Error: Could not locate Chrome or Edge executable.');
  process.exit(1);
}

const workspaceDir = path.resolve('.');
const tempHtmlPath = path.join(workspaceDir, 'public', 'assets', 'cv_temp.html');
const tempPdfPath = path.join(workspaceDir, 'public', 'assets', 'cv_temp.pdf');
const targetPdfPath = path.join(workspaceDir, 'public', 'assets', 'pashupati_cv.pdf');
const backupPdfPath = path.join(workspaceDir, 'public', 'assets', 'pashupati_cv_old_backup.pdf');

// 1. Create a backup of the old PDF if not already backed up
if (fs.existsSync(targetPdfPath) && !fs.existsSync(backupPdfPath)) {
  fs.copyFileSync(targetPdfPath, backupPdfPath);
  console.log('Backed up previous CV to pashupati_cv_old_backup.pdf');
}

// 2. Write HTML file
const html = getCvHtml();
fs.writeFileSync(tempHtmlPath, html, 'utf-8');

// 3. Generate PDF using Chrome headless to a temporary PDF file first
const fileUrl = 'file:///' + tempHtmlPath.replace(/\\/g, '/');
if (fs.existsSync(tempPdfPath)) {
  try {
    fs.unlinkSync(tempPdfPath);
  } catch (e) {}
}

const cmd = `"${browserPath}" --headless=new --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${tempPdfPath}" "${fileUrl}"`;
console.log('Generating PDF via headless browser...');
execSync(cmd, { stdio: 'inherit' });

// 4. Copy temp PDF to target PDF (with retries in case of temporary dev-server lock)
if (fs.existsSync(tempPdfPath)) {
  let copied = false;
  for (let i = 0; i < 5; i++) {
    try {
      fs.copyFileSync(tempPdfPath, targetPdfPath);
      copied = true;
      break;
    } catch (err) {
      execSync('ping -n 1 127.0.0.1 > nul');
    }
  }
  if (!copied) {
    throw new Error('Failed to copy temp PDF to target PDF');
  }
  fs.unlinkSync(tempPdfPath);
}

// 5. Verify PDF
const stats = fs.statSync(targetPdfPath);
console.log(`Successfully generated ${targetPdfPath}: ${stats.size} bytes`);

// 6. Verify page count
const pdfBuffer = fs.readFileSync(targetPdfPath);
const pageMatches = pdfBuffer.toString('latin1').match(/\/Type\s*\/Page\b/g);
const pageCount = pageMatches ? pageMatches.length : 'unknown';
console.log(`Total PDF Pages: ${pageCount}`);

// 7. Clean up temp HTML
if (fs.existsSync(tempHtmlPath)) {
  fs.unlinkSync(tempHtmlPath);
}
