type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-white/10">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 dark:bg-white/10 px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-300 transition-colors group-hover:bg-slate-200 dark:group-hover:bg-white/15"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        {(githubUrl || liveUrl) && (
          <div className="mt-4 flex items-center gap-4 text-sm opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                Live →
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                GitHub →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
