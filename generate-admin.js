const fs = require('fs');

function convert(filepath, outfile) {
  let html = fs.readFileSync(filepath, 'utf8');
  let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyMatch[1];
  
  content = content.replace(/\bclass="/g, 'className="');
  content = content.replace(/\bfor="/g, 'htmlFor="');
  content = content.replace(/<img\s([^>]*[^\/])>/g, '<img $1 />');
  content = content.replace(/<(input|br|hr)\s([^>]*[^\/])>/g, '<$1 $2 />');
  content = content.replace(/<(br|hr)>/g, '<$1 />');
  content = content.replace(/stroke-width/g, 'strokeWidth');
  content = content.replace(/viewbox/gi, 'viewBox');
  content = content.replace(/<!--[\s\S]*?-->/g, '');
  
  content = content.replace(/style="([^"]*)"/g, (match, p1) => {
    const styles = p1.split(';').filter(s => s.trim().length > 0);
    const obj = {};
    styles.forEach(s => {
      let [key, ...val] = s.split(':');
      if (!key || val.length === 0) return;
      key = key.trim();
      if (!key.startsWith('--')) {
        key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      }
      obj[key] = val.join(':').trim();
    });
    return `style={${JSON.stringify(obj)}}`;
  });
  
  content = content.replace(/\.\.\/public\/images\//g, '/images/');
  
  fs.writeFileSync(outfile, content);
}

convert('design-reference/desain/admin-berita.html', 'admin-jsx.txt');
convert('design-reference/desain/tulis-berita.html', 'tulis-jsx.txt');

// Extract CSS from admin-berita.html and tulis-berita.html
let adminHtml = fs.readFileSync('design-reference/desain/admin-berita.html', 'utf8');
let tulisHtml = fs.readFileSync('design-reference/desain/tulis-berita.html', 'utf8');

let adminCss = adminHtml.match(/<style>([\s\S]*?)<\/style>/)[1];
let tulisCss = tulisHtml.match(/<style>([\s\S]*?)<\/style>/)[1];

fs.writeFileSync('admin-css.txt', adminCss);
fs.writeFileSync('tulis-css.txt', tulisCss);
