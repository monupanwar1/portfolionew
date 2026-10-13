
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
    <section className='mt-4 font-sans'>
      <ul className='space-y-4'>
        {menuNavigationItems.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              smooth
              duration={500}
              offset={-120}
              className='group relative flex cursor-pointer flex-col'
            >
              <div className='relative flex'>
                <TextRoll
                  center
                  className='text-neutral-700 transition-colors duration-200 hover:text-lime-600'
                >
                  {item.label}
                </TextRoll>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

