import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { videography } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, viewportOnce } from "./ui/motion";

function Videography() {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (!activeVideo) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <>
      <section id="creative" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 shadow-glow md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(88,225,193,0.12),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,155,113,0.16),transparent_24%),linear-gradient(180deg,rgba(4,7,12,0),rgba(4,7,12,0.35))]" />

          <SectionHeading
            eyebrow="Videography"
            title="Visual storytelling sharpens the same instincts I rely on in product work."
            description="My creative work focuses on pacing, atmosphere, and brand clarity. That discipline carries back into engineering too: shaping attention, reducing friction, and making each interaction feel deliberate."
          />

          <motion.div
            className="relative mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.button
              type="button"
              variants={fadeUp}
              onClick={() => setActiveVideo(videography[0])}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black text-left"
            >
              <img
                src={videography[0].thumbnail}
                alt={`${videography[0].title} thumbnail`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,6,11,0.08),rgba(3,6,11,0.82))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white/72">
                    Featured Edit
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm text-white transition duration-300 group-hover:scale-110 group-hover:bg-white/18">
                    Play
                  </span>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-white/70">
                    {videography[0].type}
                  </p>
                  <h3 className="font-display mt-3 text-3xl font-semibold text-white md:text-4xl">
                    {videography[0].title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-200">
                    {videography[0].description}
                  </p>
                </div>
              </div>
            </motion.button>

            <motion.div className="grid gap-5" variants={stagger}>
              {videography.slice(1).map((item) => (
                <motion.button
                  key={item.title}
                  type="button"
                  variants={fadeUp}
                  onClick={() => setActiveVideo(item)}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/40 text-left transition duration-300 hover:-translate-y-1 hover:border-white/18"
                >
                  <div className="grid min-h-full gap-4 p-4 sm:grid-cols-[0.72fr_1fr]">
                    <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-black">
                      <img
                        src={item.thumbnail}
                        alt={`${item.title} thumbnail`}
                        className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,6,11,0),rgba(3,6,11,0.52))]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/18 bg-black/35 text-xs uppercase tracking-[0.2em] text-white transition duration-300 group-hover:scale-110 group-hover:bg-black/55">
                          Play
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between py-2">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-accent">
                          {item.type}
                        </p>
                        <h3 className="font-display mt-3 text-2xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                      </div>

                      <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
                        <span>Open embedded preview</span>
                        <span className="transition duration-300 group-hover:translate-x-1">
                          View
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative mt-8 flex flex-col items-start gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                Creative Portfolio
              </p>
              <p className="mt-3 max-w-2xl text-slate-300">
                More client work and edits live on Instagram, where I publish brand-focused
                content, visual experiments, and selected collaborations.
              </p>
            </div>
            <a
              href="https://www.instagram.com/chrissproduce/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/18"
            >
              View Instagram Portfolio
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeVideo ? (
          <motion.div
            key="video-modal"
            className="fixed inset-0 z-[75] flex items-center justify-center bg-slate-950/75 px-4 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/12 bg-[#090d16] shadow-[0_36px_110px_rgba(0,0,0,0.55)]"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                    Instagram Embed
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {activeVideo.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              <div className="grid gap-0 lg:grid-cols-[0.78fr_1fr]">
                <div className="border-b border-white/10 bg-black lg:border-b-0 lg:border-r">
                  <iframe
                    title={`${activeVideo.title} Instagram embed`}
                    src={activeVideo.embedUrl}
                    className="min-h-[620px] w-full"
                    allowTransparency="true"
                  />
                </div>

                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-accent">
                      {activeVideo.type}
                    </p>
                    <p className="mt-4 text-lg leading-8 text-slate-300">
                      {activeVideo.description}
                    </p>
                  </div>

                  <a
                    href={activeVideo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/18"
                  >
                    Open On Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Videography;
