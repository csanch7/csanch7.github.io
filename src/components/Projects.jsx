import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="A portfolio built around systems, automation, and technical depth."
        description="These projects reflect the kind of work I enjoy most: removing friction, handling concurrency correctly, and building software that does something measurable."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,225,193,0.10),transparent_30%)] opacity-0 transition group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                  0{index + 1}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  GitHub
                </a>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{project.description}</p>

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

              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/45 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Key Impact</p>
                <p className="mt-3 text-base leading-7 text-white">{project.impact}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
