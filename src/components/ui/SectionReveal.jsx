import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "./motion";

function SectionReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: {
            ...fadeUp.visible.transition,
            delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export default SectionReveal;
