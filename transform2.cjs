const fs = require('fs');
const path = require('path');

function replaceDivWithMotion(content, matchStr, injectVariants) {
  let startIndex = 0;
  while (true) {
    const idx = content.indexOf(matchStr, startIndex);
    if (idx === -1) break;

    // We found an opening bracket. Find the exact matching closing </div>
    let depth = 0;
    let endIdx = -1;
    for (let i = idx; i < content.length; i++) {
        if (content.substr(i, 4) === '<div') {
            depth++;
        } else if (content.substr(i, 5) === '</div') {
            depth--;
            if (depth === 0) {
                endIdx = i;
                break;
            }
        }
    }

    if (endIdx !== -1) {
       // Replace the </div> with </motion.div>
       content = content.slice(0, endIdx) + '</motion.div>' + content.slice(endIdx + 6);
       
       // Replace the opening <div with <motion.div variants=...
       content = content.slice(0, idx) + '<motion.div ' + injectVariants + content.slice(idx + 4);
       
       startIndex = idx + (`<motion.div ` + injectVariants).length; // Advance
    } else {
       startIndex = idx + matchStr.length;
    }
  }
  return content;
}

const pages = [
  'About.tsx',
  'Services.tsx',
  'Countries.tsx',
  'Jobs.tsx',
  'Process.tsx',
  'Testimonials.tsx',
  'Contact.tsx'
];

pages.forEach(file => {
  const filePath = path.join(__dirname, 'src/pages', file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');

  // Insert imports
  if (!content.includes('framer-motion')) {
    const lines = content.split('\n');
    const lastImportIndex = lines.findLastIndex(line => line.startsWith('import '));
    lines.splice(lastImportIndex + 1, 0, "import { motion } from 'framer-motion';\nimport { staggerContainer, fadeInUp, scaleUp } from '../utils/animations';");
    content = lines.join('\n');
  }

  // Sections -> motion.section
  content = content.replace(/<section(.*?)>/g, '<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} $1>');
  content = content.replace(/<\/section>/g, '</motion.section>');

  // Titles -> motion.h2
  content = content.replace(/<h2([^>]*)className="([^"]*?)section-title([^"]*?)"([^>]*)>([\s\S]*?)<\/h2>/g, 
    '<motion.h2 variants={fadeInUp} $1className="$2section-title$3"$4>$5</motion.h2>'
  );

  content = content.replace(/<h1([^>]*)className="([^"]*?)hero-heading([^"]*?)"([^>]*)>([\s\S]*?)<\/h1>/g, 
    '<motion.h1 variants={fadeInUp} $1className="$2hero-heading$3"$4>$5</motion.h1>'
  );

  // Now, safely replace typical map elements: `<div key={index}`
  content = replaceDivWithMotion(content, '<div key={index}', 'variants={fadeInUp} ');
  content = replaceDivWithMotion(content, '<div key={i}', 'variants={fadeInUp} ');
  content = replaceDivWithMotion(content, '<div key={job.id}', 'variants={fadeInUp} ');
  content = replaceDivWithMotion(content, '<div key={country.name}', 'variants={fadeInUp} ');
  content = replaceDivWithMotion(content, '<div key={country.id}', 'variants={fadeInUp} ');
  content = replaceDivWithMotion(content, '<div key={testimonial.name}', 'variants={fadeInUp} ');
  content = replaceDivWithMotion(content, '<div key={step.title}', 'variants={fadeInUp} ');

  // Add hover classes for cards globally (button micro-interaction and cards)
  // Actually, if they already use `hover:shadow-xl` we can add `hover:-translate-y-1 transition-all duration-300` 
  
  fs.writeFileSync(filePath, content);
  console.log(`Transformed ${file}`);
});
