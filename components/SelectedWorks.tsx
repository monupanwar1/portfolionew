'use client';

import { Element } from 'react-scroll';
import ScrollImage from './ScrollImage';
import { TextAnimate } from './ui/text-animate';

export default function SelectedWorks() {
  return (
    <Element name='works'>
      <section id='works' className='min-h-screen font-sans'>
        <div className='relative overflow-hidden bg-[#080807] px-4 py-12 text-white md:px-8 md:py-20'>
          {/* SELECTED WORKS HEADING */}
          <div className='mb-10 grid grid-cols-1 gap-8 p-1 md:mb-14 md:grid-cols-2 md:gap-8 md:p-4'>
            {/* LEFT: HEADING */}
            <div>
              <p className='mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-lime-400'>
                My projects
              </p>

              <TextAnimate
                className='text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl'
                animation='blurInUp'
                by='word'
              >
                SELECTED WORKS
              </TextAnimate>

              <span className='text-5xl font-extrabold text-lime-400 sm:text-6xl md:text-7xl lg:text-8xl'>
                .
              </span>
            </div>

            {/* RIGHT: DESCRIPTION */}
            <div className='mt-4 flex flex-col gap-6 md:mt-10 md:flex-row md:gap-8 lg:mt-12'>
              <h3 className='shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-lime-400 md:text-sm'>
                <TextAnimate animation='blurInUp' by='word'>
                  (PROJECTS)
                </TextAnimate>
              </h3>

              <div className='max-w-3xl text-sm font-medium leading-7 text-white/65 md:pr-4 md:text-base md:leading-8 lg:pr-10'>
                <TextAnimate animation='slideUp' by='word'>
                  Thoughtfully crafted digital experiences that blend utility
                  and aesthetics into something functional, memorable, and
                  refined.
                </TextAnimate>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT CARDS — unchanged */}
        <ScrollImage />
      </section>
    </Element>
  );
}
