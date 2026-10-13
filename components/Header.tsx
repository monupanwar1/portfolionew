'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { user } from '@/config/user';
import { TextRoll } from '@/hooks/TextRoll';
import { cn } from '@/lib/utils';
import { Link } from 'react-scroll';
import MobileNav from './MobileNav';

const navItems = [
  { label: 'Home', href: 'home' },
  { label: 'Services', href: 'services' },
  { label: 'Works', href: 'works' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 p-4 font-sans'>
      <div className='mx-auto flex max-w-xl items-center justify-between rounded-full border border-neutral-200 bg-white p-1.5 pl-4'>
        {/* DESKTOP NAVIGATION */}
        <nav className='hidden items-center md:flex'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              smooth
              offset={-120}
              duration={500}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'cursor-pointer font-medium text-neutral-600 transition-colors duration-300 hover:bg-lime-400/10 hover:text-lime-600',
              )}
            >
              <TextRoll center>{item.label}</TextRoll>
            </Link>
          ))}
        </nav>

        {/* MOBILE NAVIGATION */}
        <nav className='flex items-center gap-1 md:hidden'>
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              to={item.href}
              smooth
              offset={-120}
              duration={500}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'cursor-pointer px-2 text-xs font-medium text-neutral-600 transition-colors duration-300 hover:bg-lime-400/10 hover:text-lime-600',
              )}
            >
              <TextRoll center>{item.label}</TextRoll>
            </Link>
          ))}
        </nav>

        {/* DESKTOP RESUME CTA */}
        <div className='hidden md:flex'>
          <Button
            className='rounded-full bg-lime-400 font-semibold text-neutral-950 transition-colors duration-300 hover:bg-lime-300'
            onClick={() =>
              window.open(user.resume, '_blank', 'noopener,noreferrer')
            }
          >
            <TextRoll center>Download Resume</TextRoll>
          </Button>
        </div>

        {/* MOBILE MENU */}
        <div className='md:hidden'>
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
