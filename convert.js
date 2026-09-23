/* eslint-disable */
const fs = require('fs');

try {
  let html = fs.readFileSync('design-reference/desain/beranda.html', 'utf8');

  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) throw new Error("No body found");
  let content = bodyMatch[1];

  // Basic attribute conversions
  content = content.replace(/\bclass="/g, 'className="');
  content = content.replace(/\bfor="/g, 'htmlFor="');
  
  // Auto-close img tags that are not self-closing
  content = content.replace(/<img\s([^>]*[^\/])>/g, '<img $1 />');
  
  // Auto-close other tags
  content = content.replace(/<(input|br|hr)\s([^>]*[^\/])>/g, '<$1 $2 />');
  content = content.replace(/<(br|hr)>/g, '<$1 />');
  
  // SVG attribute conversions
  content = content.replace(/stroke-width/g, 'strokeWidth');
  content = content.replace(/stroke-linecap/g, 'strokeLinecap');
  content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');
  content = content.replace(/viewbox/gi, 'viewBox');
  
  // Remove HTML comments
  content = content.replace(/<!--[\s\S]*?-->/g, '');
  
  // Convert inline styles to objects
  content = content.replace(/style="([^"]*)"/g, (match, p1) => {
    const styles = p1.split(';').filter(s => s.trim().length > 0);
    const obj = {};
    styles.forEach(s => {
      let [key, ...val] = s.split(':');
      if (!key || val.length === 0) return;
      key = key.trim();
      // camelCase key
      if (key.startsWith('--')) {
        // CSS variables stay the same
      } else {
        key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      }
      obj[key] = val.join(':').trim();
    });
    return `style={${JSON.stringify(obj)}}`;
  });

  // Image path adjustment
  content = content.replace(/\.\.\/public\/images\//g, '/images/');
  
  // Some entities like &nbsp; might need to be handled, but React supports most.
  // We'll leave them for now, but if there's a problem, we can fix it.

  const final = `import Image from "next/image";
import Link from "next/link";
import konten from "../design-reference/konten.json";

export default function Home() {
  return (
    <>
${content}
    </>
  );
}
`;
  
  fs.writeFileSync('app/page.tsx', final);
  console.log("Conversion successful");
} catch(e) {
  console.error("Conversion failed:", e);
}
