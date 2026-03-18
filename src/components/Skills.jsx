import { skills } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./ui/SectionReveal";

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I reach for when I need something reliable, fast, and maintainable."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {Object.entries(skills).map(([group, items], index) => (
          <SectionReveal
            key={group}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
            delay={index * 0.06}
          >
            <h3 className="text-xl font-semibold text-white">{group}</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/30 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
