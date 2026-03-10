const fs = require('fs');

const importStatements = `import polandImg from '../assest/images/country/Poland.png';
import romaniaImg from '../assest/images/country/Romaina.png';
import hungaryImg from '../assest/images/country/Hungary.png';
import dubaiImg from '../assest/images/country/Dubai UAE.png';
`;

let homeContent = fs.readFileSync('./src/pages/Home.tsx', 'utf8');

// Insert imports after the last import if not already there
if (!homeContent.includes('import polandImg')) {
    const lastImportIndex = homeContent.lastIndexOf('import ');
    const endOfLastImport = homeContent.indexOf('\n', lastImportIndex);
    homeContent = homeContent.substring(0, endOfLastImport + 1) + importStatements + homeContent.substring(endOfLastImport + 1);
}

// Replace the old countries array with the new one
const oldCountriesRegex = /const countries = \[\s*{\s*name: 'Poland'[\s\S]*?\];/;
const newCountriesDef = `const countries = [
    { name: "Poland", openings: "120+ Openings", image: polandImg },
    { name: "Romania", openings: "85+ Openings", image: romaniaImg },
    { name: "Hungary", openings: "60+ Openings", image: hungaryImg },
    { name: "UAE / Dubai", openings: "200+ Openings", image: dubaiImg }
  ];`;
homeContent = homeContent.replace(oldCountriesRegex, newCountriesDef);

// Replace the JSX for rendering countries
const oldCountriesJSXRegex = /<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
const newCountriesJSX = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <Link
                key={index}
                to="/countries"
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
              </Link>
            ))}
          </div>
        </div>
      </section>`;

homeContent = homeContent.replace(oldCountriesJSXRegex, newCountriesJSX);

fs.writeFileSync('./src/pages/Home.tsx', homeContent);
console.log('Home.tsx updated.');
