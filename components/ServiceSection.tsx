'use client';

import { Element } from 'react-scroll';
import AnimatedCard from './AnimatedCard';

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
    <Element name='service'>
      <section id='service' className='p-10'>
        <div
          id='services'
          className='relative bg-black rounded-4xl text-white min-h-screen px-4 overflow-hidden'
        >
          {/* service----heading */}
          <div className='grid grid-cols-1 md:grid-cols-2 p-10 mb-6 '>
            <div>
              <h1 className='font-extrabold text-6xl/relaxed'>
                what should i do
              </h1>
            </div>
            <div
              className='px-4 flex h-full justify-end col-span-10 mt-20 space-x-4
        '
            >
              <h3>(services)</h3>
              <h4 className='overflow-hidden text-lg/relaxed'>
                I specialize inbuilding full-stack webapplications <br />{' '}
                thatarefast ,reliable,anduser-friendly.Witha <br />
                solid foundation inbothfrontend and backend <br />
                technologies,Ihelpbringideastolifewhetherit'sforabusiness,astartup,oraproductteam.
              </h4>
            </div>
          </div>
         <AnimatedCard/>
        </div>
      </section>
    </Element>
  );
}
