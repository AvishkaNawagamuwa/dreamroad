import { Variants } from 'framer-motion';

// Easing for smooth, premium business-class feel
const premiumEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: premiumEasing } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    transition: { duration: 0.4, ease: premiumEasing } 
  }
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: premiumEasing } 
  }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: premiumEasing } 
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.8, ease: premiumEasing } 
  }
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: premiumEasing } 
  }
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: premiumEasing } 
  }
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: premiumEasing } 
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: premiumEasing } 
  }
};

export const buttonHover = {
  scale: 1.02,
  y: -2,
  transition: { duration: 0.3, ease: premiumEasing }
};

export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.1 }
};

export const imageZoom = {
  scale: 1.03,
  transition: { duration: 0.6, ease: premiumEasing }
};

export const hoverLift = {
  y: -6,
  boxShadow: '0 20px 40px rgba(184,106,46,0.12)',
  transition: { duration: 0.4, ease: premiumEasing }
};

export const viewportConfig = { 
  once: true, 
  margin: '-10% 0px -10% 0px' 
};
