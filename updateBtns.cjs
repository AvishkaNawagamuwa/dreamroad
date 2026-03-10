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

const files = walkSync('./src/pages');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Any bg-white text-primary links/buttons
  content = content.replace(/className="[^"]*?bg-white text-primary[^"]*?"/g, 'className="btn-premium bg-white text-primary hover:bg-gray-100"');
  
  // Any transparent ones next to it
  content = content.replace(/className="[^"]*?bg-transparent border-2 border-white[^"]*?"/g, 'className="btn-outline"');

  fs.writeFileSync(file, content);
});
console.log('Buttons updated');