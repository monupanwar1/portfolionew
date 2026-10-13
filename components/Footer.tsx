'use client';
import { Link } from 'react-scroll';
import Clock from './Clock';
import MenuNavigation from './MenuNavigation';
import SocialNavigation from './SocialsNavigation';

export default function Footer() {
  return (
    <footer className='relative isolate overflow-hidden bg-[#f0f0e9] px-5 pb-6 pt-14 font-sans text-[#171714] sm:px-8 md:px-12 md:pt-20'>
      {/* Background details */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-24 top-10 -z-10 h-96 w-96 rounded-full bg-lime-400/10 blur-[110px]'
      />

      <div className='mx-auto max-w-7xl'>
        {/* Large closing statement */}
        {/* <div className='relative mb-12 overflow-hidden rounded-[28px] bg-[#171714] p-7 text-white sm:p-10 md:p-14'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -right-10 -top-20 h-72 w-72 rounded-full border border-white/10'
          />
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -right-2 -top-12 h-56 w-56 rounded-full border border-white/10'
          />

          <div className='relative flex flex-col justify-between gap-8 md:flex-row md:items-end'>
            <div>
              <div className='mb-5 flex items-center gap-3'>
                <span className='h-2 w-2 rounded-full bg-lime-400' />
                <p className='text-xs font-semibold uppercase tracking-[0.22em] text-white/70'>
                  Have a project in mind?
                </p>
              </div>

              <h2 className='max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl'>
                Let’s make
                <br />
                something <span className='text-lime-400'>meaningful.</span>
              </h2>
            </div>

            <a
              href='#contact'
              className='group inline-flex w-fit shrink-0 items-center gap-5 rounded-full bg-lime-400 px-6 py-4 text-sm font-semibold text-[#171714] transition-all duration-300 hover:bg-lime-300'
            >
              Let’s talk
              <span className='text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'>
                ↗
              </span>
            </a>
          </div>

          <div className='relative mt-10 flex items-center justify-between border-t border-white/15 pt-5'>
            <span className='text-xs tracking-wide text-white/50'>
              DESIGN · DEVELOPMENT · IDEAS
            </span>
            <span className='text-xs font-medium text-lime-400'>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
        </div> */}

        {/* Navigation area */}
        <div className='grid grid-cols-1 gap-10 py-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.15fr] lg:gap-8'>
          {/* Brand */}
          <div>
            <a
              href='#home'
              className='inline-block text-2xl font-bold tracking-tight'
            >
              portfolio<span className='text-lime-600'>.</span>
            </a>

            <p className='mt-4 max-w-[220px] text-sm leading-6 text-neutral-600'>
              Thoughtful interfaces. Reliable code. Digital experiences built
              with purpose.
            </p>

            <div className='mt-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-2 text-xs text-neutral-700'>
              <span className='h-2 w-2 rounded-full bg-lime-600' />
              Open to opportunities
            </div>
          </div>

          {/* Menu */}
          <div className='min-w-0'>
            <h3 className='mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500'>
              Navigation
            </h3>
            <div className='footer-nav'>
              <MenuNavigation />
            </div>
          </div>

          {/* Socials */}
          <div className='min-w-0'>
            <h3 className='mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500'>
              Follow along
            </h3>
            <div className='footer-nav'>
              <SocialNavigation />
            </div>
          </div>

          {/* Clock */}
          <div className='min-w-0 self-start rounded-2xl border border-black/10 bg-white/70 p-5'>
            <div className='mb-5 flex items-center justify-between'>
              <h3 className='text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600'>
                Local time
              </h3>
              <span className='text-lg text-lime-600'>◷</span>
            </div>

            <div className='min-w-0 overflow-hidden text-[#171714]'>
              <Clock />
            </div>

            <div className='mt-5 border-t border-black/10 pt-4 text-xs text-neutral-500'>
              Gurugram · India
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-xs text-neutral-600'>
            © {new Date().getFullYear()} MonuPanwar. All rights reserved.
          </p>

          <p className='text-xs text-neutral-500'>Monu Panwar.</p>

          <Link
            to='home'
            href='#home'
            className='group flex w-fit items-center gap-2 text-sm font-medium text-[#171714] transition-colors hover:text-lime-700'
          >
            Back to top
            <span className='transition-transform duration-200 group-hover:-translate-y-1'>
              ↑
            </span>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .footer-nav ul {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }

        .footer-nav li {
          list-style: none;
        }

        .footer-nav a {
          color: #404040;
          font-size: 14px;
          transition:
            color 180ms ease,
            transform 180ms ease;
        }

        .footer-nav a:hover {
          color: #65a30d;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-nav a {
            transition: none;
          }
        }
      `}</style>
    </footer>
  );
}
