import { useTheme } from "./ThemeProvider";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* LEFT: identity */}
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-slate-200 dark:bg-white/10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Anoushika Vennamaneni
              </div>
              {/* ✅ UPDATED STACK LINE */}
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Full-Stack · Backend Systems · APIs · Cloud
              </div>
            </div>
          </a>

          {/* CENTER NAV */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-md border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1.5 text-sm text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-white/10 transition"
            >
              Get in touch
            </a>

            <button
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-white/10 transition"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
