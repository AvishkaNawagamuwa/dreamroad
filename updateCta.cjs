const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const importStatement = "import ctaBgImg from '../assest/images/Gemini_Generated_Image_80tyo980tyo980ty.png';";

if (!content.includes('import ctaBgImg')) {
    const lines = content.split('\n');
    let lastImportIndex = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
            lastImportIndex = i;
        }
    }
    lines.splice(lastImportIndex + 1, 0, importStatement);
    content = lines.join('\n');
}

const oldCtaRegex = /<section className="py-20 bg-primary">[\s\S]*?<\/section>/;

const newCta = `<section 
          className="relative py-24 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: \`url(\${ctaBgImg})\` }}
        >
          <div className="absolute inset-0 bg-dark/70 backdrop-blur-[2px]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="section-title mb-6 text-white drop-shadow-lg">
              Ready to Start Your Journey?
            </h2>
            <p className="text-[18px] md:text-[20px] mb-10 text-white/90 drop-shadow-md leading-relaxed">
              Contact us today for a free consultation and take the first step toward your international career.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                to="/contact"
                className="btn-premium bg-white text-dark hover:text-primary transition-colors border-none"
              >
                Apply Now
              </Link>
              <a
                href="https://wa.me/94772605043"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium bg-[#25D366] hover:bg-[#20BE5A] text-white border-none shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 transition-all"
              >
                <MessageCircle size={22} className="mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>`;

content = content.replace(oldCtaRegex, newCta);

fs.writeFileSync('src/pages/Home.tsx', content);
