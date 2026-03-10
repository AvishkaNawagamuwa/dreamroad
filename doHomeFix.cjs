const fs = require('fs');

const content = `import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, hoverLift, viewportConfig, fadeUp } from '../utils/animations';
import { Link } from 'react-router-dom';
import { Shield, Users, Globe, Award, CheckCircle, Briefcase, FileText, ArrowRight } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import ctaBgImg from '../assest/images/Gemini_Generated_Image_80tyo980tyo980ty.png';

const Home = () => {
  const trustBadges = [
    { icon: Shield, title: 'Licensed Agency', desc: 'Government certified & registered agency' },
    { icon: Users, title: 'Professional Guidance', desc: 'Expert career counseling & visa support' },
    { icon: Globe, title: 'Overseas Opportunities', desc: 'Connecting you to top global markets' },
    { icon: Award, title: 'Trusted Support', desc: 'Comprehensive pre & post departure help' },
  ];

  const services = [
    { icon: FileText, title: 'Work Visa Assistance', description: 'Complete support for work visa applications and documentation' },
    { icon: Briefcase, title: 'Job Placement', description: 'Connect with verified overseas employers and opportunities' },
    { icon: Users, title: 'Immigration Consultation', description: 'Expert advice for your international career journey' },
  ];

  const whyChooseUs = [
    'Licensed and registered manpower agency',
    'Transparent process and fair pricing',
    'Verified overseas employers',
    'Complete documentation support',
    'Pre-departure guidance and training',
    'Post-placement support',
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-cream">
        <HeroCarousel />

        <section className="relative z-30 -mt-10 md:-mt-16 mb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={viewportConfig}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div 
                  variants={staggerItem}
                  whileHover={hoverLift}
                  key={index} 
                  className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(184,106,46,0.12)] group transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                    <badge.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3 leading-tight">{badge.title}</h3>
                  <p className="text-muted text-[15px] leading-relaxed">{badge.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
                <h2 className="section-title">
                  Why Choose <span className="text-primary">Dream Road?</span>
                </h2>
                <p className="text-lg text-muted mb-8">
                  We bring 15 years of trusted experience in international manpower placement.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {whyChooseUs.map((item, index) => (
                    <motion.div key={index} variants={staggerItem} className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-primary" size={20} />
                      </div>
                      <span className="text-dark font-medium mt-2">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <div className="relative">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={viewportConfig}
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop" 
                  alt="Team" 
                  className="rounded-3xl shadow-2xl" 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Our <span className="text-primary">Services</span></h2>
            </div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div key={index} variants={staggerItem} whileHover={hoverLift} className="bg-cream rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
                  <p className="text-muted mb-6">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative py-32 bg-fixed bg-center bg-cover" style={{ backgroundImage: \`url('\${ctaBgImg}')\` }}>
          <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-xl text-gray-300 mb-10">
              Join thousands of successful professionals working overseas.
            </motion.p>
            <Link to="/contact" className="btn-premium inline-block">
              Apply Now
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;`;

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
