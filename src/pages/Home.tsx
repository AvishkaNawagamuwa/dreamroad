import { Link } from 'react-router-dom';
import {
  Shield,
  Users,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  Briefcase,
  FileText,
  Plane,
  MessageCircle,
  Building2,
  HardHat,
  Factory,
  Hotel,
} from 'lucide-react';

const Home = () => {
  const trustBadges = [
    { icon: Shield, text: 'Licensed Agency' },
    { icon: Users, text: 'Professional Guidance' },
    { icon: Globe, text: 'Overseas Opportunities' },
    { icon: Award, text: 'Trusted Support' },
  ];

  const services = [
    {
      icon: FileText,
      title: 'Work Visa Assistance',
      description: 'Complete support for work visa applications and documentation',
    },
    {
      icon: Briefcase,
      title: 'Job Placement',
      description: 'Connect with verified overseas employers and opportunities',
    },
    {
      icon: Users,
      title: 'Immigration Consultation',
      description: 'Expert advice for your international career journey',
    },
  ];

  const countries = [
    { name: 'Poland', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=500&fit=crop' },
    { name: 'Romania', image: 'https://images.unsplash.com/photo-1605608278551-cf3e3169aa94?w=800&h=500&fit=crop' },
    { name: 'Hungary', image: 'https://images.unsplash.com/photo-1541697748-1aa5d0857c5f?w=800&h=500&fit=crop' },
    { name: 'UAE / Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop' },
  ];

  const jobCategories = [
    { icon: HardHat, title: 'Construction', count: '50+ positions' },
    { icon: Factory, title: 'Factory Workers', count: '40+ positions' },
    { icon: Building2, title: 'Warehouse Staff', count: '35+ positions' },
    { icon: Hotel, title: 'Hospitality', count: '25+ positions' },
  ];

  const whyChooseUs = [
    'Licensed and registered manpower agency',
    'Transparent process and fair pricing',
    'Verified overseas employers',
    'Complete documentation support',
    'Pre-departure guidance and training',
    'Post-placement support',
  ];

  const processSteps = [
    { step: '01', title: 'Initial Consultation', description: 'Discuss your goals and preferences' },
    { step: '02', title: 'Job Matching', description: 'Find suitable opportunities abroad' },
    { step: '03', title: 'Documentation', description: 'Prepare all required documents' },
    { step: '04', title: 'Visa Processing', description: 'Handle visa applications' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=1080&fit=crop"
          alt="Overseas Employment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Your Trusted Partner for<br />
            <span className="text-[#D9A21B]">Overseas Employment</span> and<br />
            <span className="text-[#D9A21B]">Work Visa Guidance</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Dream Road Manpower Agency helps job seekers move toward international career opportunities with professional consultation, visa guidance, and overseas job support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-[#9F1D20] to-[#C96A16] text-white rounded-lg hover:from-[#8a1a1c] hover:to-[#b45f13] transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              Explore Services
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/jobs"
              className="px-8 py-4 bg-white text-[#9F1D20] rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              View Jobs
            </Link>
            <a
              href="https://wa.me/94772605043"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all hover:scale-105"
              >
                <badge.icon className="mx-auto mb-2 text-[#D9A21B]" size={32} />
                <p className="text-sm font-medium">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-[#9F1D20]">Dream Road</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dream Road Manpower Agency is dedicated to helping individuals explore overseas employment opportunities through structured guidance and professional work visa-related services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
                alt="About Us"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#9F1D20] to-[#C96A16] rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Trusted</h3>
                  <p className="text-gray-600">
                    Registered manpower agency with License No: 3482, committed to ethical practices and transparency.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#9F1D20] to-[#C96A16] rounded-lg flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Support</h3>
                  <p className="text-gray-600">
                    Experienced team providing comprehensive guidance throughout your overseas employment journey.
                  </p>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#9F1D20] font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#9F1D20]">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for your overseas employment journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F8F7F3] to-white rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#9F1D20] to-[#C96A16] rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-[#9F1D20] font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular <span className="text-[#9F1D20]">Destinations</span>
            </h2>
            <p className="text-lg text-gray-600">
              Explore work opportunities in top international destinations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <Link
                key={index}
                to="/countries"
                className="group relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
                  <span className="inline-flex items-center gap-2 text-[#D9A21B] font-semibold">
                    Explore Opportunities
                    <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Job <span className="text-[#9F1D20]">Categories</span>
            </h2>
            <p className="text-lg text-gray-600">
              Discover opportunities across various industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCategories.map((category, index) => (
              <Link
                key={index}
                to="/jobs"
                className="bg-gradient-to-br from-[#F8F7F3] to-white rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#9F1D20] to-[#C96A16] rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <category.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-[#9F1D20] font-semibold">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#9F1D20] to-[#C96A16] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Dream Road?
              </h2>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="flex-shrink-0 text-[#D9A21B] mt-1" size={24} />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-block mt-8 px-8 py-4 bg-white text-[#9F1D20] rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 font-semibold"
              >
                Learn More About Us
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                alt="Why Choose Us"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application <span className="text-[#9F1D20]">Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              Your journey to overseas employment in four simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="text-6xl font-bold text-[#9F1D20]/10 absolute top-4 right-4">
                  {step.step}
                </div>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#9F1D20] to-[#C96A16] rounded-lg flex items-center justify-center mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#9F1D20] to-[#C96A16] text-white rounded-lg hover:from-[#8a1a1c] hover:to-[#b45f13] transition-all hover:shadow-xl hover:-translate-y-1 font-semibold text-lg"
            >
              View Complete Process
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#9F1D20] to-[#C96A16]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and take the first step toward your international career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-[#9F1D20] rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              Apply Now
            </Link>
            <a
              href="https://wa.me/94772605043"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
