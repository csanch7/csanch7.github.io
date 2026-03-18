import { experience, experienceYears } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./ui/SectionReveal";

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Professional work with visible business outcomes."
        description="I care about technical quality, but I also pay attention to whether the work actually changes something for the business, team, or customer."
      />

      <SectionReveal className="mt-14 rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-glow md:p-8">
        {experienceYears.map((group) => {
          const roles = experience.filter((item) => item.year === group.year);

          return (
            <div key={group.year} className="first:mt-0">
              <div className="mb-8 flex items-center gap-6">
                <span className="text-lg font-medium text-slate-300">{group.year}</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="space-y-10">
                {roles.map((role) => (
                  <article
                    key={role.company}
                    className="grid gap-5 md:grid-cols-[40px_minmax(0,1fr)]"
                  >
                    <div className="relative hidden md:block">
                      <div className="absolute left-[18px] top-0 h-[calc(100%+2.5rem)] w-px bg-white/10" />
                      <span className="relative z-10 mt-2 block h-3 w-3 rounded-full bg-accent shadow-[0_0_0_6px_rgba(88,225,193,0.08)]" />
                    </div>

                    <div className="rounded-[1.75rem] border border-white/8 bg-slate-950/25 p-6 transition duration-300 hover:border-white/15 hover:bg-slate-950/35">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accentWarm">
                            {role.company}
                          </p>
                          <h3 className="font-display mt-3 text-2xl font-semibold text-white">
                            {role.role}
                          </h3>
                        </div>
                        <p className="text-sm uppercase tracking-[0.22em] text-slate-400 md:pt-1">
                          {role.range}
                        </p>
                      </div>

                      <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">
                        {role.summary}
                      </p>

                      <p className="mt-4 text-base leading-8 text-white">{role.metrics}</p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {role.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-sm tracking-[0.12em] text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </SectionReveal>
    </section>
  );
}

export default Experience;
