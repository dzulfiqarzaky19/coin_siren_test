'use client';

import { motion } from 'framer-motion';

interface IIntroAnimationProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
}
export const IntroAnimation = ({ children, animation = 'base', delay = 0, className = '' }: IIntroAnimationProps) => {
  const initialAnimation = { opacity: 0, y: animation === 'fadeInUp' ? 20 : 0 };
  const animateAnimation = { opacity: 1, y: 0 };
  const transitionAnimation = { duration: 0.5, ease: 'easeInOut', delay } as const;

  return (
    <motion.div
      initial={initialAnimation}
      animate={animateAnimation}
      transition={transitionAnimation}
      viewport={{ once: true }}
      className={className}>
      {children}
    </motion.div>
  );
};
