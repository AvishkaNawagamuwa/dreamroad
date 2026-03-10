const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist = []) {
  fs.readdirSync(dir).forEach(function(file) {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
};

const files = walkSync('./src');
const tsxFiles = files.filter(f => f.endsWith('.tsx'));

tsxFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Hero title
  content = content.replace(/text-\[\d+px\][ \w\-\[\]\.\:]* font-extrabold/g, 'hero-heading');
  content = content.replace(/text-4xl md:text-6xl font-bold/g, 'hero-heading');
  
  // Slide hero title inside AnimatePresence that had specific exact text sizes:
  content = content.replace(/text-\[32px\] md:text-\[44px\] lg:text-\[64px\] xl:text-\[72px\] font-extrabold mb-6 md:mb-8 leading-\[1\.1\] md:leading-\[1\.1\] lg:leading-\[1\.05\]/g, 'hero-heading mb-6 md:mb-8');

  // Section titles
  content = content.replace(/text-3xl md:text-5xl font-bold/g, 'section-title');
  content = content.replace(/text-3xl md:text-4xl font-bold/g, 'section-title');
  content = content.replace(/text-2xl md:text-3xl font-bold/g, 'section-title');
  
  // Subtitles / Card titles
  content = content.replace(/text-xl font-bold/g, 'card-title');
  content = content.replace(/text-2xl font-bold/g, 'card-title');
  content = content.replace(/text-lg font-bold/g, 'card-title');

  // Standardize paragraph elements 
  content = content.replace(/text-lg text-muted/g, 'text-muted'); 
  content = content.replace(/text-base text-muted/g, 'text-muted');
  content = content.replace(/text-sm text-muted/g, 'text-muted'); 
  content = content.replace(/text-muted text-lg/g, 'text-muted');
  content = content.replace(/text-muted text-base/g, 'text-muted');
  
  // Nav menu
  content = content.replace(/text-sm font-medium/g, 'text-[16px] font-medium');
  content = content.replace(/text-xs md:text-sm font-medium/g, 'text-[16px] font-medium');

  // Process list items
  content = content.replace(/text-dark font-medium leading-snug/g, 'text-dark font-medium list-text');

  fs.writeFileSync(file, content);
});
console.log('Typography updated programmatically');