export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-zinc-950/60 backdrop-blur px-6 sm:px-8 py-12 sm:py-14">
          {/* Section header */}
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-400 dark:text-slate-500">
            About
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            A bit about me
          </h2>

          {/* Content */}
          <div className="mt-6 max-w-3xl space-y-5 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            <p>
              I’m a full-stack engineer with a strong focus on backend systems,
              APIs, and building reliable, production-ready applications. I
              enjoy working at the intersection of clean architecture,
              performance, and maintainability.
            </p>

            <p>
              My experience spans designing REST APIs, building scalable backend
              services using FastAPI and Spring Boot, and integrating frontend
              applications with thoughtfully designed interfaces using React
              and TypeScript.
            </p>

            <p>
              I care deeply about writing clear, testable code and building
              systems that are easy to operate, extend, and reason about. I’m
              especially interested in distributed systems, cloud-native
              architectures, and improving developer experience through better
              tooling and workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
