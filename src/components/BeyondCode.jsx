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
      </div>
    </section>
  );
}

export default BeyondCode;
