'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { TextRoll } from '@/hooks/TextRoll';
import { cn } from '@/lib/utils';
import { Link } from 'react-scroll';
const navItems = [
  {
    label: 'Services',
    href: 'service',
  },
  {
    label: 'Works',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
];

export default function Header() {
  return (
    <header className='p-4 sticky top-0 z-50 '>
      <div className='mx-auto flex max-w-xl items-center justify-between rounded-full border bg-background p-1.5 pl-4'>
        <div className='flex'>
          {navItems.map((item, index) => (
            <Link key={index}
              to={item.href}
              smooth={true}
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
        <div className='hidden md:flex'>
          <a
            href='#'
            className={cn(buttonVariants({ size: 'sm' }), 'rounded-full')}
          >
            <TextRoll center>DownloadResume</TextRoll>
          </a>
        </div>
        <Button className='md:hidden flex' variant='default'>
          <TextRoll center>Resume</TextRoll>
        </Button>
      </div>
    </header>
  );
}
