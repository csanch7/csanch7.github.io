import { profile } from "../data/portfolio";

function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8"
    >
      <div className="grid w-full gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="animate-[fadeUp_0.9s_ease-out_forwards] opacity-0 [animation-delay:120ms]">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-glow">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {profile.location}
          </div>

          <h1 className="font-display mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building the backend systems that make ambitious ideas actually scale.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.heroDescription}
          </p>

          <p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.22em] text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-accent"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="animate-[fadeUp_0.9s_ease-out_forwards] opacity-0 [animation-delay:280ms]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,225,193,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,155,113,0.14),transparent_26%)]" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Now Focused On</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Scalable backend systems</p>
                </div>
                <div className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Available
                </div>
              </div>

              <div className="grid gap-4 py-6">
                {[
                  ["Automation", "700+ orders processed"],
                  ["Performance", "45% faster load time"],
                  ["Revenue Impact", "$676K+ influenced"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 transition hover:border-white/20 hover:bg-slate-950/60"
                  >
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-1 text-xl font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {["Node.js", "Java", "Django", "React", "MongoDB"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
