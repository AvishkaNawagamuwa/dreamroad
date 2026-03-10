const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist = []) {
  fs.readdirSync(dir).forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        filelist = walkSync(path.join(dir, file), filelist);
      }
    } else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

const tsxFiles = walkSync('./src').filter(f => f.endsWith('.tsx'));

tsxFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace old tailwind typography
  content = content.replace(/text-4xl md:text-5xl lg:text-6xl font-display font-bold/g, 'hero-heading');
  content = content.replace(/text-4xl md:text-6xl font-bold/g, 'hero-heading');
  content = content.replace(/text-3xl md:text-4xl lg:text-5xl font-bold/g, 'section-title');
  content = content.replace(/text-3xl md:text-4xl font-bold/g, 'section-title');
  content = content.replace(/text-3xl md:text-5xl font-bold/g, 'section-title');
  content = content.replace(/text-2xl md:text-3xl font-bold/g, 'section-title text-[24px]');
  content = content.replace(/text-2xl font-bold/g, 'card-title');
  content = content.replace(/text-xl font-bold/g, 'card-title');
  content = content.replace(/text-xl font-semibold/g, 'card-title');
  
  content = content.replace(/text-lg text-gray-600/g, 'body-text text-muted');
  content = content.replace(/text-gray-600/g, 'text-muted');
  content = content.replace(/text-gray-900/g, 'text-dark');
  content = content.replace(/text-gray-500/g, 'text-muted');
  
  content = content.replace(/<p className="text-lg">/g, '<p className="list-text">');
  
  // Custom project colors from user's legacy blocks that didn't adapt
  content = content.replace(/text-\[\#9F1D20\]/g, 'text-primary');
  content = content.replace(/text-\[\#D9A21B\]/g, 'text-secondary');
  content = content.replace(/text-\[\#C96A16\]/g, 'text-primary-hover');
  content = content.replace(/from-\[\#9F1D20\] to-\[\#C96A16\]/g, 'from-primary to-primary-hover');
  content = content.replace(/from-\[\#F8F7F3\] to-white/g, 'from-cream to-white');
  content = content.replace(/bg-gradient-to-r from-primary to-primary-hover/g, 'bg-primary');
  content = content.replace(/bg-gradient-to-br from-primary to-primary-hover/g, 'bg-primary');
  content = content.replace(/bg-\[\#9F1D20\]\/10/g, 'bg-primary/10');
  content = content.replace(/text-\[\#9F1D20\]\/10/g, 'text-primary/10');

  // specific fixes for buttons
  content = content.replace(/px-8 py-4 bg-primary text-white rounded-lg hover:from-\[\#8a1a1c\] hover:to-\[\#b45f13\] transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg inline-flex items-center justify-center gap-2/g, 'btn-premium bg-primary text-white');
  content = content.replace(/px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg/g, 'btn-premium bg-white text-primary border border-soft');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
  }
});
console.log('Update completed.');
