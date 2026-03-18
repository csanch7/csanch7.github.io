import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { profile } from "../data/portfolio";
import { fadeUp, stagger } from "./ui/motion";

function Hero() {
  const heroRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.3]);

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const rotateX = -((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
    setTilt({ rotateX, rotateY });
  };

  return (
    <motion.section
      ref={heroRef}
      id="hero"
      className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8"
      style={{ y, opacity }}
    >
      <motion.div
        className="grid w-full gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={stagger}>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-glow"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            {profile.location}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display mt-8 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Building backend systems with sharp execution and cinematic polish.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.heroDescription}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-sm uppercase tracking-[0.22em] text-slate-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-accent"
            >
              View Projects
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-accent/30 bg-accent/10 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-accent/60 hover:bg-accent/20"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-accent/50 hover:bg-accent/10"
            >
              Contact
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3"
          >
            {[
              ["Automation", "700+ orders"],
              ["Revenue Impact", "$676K+"],
              ["Performance", "45% faster"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow"
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
            animate={tilt}
            transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,225,193,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,155,113,0.14),transparent_26%)]" />
            <motion.div
              className="absolute inset-0 opacity-70"
              animate={{
                background: [
                  "radial-gradient(circle at 18% 20%, rgba(88,225,193,0.14), transparent 26%)",
                  "radial-gradient(circle at 80% 32%, rgba(255,155,113,0.16), transparent 26%)",
                  "radial-gradient(circle at 18% 20%, rgba(88,225,193,0.14), transparent 26%)",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative" style={{ transform: "translateZ(28px)" }}>
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    Current Focus
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    Systems that scale quietly and perform under pressure
                  </p>
                </div>
              </div>

              <div className="grid gap-4 py-6">
                {[
                  ["Signal", "Automation pipelines that reduce operational drag"],
                  ["Approach", "Backend architecture with measurable business outcomes"],
                  ["Style", "Product thinking shaped by visual storytelling"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 transition duration-300 hover:border-white/20 hover:bg-slate-950/60"
                  >
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-2 text-base leading-7 text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {["Node.js", "Java", "Django", "React", "MongoDB"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
