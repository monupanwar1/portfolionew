'use client'
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
    <section className='mt-2'>
      <ul className='space-y-4'>
        {menuNavigationItems.map((item, index) => (
          <Link
            to={item.href}
            smooth
            duration={500}
            offset={-120}
            className='relative flex cursor-pointer flex-col'
            key={index}
            href={item.href}
          >
            <div className='relative flex '>
              <TextRoll
                center
                className='text-muted-foreground uppercase leading-2.5'
              >
                {item.label}
              </TextRoll>
            </div>
          </Link>
        ))}
      </ul>
    </section>
  );
}
