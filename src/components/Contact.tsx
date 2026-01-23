export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-zinc-950/60 backdrop-blur px-6 sm:px-8 py-12 sm:py-14">
          {/* Header */}
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-400 dark:text-slate-500">
            Contact
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Let’s work together
          </h2>

          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            I’m open to full-time roles, internships, and meaningful project
            collaborations. If you’re building something interesting or think
            I’d be a good fit for your team, I’d love to hear from you.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            {/* Email */}
            <a
              href="mailto:anoushika.vennamaneni@gmail.com"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800 transition dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              Email me
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anoushika-vennamaneni/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-slate-300/60 dark:border-white/15 px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition"
            >
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/anoushika-vennamaneni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-slate-300/60 dark:border-white/15 px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
