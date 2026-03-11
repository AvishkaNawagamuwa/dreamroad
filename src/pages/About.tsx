import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ctaBgImg from '../assest/images/Gemini_Generated_Image_80tyo980tyo980ty.png';
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Award,
  Lightbulb,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { fadeUp, slideLeft, slideRight, staggerContainer, staggerItem, hoverLift, viewportConfig } from '../utils/animations';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our dealings with clients and partners.',
    },
    {
      icon: Users,
      title: 'Professionalism',
      description: 'Our team delivers expert guidance and support with a commitment to excellence in every interaction.',
    },
    {
      icon: Lightbulb,
      title: 'Transparency',
      description: 'Clear communication and honest information at every step of your overseas employment journey.',
    },
    {
      icon: Heart,
      title: 'Responsibility',
      description: 'We take accountability for guiding candidates through safe and legitimate employment pathways.',
    },
    {
      icon: Award,
      title: 'Customer Support',
      description: 'Dedicated assistance from initial inquiry through to successful placement and beyond.',
    },
  ];

  const approach = [
    'Personalized consultation to understand your career goals',
    'Careful matching with verified overseas employers',
    'Complete documentation and visa processing support',
    'Transparent communication throughout the process',
    'Pre-departure orientation and guidance',
    'Continuous support even after placement',
  ];

  const achievements = [
    { number: '500+', label: 'Successful Placements' },
    { number: '15+', label: 'Countries' },
    { number: '50+', label: 'Partner Companies' },
    { number: '10+', label: 'Years Experience' },
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
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=800&fit=crop"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white">
            About <span className="text-secondary">Dream Road</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90">
            Your trusted partner in overseas employment and work visa guidance
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Dream Road Manpower Agency is dedicated to helping individuals explore overseas employment opportunities through structured guidance and professional work visa-related services. The agency focuses on trust, clarity, and candidate support throughout the journey.
                </p>
                <p>
                  As a licensed manpower agency (License No: 3482), we have built our reputation on ethical practices, professional guidance, and genuine care for each candidate who walks through our doors.
                </p>
                <p>
                  Our experienced team understands the complexities of international employment and immigration processes, and we're committed to making your transition to overseas work as smooth and stress-free as possible.
                </p>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-[#F8F7F3] to-white rounded-xl border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#C27733] rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Licensed Agency</h3>
                    <p className="text-gray-600">License No: 3482</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Fully registered and authorized to provide immigration advice and services for work visas.
                </p>
              </div>
            </motion.div>
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewportConfig} className="relative">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=900&fit=crop"
                alt="Our Team"
                className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div variants={staggerItem} whileHover={hoverLift} className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-[#C27733] rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={40} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide reliable and professional support for candidates seeking international work opportunities. We strive to connect talented individuals with legitimate overseas employers while ensuring complete transparency and ethical practices throughout the process.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} whileHover={hoverLift} className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-[#C27733] rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={40} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become a trusted and respected name in manpower and work visa guidance, recognized for our commitment to candidate welfare, ethical practices, and successful placements that create lasting positive impacts on individuals and their families.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">{item.number}</div>
                <div className="text-sm md:text-base text-muted">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={hoverLift}
                className="bg-gradient-to-br from-[#F8F7F3] to-white rounded-2xl p-8 border border-gray-100 cursor-default"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#C27733] rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Our Approach"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Our Service Approach
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                We believe in a personalized, step-by-step approach that puts your needs and aspirations first.
              </p>
              <div className="space-y-4">
                {approach.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={viewportConfig}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="flex-shrink-0 text-primary mt-1" size={24} />
                    <p className="text-lg text-dark">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Clients <span className="text-primary">Trust Us</span>
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-3 gap-8">
            <motion.div variants={staggerItem} whileHover={hoverLift} className="bg-white rounded-2xl p-8 shadow-lg cursor-default">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#C27733] rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Licensed & Legal</h3>
              <p className="text-gray-600 leading-relaxed">
                Fully registered manpower agency with proper licensing and authorization to provide work visa guidance and overseas employment services.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} whileHover={hoverLift} className="bg-white rounded-2xl p-8 shadow-lg cursor-default">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#C27733] rounded-xl flex items-center justify-center mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our professionals have years of experience in international recruitment and immigration processes, ensuring expert guidance at every step.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} whileHover={hoverLift} className="bg-white rounded-2xl p-8 shadow-lg cursor-default">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#C27733] rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Success</h3>
              <p className="text-gray-600 leading-relaxed">
                Hundreds of successful placements across multiple countries demonstrate our ability to deliver on our promises and change lives.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${ctaBgImg})` }}>
        <div className="absolute inset-0 bg-dark/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="text-xl text-white/90 mb-8">
            Let us help you achieve your international career goals with professional guidance and support
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              Contact Us Today
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};

export default About;
