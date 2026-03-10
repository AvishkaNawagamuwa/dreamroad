import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, MessageCircle } from 'lucide-react';

import img1 from '../assest/images/Gemini_Generated_Image_3x2x4v3x2x4v3x2x.png';
import img2 from '../assest/images/Gemini_Generated_Image_80tyo980tyo980ty.png';
import img3 from '../assest/images/Gemini_Generated_Image_e4d8h8e4d8h8e4d8.png';
import img4 from '../assest/images/Gemini_Generated_Image_pbe64fpbe64fpbe6.png';
import img5 from '../assest/images/Gemini_Generated_Image_u7k5fgu7k5fgu7k5.png';

const slides = [
  {
    id: 1,
    image: img1,
    title: 'Your Trusted Partner for',
    highlight1: 'Overseas Employment',
    highlight2: 'Work Visas',
    subtitle: 'Expert guidance for your international career journey with professional consultation and complete support.',
    objectPosition: 'object-center',
  },
  {
    id: 2,
    image: img2,
    title: 'Unlock Opportunities in',
    highlight1: 'Europe & Beyond',
    highlight2: 'Top Destinations',
    subtitle: 'Connecting skilled professionals with reliable international employers across competitive global markets.',
    objectPosition: 'object-[center_30%]',
  },
  {
    id: 3,
    image: img3,
    title: 'Dedicated Focus on',
    highlight1: 'Construction',
    highlight2: '& Engineering',
    subtitle: 'Specialized placements for skilled workers in booming infrastructure sectors worldwide.',
    objectPosition: 'object-top',
  },
  {
    id: 4,
    image: img4,
    title: 'Leading Roles in',
    highlight1: 'Manufacturing',
    highlight2: '& Warehousing',
    subtitle: 'Secure, long-term employment opportunities in the global supply chain industry.',
    objectPosition: 'object-center',
  },
  {
    id: 5,
    image: img5,
    title: 'Experience a Seamless',
    highlight1: 'Visa Process',
    highlight2: '& Onboarding',
    subtitle: 'From documentation to departure, we ensure a smooth, transparent transition abroad.',
    objectPosition: 'object-bottom',
  }
];



const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div 
      className="relative w-full min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Gradient Overlay for premium feel and readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-dark/20 z-10" />
          
          <img
            src={slides[currentSlide].image}
            alt="Hero Background"
            className={`w-full h-full object-cover ${slides[currentSlide].objectPosition}`}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full h-full flex flex-col items-center justify-center py-20 md:py-32 text-center">
        <div className="max-w-4xl lg:max-w-5xl relative z-10 w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-[34px] md:text-[52px] lg:text-[68px] font-bold leading-[1.1] mb-6 text-white drop-shadow-lg tracking-tight">
                {slides[currentSlide].title}<br />
                <span className="text-secondary">{slides[currentSlide].highlight1}</span> and<br />
                <span className="text-secondary">{slides[currentSlide].highlight2}</span>
              </h1>
              <p className="text-[16px] md:text-[20px] mb-10 text-white/90 leading-[1.7] max-w-xl md:max-w-2xl font-normal drop-shadow-md mx-auto">
                {slides[currentSlide].subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mt-6 relative z-50">
                <Link
                  to="/services"
                  className="btn-premium px-8 py-4 lg:px-10 lg:py-4 bg-primary text-white hover:bg-primary-hover shadow-premium font-bold text-[16px] lg:text-[18px] inline-flex items-center justify-center gap-2 rounded-xl transition-all z-50"
                >
                  Explore Services
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="https://wa.me/94772605043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 lg:px-10 lg:py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all shadow-soft font-bold text-[16px] lg:text-[18px] inline-flex items-center justify-center gap-2 rounded-xl z-50"
                >
                  <MessageCircle size={20} className="text-brand-green" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        
      </div>

      {/* Manual Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all"
      >
        <ChevronRight size={28} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 md:bottom-2 z-30 flex gap-3 justify-center w-full lg:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-secondary scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;