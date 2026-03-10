const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const importString = `
import polandImg from "../assest/images/country/Poland.png";
import romaniaImg from "../assest/images/country/Romaina.png";
import hungaryImg from "../assest/images/country/Hungary.png";
import dubaiImg from "../assest/images/country/Dubai UAE.png";
`;

if (!content.includes('polandImg')) {
  // Try to insert after the last heroImg import
  content = content.replace(/(import heroImg5.+?;)/, "$1\n" + importString);
}


const oldCountriesArray = `  const countries = [
    { name: 'Poland', jobs: '120+ Openings', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=500&fit=crop' },
    { name: 'Romania', jobs: '85+ Openings', image: 'https://images.unsplash.com/photo-1605608278551-cf3e3169aa94?w=800&h=500&fit=crop' },
    { name: 'Hungary', jobs: '60+ Openings', image: 'https://images.unsplash.com/photo-1541697748-1aa5d0857c5f?w=800&h=500&fit=crop' },
    { name: 'UAE / Dubai', jobs: '200+ Openings', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop' },
  ];`;

const newCountriesArray = `  const countries = [
    {
      name: "Poland",
      openings: "120+ Openings",
      image: polandImg
    },
    {
      name: "Romania",
      openings: "85+ Openings",
      image: romaniaImg
    },
    {
      name: "Hungary",
      openings: "60+ Openings",
      image: hungaryImg
    },
    {
      name: "UAE / Dubai",
      openings: "200+ Openings",
      image: dubaiImg
    }
  ];`;

content = content.replace(oldCountriesArray, newCountriesArray);

// The exact replace pattern for the rendering block
const oldGridPattern = /className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"[\s\S]*?<div className="mt-8 text-center md:hidden">/;

const newGridCode = `className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {countries.map((country, index) => (
                <motion.div
                  variants={fadeInUp}
                  key={index}
                  className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer transition-all shadow-soft"
                >
                  <img
                    src={country.image}
                    alt={country.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
                    <div className="flex items-center gap-2 text-white/80 font-medium">
                      <Briefcase size={16} className="text-secondary" />
                      <span>{country.openings}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-8 text-center md:hidden">`;

content = content.replace(oldGridPattern, newGridCode);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('Home.tsx updated');
