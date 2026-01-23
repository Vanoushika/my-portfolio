const skills = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Component Architecture",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "FastAPI",
      "Spring Boot",
      "REST APIs",
      "Backend Systems",
    ],
  },
  {
    title: "Data & Infrastructure",
    items: [
      "Kafka",
      "Distributed Systems",
      "Cloud Platforms",
      "Containers",
    ],
  },
  {
    title: "Engineering",
    items: [
      "System Design",
      "API Performance",
      "Production Readiness",
      "Developer Experience",
    ],
  },
];

export default function SkillsList() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {skills.map((group) => (
        <div
          key={group.title}
          className="
            group
            relative
            rounded-2xl
            border border-slate-200/70 dark:border-white/10
            bg-white/80 dark:bg-zinc-950/50
            backdrop-blur
            p-5
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          {/* Subtle glow */}
          <div
            className="
              pointer-events-none
              absolute inset-0 rounded-2xl
              opacity-0 group-hover:opacity-100
              transition
              bg-gradient-to-br
              from-slate-200/40 to-transparent
              dark:from-white/10
            "
          />

          <h3 className="relative text-sm font-semibold text-slate-900 dark:text-white">
            {group.title}
          </h3>

          <ul className="relative mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {group.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
