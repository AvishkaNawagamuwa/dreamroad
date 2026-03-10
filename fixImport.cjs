const fs = require('fs');

let content = fs.readFileSync('src/pages/Countries.tsx', 'utf8');

// It injected the import string *inside* the destructuring lucide-react import
content = content.replace("import {\r\nimport polandImg from '../assest/images/country/Poland.png';\r\nimport romaniaImg from '../assest/images/country/Romaina.png';\r\nimport hungaryImg from '../assest/images/country/Hungary.png';\r\nimport dubaiImg from '../assest/images/country/Dubai UAE.png';\r\n", "import polandImg from '../assest/images/country/Poland.png';\r\nimport romaniaImg from '../assest/images/country/Romaina.png';\r\nimport hungaryImg from '../assest/images/country/Hungary.png';\r\nimport dubaiImg from '../assest/images/country/Dubai UAE.png';\r\nimport { ArrowRight, ");
content = content.replace("import {\nimport polandImg from '../assest/images/country/Poland.png';\nimport romaniaImg from '../assest/images/country/Romaina.png';\nimport hungaryImg from '../assest/images/country/Hungary.png';\nimport dubaiImg from '../assest/images/country/Dubai UAE.png';\n", "import polandImg from '../assest/images/country/Poland.png';\nimport romaniaImg from '../assest/images/country/Romaina.png';\nimport hungaryImg from '../assest/images/country/Hungary.png';\nimport dubaiImg from '../assest/images/country/Dubai UAE.png';\nimport { ArrowRight, ");


fs.writeFileSync('src/pages/Countries.tsx', content);