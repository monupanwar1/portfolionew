'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

// gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  // useEffect(() => {
  //   const sections = gsap.utils.toArray<HTMLElement>('#services .border-t');

  //   // IMPORTANT: stack sections on top of each other
  //   gsap.set(sections, {
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     width: '100%',
  //   });

  //   // first section visible
  //   gsap.set(sections, { yPercent: 100 });
  //   gsap.set(sections[0], { yPercent: 0 });

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '#services',
  //       start: 'top top',
  //       end: () => `+=${sections.length * window.innerHeight}`,
  //       scrub: 1,
  //       pin: true,
  //     },
  //   });

  //   sections.forEach((section, i) => {
  //     if (i === 0) return;

  //     // pause at separator
  //     tl.to({}, { duration: 0.6 });

  //     // slide previous out, next in
  //     tl.to(sections[i - 1], {
  //       yPercent: -100,
  //       duration: 1,
  //       ease: 'power2.inOut',
  //     }).to(
  //       section,
  //       {
  //         yPercent: 0,
  //         duration: 1,
  //         ease: 'power2.inOut',
  //       },
  //       '<',
  //     );
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((t) => t.kill());
  //   };
  // }, []);


  return (
    <section
      id='services'
      className='relative bg-black rounded-4xl text-white min-h-screen px-4 overflow-hidden'
    >
      {/* service----heading */}
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 mb-6 '>
        <div>
          <h1 className='font-extrabold text-6xl/relaxed'>what should i do</h1>
        </div>
        <div
          className='px-4 flex h-full justify-end col-span-10 mt-20 space-x-4
        '
        >
          <h3>(services)</h3>
          <h4 className='overflow-hidden text-lg/relaxed'>
            I specialize inbuilding full-stack webapplications <br /> thatarefast ,reliable,anduser-friendly.Witha <br />solid foundation inbothfrontend and backend <br />technologies,Ihelpbringideastolifewhetherit'sforabusiness,astartup,oraproductteam.
          </h4>
        </div>
      </div>
      {/* 01 */}
      <div className='border-t p-4 grid grid-cols-1 md:grid-cols-2 min-h-screen'>
        <div>
          <h1 className='font-bold text-4xl'>(01)</h1>
        </div>
        <div>
          <h1 className='font-bold text-4xl'>Full-Stack Development</h1>
          <p className='mt-8 text-muted-foreground align-baseline'>
            From frontend interactions to backend APIs <br />, I build complete
            web solutions. <br /> I work with modern stacks to deliver apps that
            are scalable,
            <br /> maintainable, and ready for real-world users.
          </p>
          <div className='flex  space-x-4 border-b border-muted-foreground mt-4 '>
            <h3 className='font-semibold text-2xl'>01</h3>
            <h2 className='text-4xl mb-2 font-bold'>
              React, Node.js, Express.js
            </h2>
          </div>
          <div className='flex  space-x-4 border-b border-muted-foreground mt-4 '>
            <h3 className='font-semibold text-2xl'>02</h3>
            <h2 className='text-4xl mb-2 font-bold'>
              REST APIs, Firebase, Docker
            </h2>
          </div>
          <div className='flex  space-x-4  mt-4 '>
            <h3 className='font-semibold text-2xl'>03</h3>
            <h2 className='text-4xl mb-2 font-bold'>
              REST APIs, Firebase, Docker
            </h2>
          </div>
        </div>
      </div>
      {/* 02 */}
      <div className='border-t p-4 grid grid-cols-1 md:grid-cols-2 min-h-screen'>
        <div>
          <h1 className='font-bold text-4xl'>(01)</h1>
        </div>
        <div>
          <h1 className='font-bold text-4xl'>UI/UX & Frontend</h1>
          <p className='mt-8 text-muted-foreground align-baseline'>
            From frontend interactions to backend APIs <br />, I build complete
            web solutions. <br /> I work with modern stacks to deliver apps that
            are scalable,
            <br /> maintainable, and ready for real-world users.
          </p>
          <div className='flex  space-x-4 border-b border-muted-foreground mt-4 '>
            <h3 className='font-semibold text-2xl'>01</h3>
            <h2 className='text-4xl mb-2 font-bold'>
              React, Node.js, Express.js
            </h2>
          </div>
          <div className='flex  space-x-4 border-b border-muted-foreground mt-4 '>
            <h3 className='font-semibold text-2xl'>02</h3>
            <h2 className='text-4xl mb-2 font-bold'>
              REST APIs, Firebase, Docker
            </h2>
          </div>
          <div className='flex  space-x-4  mt-4 '>
            <h3 className='font-semibold text-2xl'>03</h3>
            <h2 className='text-4xl mb-2 font-bold'>
              REST APIs, Firebase, Docker
            </h2>
          </div>
        </div>
      </div>
      {/* 03 */}
      <div className='border-t p-4 grid grid-cols-1 md:grid-cols-2 min-h-screen'>
        <div>
          <h1 className='font-bold text-4xl'>(01)</h1>
        </div>
        <div>
          <h1 className='font-bold text-4xl'>Optimization</h1>
          <p className='mt-8 text-muted-foreground align-baseline'>
            From frontend interactions to backend APIs <br />, I build complete
            web solutions. <br /> I work with modern stacks to deliver apps that
            are scalable,
            <br /> maintainable, and ready for real-world users.
          </p>
          <div className='flex  space-x-4 border-b border-muted-foreground mt-4 '>
            <h3 className='font-semibold text-2xl'>01</h3>
            <h2 className='text-4xl mb-2 font-bold'>
              React, Node.js, Express.js
            </h2>
          </div>
          <div className='flex  space-x-4 border-b border-muted-foreground mt-4 '>
            <h3 className='font-semibold text-2xl'>02</h3>
            <h2 className='text-4xl mb-2 font-bold'>
              REST APIs, Firebase, Docker
            </h2>
          </div>
          <div className='flex  space-x-4  mt-4 '>
            <h3 className='font-semibold text-2xl'>03</h3>
            <h2 className='text-4xl mb-2 font-bold'>
              REST APIs, Firebase, Docker
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
