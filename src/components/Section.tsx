import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: Props) {
  return (
    <section
      id={id}
      className={[
        "scroll-mt-24",
        "py-14 sm:py-16 md:py-20",
        className ?? "",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4">
        {(eyebrow || title || subtitle) && (
          <header className="mb-8 sm:mb-10 md:mb-12">
            {eyebrow && (
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-zinc-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-50">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-300">
                {subtitle}
              </p>
            )}
          </header>
        )}

        {children}
      </div>
    </section>
  );
}
