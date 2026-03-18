import { experience } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Professional work with visible business outcomes."
        description="I care about technical quality, but I also pay attention to whether the work actually changes something for the business, team, or customer."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {experience.map((role) => (
          <article
            key={role.company}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Company</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{role.company}</h3>
              </div>
              <div className="rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3 text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Revenue</p>
                <p className="mt-1 text-lg font-semibold text-white">{role.outcome}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {role.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-slate-950/45 px-5 py-4 text-slate-200"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
