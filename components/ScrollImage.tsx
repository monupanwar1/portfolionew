'use client';

import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const cards = ['bg-purple-600', 'bg-blue-600', 'bg-orange-500', 'bg-green-600'];

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
    <section className='w-full min-h-screen pb-20 bg-[#080807] text-white flex gap-20'>
      {/* LEFT COUNTER — Sticky */}
      <div className='w-[30%] sticky top-0 h-screen items-start hidden md:flex flex-col pl-10'>
        <h1 className='font-extrabold text-[20rem] opacity-30 leading-none'>
          {String(index + 1).padStart(2, '0')}
        </h1>
      </div>

      {/* RIGHT SCROLL + STICKY CARDS */}
      <div className='w-180 flex flex-col py-10 gap-40 mx-auto md:mr-10 right-5 px-4'>
        {cards.map((bg, i) => (
          <div key={i}>
            {/* Trigger */}
            <div ref={triggers[i]} className='h-px' />

            {/* Sticky card */}
            <div
              className={`sticky max-w-5xl top-0 h-[75vh] md:min-h-screen rounded-3xl shadow-xl ${bg}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
