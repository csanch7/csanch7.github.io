import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, viewportOnce } from "./ui/motion";

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Selected builds where engineering decisions translate into visible impact."
        description="Each project is framed around the problem, the system I built to solve it, and the outcome it was designed to create."
      />

      <motion.div
        className="mt-14 grid gap-6 lg:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,225,193,0.10),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                  0{index + 1}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-300 transition duration-300 hover:translate-x-1 hover:text-white"
                >
                  GitHub
                </a>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>

              <div className="mt-6 grid gap-4">
                {[
                  ["Problem", project.problem],
                  ["Solution", project.solution],
                  ["Impact", project.impact],
                ].map(([label, copy]) => (
                  <div
                    key={label}
                    className="rounded-[1.4rem] border border-white/8 bg-slate-950/38 px-4 py-4 transition duration-300 group-hover:border-white/12"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-accentWarm shadow-[0_0_12px_rgba(255,155,113,0.45)]" />
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
                    </div>
                    <p className="mt-3 text-base leading-7 text-slate-200">{copy}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-sm text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
