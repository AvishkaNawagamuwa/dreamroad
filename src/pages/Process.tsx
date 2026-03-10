import { Link } from 'react-router-dom';
import ctaBgImg from '../assest/images/Gemini_Generated_Image_80tyo980tyo980ty.png';
import {
  MessageCircle,
  Search,
  FileText,
  ClipboardCheck,
  Plane,
  CheckCircle,
  ArrowRight,
  Phone,
} from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Initial Consultation',
      description: 'Begin your journey with a comprehensive consultation where we understand your career goals, skills, experience, and preferences.',
      details: [
        'Discuss your career aspirations and target countries',
        'Evaluate your qualifications and experience',
        'Understand your budget and timeline',
        'Answer all your questions about overseas employment',
        'Provide realistic expectations and guidance',
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    },
    {
      number: '02',
      icon: Search,
      title: 'Job Matching',
      description: 'We carefully match your profile with verified overseas employers and opportunities that align with your skills and preferences.',
      details: [
        'Search our database of verified international employers',
        'Match opportunities based on your qualifications',
        'Present multiple options for your consideration',
        'Provide detailed job descriptions and requirements',
        'Explain salary packages and benefits',
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    },
    {
      number: '03',
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive support in preparing, verifying, and organizing all required documents for your overseas employment and visa application.',
      details: [
        'Provide detailed documentation checklist',
        'Guide through attestation and certification',
        'Coordinate translation services if needed',
        'Assist with police clearance procedures',
        'Support medical certificate requirements',
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    },
    {
      number: '04',
      icon: ClipboardCheck,
      title: 'Interview & Selection',
      description: 'Prepare for and participate in employer interviews, with our support to help you present yourself confidently and professionally.',
      details: [
        'Provide interview preparation guidance',
        'Conduct mock interview sessions',
        'Brief on company and cultural expectations',
        'Support throughout the selection process',
        'Negotiate employment terms on your behalf',
      ],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
    },
    {
      number: '05',
      icon: Plane,
      title: 'Visa Processing',
      description: 'Handle all aspects of visa application and processing, ensuring compliance with immigration requirements and timely submission.',
      details: [
        'Prepare and review visa application forms',
        'Submit applications to relevant authorities',
        'Track application status and follow up',
        'Coordinate with embassies and consulates',
        'Provide updates throughout the process',
      ],
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=600&fit=crop',
    },
    {
      number: '06',
      icon: CheckCircle,
      title: 'Pre-Departure & Support',
      description: 'Final preparation for your journey including orientation, travel arrangements, and ongoing support even after you reach your destination.',
      details: [
        'Conduct pre-departure orientation sessions',
        'Provide country-specific guidance and tips',
        'Assist with travel arrangements if needed',
        'Provide emergency contact information',
        'Offer post-arrival support and follow-up',
      ],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop',
    },
  ];

  const timeline = [
    { phase: 'Week 1-2', activity: 'Consultation & Registration' },
    { phase: 'Week 2-3', activity: 'Job Matching & Selection' },
    { phase: 'Week 3-6', activity: 'Documentation Preparation' },
    { phase: 'Week 6-8', activity: 'Interview & Selection' },
    { phase: 'Week 8-16', activity: 'Visa Processing' },
    { phase: 'Week 16+', activity: 'Pre-Departure & Travel' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=800&fit=crop"
          alt="Our Process"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Application <span className="text-secondary">Process</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Your journey to overseas employment in six structured steps
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We <span className="text-primary">Support You</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a systematic, transparent process to ensure your overseas employment journey is smooth, legal, and successful. Each step is designed to maximize your chances of success while minimizing stress and uncertainty.
            </p>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="relative">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                      />
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-[#C27733] rounded-2xl flex items-center justify-center shadow-xl">
                        <step.icon className="text-white" size={48} />
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-7xl font-bold text-primary/10">
                        {step.number}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-primary mb-1">STEP {step.number}</div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-4">What We Do:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="flex-shrink-0 text-primary mt-0.5" size={20} />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-12">
                    <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-[#C27733]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Typical <span className="text-primary">Timeline</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While timelines can vary based on destination and individual circumstances, here's what you can typically expect
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-[#C27733] to-secondary hidden md:block"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-gradient-to-br from-[#F8F7F3] to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                        <div className="font-bold text-primary mb-2">{item.phase}</div>
                        <div className="text-xl font-semibold text-gray-900">{item.activity}</div>
                      </div>
                    </div>
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#C27733] rounded-full flex items-center justify-center shadow-xl">
                        <div className="text-white font-bold text-xl">{index + 1}</div>
                      </div>
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              Note: Processing times vary by country and individual circumstances. We'll provide you with a more accurate timeline during your consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#FAF7F2] rounded-3xl p-12 md:p-16 border border-primary/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                  Transparent Process, Clear Communication
                </h2>
                <p className="text-lg text-muted mb-8 leading-relaxed">
                  Throughout every step, we maintain clear communication and transparency. You'll always know where you are in the process and what to expect next.
                </p>
                <div className="space-y-4">
                  {[
                    'Regular updates on your application status',
                    'Clear explanation of each step',
                    'Honest timelines and expectations',
                    'Available to answer your questions',
                    'No hidden fees or surprises',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="flex-shrink-0 text-primary" size={24} />
                      <span className="text-lg text-dark">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Our Team"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${ctaBgImg})` }}>
        <div className="absolute inset-0 bg-dark/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your overseas employment journey today with our professional guidance and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              Start Application
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:0772605023"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all hover:shadow-2xl hover:-translate-y-1 font-semibold text-lg"
            >
              <Phone size={20} />
              Call for Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
