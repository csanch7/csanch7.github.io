import SectionHeading from "./SectionHeading";

function BeyondCode() {
  const creativeWork = [
    {
      title: "Refined Barber Co",
      description:
        "Short-form brand content built around atmosphere, grooming detail, and a clean visual identity.",
      accent: "from-accent/20 via-transparent to-transparent",
      href: "http://instagram.com/refinedbarberco/reel/DV7VMf7ABRz/",
      thumbnail: "./refined_thumbnail.jpg",
      label: "Instagram Reel",
    },
    {
      title: "Daybrk Tattoo Studio",
      description:
        "Moody, story-driven visuals shaped around texture, process, and distinctive studio branding.",
      accent: "from-accentWarm/20 via-transparent to-transparent",
      href: "https://www.instagram.com/p/DT0p-eADrTe/",
      thumbnail: "./daybrk_thumbnail.jpg",
      label: "Instagram Post",
    },
    {
      title: "Freelance Clients",
      description:
        "Flexible client work tailored to each brand's tone, audience, and overall visual direction.",
      accent: "from-sky-400/20 via-transparent to-transparent",
      href: "https://www.instagram.com/p/DMvPn0fAtlD/?img_index=2",
      thumbnail: "./freelance_thumbnail.jpg",
      label: "Instagram Post",
    },
  ];

  return (
    <section id="creative" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 md:p-10">
        <SectionHeading
          eyebrow="Beyond Code"
          title="Videography is where I sharpen storytelling, pacing, and visual judgment."
          description="Alongside software development, I do videography work focused on storytelling, editing, and visual branding. I've created content for Refined Barber Co, Daybrk Tattoo Studio, and freelance clients, helping each brand communicate a distinct atmosphere and identity. That creative work strengthens the same skills I value in engineering: problem-solving, attention to detail, and an instinct for how small decisions shape the final experience."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {creativeWork.map((item) => {
            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-slate-950/60"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70 transition duration-300 group-hover:opacity-100`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-10 overflow-hidden rounded-[1.35rem] border border-white/10 bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group/thumb relative block aspect-[9/16] transition hover:scale-[1.01]"
                      aria-label={`Open ${item.title} on Instagram`}
                    >
                      <img
                        src={item.thumbnail}
                        alt={`${item.title} thumbnail`}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,13,0.06),rgba(6,9,13,0.56))]" />
                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm text-white">Open on Instagram</p>
                        </div>
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition group-hover/thumb:bg-white/20">
                          View
                        </span>
                      </div>
                    </a>
                  </div>

                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Selected Work</p>
                  <h3 className="font-display mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Portfolio</p>
            <p className="mt-2 max-w-2xl text-slate-300">
              More of my video work lives on Instagram, where I share client content, edits,
              and brand-focused creative pieces.
            </p>
          </div>
          <a
            href="https://www.instagram.com/chrissproduce/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/20"
          >
            View Instagram Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default BeyondCode;
