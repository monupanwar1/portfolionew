
'use client';

import { useEffect, useState } from 'react';

const snippets = [
  {
    file: 'developer.ts',
    label: 'BUILD MODE',
    lines: [
      { text: 'const developer = {', color: 'purple' },
      { text: "  focus: 'Full Stack',", color: 'lime' },
      { text: "  mindset: 'Build & Improve',", color: 'cyan' },
      { text: '  status: "Shipping"', color: 'orange' },
      { text: '};', color: 'purple' },
    ],
  },
  {
    file: 'creative.tsx',
    label: 'CREATIVE MODE',
    lines: [
      { text: 'function createMagic() {', color: 'purple' },
      { text: "  design: 'Beautiful UI',", color: 'lime' },
      { text: "  motion: 'Smooth',", color: 'cyan' },
      { text: "  details: 'Pixel perfect'", color: 'orange' },
      { text: '}', color: 'purple' },
    ],
  },
  {
    file: 'success.js',
    label: 'GROWTH MODE',
    lines: [
      { text: 'while (true) {', color: 'purple' },
      { text: '  learn();', color: 'lime' },
      { text: '  build();', color: 'cyan' },
      { text: '  improve();', color: 'orange' },
      { text: '}', color: 'purple' },
    ],
  },
];

const colors: Record<string, string> = {
  purple: 'text-violet-300',
  lime: 'text-lime-300',
  cyan: 'text-cyan-300',
  orange: 'text-orange-300',
};

export default function AnimatedCodeCard() {
  const [active, setActive] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const snippet = snippets[active];
    let line = 0;

    const typing = window.setInterval(() => {
      line += 1;
      setVisibleLines(line);

      if (line >= snippet.lines.length) {
        window.clearInterval(typing);
      }
    }, 350);

    const nextSnippet = window.setTimeout(() => {
      setActive((current) => (current + 1) % snippets.length);
      setVisibleLines(0);
    }, 4500);

    return () => {
      window.clearInterval(typing);
      window.clearTimeout(nextSnippet);
    };
  }, [active]);

  const snippet = snippets[active];

  return (
    <div
      className="hero-code w-[min(88%,330px)] rounded-2xl border border-white/10 bg-[#11110f] p-4 text-white shadow-[0_25px_70px_rgba(0,0,0,0.22)] sm:p-5"
      aria-label={`Animated code terminal: ${snippet.file}`}
    >
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
        </div>

        <span
          key={snippet.file}
          className="animate-[terminalFade_.4s_ease] font-mono text-[10px] text-neutral-500"
        >
          {snippet.file}
        </span>
      </div>

      <div
        key={`${active}-${visibleLines}`}
        className="min-h-[120px] font-mono text-[10px] leading-6 sm:text-xs"
      >
        {snippet.lines.slice(0, visibleLines).map((line, index) => (
          <p key={`${snippet.file}-${index}`} className="whitespace-pre">
            <span className={colors[line.color]}>{line.text}</span>
          </p>
        ))}

        {visibleLines < snippet.lines.length && (
          <span className="inline-block h-3.5 w-1.5 animate-pulse bg-lime-400 align-middle" />
        )}
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/10 pt-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400" />
          <span className="truncate text-[9px] uppercase tracking-wider text-neutral-400">
            {snippet.label}
          </span>
        </div>

        <span className="shrink-0 font-mono text-[9px] text-neutral-600">
          0{active + 1}/03
        </span>
      </div>
    </div>
  );
}
