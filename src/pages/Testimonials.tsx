import { Link } from 'react-router-dom';
import ctaBgImg from '../assest/images/Gemini_Generated_Image_80tyo980tyo980ty.png';
import { Star, Quote, MapPin, Briefcase, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Construction Worker',
      country: 'Poland',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Dream Road made my journey to Poland incredibly smooth. They handled all documentation and visa processing professionally. Now I am working in a good company with excellent salary and benefits. I highly recommend their services to anyone seeking overseas employment.',
    },
    {
      name: 'Priyanka Silva',
      role: 'Factory Worker',
      country: 'Romania',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      rating: 5,
      text: 'I was nervous about working abroad, but the team at Dream Road provided excellent guidance throughout the entire process. They were always available to answer my questions and provided honest information. Today I am successfully working in Romania and supporting my family back home.',
    },
    {
      name: 'Kasun Fernando',
      role: 'Warehouse Supervisor',
      country: 'Hungary',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Professional and trustworthy agency. They found me a great position in Hungary that matched my experience. The entire process from application to arrival was well-coordinated. Thank you Dream Road for changing my life!',
    },
    {
      name: 'Amila Perera',
      role: 'Hospitality Staff',
      country: 'UAE / Dubai',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Dream Road Manpower Agency helped me secure a position in Dubai. Their guidance during the visa process was invaluable. The team was patient and professional. I appreciate their honest approach and continued support even after I arrived.',
    },
    {
      name: 'Nishantha Bandara',
      role: 'Construction Supervisor',
      country: 'Qatar',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Excellent service from start to finish. They matched me with a reputable company in Qatar and handled all the paperwork efficiently. The pre-departure briefing was very helpful. I would definitely recommend Dream Road to my friends and family.',
    },
    {
      name: 'Chaminda Wijesinghe',
      role: 'General Worker',
      country: 'Saudi Arabia',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      rating: 5,
      text: 'I had a great experience with Dream Road. They were transparent about costs and timelines. The consultation was thorough and they prepared me well for life in Saudi Arabia. Very satisfied with their professional service.',
    },
    {
      name: 'Sanjaya Kumara',
      role: 'Factory Technician',
      country: 'Poland',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Dream Road helped me achieve my dream of working abroad. The team was supportive and knowledgeable. They guided me through each step patiently. Now I have a stable job in Poland and a better future for my family.',
    },
    {
      name: 'Dilani Jayawardena',
      role: 'Hotel Staff',
      country: 'UAE / Dubai',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      rating: 5,
      text: 'As a female candidate, I had many concerns about working abroad. Dream Road addressed all my questions and connected me with a reputable hotel in Dubai. They ensured my safety and comfort throughout the process. Highly recommend!',
    },
    {
      name: 'Buddhika Silva',
      role: 'Warehouse Worker',
      country: 'Hungary',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Very professional agency with genuine opportunities. They did not make false promises and kept me informed at every stage. The job they found for me in Hungary matches exactly what they described. Thank you Dream Road!',
    },
  ];

  const stats = [
    { number: '500+', label: 'Successful Placements' },
    { number: '15+', label: 'Countries' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '10+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=800&fit=crop"
          alt="Success Stories"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Success <span className="text-secondary">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Hear from candidates who achieved their international career goals with our support
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform border border-gray-100"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">{stat.number}</div>
                <div className="text-sm md:text-base text-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real experiences from real people who trusted us with their overseas employment journey. These testimonials reflect our commitment to professional service and candidate satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 relative border border-gray-100"
              >
                <Quote className="absolute top-6 right-6 text-primary/10" size={48} />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary/30"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Briefcase size={14} className="text-primary" />
                        <span>{testimonial.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={14} className="text-primary" />
                        <span>{testimonial.country}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-[#D9A21B] text-[#D9A21B]" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {testimonial.text}
                  </p>
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
              Be Our Next Success Story
            </h2>
            <p className="text-lg text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied candidates who have successfully started their international careers with our professional guidance and support. Your success story could be next!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all hover:shadow-lg hover:-translate-y-1 font-semibold text-lg"
              >
                Start Your Journey
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/jobs"
                className="px-8 py-4 bg-white border-2 border-primary/20 text-primary rounded-lg hover:bg-primary/5 transition-all hover:shadow-lg hover:-translate-y-1 font-semibold text-lg"
              >
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary">Dream Road?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#C27733] rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Star className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Licensed & Trusted</h3>
              <p className="text-gray-600 leading-relaxed">
                Registered manpower agency with License No: 3482, ensuring legal and ethical practices in all our operations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#C27733] rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600 leading-relaxed">
                Over 500 successful placements across 15+ countries with a 95% candidate satisfaction rate.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#C27733] rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Quote className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide ongoing support throughout your journey and even after you reach your destination abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${ctaBgImg})` }}>
        <div className="absolute inset-0 bg-dark/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today and take the first step toward your international career
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
          >
            Get Started Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
