export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="pt-12 sm:pt-14 md:pt-16 pb-10 sm:pb-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* LEFT */}
            <div className="relative">
              {/* Dark-mode backdrop for text */}
              <div className="pointer-events-none absolute -inset-x-6 -inset-y-4 rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent opacity-0 dark:opacity-100" />

              <div className="relative">
                {/* Name */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  Anoushika Vennamaneni
                </h1>

                {/* ✅ Resume-aligned stack line */}
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  Full-Stack · Backend Systems · APIs · Cloud
                </p>

                {/* Description */}
                <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  I design and build scalable full-stack systems with a strong focus on backend
                  architecture, API performance, and reliable cloud deployments. I have
                  professional experience delivering production features using React,
                  FastAPI, Spring Boot, and distributed systems.
                </p>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-md bg-slate-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition"
                  >
                    See projects
                  </a>

                  <a
                    href="/vennamaneni_anoushika_resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition"
                  >
                    Resume
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex md:justify-end">
              <div className="w-full max-w-sm rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 backdrop-blur">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/profile.jpg"
                    alt="Anoushika Vennamaneni"
                    className="h-24 w-24 rounded-full object-cover border border-slate-200 dark:border-white/10"
                  />

                  <h2 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                    Anoushika Vennamaneni
                  </h2>

                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Full-Stack Engineer
                  </p>

                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    Backend Systems · APIs · Cloud
                  </p>

                  {/* Social links */}
                  <div className="mt-4 flex items-center gap-4 text-sm">
                    <a
                      href="https://github.com/YOUR_GITHUB_USERNAME"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="mailto:anoushikavennamaneni@gmail.com"
                      className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* END */}
          </div>
        </div>
      </div>
    </section>
  );
}
