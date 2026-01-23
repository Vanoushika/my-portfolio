// Header.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  animate,
  useMotionTemplate,
} from "framer-motion";
import { PiSunDuotone, PiMoonDuotone } from "react-icons/pi";
import { useTheme } from "../../context/ThemeContext";

type NavLink = { href: string; label: string };

export const Header: React.FC<{ links?: NavLink[]; onTryCLI?: () => void }> = ({
  links = [],
  onTryCLI,
}) => {
  const { dark, toggle } = useTheme();
  const headerRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState<string>(links[0]?.href ?? "#about");

  useEffect(() => {
    const sections = links
      .map((l) =>
        l.href.startsWith("#") ? document.querySelector(l.href) : null
      )
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [links]);

  const springScrollTo = (y: number) => {
    const controls = animate(window.scrollY, y, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
    return () => controls.stop();
  };

  const onNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const headerEl = headerRef.current ?? document.querySelector("header");
    const headerH = headerEl?.offsetHeight ?? 0;
    const y = target.getBoundingClientRect().top + window.scrollY - headerH;
    springScrollTo(y);
  };

  const { scrollY } = useScroll();
  const blurPx = useTransform(scrollY, [0, 200], [8, 16]);
  const overlayOpacity = useTransform(scrollY, [0, 200], [0.08, 0.14]);
  const backdrop = useMotionTemplate`blur(${blurPx}px)`;

  const BASE = import.meta.env.BASE_URL || "/";

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 left-0 z-50 w-full border-b border-theme bg-[var(--surface)]/80 backdrop-blur-sm"
      style={{ backdropFilter: backdrop, WebkitBackdropFilter: backdrop }}
    >
      {/* subtle overlay */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "rgba(0,0,0,1)",
          opacity: overlayOpacity,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: brand */}
        <a
          href={BASE}
          className="flex items-center gap-3 text-lg font-semibold text-[var(--text)]"
        >
          <div className="w-12 h-12 rounded-2xl overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Anoushika Vennamaneni"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-semibold">
              Anoushika Vennamaneni
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Full-Stack · Backend Systems · APIs · Cloud
            </div>
          </div>
        </a>

        {/* Right: nav + actions */}
        <nav className="flex items-center gap-3">
          <div className="hidden sm:flex gap-4">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => onNavClick(e, l.href)}
                  className="relative px-1 py-0.5 text-sm text-[var(--text)]"
                >
                  {l.label}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-[var(--brand)]"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                      />
                    )}
                  </AnimatePresence>
                </a>
              );
            })}
          </div>

          <button
            onClick={onTryCLI}
            className="px-3 py-1.5 rounded text-sm border border-[var(--border)] hover:bg-[var(--border)]/30 transition"
          >
            Try CLI
          </button>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-[var(--border)] hover:bg-[var(--border)]/30 transition"
          >
            {dark ? <PiSunDuotone size={20} /> : <PiMoonDuotone size={20} />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
};
