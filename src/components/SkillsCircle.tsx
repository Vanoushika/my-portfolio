const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Git",
  ];
  
  export default function SkillsCircle() {
    return (
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    );
  }
  