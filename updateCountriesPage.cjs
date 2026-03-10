const fs = require('fs');

const importStatements = `import polandImg from '../assest/images/country/Poland.png';
import romaniaImg from '../assest/images/country/Romaina.png';
import hungaryImg from '../assest/images/country/Hungary.png';
import dubaiImg from '../assest/images/country/Dubai UAE.png';
`;

let countriesContent = fs.readFileSync('./src/pages/Countries.tsx', 'utf8');

// Insert imports after the last import if not already there
if (!countriesContent.includes('import polandImg')) {
    const lastImportIndex = countriesContent.lastIndexOf('import ');
    const endOfLastImport = countriesContent.indexOf('\n', lastImportIndex);
    countriesContent = countriesContent.substring(0, endOfLastImport + 1) + importStatements + countriesContent.substring(endOfLastImport + 1);
}

// Replace old array
const oldCountriesRegex = /const destinations = \[[\s\S]*?name: 'UAE \/ Dubai'[\s\S]*?\];/;
const newCountriesDef = `const destinations = [
    { name: "Poland", openings: "120+ Openings", image: polandImg },
    { name: "Romania", openings: "85+ Openings", image: romaniaImg },
    { name: "Hungary", openings: "60+ Openings", image: hungaryImg },
    { name: "UAE / Dubai", openings: "200+ Openings", image: dubaiImg }
  ];`;
countriesContent = countriesContent.replace(oldCountriesRegex, newCountriesDef);

// Make sure ArrowRight is imported
if (!countriesContent.includes('ArrowRight')) {
  countriesContent = countriesContent.replace(/import \{ CheckCircle,/g, 'import { CheckCircle, ArrowRight,');
  if(!countriesContent.includes('ArrowRight')) { // if it still isn't there
      countriesContent = countriesContent.replace(/\{ CheckCircle \}/g, '{ CheckCircle, ArrowRight }');
  }
}


// Replace the JSX grid
const oldJSXRegex = /<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
const newJSX = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((country, index) => (
              <div
                key={index}
                className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer transition-all hover:shadow-xl"
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{country.name}</h3>
                  <p className="text-white/80 flex items-center gap-2 font-medium">
                    {country.openings}
                    <ArrowRight size={18} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>`;

countriesContent = countriesContent.replace(oldJSXRegex, newJSX);

fs.writeFileSync('./src/pages/Countries.tsx', countriesContent);
console.log('Countries.tsx updated.');
