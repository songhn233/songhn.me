import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function ScaleBox({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      exit="hidden"
      animate="show"
      style={{
        willChange: 'transform',
      }}
      variants={{
        hidden: {
          scale: 0,
          opacity: 0,
          transition: {
            duration: 0.4,
            delay: 0.1,
            ease: [0.4, 0, 0.6, 1],
          },
        },
        show: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 0.1,
            ease: [0.4, 0, 0.6, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
