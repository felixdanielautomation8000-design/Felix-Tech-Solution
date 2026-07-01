import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade' | 'blur';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 40,
  className = '',
  id
}) => {
  // Define initial and animate variants based on direction
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance, filter: 'blur(4px)' },
          visible: { opacity: 1, x: 0, filter: 'blur(0px)' }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance, filter: 'blur(4px)' },
          visible: { opacity: 1, x: 0, filter: 'blur(0px)' }
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.9, filter: 'blur(4px)' },
          visible: { opacity: 1, scale: 1, filter: 'blur(0px)' }
        };
      case 'blur':
        return {
          hidden: { opacity: 0, filter: 'blur(12px)' },
          visible: { opacity: 1, filter: 'blur(0px)' }
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px 0px' }}
      variants={getVariants()}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] // Custom smooth Cubic Bezier (easeOutExpo-like)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
