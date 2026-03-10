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
  content = content.replace(/text-\[\d+px\].+?font-extrabold/g, 'hero-heading');
  content = content.replace(/text-4xl md:text-6xl font-bold/g, 'hero-heading');

  // Section titles
  content = content.replace(/text-3xl md:text-5xl font-bold/g, 'section-title');
  content = content.replace(/text-3xl md:text-4xl font-bold/g, 'section-title');
  content = content.replace(/text-2xl md:text-3xl font-bold/g, 'section-title');
  
  // Subtitles / Card titles
  content = content.replace(/text-xl font-bold/g, 'card-title');
  content = content.replace(/text-2xl font-bold/g, 'card-title');
  content = content.replace(/text-lg font-bold/g, 'card-title');

  // Paragraphs / Body text - Strip out the text-sm/text-base/text-lg/text-gray-xyz to rely on globals where suitable
  content = content.replace(/text-sm md:text-base/g, ''); // rely on global body
  content = content.replace(/text-lg text-muted/g, 'text-muted'); 
  content = content.replace(/text-base text-muted/g, 'text-muted');
  content = content.replace(/text-sm text-muted/g, 'text-muted');
  content = content.replace(/text-muted text-lg/g, 'text-muted');

  // Nav menu
  content = content.replace(/text-[xs|sm|base|lg]/g, (match) => {
    // maybe we just skip specific random ones, or do this globally but dangerous. Let's not completely strip all.
    return match;
  });

  // Buttons
  content = content.replace(/group w-full.+?bg-primary text-white rounded-full hover:bg-primary-hover.+?flex items-center justify-center gap-3 relative z-30/g, 'btn-premium w-full sm:w-auto bg-primary text-white hover:bg-primary-hover relative z-30');
  content = content.replace(/w-full sm:w-auto px-8 md:px-10 py-3\.5 md:py-4 bg-white\/10.+?text-center relative z-30/g, 'btn-outline w-full sm:w-auto');

  // Buttons in Jobs/Other
  content = content.replace(/px-6 py-2 bg-primary/g, 'px-8 py-3 bg-primary text-[16px] xl:text-[18px] font-semibold');
  content = content.replace(/px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-semibold/g, 'btn-premium bg-primary text-white rounded-[2rem]');

  // Check generic elements
  content = content.replace(/<p className="text-gray-400 font-medium leading-relaxed">/g, '<p className="text-muted leading-relaxed">');

  fs.writeFileSync(file, content);
});
console.log('Typography updated programmatically');
