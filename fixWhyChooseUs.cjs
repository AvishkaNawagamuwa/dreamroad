const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const regex = /<section className="py-20 bg-primary text-white">[\s\S]*?<\/section>/;

const newSection = `<section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="order-2 lg:order-1 relative mt-10 lg:mt-0">
                <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform -translate-x-6 translate-y-6 -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                  alt="Why Choose Us"
                  className="rounded-[2rem] shadow-xl w-full h-[400px] md:h-[550px] object-cover relative z-10"
                />
                
                {/* Floating experience badge */}
                <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 md:p-8 rounded-3xl shadow-premium z-20 flex items-center gap-5 border border-soft/30 animate-fade-in group hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl md:text-4xl font-display font-bold text-primary">15</span>
                  </div>
                  <div>
                    <p className="font-bold text-dark text-lg md:text-xl">Years Experience</p>
                    <p className="text-muted text-sm md:text-base font-medium">In Global Placements</p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-primary scale-x-100"></span>
                    Our Advantage
                </span>
                <h2 className="section-title text-dark mb-6">
                  Why Choose <span className="text-primary relative inline-block">
                    Dream Road
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>?
                </h2>
                <p className="body-text text-muted mb-10 max-w-xl">
                  We bridge the gap between talented professionals and global opportunities, ensuring a transparent, secure, and seamless transition for every candidate we represent.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8 mb-12">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="bg-cream p-3 rounded-xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                        <CheckCircle className="text-primary group-hover:text-white transition-colors" size={24} />
                      </div>
                      <p className="text-dark font-semibold text-[16px] leading-[1.4] pt-1">{item}</p>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/about"
                  className="btn-premium px-10 py-5 bg-primary text-white hover:bg-primary-hover font-semibold rounded-2xl inline-flex items-center gap-3 shadow-[0_8px_20px_rgba(184,106,46,0.25)] hover:shadow-[0_12px_25px_rgba(184,106,46,0.35)] transition-all"
                >
                  Learn More About Us
                  <ArrowRight size={20} />
                </Link>
              </div>
              
            </div>
          </div>
        </section>`;

content = content.replace(regex, newSection);
fs.writeFileSync('src/pages/Home.tsx', content);
