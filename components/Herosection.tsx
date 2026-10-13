'use client';

import { Element, Link } from 'react-scroll';
import AnimatedCodeCard from './AnimatedCodeCard';

const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'];

const highlights = [
  'Frontend Engineering',
  'Full-stack Development',
  'Performance & Detail',
  'Built with Intention',
];

export default function Herosection() {
  return (
    <Element name='home'>
      <main className='hero-stage relative isolate overflow-hidden bg-[#f5f5f2] px-5 font-sans text-[#11110f] sm:px-8 lg:px-12'>
        {/* Background grid */}
        <div
          aria-hidden='true'
          className='hero-grid pointer-events-none absolute inset-0 -z-10'
        />

        {/* Ambient color */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -right-24 top-20 -z-10 h-80 w-80 rounded-full bg-lime-300/35 blur-[100px]'
        />
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -left-32 bottom-10 -z-10 h-64 w-64 rounded-full bg-violet-300/25 blur-[100px]'
        />

        <div className='mx-auto max-w-[1440px]'>
          {/* Top status bar */}
          <div className='flex min-h-[60px] items-center justify-between gap-3 border-b border-black/10'>
            <div className='flex shrink-0 items-center gap-3'>
              <span className='flex h-9 w-9 items-center justify-center rounded-full bg-[#11110f] font-mono text-sm font-bold text-lime-400'>
                {'</>'}
              </span>
              <span className='text-[10px] font-extrabold tracking-[0.16em] sm:text-sm sm:tracking-[0.2em]'>
                MONU PANWAR
              </span>
            </div>

            <div className='flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-3 py-2 text-[8px] font-bold tracking-[0.08em] sm:px-4 sm:text-[10px] sm:tracking-[0.12em]'>
              <span className='relative h-2 w-2 shrink-0 rounded-full bg-lime-500'>
                <span className='absolute inset-0 animate-ping rounded-full bg-lime-500' />
              </span>
              <span>OPEN TO OPPORTUNITIES</span>
            </div>

            <span className='hidden text-xs font-semibold tracking-[0.12em] text-neutral-500 lg:block'>
              INDIA · WORLDWIDE
            </span>
          </div>

          {/* Compact hero */}
          <section className='grid grid-cols-1 items-center gap-4 py-8 sm:gap-6 md:min-h-[calc(100svh-125px)] md:grid-cols-[1.08fr_0.92fr] md:gap-4 md:py-3 lg:gap-8'>
            {/* Left: headline and content */}
            <div className='relative z-10 min-w-0'>
              <div className='hero-enter mb-4 flex items-center gap-3'>
                <span className='h-2 w-2 shrink-0 rounded-full bg-lime-500' />
                <span className='text-[9px] font-bold uppercase tracking-[0.14em] text-neutral-500 sm:text-xs sm:tracking-[0.2em]'>
                  Software Engineer · Creative Problem Solver
                </span>
              </div>

              <h1 className='hero-heading text-[clamp(3.15rem,7.4vw,7rem)] font-black leading-[0.83] tracking-[-0.085em]'>
                <span className='hero-word block'>I BUILD</span>
                <span className='hero-word hero-word-2 block'>DIGITAL</span>
                <span className='hero-word hero-word-3 block whitespace-nowrap text-lime-500'>
                  PRODUCTS
                  <span className='hero-arrow ml-1 inline-block text-[0.42em] align-top'>
                    ↗
                  </span>
                </span>
              </h1>

              <p className='hero-enter hero-delay-2 mt-5 max-w-[520px] border-l-[3px] border-lime-500 pl-4 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7'>
                I turn complex ideas into clean interfaces, scalable
                applications, and reliable digital products. From frontend
                experiences to backend systems.
              </p>

              {/* CTA buttons */}
              <div className='hero-enter hero-delay-3 mt-5 flex flex-wrap gap-3'>
                <Link
                  to='contact'
                  smooth
                  duration={600}
                  offset={-60}
                  className='group inline-flex cursor-pointer items-center gap-4 rounded-full bg-lime-400 px-5 py-3 text-[11px] font-extrabold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:bg-[#11110f] hover:text-lime-400 sm:px-6 sm:py-3.5'
                >
                  LET&apos;S TALK
                  <span className='transition-transform group-hover:translate-x-1 group-hover:-translate-y-1'>
                    ↗
                  </span>
                </Link>

                <Link
                  to='works'
                  smooth
                  duration={600}
                  offset={-50}
                  className='group inline-flex cursor-pointer items-center gap-4 rounded-full border border-black/20 bg-white/70 px-5 py-3 text-[11px] font-extrabold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:border-lime-500 hover:bg-lime-100 sm:px-6 sm:py-3.5'
                >
                  EXPLORE MY WORK
                  <span className='transition-transform group-hover:translate-y-1'>
                    ↓
                  </span>
                </Link>
              </div>

              {/* Skills */}
              <div className='hero-enter hero-delay-3 mt-6 border-t border-black/10 pt-4'>
                <p className='mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-500'>
                  My everyday toolkit
                </p>

                <div className='flex flex-wrap gap-2'>
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className='rounded-full border border-black/10 bg-white/75 px-3 py-1.5 text-[11px] text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-500 hover:bg-lime-100 sm:text-xs'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Right: animated orb and terminal */}

            <div className='hero-visual relative mx-auto flex min-h-[440px] w-full max-w-[560px] items-center justify-center sm:min-h-[480px] md:min-h-[500px]'>
              {/* Static orbital rings */}
              <div className='pointer-events-none absolute left-[56%] top-[44%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 sm:h-[320px] sm:w-[320px] md:h-[350px] md:w-[350px]' />

              <div className='pointer-events-none absolute left-[56%] top-[44%] h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-400/50 sm:h-[270px] sm:w-[270px] md:h-[295px] md:w-[295px]' />

              {/* Upper semicircle orbit */}
              <svg
                aria-hidden='true'
                viewBox='0 0 400 210'
                className='pointer-events-none absolute left-[56%] top-[1%] z-10 w-[min(88%,400px)] -translate-x-1/2 overflow-visible'
                fill='none'
              >
                <defs>
                  <linearGradient id='hero-orbit-gradient'>
                    <stop offset='0%' stopColor='#8b5cf6' />
                    <stop offset='100%' stopColor='#84cc16' />
                  </linearGradient>
                </defs>

                <path
                  d='M 10 200 A 190 190 0 0 1 390 200'
                  stroke='url(#hero-orbit-gradient)'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  opacity='0.9'
                />

                <circle r='6' fill='#8b5cf6'>
                  <animateMotion
                    dur='4s'
                    repeatCount='indefinite'
                    path='M 10 200 A 190 190 0 0 1 390 200'
                  />
                  <animate
                    attributeName='fill'
                    values='#8b5cf6;#84cc16'
                    dur='4s'
                    repeatCount='indefinite'
                  />
                </circle>
              </svg>

              {/* Circular badge */}
              <div className='hero-orb absolute left-[56%] top-[44%] z-10 flex h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full sm:h-[240px] sm:w-[240px] md:h-[270px] md:w-[270px]'>
                <div className='hero-orb-inner absolute inset-[3px] rounded-full' />

                <div className='relative z-10 text-center text-white'>
                  <span className='block font-mono text-xs text-lime-300 sm:text-sm'>
                    {'<build />'}
                  </span>
                  <span className='mt-2 block text-5xl font-black tracking-[-0.09em] sm:text-6xl'>
                    MAKE
                  </span>
                  <span className='block text-5xl font-black tracking-[-0.09em] text-lime-300 sm:text-6xl'>
                    IT.
                  </span>
                </div>
              </div>

              {/* Code terminal — positioned to the left */}
              <div className='hero-code absolute bottom-0 left-0 z-20 w-[min(78%,320px)] sm:bottom-2 sm:left-[2%] sm:w-[320px] md:left-0'>
                <AnimatedCodeCard />
              </div>

              {/* Floating labels */}
              <div className='hero-chip absolute right-0 top-[7%] z-30 rounded-xl border border-black/10 bg-white/95 px-3 py-2.5 shadow-lg backdrop-blur-md sm:right-0 sm:px-4'>
                <p className='text-[8px] uppercase tracking-[0.16em] text-neutral-500 sm:text-[9px]'>
                  Current mindset
                </p>
                <p className='mt-1 text-xs font-extrabold sm:text-sm'>
                  Ship it <span className='text-violet-600'>↗</span>
                </p>
              </div>

              <div className='hero-chip hero-chip-two absolute left-0 top-[10%] z-30 rounded-full bg-violet-600 px-3 py-2 text-[9px] font-bold tracking-wider text-white shadow-lg sm:left-1 sm:px-4 sm:text-[10px]'>
                DESIGN × CODE
              </div>

              {/* Floating particles */}
              <div className='hero-particle absolute right-[3%] top-[45%] z-20 h-3 w-3 rounded-full bg-lime-500 shadow-[0_0_20px_#84cc16]' />
              <div className='hero-particle hero-particle-purple absolute left-[5%] top-[43%] z-20 h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_20px_#8b5cf6]' />
            </div>
          </section>

          {/* Scrolling ticker */}
          <div className='overflow-hidden border-y border-black/10 py-3 sm:py-4'>
            <div className='hero-ticker flex w-max items-center gap-7 text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-500 sm:gap-10 sm:text-xs'>
              {[0, 1].map((copy) => (
                <div key={copy} className='flex items-center gap-7 sm:gap-10'>
                  {highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className='flex items-center gap-7 sm:gap-10'
                    >
                      <span className='whitespace-nowrap'>{highlight}</span>
                      <span className='text-lime-600'>✳</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Element>
  );
}
