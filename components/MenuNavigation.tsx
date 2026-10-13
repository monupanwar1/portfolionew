'use client';

import { TextRoll } from '@/hooks/TextRoll';
import { Link } from 'react-scroll';

const menuNavigationItems = [
  { label: 'Home', href: 'home' },
  { label: 'Services', href: 'services' },
  { label: 'Works', href: 'works' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
];

export default function MenuNavigation() {
  return (
    <nav aria-label='Footer navigation' className='mt-6 font-sans'>
      <ul className='space-y-3'>
        {menuNavigationItems.map((item, index) => (
          <li key={item.href}>
            <Link
              to={item.href}
              smooth
              duration={500}
              offset={-120}
              className='group flex w-fit cursor-pointer items-center gap-3'
            >
              {/* Lime indicator */}
              <span
                className='h-1.5 w-1.5 rounded-full bg-lime-500 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100'
                aria-hidden='true'
              />

              <TextRoll
                center
                className='text-sm font-medium tracking-wide text-neutral-700 transition-colors duration-300 group-hover:text-lime-700 sm:text-base'
              >
                {item.label}
              </TextRoll>

              <span className='text-xs text-neutral-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100'>
                ↗
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
