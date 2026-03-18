import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-accent via-sky-300 to-accentWarm shadow-[0_0_18px_rgba(88,225,193,0.55)]"
      style={{ scaleX }}
    />
  );
}

export default ScrollProgress;
