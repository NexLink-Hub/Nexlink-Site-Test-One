/**
 * High-performance static Framer Motion animation variants.
 * Decoupled from React Context to eliminate re-renders and overhead.
 */

export const riseUpVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

export const riseUpVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
};

export const riseUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const fade = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 1,
  },
};

export const navVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.15,
      staggerDirection: 1,
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export const tagVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: [0.5, 1],
    rotate: [-90, 0],
    transition: {
      duration: 1,
    },
  },
};
