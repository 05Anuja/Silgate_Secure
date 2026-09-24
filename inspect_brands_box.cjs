const fs = require('fs');
const html = fs.readFileSync('temp_brands.html', 'utf8');

// Find headings in brand page
const headings = html.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || [];
console.log('Headings in brands page:');
headings.forEach(h => {
  const t = h.replace(/<[^>]+>/g, '').trim();
  if (t && !t.includes('Enterprise Networks') && !t.includes('Smart utilities')) {
    console.log('  H:', t);
  }
});

// Find how brand headings are structured
const idx = html.indexOf('24 Online');
console.log('Index of 24 Online:', idx);
if (idx !== -1) {
  console.log('Snippet around 24 Online:');
  console.log(html.substring(Math.max(0, idx - 400), idx + 800));
}
