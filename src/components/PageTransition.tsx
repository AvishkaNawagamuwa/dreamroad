import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { pageTransition } from '../utils/animations';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className={className}
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;