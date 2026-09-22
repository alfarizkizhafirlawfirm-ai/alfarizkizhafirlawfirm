const fs = require('fs');

let adminCss = fs.readFileSync('admin-css.txt', 'utf8');
let tulisCss = fs.readFileSync('tulis-css.txt', 'utf8');

function extractCustom(css) {
  let lines = css.split('\n');
  let filtered = lines.filter(l => !l.includes(':root') && !l.includes('--') && !l.includes('body{') && !l.includes('*{') && !l.includes('h1,h2,h3') && !l.includes('a{') && !l.includes('button{') && !l.includes('.amp{'));
  return filtered.join('\n');
}

let result = '\n/* CSS Admin & Editor */\n' + extractCustom(adminCss) + '\n' + extractCustom(tulisCss);
fs.appendFileSync('app/globals.css', result);
