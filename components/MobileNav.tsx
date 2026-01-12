'use client';

import { Button } from '@/components/ui/button';
import { TextRoll } from '@/hooks/TextRoll';
import { useState } from 'react';
import { Link } from 'react-scroll';

export default function MobileNav({
  navItems,
}: {
  navItems: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <Button variant='ghost' size='sm' onClick={() => setOpen(true)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 6h18M3 12h18M3 18h18'
          />
        </svg>
      </Button>

      {/* FULLSCREEN GLASS MENU */}
      {open && (
        <div className='fixed z-50 inset-0 backdrop-blur-xl bg-black/30'>
          <div className='w-full h-full flex flex-col bg-white/30 border border-white/20 shadow-2xl'>
            {/* Top bar */}
            <div className='p-4 flex justify-end border-b border-white/20'>
              <Button variant='ghost' size='sm' onClick={() => setOpen(false)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='w-6 h-6 text-black'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </Button>
            </div>

            {/* Menu */}
            <div className='flex-1 flex flex-col items-center justify-center gap-8'>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  smooth
                  offset={-120}
                  duration={500}
                  onClick={() => setOpen(false)}
                  className='
                    cursor-pointer font-bold text-2xl text-black
                  '
                >
                  <TextRoll center>{item.label}</TextRoll>
                </Link>
              ))}

              <Button variant='default' className='mt-8'>
                <TextRoll center>Resume</TextRoll>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
