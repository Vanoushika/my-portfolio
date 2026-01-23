import SkillsList from "./SkillsList";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section surface */}
        <div className="mt-16 rounded-3xl bg-white dark:bg-transparent px-6 py-12 md:px-10 md:py-16 shadow-sm dark:shadow-none">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Expertise
            </p>

            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Skills
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Technologies and concepts I use to design, build, and maintain
              production-ready systems.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <SkillsList />
          </div>
        </div>
      </div>
    </section>
  );
}
