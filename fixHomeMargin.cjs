const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

content = content.replace(
  /<section className="py-20 bg-gradient-to-b from-cream to-white">/g,
  '<section className="pt-24 lg:pt-32 pb-20 bg-gradient-to-b from-cream to-white">'
);

fs.writeFileSync('src/pages/Home.tsx', content);