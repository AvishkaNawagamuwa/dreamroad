const fs = require('fs');

let content = fs.readFileSync('src/pages/Countries.tsx', 'utf8');

const regex = /import \{\r?\nimport polandImg from '\.\.\/assest\/images\/country\/Poland\.png';\r?\nimport romaniaImg from '\.\.\/assest\/images\/country\/Romaina\.png';\r?\nimport hungaryImg from '\.\.\/assest\/images\/country\/Hungary\.png';\r?\nimport dubaiImg from '\.\.\/assest\/images\/country\/Dubai UAE\.png';\r?\n/;

content = content.replace(regex, "import polandImg from '../assest/images/country/Poland.png';\nimport romaniaImg from '../assest/images/country/Romaina.png';\nimport hungaryImg from '../assest/images/country/Hungary.png';\nimport dubaiImg from '../assest/images/country/Dubai UAE.png';\nimport { ArrowRight, \n");

fs.writeFileSync('src/pages/Countries.tsx', content);
