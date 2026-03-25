import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.35 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.35 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updateEnabled = () =>
      setEnabled(media.matches && !prefersReducedMotion);
    updateEnabled();

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleOver = (event) => {
      setIsHovering(Boolean(event.target.closest("a, button")));
    };

    media.addEventListener("change", updateEnabled);
    window.addEventListener("pointermove", move);
    window.addEventListener("mouseover", handleOver);

    return () => {
      media.removeEventListener("change", updateEnabled);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [prefersReducedMotion, x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[80] h-3 w-3 rounded-full bg-accent"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 1.8 : 1,
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[79] h-16 w-16 rounded-full border border-white/12 bg-white/[0.03] backdrop-blur-[1px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 1.18 : 1,
        }}
        animate={{
          opacity: isHovering ? 0.95 : 0.55,
        }}
        transition={{ duration: 0.18 }}
      />
    </>
  );
}

export default CustomCursor;
