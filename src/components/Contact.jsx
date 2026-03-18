import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./ui/SectionReveal";

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionReveal className="rounded-[2.25rem] border border-white/10 bg-white/5 p-8 shadow-glow md:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="If you're building something meaningful, I'd be glad to connect."
          description="The easiest way to reach me is by email, and you can also find my work and background below."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Email", profile.email, `mailto:${profile.email}`],
            ["GitHub", "github.com/csanch7", profile.github],
            ["LinkedIn", "linkedin.com/in/christopher7", profile.linkedin],
          ].map(([label, value, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5 transition hover:-translate-y-1 hover:border-accent/30 hover:bg-slate-950/65"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{label}</p>
              <p className="mt-3 text-base text-white">{value}</p>
            </a>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/20"
          >
            View Resume
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}

export default Contact;
