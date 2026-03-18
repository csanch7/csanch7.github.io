import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./ui/motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="max-w-3xl"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.p
        variants={fadeUp}
        className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-accent"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base leading-7 text-slate-300 md:text-lg"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

export default SectionHeading;
