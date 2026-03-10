const fs = require('fs');

let home = fs.readFileSync('src/pages/Home.tsx', 'utf8');
home = home.replace(/'\.\.\/assest\/images\/country\/Dubai UAE.png'/g, "'../assest/images/country/DubaiUAE.png'");
fs.writeFileSync('src/pages/Home.tsx', home);

let countries = fs.readFileSync('src/pages/Countries.tsx', 'utf8');
countries = countries.replace(/'\.\.\/assest\/images\/country\/Dubai UAE.png'/g, "'../assest/images/country/DubaiUAE.png'");
fs.writeFileSync('src/pages/Countries.tsx', countries);
