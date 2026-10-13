'use client';

import { Element } from 'react-scroll';
import { TextAnimate } from './ui/text-animate';

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'ThunderTribes · Lashvae',
    period: 'May 2026 — Aug 2026',
    type: 'Internship',
    highlights: [
      'Shipped 10+ UI features across Dashboard v2 and the Lashvae website revamp.',
      'Built a unified chat experience supporting 6+ social platforms and integrated REST APIs.',
      'Deployed frontend and backend applications using Docker and Nginx.',
    ],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Self-employed · Remote',
    period: '2026 — Present',
    type: 'Freelance',
    highlights: [
      'Build full-stack applications using Next.js, TypeScript, Node.js, Prisma, and PostgreSQL.',
      'Implement authentication, REST APIs, database operations, and reusable UI components.',
    ],
  },
];

export default function Aboutme() {
  return (
    <Element name='about'>
      <section className='overflow-hidden bg-[#080807] px-4 py-16 font-sans text-white sm:px-6 md:px-8 md:py-24'>
        <div className='mx-auto max-w-7xl'>
          {/* INTRODUCTION */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12'>
            <div>
              <p className='mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-lime-400'>
                Get to know me
              </p>

              <h1 className='max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl'>
                <TextAnimate animation='blurInUp' by='word'>
                  Turning ideas into digital experiences
                </TextAnimate>
                <span className='text-lime-400'>.</span>
              </h1>
            </div>

            {/* ABOUT DESCRIPTION */}
            <div className='flex flex-col justify-end gap-6 md:pb-2'>
              <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-lime-400 sm:text-sm'>
                <TextAnimate animation='blurInUp' by='word'>
                  (ABOUT ME)
                </TextAnimate>
              </h2>

              <div className='flex max-w-2xl flex-col gap-5 text-sm font-medium leading-7 text-white/65 sm:text-base sm:leading-8'>
                <TextAnimate animation='slideUp' by='word'>
                  I&apos;m a full-stack software engineer who builds modern,
                  high-performance web applications using Next.js, React,
                  TypeScript, and Node.js. I enjoy turning complex ideas into
                  scalable products with clean interfaces, reliable APIs, and
                  maintainable code.
                </TextAnimate>

                <TextAnimate animation='slideUp' by='word'>
                  From shipping product features during my frontend internship
                  to building full-stack applications independently, I focus on
                  solving real-world problems and delivering software that is
                  both functional and intuitive.
                </TextAnimate>
              </div>

              <div className='mt-2 flex items-center gap-3'>
                <span className='h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.4)]' />
                <span className='text-xs font-medium uppercase tracking-[0.15em] text-white/45'>
                  Building · Learning · Improving
                </span>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 md:mt-28 md:pt-10'>
            <div className='mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
              <div>
                <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-lime-400'>
                  Career journey
                </p>

                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl'>
                  Experience<span className='text-lime-400'>.</span>
                </h2>
              </div>

              <p className='text-sm font-normal text-white/40'>
                Professional experience & independent work
              </p>
            </div>

            <div className='flex flex-col'>
              {experiences.map((experience, index) => (
                <article
                  key={experience.role}
                  className='group border-t border-white/10 py-7 transition-colors duration-300 hover:border-lime-400/40 sm:py-8'
                >
                  {/* ROLE + PERIOD */}
                  <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-start'>
                    <div className='flex gap-4 sm:gap-6'>
                      <span className='pt-1 text-sm font-semibold tabular-nums text-lime-400'>
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div>
                        <h3 className='text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-lime-300 sm:text-xl md:text-2xl'>
                          {experience.role}
                        </h3>

                        <p className='mt-2 text-sm font-normal text-white/50'>
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    <div className='flex flex-wrap items-center gap-3 pl-8 sm:justify-end sm:pl-0'>
                      <span className='inline-flex items-center gap-2 rounded-full border border-lime-400/25 bg-lime-400/[0.07] px-3 py-1.5 text-xs font-semibold text-lime-300'>
                        <span className='h-1.5 w-1.5 rounded-full bg-lime-400' />
                        {experience.type}
                      </span>

                      <span className='text-xs font-medium text-white/45 sm:text-sm'>
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  {/* CONTRIBUTIONS */}
                  <ul className='ml-8 mt-5 flex max-w-4xl flex-col gap-3 sm:ml-10'>
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className='flex gap-3 text-sm font-normal leading-7 text-white/60 sm:text-base'
                      >
                        <span className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400/80' />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
