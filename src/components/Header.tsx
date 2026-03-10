import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-soft py-2'
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/image.png"
                alt="Dream Road Manpower"
                className="h-12 md:h-14 w-auto drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <div className="hidden xl:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-[16px] font-medium transition-all duration-300 relative group overflow-hidden ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-dark hover:text-primary'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-primary/10 rounded-full z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {!isActive(link.path) && (
                     <div className="absolute inset-0 bg-primary/5 rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden xl:flex items-center gap-4 text-sm">
              <a
                href="https://wa.me/94772605043"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 bg-brand-green/10 text-brand-green rounded-full hover:bg-brand-green hover:text-white transition-all duration-300 font-medium"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="btn-premium px-6 py-2.5 bg-primary text-white hover:bg-primary-hover shadow-[0_4px_14px_0_rgba(184,106,46,0.39)] hover:shadow-[0_6px_20px_rgba(184,106,46,0.23)]"
              >
                Apply Now
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-dark hover:text-primary bg-cream rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="xl:hidden overflow-hidden mt-4 border-t border-soft"
              >
                <div className="py-4 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl transition-all ${
                        isActive(link.path)
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-dark hover:bg-cream font-medium'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-4 mt-2 border-t border-soft space-y-3 px-4">
                    <a
                      href="https://wa.me/94772605043"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366]/10 text-[#25D366] font-semibold rounded-xl hover:bg-[#25D366] hover:text-white transition-colors"
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp Support</span>
                    </a>
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-center btn-premium w-full bg-primary text-white shadow-md relative mt-4"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
