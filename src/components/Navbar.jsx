const navItems = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#hero"
            className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-slate-100"
          >
            Christopher Sanchez
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-accent/40 hover:bg-accent/10"
          >
            Let&apos;s Connect
          </a>
        </div>

        <div className="mt-4 flex gap-3 overflow-x-auto pb-1 md:hidden">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 transition hover:border-accent/30 hover:text-white"
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
