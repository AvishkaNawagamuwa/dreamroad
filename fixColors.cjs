const fs = require('fs');

let contact = fs.readFileSync('src/pages/Contact.tsx', 'utf8');
contact = contact.replace(/#9F1D20/g, 'primary');
fs.writeFileSync('src/pages/Contact.tsx', contact);

let process = fs.readFileSync('src/pages/Process.tsx', 'utf8');
process = process.replace(/#9F1D20/g, 'primary');
process = process.replace(/#C96A16/g, 'primary-hover');
process = process.replace(/#D9A21B/g, 'secondary');
fs.writeFileSync('src/pages/Process.tsx', process);

console.log('Hex codes replaced');
