import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assest/images/logo/RreamRoad.jpg';

interface PageLoaderProps {
  isVisible: boolean;
}

const line1 = 'DREAM ROAD'.split('');
const line2 = 'MANPOWER AGENCY'.split('');

const charVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.9 + i * 0.07,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const char2Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.7 + i * 0.05,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const PageLoader = ({ isVisible }: PageLoaderProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #FAF6F1 0%, #F0E6D8 50%, #FAF6F1 100%)' }}
        >
          {/* Decorative rings */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
              style={{ border: '1px solid rgba(184,106,46,0.08)' }}
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.2, ease: 'easeOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
              style={{ border: '1px solid rgba(184,106,46,0.05)' }}
            />
          </div>

          {/* Main content */}
          <div className="relative flex flex-col items-center select-none">

            {/* Logo with animated ring */}
            <div className="relative mb-10 flex items-center justify-center">
              {/* Spinning orbit ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as [number,number,number,number] },
                  rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                }}
                className="absolute w-64 h-64 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 70%, #B86A2E 100%)',
                  maskImage: 'radial-gradient(transparent 60%, black 61%)',
                  WebkitMaskImage: 'radial-gradient(transparent 60%, black 61%)',
                }}
              />
              {/* Static glow ring */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute w-60 h-60 rounded-full"
                style={{ boxShadow: '0 0 60px 16px rgba(184,106,46,0.14)' }}
              />
              {/* Logo image */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.34, 1.4, 0.64, 1] as [number,number,number,number] }}
                className="relative w-52 h-52 rounded-full overflow-hidden shadow-2xl z-10"
                style={{ border: '3px solid rgba(184,106,46,0.25)' }}
              >
                <img
                  src={logoImg}
                  alt="Dream Road"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* "DREAM ROAD" — letter by letter */}
            <div className="flex items-center gap-0 mb-3 perspective-[600px]">
              {line1.map((char, i) =>
                char === ' ' ? (
                  <span key={i} className="w-5 md:w-7" />
                ) : (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={charVariants}
                    initial="hidden"
                    animate="visible"
                    className="block text-4xl md:text-6xl font-bold text-dark leading-none"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      letterSpacing: '0.05em',
                      transformOrigin: 'bottom center',
                    }}
                  >
                    {char}
                  </motion.span>
                )
              )}
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.65, ease: 'easeOut' }}
              className="flex items-center gap-3 mb-4"
              style={{ transformOrigin: 'center' }}
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/50 to-primary/70" />
              <motion.div
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 45, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.65 }}
                className="w-2 h-2 bg-primary"
              />
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-primary/50 to-primary/70" />
            </motion.div>

            {/* "MANPOWER AGENCY" — letter by letter */}
            <div className="flex items-center gap-0 mb-8">
              {line2.map((char, i) =>
                char === ' ' ? (
                  <span key={i} className="w-3 md:w-4" />
                ) : (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={char2Variants}
                    initial="hidden"
                    animate="visible"
                    className="block text-sm md:text-base font-semibold tracking-widest"
                    style={{ color: '#B86A2E', fontFamily: 'Poppins, sans-serif' }}
                  >
                    {char}
                  </motion.span>
                )
              )}
            </div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="w-48 h-0.5 bg-primary/15 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 2.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #B86A2E, #D89A4A)' }}
              />
            </motion.div>
          </div>

          {/* License */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
            className="absolute bottom-8 text-xs tracking-[0.3em] text-muted/60 uppercase"
          >
            License No: 3482
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
