'use client';

import { TextRoll } from '@/hooks/TextRoll';
import { TextAnimate } from './ui/text-animate';

const skills = [
  {
    title: 'Languages',
    description: ['JavaScript', 'TypeScript', 'C++', 'Go', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    description: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'shadcn/ui',
      'Framer Motion',
      'GSAP',
    ],
  },
  {
    title: 'Backend',
    description: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Go REST APIs',
      'JWT Authentication',
      'Prisma',
    ],
  },
  {
    title: 'Databases',
    description: [
      'PostgreSQL',
      'MongoDB',
      'SQLite',
      'Supabase',
      'Redis',
      'GORM',
    ],
  },
  {
    title: 'Tools & DevOps',
    description: [
      'Git',
      'GitHub',
      'Postman',
      'Docker',
      'Vercel',
      'CI/CD',
      'Linux',
      'Kafka',
    ],
  },
  {
    title: 'Core CS',
    description: [
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'Problem Solving',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className='bg-[#080807] px-4 py-20 font-sans text-white md:px-8 md:py-28'>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8'>
        {/* LEFT: INTRODUCTION */}
        <div className='order-2 flex items-center md:order-1'>
          <div className='max-w-2xl'>
            <p className='mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-lime-400'>
              What I work with
            </p>

            <h2 className='text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl'>
              <TextAnimate animation='blurInUp' by='word'>
                DEVELOPER DESIGNER CREATOR
              </TextAnimate>
              <span className='text-lime-400'>.</span>
            </h2>

            <p className='mt-6 max-w-lg text-sm leading-7 text-white/55 md:text-base'>
              Technologies and tools I use to build modern web applications,
              scalable APIs, and reliable software products.
            </p>

            <div className='mt-8 flex items-center gap-3'>
              <span className='h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.5)]' />
              <span className='text-xs font-medium uppercase tracking-[0.2em] text-white/50'>
                Always learning. Always building.
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: SKILLS */}
        <div className='order-1 flex flex-col justify-center px-1 md:order-2 md:px-4'>
          <div className='mb-10'>
            <p className='mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-lime-400'>
              My toolkit
            </p>

            <h2 className='text-5xl font-extrabold tracking-tight text-white md:text-7xl'>
              Skills<span className='text-lime-400'>.</span>
            </h2>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className='group rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-lime-400/30 hover:bg-lime-400/[0.04]'
              >
                <div className='mb-4 flex items-center gap-3'>
                  <span className='text-xs font-semibold tabular-nums text-lime-400/70'>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className='text-sm font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-lime-300 md:text-base'>
                    {skill.title}
                  </h3>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {skill.description.map((item) => (
                    <span
                      key={item}
                      className='rounded-md border border-white/[0.07] bg-white/[0.035] px-2.5 py-1.5 text-xs font-medium text-white/65 transition-all duration-200 hover:border-lime-400/30 hover:bg-lime-400/10 hover:text-lime-300 md:text-sm'
                    >
                      <TextRoll>{item}</TextRoll>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
