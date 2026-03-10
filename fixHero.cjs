const fs = require('fs');

let content = fs.readFileSync('src/components/HeroCarousel.tsx', 'utf8');

// Update main wrapper styling and height
content = content.replace(
  /className="relative w-full h-\[70vh\] md:h-\[85vh\] lg:h-\[95vh\] flex items-center justify-center overflow-hidden"/g,
  'className="relative w-full min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark"'
);

// Update gradient overlay for better readability on bright images
content = content.replace(
  /from-dark\/80 via-dark\/50 to-transparent/g,
  'from-black/85 via-black/50 to-transparent'
);

// Update inner container layout
content = content.replace(
  /<div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-center">/g,
  '<div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full h-full flex flex-col justify-center py-20 md:py-32">'
);

// Adjust Max Width block positioning
content = content.replace(
  /<div className="max-w-3xl pt-20">/g,
  '<div className="max-w-4xl lg:max-w-5xl relative z-10 w-full">'
);

// Adjust heading sizes and line-heights dynamically inline
content = content.replace(
  /className="hero-heading mb-6 leading-tight text-white drop-shadow-md"/g,
  'className="text-[34px] md:text-[52px] lg:text-[68px] font-bold leading-[1.1] mb-6 text-white drop-shadow-lg tracking-tight"'
);

// Adjust paragraph readable structure
content = content.replace(
  /className="text-lg md:text-xl mb-8 text-cream\/90 leading-relaxed font-light drop-shadow"/g,
  'className="text-[16px] md:text-[20px] mb-10 text-white/90 leading-[1.7] max-w-xl md:max-w-2xl font-normal drop-shadow-md"'
);

// Adjust Buttons Row Wrapper Stack and Spacing ensuring z-index keeps them clickable
content = content.replace(
  /<div className="flex flex-col sm:flex-row gap-4">/g,
  '<div className="flex flex-col sm:flex-row gap-5 mt-6 relative z-50">'
);

// Premium Button adjustments
content = content.replace(
    /className="btn-premium px-8 py-4 bg-primary text-white hover:bg-primary-hover shadow-premium font-semibold text-lg inline-flex items-center justify-center gap-2 rounded-xl transition-all"/g,
    'className="btn-premium px-8 py-4 lg:px-10 lg:py-4 bg-primary text-white hover:bg-primary-hover shadow-premium font-bold text-[16px] lg:text-[18px] inline-flex items-center justify-center gap-2 rounded-xl transition-all z-50"'
);

content = content.replace(
    /className="px-8 py-4 bg-white\/10 backdrop-blur-md text-white border border-white\/20 hover:bg-white\/20 transition-all shadow-soft font-semibold text-lg inline-flex items-center justify-center gap-2 rounded-xl"/g,
    'className="px-8 py-4 lg:px-10 lg:py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all shadow-soft font-bold text-[16px] lg:text-[18px] inline-flex items-center justify-center gap-2 rounded-xl z-50"'
);


// Adjust Trust Badges so they drop properly to the bottom edge structurally
content = content.replace(
   /<div className="hidden lg:grid grid-cols-4 gap-6 absolute bottom-12 left-4 right-4 max-w-7xl mx-auto z-30">/g,
   '<div className="hidden lg:grid grid-cols-4 gap-6 absolute bottom-0 translate-y-1/2 left-0 right-0 max-w-7xl mx-auto px-16 z-40 w-full">'
);
content = content.replace(
    /className="bg-white\/10 backdrop-blur-md border border-white\/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-all duration-300 shadow-soft"/g,
    'className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"'
)


fs.writeFileSync('src/components/HeroCarousel.tsx', content);
