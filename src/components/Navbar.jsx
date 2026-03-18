import { motion } from "framer-motion";

const navItems = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Videography", "#creative"],
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#hero"
            className="group inline-flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.24em] text-slate-100"
          >
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(88,225,193,0.7)] transition duration-300 group-hover:scale-125" />
            Christopher Sanchez
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group relative py-2 text-sm text-slate-300 transition duration-300 hover:text-white"
              >
                {label}
                <motion.span
                  className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-accent to-accentWarm"
                  initial={{ scaleX: 0, opacity: 0.55 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.28 }}
                />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10"
          >
            Let&apos;s Connect
          </a>
        </div>

        <div className="mt-4 flex gap-3 overflow-x-auto pb-1 md:hidden">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
