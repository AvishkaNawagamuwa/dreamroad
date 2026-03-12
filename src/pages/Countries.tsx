import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ctaBgImg from '../assest/images/Gemini_Generated_Image_80tyo980tyo980ty.png';
import {
  ArrowRight,
  CheckCircle,
  MapPin,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { fadeUp, slideLeft, slideRight, viewportConfig } from '../utils/animations';

const Countries = () => {
  const countries = [
    {
      name: 'Poland',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&h=800&fit=crop',
      description:
        'Poland offers excellent opportunities for skilled and unskilled workers across various industries. With a growing economy and EU membership, it provides competitive salaries and good working conditions.',
      sectors: [
        'Construction and Building',
        'Manufacturing and Production',
        'Warehouse and Logistics',
        'Food Processing',
        'Agriculture',
      ],
      highlights: [
        'EU member state',
        'Competitive salaries',
        'Good work-life balance',
        'Growing economy',
      ],
    },
    {
      name: 'Romania',
      image: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1200&q=80',
      description:
        'Romania is an emerging destination for international workers, offering diverse opportunities in manufacturing, construction, and service sectors with attractive compensation packages.',
      sectors: [
        'Construction Projects',
        'Factory Operations',
        'Hospitality Services',
        'Transportation',
        'General Labor',
      ],
      highlights: [
        'EU benefits',
        'Lower cost of living',
        'Diverse opportunities',
        'Cultural richness',
      ],
    },
    {
      name: 'Hungary',
      image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80',
      description:
        'Hungary provides stable employment opportunities with excellent infrastructure and a strategic location in Central Europe. The country welcomes international workers in various sectors.',
      sectors: [
        'Automotive Industry',
        'Electronics Manufacturing',
        'Construction',
        'Logistics and Warehousing',
        'Service Industry',
      ],
      highlights: [
        'Central European location',
        'Strong infrastructure',
        'Automotive hub',
        'Quality healthcare',
      ],
    },
    {
      name: 'UAE / Dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop',
      description:
        'The United Arab Emirates, especially Dubai, is a premier destination for overseas workers offering tax-free income, modern facilities, and career advancement opportunities.',
      sectors: [
        'Construction and Engineering',
        'Hospitality and Tourism',
        'Retail and Service',
        'Transportation',
        'Security Services',
      ],
      highlights: [
        'Tax-free income',
        'Modern infrastructure',
        'Multicultural environment',
        'Career growth potential',
      ],
    },
    {
      name: 'Qatar',
      image: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=1200&h=800&fit=crop',
      description:
        'Qatar offers lucrative opportunities with excellent salaries and benefits. The country is experiencing rapid development and requires skilled workers across multiple sectors.',
      sectors: [
        'Construction and Infrastructure',
        'Oil and Gas Support',
        'Hospitality',
        'Security and Safety',
        'Facility Management',
      ],
      highlights: [
        'High salary packages',
        'Modern facilities',
        'Major projects',
        'Accommodation provided',
      ],
    },
    {
      name: 'Saudi Arabia',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
      description:
        'Saudi Arabia is one of the largest employers of international workers in the Middle East, offering competitive packages and opportunities across diverse industries.',
      sectors: [
        'Construction and Building',
        'Industrial Projects',
        'Healthcare Support',
        'Hospitality Services',
        'Facility Management',
      ],
      highlights: [
        'Large job market',
        'Competitive salaries',
        'Housing benefits',
        'Visa processing support',
      ],
    },
  ];

  return (
    <PageTransition>
    <div className="min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <motion.img
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=800&fit=crop"
          alt="Work Destinations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Work <span className="text-secondary">Destinations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90">
            Explore international opportunities across multiple countries
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular <span className="text-primary">Destinations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We connect you with verified employment opportunities in top international destinations, each offering unique benefits and career prospects.
            </p>
          </motion.div>

          <div className="space-y-20">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? slideRight : slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="flex flex-col md:flex-row min-h-[480px]">
                  <div className={`relative md:w-1/2 min-h-[300px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={country.image}
                      alt={country.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={24} className="text-secondary" />
                        <h3 className="text-4xl font-bold text-secondary drop-shadow-lg">{country.name}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {country.description}
                    </p>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">Job Sectors</h4>
                    <div className="space-y-2 mb-6">
                      {country.sectors.map((sector, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="text-primary flex-shrink-0" size={20} />
                          <span className="text-gray-700">{sector}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">Highlights</h4>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {country.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-[#F8F7F3] to-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-[#C27733] text-white rounded-lg hover:from-primary-hover hover:to-[#b05f25] transition-all hover:shadow-lg hover:-translate-y-1 font-semibold"
                    >
                      Apply for {country.name}
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${ctaBgImg})` }}>
        <div className="absolute inset-0 bg-dark/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-3xl md:text-4xl font-bold text-white mb-6">
            Find Your Ideal Destination
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-xl text-white/90 mb-8">
            Not sure which country is right for you? Contact us for personalized guidance based on your skills and preferences.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/jobs"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              Browse All Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};

export default Countries;
