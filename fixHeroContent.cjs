const fs = require('fs');

let content = fs.readFileSync('src/components/HeroCarousel.tsx', 'utf8');

// 1. Remove trustBadges array
content = content.replace(/const trustBadges = \[\s*\{\s*icon:\s*Shield[\s\S]*?\];/g, '');

// 2. Remove trustBadges JSX block entirely
content = content.replace(/\{\/\*\s*Trust Badges - Desktop Only[^]*?<\/div>(\s*<\/div>)/g, '$1');

// 3. Center the content alignment
content = content.replace(
  /<div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full h-full flex flex-col justify-center py-20 md:py-32">/g,
  '<div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full h-full flex flex-col items-center justify-center py-20 md:py-32 text-center">'
);

content = content.replace(
  /<div className="max-w-4xl lg:max-w-5xl relative z-10 w-full">/g,
  '<div className="max-w-4xl lg:max-w-5xl relative z-10 w-full flex flex-col items-center">'
);

// 4. Center Paragraph 
content = content.replace(
    /className="text-\[16px\] md:text-\[20px\] mb-10 text-white\/90 leading-\[1.7\] max-w-xl md:max-w-2xl font-normal drop-shadow-md"/g,
    'className="text-[16px] md:text-[20px] mb-10 text-white/90 leading-[1.7] max-w-xl md:max-w-2xl font-normal drop-shadow-md mx-auto"'
);


fs.writeFileSync('src/components/HeroCarousel.tsx', content);
