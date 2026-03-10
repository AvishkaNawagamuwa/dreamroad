import { Link } from 'react-router-dom';
import ctaBgImg from '../assest/images/Gemini_Generated_Image_80tyo980tyo980ty.png';
import {
  HardHat,
  Factory,
  Building2,
  Hotel,
  Wrench,
  Users,
  MapPin,
  DollarSign,
  Clock,
  ArrowRight,
} from 'lucide-react';

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

  const featuredJobs = [
    {
      title: 'Construction Workers',
      company: 'European Construction Group',
      location: 'Poland',
      salary: '$1,200 - $1,800/month',
      type: 'Full-time',
      description: 'Seeking experienced construction workers for residential and commercial projects in Poland.',
      requirements: ['Physical fitness', 'Basic construction knowledge', 'Willingness to learn', 'Team player'],
    },
    {
      title: 'Factory Production Staff',
      company: 'International Manufacturing Ltd',
      location: 'Romania',
      salary: '$1,000 - $1,400/month',
      type: 'Full-time',
      description: 'Production line workers needed for electronics manufacturing facility.',
      requirements: ['Attention to detail', 'Shift work availability', 'No experience required', 'Training provided'],
    },
    {
      title: 'Warehouse Operators',
      company: 'Global Logistics Solutions',
      location: 'Hungary',
      salary: '$1,100 - $1,500/month',
      type: 'Full-time',
      description: 'Warehouse staff for modern logistics center handling European distribution.',
      requirements: ['Physical stamina', 'Basic computer skills', 'Forklift license (preferred)', 'Flexible schedule'],
    },
    {
      title: 'Hotel Staff (Multiple Positions)',
      company: 'Premium Hospitality Group',
      location: 'UAE / Dubai',
      salary: '$1,500 - $2,500/month',
      type: 'Full-time',
      description: 'Various positions available including housekeeping, kitchen staff, and service roles.',
      requirements: ['Customer service skills', 'English proficiency', 'Professional appearance', 'Experience preferred'],
    },
    {
      title: 'Construction Supervisors',
      company: 'Middle East Development Corp',
      location: 'Qatar',
      salary: '$2,000 - $3,000/month',
      type: 'Full-time',
      description: 'Experienced supervisors needed for major infrastructure projects.',
      requirements: ['5+ years experience', 'Leadership skills', 'Technical knowledge', 'English communication'],
    },
    {
      title: 'General Workers',
      company: 'Saudi Industrial Projects',
      location: 'Saudi Arabia',
      salary: '$1,200 - $1,800/month',
      type: 'Full-time',
      description: 'Multiple general labor positions for industrial and construction projects.',
      requirements: ['Physical fitness', 'Positive attitude', 'Adaptability', 'No experience required'],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=800&fit=crop"
          alt="Job Opportunities"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Job <span className="text-secondary">Opportunities</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Discover your next international career opportunity
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by <span className="text-primary">Category</span>
            </h2>
            <p className="text-lg text-gray-600">
              Explore opportunities across various industries and skill levels
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-primary">Positions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Current openings with verified international employers
            </p>
          </div>
          <div className="space-y-6">
            {featuredJobs.map((job, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F8F7F3] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building2 size={18} className="text-primary" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={18} className="text-primary" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign size={18} className="text-primary" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={18} className="text-primary" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-[#C27733] text-white rounded-lg hover:from-primary-hover hover:to-[#b05f25] transition-all hover:shadow-lg hover:-translate-y-1 font-semibold whitespace-nowrap"
                    >
                      Apply Now
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F8F7F3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
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
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${ctaBgImg})` }}>
        <div className="absolute inset-0 bg-dark/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Finding the Right Job?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team can help match you with opportunities that fit your skills and career goals
          </p>
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
  );
};

export default Jobs;
