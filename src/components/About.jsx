import { education, likes } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./ui/SectionReveal";

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <SectionReveal>
          <SectionHeading
            eyebrow="About Me"
            title="I like building software that earns its place in the real world."
            description="My work leans toward backend systems, automation, and applications where reliability actually matters. I'm especially interested in efficient architectures, clean workflows, and products that make teams faster instead of adding more complexity."
          />

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Education</p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-white">
              {education.school}
            </h3>
            <p className="mt-2 text-slate-300">
              {education.degree} • {education.graduation}
            </p>
            <p className="mt-1 text-slate-300">{education.gpa}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {education.coursework.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1.5 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow"
          delay={0.08}
        >
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">What I Like Building</p>
          <div className="mt-6 grid gap-4">
            {likes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 text-lg text-white transition hover:-translate-y-1 hover:border-accent/30"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export default About;
