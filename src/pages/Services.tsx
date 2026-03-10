import { Link } from 'react-router-dom';
import ctaBgImg from '../assest/images/Gemini_Generated_Image_80tyo980tyo980ty.png';
import {
  FileText,
  Briefcase,
  Users,
  GraduationCap,
  Plane,
  Shield,
  CheckCircle,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Work Visa Assistance',
      description:
        'Comprehensive support for work visa applications across multiple countries. Our experienced team guides you through documentation requirements, application procedures, and submission processes.',
      benefits: [
        'Complete documentation guidance',
        'Application form assistance',
        'Visa interview preparation',
        'Follow-up and status tracking',
        'Embassy liaison support',
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    },
    {
      icon: Briefcase,
      title: 'Overseas Job Placement',
      description:
        'Connect with verified international employers seeking skilled and unskilled workers. We match your qualifications and aspirations with legitimate overseas employment opportunities.',
      benefits: [
        'Access to verified employers',
        'Job matching based on skills',
        'Salary and contract negotiation',
        'Employment contract review',
        'Pre-employment verification',
      ],
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
    },
    {
      icon: Shield,
      title: 'Documentation Support',
      description:
        'Professional assistance in preparing, verifying, and organizing all required documents for overseas employment. We ensure your paperwork meets international standards and requirements.',
      benefits: [
        'Document checklist preparation',
        'Attestation and certification guidance',
        'Translation services coordination',
        'Police clearance assistance',
        'Medical certificate support',
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    },
    {
      icon: Users,
      title: 'Immigration Consultation',
      description:
        'Expert advice on immigration procedures, requirements, and best practices for working abroad. We provide personalized consultation to address your specific situation and goals.',
      benefits: [
        'One-on-one consultation sessions',
        'Country-specific guidance',
        'Legal requirements clarification',
        'Timeline and process explanation',
        'Risk assessment and mitigation',
      ],
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    },
    {
      icon: GraduationCap,
      title: 'Interview Preparation',
      description:
        'Thorough preparation for employer interviews and visa interviews. We help you present yourself confidently and professionally to maximize your chances of success.',
      benefits: [
        'Mock interview sessions',
        'Common questions preparation',
        'Professional presentation skills',
        'Cultural awareness training',
        'Confidence building techniques',
      ],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
    },
    {
      icon: Plane,
      title: 'Pre-Departure Guidance',
      description:
        'Essential preparation for your journey abroad, including practical advice on accommodation, local customs, banking, and what to expect in your new country.',
      benefits: [
        'Cultural orientation sessions',
        'Travel and accommodation advice',
        'Banking and financial guidance',
        'Emergency contact information',
        'Local laws and customs briefing',
      ],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=800&fit=crop"
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Our <span className="text-secondary">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Comprehensive support for your overseas employment journey
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Services for <span className="text-primary">Every Step</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From initial consultation to successful placement, we provide end-to-end support to ensure your overseas employment journey is smooth, legal, and successful.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#C27733] rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="flex-shrink-0 text-primary mt-1" size={20} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-[#C27733] text-white rounded-lg hover:from-primary-hover hover:to-[#b05f25] transition-all hover:shadow-lg hover:-translate-y-1 font-semibold"
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#FAF7F2] rounded-3xl p-12 md:p-16 text-center border border-primary/10">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive, transparent, and professional support at every stage of your overseas employment journey. Our licensed agency ensures legal compliance and ethical practices.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-5xl font-bold mb-2 text-primary">100%</div>
                <div className="text-lg text-dark">Legal & Licensed</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-5xl font-bold mb-2 text-primary">24/7</div>
                <div className="text-lg text-dark">Support Available</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-5xl font-bold mb-2 text-primary">500+</div>
                <div className="text-lg text-dark">Successful Placements</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Service Process
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We follow a structured, transparent process to ensure the best possible outcome for every client. From your first consultation to your successful placement abroad, we're with you every step of the way.
              </p>
              <div className="space-y-4">
                {[
                  'Initial consultation to understand your goals',
                  'Job matching and opportunity identification',
                  'Documentation preparation and verification',
                  'Visa application and processing support',
                  'Pre-departure orientation and guidance',
                  'Post-placement follow-up and support',
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-[#C27733] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all text-lg"
              >
                View Detailed Process
                <ArrowRight size={20} />
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Service Process"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${ctaBgImg})` }}>
        <div className="absolute inset-0 bg-dark/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free consultation and let us help you achieve your international career goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              Schedule Consultation
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

export default Services;
