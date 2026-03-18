import { activities } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

function BeyondCode() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 md:p-10">
        <SectionHeading
          eyebrow="Beyond Code"
          title="I like work that has craft in it, whether it’s software, fitness, or something visual."
          description="Outside of engineering, I’m into fitness and filming creative work. Both keep me thinking about discipline, form, and how details change the final result."
        />
        <div className="mt-8">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Communities</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {activities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeyondCode;
