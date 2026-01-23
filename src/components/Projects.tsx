import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-16 rounded-3xl bg-white dark:bg-transparent px-6 py-12 md:px-10 md:py-16 shadow-sm dark:shadow-none">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Selected Work
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Projects
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              A few projects that reflect my experience with backend systems,
              APIs, and production-focused full-stack development.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Taskflow"
              description="Task and workflow management system focused on clean UX, efficient APIs, and fast interactions."
              image="/Projects/taskflow.jpg"
              tags={["React", "TypeScript", "APIs"]}
            />

            <ProjectCard
              title="Fintrack"
              description="Data-driven dashboard for tracking and visualizing metrics with an emphasis on performance and clarity."
              image="/Projects/fintrack.jpg"
              tags={["React", "FastAPI", "Data"]}
            />

            <ProjectCard
              title="AI Code Review Helper"
              description="AI-assisted tool to improve code reviews by providing suggestions, summaries, and developer productivity insights."
              image="/Projects/ai-code-review.jpg"
              tags={["AI", "LLMs", "Developer Tools"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
