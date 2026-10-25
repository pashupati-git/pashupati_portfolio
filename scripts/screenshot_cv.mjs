import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { getCvHtml } from './generate_cv_html.mjs';

const possibleBrowsers = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
];
const browserPath = possibleBrowsers.find((p) => fs.existsSync(p));

const tempHtml = path.resolve('public/assets/cv_visual_test.html');
fs.writeFileSync(tempHtml, getCvHtml(), 'utf-8');

const fileUrl = 'file:///' + tempHtml.replace(/\\/g, '/');
const shotPath = path.resolve('public/assets/cv_visual_full.png');

try {
  const cmd = `"${browserPath}" --headless=new --disable-gpu --window-size=1200,2800 --screenshot="${shotPath}" "${fileUrl}"`;
  execSync(cmd, { stdio: 'inherit' });
  console.log('Visual full screenshot saved:', shotPath, fs.statSync(shotPath).size);
} catch (err) {
  console.error(err);
} finally {
  if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);
}
