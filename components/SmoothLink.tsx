'use client';

import Link from 'next/link';
import { useCallback } from 'react';
import Lenis from 'lenis';

// IMPORTANT: Use the same Lenis instance your app uses
// If you created Lenis inside a provider, import that instance here instead.
const lenis = new Lenis();

export default function SmoothLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const smoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const hash = href.split('#')[1];
      const targetEl = document.getElementById(hash);

      if (!targetEl) return;

      const top = targetEl.getBoundingClientRect().top + window.pageYOffset;

      lenis.scrollTo(top, {
        duration: 1.2,
        easing: (t) => t * (2 - t),
      });
    },
    [href],
  );

  return (
    <Link href={href} onClick={smoothScroll} className={className}>
      {children}
    </Link>
  );
}
