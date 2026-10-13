'use client';

import { projectsCards } from '@/lib/type';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import DecryptedText from './DecryptedText';
import { Button } from './ui/button';

const cards: projectsCards[] = [
  {
    bgImage: '/bg3.jpg',
    projectVideo: '/video5.mp4',
    projectName: 'Dinex',
    projectTitle: 'Food Ordering Platform',
    exploreLink: 'https://dinex-cyan.vercel.app/',
  },
  {
    bgImage: '/bg1.jpg',
    projectVideo: '/video1.mp4',
    projectName: 'Evento',
    projectTitle: 'DJ Event Management Platform',
    exploreLink: 'https://evento-kappa-ten.vercel.app/',
  },
  {
    bgImage: '/bg2.jpg',
    projectVideo: '/video2.mp4',
    projectName: 'Pawsoft',
    projectTitle: 'Smart Pet Management System',
    exploreLink: 'https://pawsoft.vercel.app/',
  },
  {
    bgImage: '/bg3.jpg',
    projectVideo: '/video3.mp4',
    projectName: 'ProfilePilot',
    projectTitle: 'AI-Powered Social Media Profile Generator',
    exploreLink: 'https://postpilot-pi.vercel.app/',
  },
  {
    bgImage: '/bg4.jpg',
    projectVideo: '/video4.mp4',
    projectName: 'Personal Portfolio',
    projectTitle: 'High-Performance Interactive Developer Portfolio',
    exploreLink: 'https://portfolionew-neon-zeta.vercel.app/',
  },
];

export default function ScrollStickyNormal() {
  const triggers = cards.map(() => useRef<HTMLDivElement | null>(null));

  const inViews = triggers.map((ref) =>
    useInView(ref, { margin: '0px 0px -60% 0px' }),
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const active = inViews.findIndex((v) => v);
    if (active !== -1) setIndex(active);
  }, [inViews]);

  return (
    <section className='flex min-h-screen w-full gap-20 bg-[#080807] py-20 text-white'>
      {/* LEFT COUNTER — Sticky */}
      <div className='sticky top-0 hidden h-screen w-[30%] flex-col items-start pl-10 md:flex'>
        <h1 className='text-[20rem] font-extrabold leading-none text-lime-400/80'>
          {String(index + 1).padStart(2, '0')}
        </h1>
      </div>

      {/* RIGHT SCROLL + STICKY CARDS */}
      <div className='mx-auto flex w-180 flex-col gap-40 px-4 md:mr-10 right-5'>
        {cards.map((cards, i) => (
          <div key={i} ref={triggers[i]} className='flex flex-col space-y-50'>
            <div className='group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#151612] via-[#10110e] to-[#080807] shadow-[0_12px_45px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-lime-400/30'>
              <Image
                src={cards.bgImage}
                alt={cards.projectName}
                height={900}
                width={800}
                className='h-[80vh] rounded-3xl border-2 border-white/10 object-cover opacity-35 transition-opacity duration-500 group-hover:opacity-45 md:h-[93vh]'
              />
              <div className='pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent' />

              <div className='absolute top-50 right-10 ml-10 mb-20 aspect-video overflow-hidden rounded-xl border border-white/20 bg-[#11110f] shadow-[0_8px_25px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:border-lime-400/40'>
                <video
                  src={cards.projectVideo}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className='h-full w-full object-cover'
                />
              </div>
              {/* CONTENT */}
              <div className='mt-4 flex flex-col justify-between gap-3 px-4 md:flex-row'>
                <div>
                  <h1 className='text-sm font-medium text-white/80'>
                    <DecryptedText animateOn='view' text={cards.projectTitle} />
                  </h1>

                  <h4 className='text-3xl font-bold tracking-tight text-white'>
                    {cards.projectName}
                    <span className='text-lime-400'>.</span>
                  </h4>
                </div>

                <div className='mt-2 flex md:items-center'>
                  <Link
                    href={cards.exploreLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button
                      variant='secondary'
                      className='rounded-full border border-lime-400/30 bg-lime-400 px-6 py-2 font-semibold text-[#080807] opacity-100 transition-colors duration-300 hover:bg-lime-300'
                    >
                      Explore ↗
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
