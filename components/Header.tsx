'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { TextRoll } from '@/hooks/TextRoll';
import { cn } from '@/lib/utils';
import { Link } from 'react-scroll';
import MobileNav from './MobileNav';
import { user } from '@/config/user';

const navItems = [
  { label: 'Home', href: 'home' },
  { label: 'Services', href: 'services' },
  { label: 'Works', href: 'works' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
];

export default function Header() {
  return (
    <header className='p-4 sticky top-0 z-50'>
      <div className='mx-auto flex max-w-xl items-center justify-between rounded-full border bg-background p-1.5 pl-4'>
        {/* LEFT SIDE */}

        {/* Desktop: show all */}
        <div className='hidden md:flex'>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              smooth
              offset={-120}
              duration={500}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'cursor-pointer',
              )}
            >
              <TextRoll center>{item.label}</TextRoll>
            </Link>
          ))}
        </div>

        {/* Mobile: show only first 4 */}
        <div className='flex md:hidden space-x-2'>
          {navItems.slice(0, 4).map((item, index) => (
            <Link
              key={index}
              to={item.href}
              smooth
              offset={-120}
              duration={500}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'cursor-pointer',
              )}
            >
              <TextRoll center>{item.label}</TextRoll>
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}

        {/* Desktop Resume */}
        <div className='hidden md:flex'>
          <Button
            variant='default'
            onClick={() => {
              window.open(user.resume, '_blank');
            }}
          >
            <TextRoll center>Downlaod Resume</TextRoll>
          </Button>
        </div>

        {/* Mobile Menu Button (Modal trigger) */}
        <div className='md:hidden'>
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
