const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Add Trust Badges Data
const trustBadgesData = `const trustBadges = [
    { icon: Shield, title: 'Licensed Agency', desc: 'Government certified & registered agency' },
    { icon: Users, title: 'Professional Guidance', desc: 'Expert career counseling & visa support' },
    { icon: Globe, title: 'Overseas Opportunities', desc: 'Connecting you to top global markets' },
    { icon: Award, title: 'Trusted Support', desc: 'Comprehensive pre & post departure help' },
  ];

  const jobCategories = [`;

content = content.replace(/const jobCategories = \[/, trustBadgesData);

// 2. Add the Separate Trust Badges Section Right below <HeroCarousel />
const separateCardsSection = `<HeroCarousel />

      <section className="relative z-30 -mt-10 md:-mt-16 mb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(184,106,46,0.12)] group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                  <badge.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
                </div>
                <h3 className="card-title text-dark mb-3 leading-tight">{badge.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section`;

content = content.replace(/<HeroCarousel \/>\s*<section/, separateCardsSection);


fs.writeFileSync('src/pages/Home.tsx', content);
