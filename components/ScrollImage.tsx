'use client';

import { projectsCards } from '@/lib/type';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import DecryptedText from './DecryptedText';
import { Button } from './ui/button';
import Link from 'next/link';

const cards: projectsCards[] = [
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
    <section className='w-full min-h-screen bg-[#080807] py-20 text-white flex  gap-20  '>
      {/* LEFT COUNTER — Sticky */}
      <div className='w-[30%] sticky top-0 h-screen items-start hidden md:flex flex-col pl-10'>
        <h1 className='font-extrabold text-[20rem] opacity-65 leading-none'>
          {String(index + 1).padStart(2, '0')}
        </h1>
      </div>

      {/* RIGHT SCROLL + STICKY CARDS */}
      <div className='w-180 flex flex-col gap-40 mx-auto md:mr-10 right-5 px-4'>
        {cards.map((cards, i) => (
          <div key={i} ref={triggers[i]} className='space-y-50 flex flex-col'>
            <div className='relative'>
              <Image
                src={cards.bgImage}
                alt='imgaes'
                height={900}
                width={800}
                className='object-cover opacity-35 h-[80vh] md:h-[93vh] border-2  rounded-3xl'
              />
              <div className='top-50 aspect-video mb-20 right-10 ml-10 absolute rounded-xl overflow-hidden'>
                <video
                  src={cards.projectVideo}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className='w-full h-full object-cover md:object-contain'
                />
              </div>
              {/* content */}
              <div className='px-4 mt-4 flex md:flex-row flex-col justify-between'>
                <div>
                  <h1 className='font-medium text-white/85 text-sm'>
                    <DecryptedText
                      animateOn='view'
                      text={cards.projectTitle}
                    ></DecryptedText>
                    {/* {cards.projectTitle} */}
                  </h1>
                  <h4 className='text-white font-bold md:text-3xl text-4xl'>
                    {cards.projectName}
                  </h4>
                </div>

                <div className='flex  mt-2 md:items-center'>
                  {/* Explore Button */}

                  <Link href={cards.exploreLink}>
                    <Button
                      variant='secondary'
                      className='px-6 py-2 text-black'
                    >
                      {cards.exploreLink ? 'Explore' : ''}
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
