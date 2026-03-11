import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, MessageCircle, ArrowRight } from 'lucide-react';
import footerLogo from '../assest/images/logo/RreamRoad.jpg';

const Footer = () => {
  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <img
              src={footerLogo}
              alt="Dream Road Manpower"
              className="h-24 w-auto object-contain bg-white p-2 rounded-xl"
            />
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Dream Road Manpower Agency provides professional immigration advice and comprehensive support for work visas and overseas job opportunities.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://wa.me/94772605043"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 hover:border-brand-green hover:bg-brand-green/20 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span> Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/process', label: 'Application Process' },
                { path: '/testimonials', label: 'Success Stories' },
                { path: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="group flex items-center text-gray-400 hover:text-white transition-colors text-sm">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-primary transition-all duration-300 mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full"></span> Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { path: '/services', label: 'Work Visa Assistance' },
                { path: '/services', label: 'Overseas Job Placement' },
                { path: '/services', label: 'Documentation Support' },
                { path: '/countries', label: 'Work Destinations' },
                { path: '/jobs', label: 'Latest Job Opportunities' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="group flex items-center text-gray-400 hover:text-white transition-colors text-sm">
                     <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-secondary transition-all duration-300 mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-white/20 rounded-full"></span> Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-400 text-sm mt-1">
                  No 37/108/1/1, Kandy Road, <br/>Peliyagoda
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 group-hover:text-secondary transition-colors">
                  <Phone size={18} />
                </div>
                <a href="tel:0772605023" className="text-gray-400 hover:text-white transition-colors text-sm">
                  077 260 5023
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-green/20 group-hover:text-brand-green transition-colors">
                  <MessageCircle size={18} />
                </div>
                <a href="https://wa.me/94772605043" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +94 77 260 5043
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/20 hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <a href="mailto:dreamroadmanpower@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm break-all mt-2 line-clamp-1">
                  dreamroadmanpower@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm text-center md:text-left">
            © 2026 The Loop. All rights reserved. <span className="text-gray-400 font-medium">License No: 3482</span>
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
