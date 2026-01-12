'use client';

import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';

const cards = [
  {
    bgImage: '/bg1.jpg',
    video: '/video1.mp4',
    Name: 'Evento',
    title: 'Evento Dj managment system',
    exploreLink: '/adakdajdakdad/dadada',
  },
  {
    bgImage: '/bg2.jpg',
    video: '/video1.mp4',
    Name: 'Evento',
    title: 'Evento Dj managment system',
    exploreLink: '/adakdajdakdad/dadada',
  },
  {
    bgImage: '/bg3.jpg',
    video: '/video1.mp4',
    Name: 'Evento',
    title: 'Evento Dj managment system',
    exploreLink: '/adakdajdakdad/dadada',
  },
  {
    bgImage: '/bg4.jpg',
    video: '/video1.mp4',
    Name: 'Evento',
    title: 'Evento Dj managment system',
    exploreLink: '/adakdajdakdad/dadada',
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
      <div className='w-180 flex flex-col mx-auto md:mr-10 right-5 px-4'>
        {cards.map((cards, i) => (
          <div key={i} ref={triggers[i]} className=' space-y-30 flex flex-col'>
            <div className='relative '>
              <Image
                src={cards.bgImage}
                alt='imgaes'
                height={900}
                width={800}
                className='object-cover opacity-35 h-[80vh] md:h-[93vh] border-2  rounded-3xl'
              />
              <div className='top-50 aspect-video mb-20 right-10 ml-10 absolute rounded-xl overflow-hidden'>
                <video
                  src={cards.video}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className='w-full h-full object-cover md:object-contain'
                />
              </div>
              {/* </div> */}
              <div className='px-4 mt-4 flex md:flex-row flex-col justify-between'>
                <div>
                  <h1 className='font-semibold text-white text-lg'>
                    {cards.title}
                  </h1>
                  <h4 className='text-white font-bold md:text-3xl text-4xl'>
                    {cards.Name}
                  </h4>
                </div>

                <div className='flex  mt-2 md:items-center'>
                  {/* Explore Button */}

                  <Button variant='secondary' className='px-6 py-2 text-black'>
                    {cards.exploreLink ? 'Explore' : ''}
                  </Button>

                  {/* Deployment Badge */}
                </div>
              </div>
            </div>

            <div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
