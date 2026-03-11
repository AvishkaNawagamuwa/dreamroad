import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ctaBgImg from '../assest/images/Gemini_Generated_Image_80tyo980tyo980ty.png';
import {
  HardHat,
  Factory,
  Building2,
  Hotel,
  Wrench,
  Users,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { fadeUp, staggerContainer, staggerItem, hoverLift, viewportConfig } from '../utils/animations';

const Jobs = () => {
  const jobCategories = [
    {
      icon: HardHat,
      title: 'Construction Workers',
      description: 'Skilled and unskilled construction labor for various projects',
      openings: '50+',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    },
    {
      icon: Factory,
      title: 'Factory Workers',
      description: 'Manufacturing and production line positions',
      openings: '40+',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    },
    {
      icon: Building2,
      title: 'Warehouse Staff',
      description: 'Logistics, packing, and warehouse operations',
      openings: '35+',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    },
    {
      icon: Hotel,
      title: 'Hospitality Staff',
      description: 'Hotels, restaurants, and service industry positions',
      openings: '25+',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
    },
    {
      icon: Wrench,
      title: 'Skilled Technicians',
      description: 'Technical, maintenance, and specialized roles',
      openings: '20+',
      image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&h=600&fit=crop',
    },
    {
      icon: Users,
      title: 'General Labor',
      description: 'Various entry-level and support positions',
      openings: '30+',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
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
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=800&fit=crop"
          alt="Job Opportunities"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Job <span className="text-secondary">Opportunities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90">
            Discover your next international career opportunity
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by <span className="text-primary">Category</span>
            </h2>
            <p className="text-lg text-gray-600">
              Explore opportunities across various industries and skill levels
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(184,106,46,0.15)' }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-default"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold text-sm">
                    {category.openings} positions
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#C27733] rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Apply Now
                    <ArrowRight size={16} />
                  </Link>
                </div>
            </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="bg-white rounded-3xl p-12 shadow-xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Don't See the Right Job?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We receive new job openings regularly. Register with us and we'll notify you when positions matching your skills and preferences become available.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-[#C27733] text-white rounded-lg hover:from-primary-hover hover:to-[#b05f25] transition-all hover:shadow-xl hover:-translate-y-1 font-semibold text-lg"
            >
              Register Your Interest
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${ctaBgImg})` }}>
        <div className="absolute inset-0 bg-dark/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Finding the Right Job?
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-xl text-white/90 mb-8">
            Our team can help match you with opportunities that fit your skills and career goals
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:0772605023"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};

export default Jobs;
