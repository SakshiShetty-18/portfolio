import { motion, useReducedMotion } from 'framer-motion';

// Fade-and-rise on scroll into view. Respects prefers-reduced-motion.
export default function Reveal({ children, delay = 0, y = 24, ...rest }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
