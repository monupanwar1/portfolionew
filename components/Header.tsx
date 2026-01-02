"use client"
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu } from '@mynaui/icons-react';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className='p-4'>
      <div className='mx-auto flex max-w-2xl items-center justify-between space-x-4 rounded-full border bg-background p-1.5 pl-4'>
        <div className='hidden md:inline-flex'>
          <Link
            to='service'
            smooth={true}
            duration={500}
            className={buttonVariants({ variant: 'ghost', size: 'sm' })}
          >
            Services
          </Link>
          <a
            href='#'
            className={buttonVariants({ variant: 'ghost', size: 'sm' })}
          >
            Works
          </a>
          <a
            href='#'
            className={buttonVariants({ variant: 'ghost', size: 'sm' })}
          >
            About
          </a>
          <Link
            to='contact'
            smooth={true}
            duration={900}
            className={buttonVariants({ variant: 'ghost', size: 'sm' })}
          >
            Contact
          </Link>
        </div>
        <div className='hidden md:inline-flex'>
          <a
            href='#'
            className={cn(buttonVariants({ size: 'sm' }), 'rounded-full')}
          >
            Downlaod Resume
          </a>
        </div>
        <button className='inline-flex px-2 py-1.5 md:hidden'>
          <Menu />
          <span className='sr-only'>Open Menu</span>
        </button>
      </div>
    </header>
  );
}
