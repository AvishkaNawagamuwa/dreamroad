import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1F2937] via-[#2d3748] to-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="/image.png"
              alt="Dream Road Manpower"
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Dream Road Manpower Agency provides immigration advice and professional support for work visas and overseas job opportunities.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#D9A21B] rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/94772605043"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D9A21B]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#D9A21B] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#D9A21B] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-gray-300 hover:text-[#D9A21B] transition-colors text-sm">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-[#D9A21B] transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#D9A21B] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D9A21B]">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#D9A21B] transition-colors text-sm">
                  Work Visa Assistance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#D9A21B] transition-colors text-sm">
                  Overseas Job Placement
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#D9A21B] transition-colors text-sm">
                  Documentation Support
                </Link>
              </li>
              <li>
                <Link to="/countries" className="text-gray-300 hover:text-[#D9A21B] transition-colors text-sm">
                  Work Destinations
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-[#D9A21B] transition-colors text-sm">
                  Job Opportunities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D9A21B]">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#D9A21B] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  No 37/108/1/1, Kandy Road, Peliyagoda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#D9A21B] flex-shrink-0" />
                <a href="tel:0772605023" className="text-gray-300 hover:text-[#D9A21B] transition-colors text-sm">
                  077 260 5023
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-[#D9A21B] flex-shrink-0" />
                <a href="https://wa.me/94772605043" className="text-gray-300 hover:text-[#D9A21B] transition-colors text-sm">
                  +94 77 260 5043
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#D9A21B] mt-1 flex-shrink-0" />
                <a href="mailto:dreamroadmanpower@gmail.com" className="text-gray-300 hover:text-[#D9A21B] transition-colors text-sm break-all">
                  dreamroadmanpower@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Dream Road Manpower Agency. All rights reserved. License No: 3482
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Immigration advice and services for work visas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
