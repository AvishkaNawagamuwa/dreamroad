import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/countries', label: 'Countries' },
    { path: '/jobs', label: 'Jobs' },
    { path: '/process', label: 'Process' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="bg-gradient-to-r from-[#9F1D20] to-[#C96A16] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0772605023" className="flex items-center gap-2 hover:text-[#D9A21B] transition-colors">
              <Phone size={16} />
              <span>077 260 5023</span>
            </a>
            <a href="mailto:dreamroadmanpower@gmail.com" className="hidden md:block hover:text-[#D9A21B] transition-colors">
              dreamroadmanpower@gmail.com
            </a>
          </div>
          <div className="text-xs md:text-sm">
            License No: 3482
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/image.png"
                alt="Dream Road Manpower"
                className="h-12 md:h-16 w-auto transition-transform group-hover:scale-105"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive(link.path)
                      ? 'text-[#9F1D20]'
                      : isScrolled
                      ? 'text-gray-700 hover:text-[#9F1D20]'
                      : 'text-gray-800 hover:text-[#9F1D20]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#9F1D20] to-[#D9A21B] transition-all ${
                      isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/94772605043"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg hover:from-green-700 hover:to-green-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                <span className="font-medium">WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-gradient-to-r from-[#9F1D20] to-[#C96A16] text-white rounded-lg hover:from-[#8a1a1c] hover:to-[#b45f13] transition-all hover:shadow-lg hover:-translate-y-0.5 font-medium"
              >
                Apply Now
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#9F1D20] transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#9F1D20] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 space-y-2">
                <a
                  href="https://wa.me/94772605043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center px-4 py-2.5 bg-gradient-to-r from-[#9F1D20] to-[#C96A16] text-white rounded-lg"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
