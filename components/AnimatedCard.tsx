// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// type Cards = {
//   number: string;
//   title: string;
//   description: string;
//   stack: {
//     number: string;
//     stacks: string;
//   }[];
// };

// const cards: Cards[] = [
//   {
//     number: '01',
//     title: 'Full-Stack Development',
//     description:
//       'From frontend interactions to backend APIs I buildcomplete web solutions.  I work with modern stacks to deliver apps that are scalable,maintainable, and ready for real-world users.',
//     stack: [
//       {
//         number: '01',
//         stacks: ' React, Node.js, Express.js',
//       },
//       {
//         number: '02',
//         stacks: 'REST APIs, Firebase, Docker',
//       },
//       {
//         number: '03',
//         stacks: ' React, Node.js, Express.js',
//       },
//     ],
//   },
//   {
//     number: '02',
//     title: 'UI-UX',
//     description:
//       'From frontend interactions to backend APIs I buildcomplete web solutions.  I work with modern stacks to deliver apps that are scalable,maintainable, and ready for real-world users.',
//     stack: [
//       {
//         number: '01',
//         stacks: ' React, Node.js, Express.js',
//       },
//       {
//         number: '02',
//         stacks: 'REST APIs, Firebase, Docker',
//       },
//       {
//         number: '03',
//         stacks: ' React, Node.js, Express.js',
//       },
//     ],
//   },
//   {
//     number: '01',
//     title: 'Optimization',
//     description:
//       'From frontend interactions to backend APIs I buildcomplete web solutions.  I work with modern stacks to deliver apps that are scalable,maintainable, and ready for real-world users.',
//     stack: [
//       {
//         number: '01',
//         stacks: ' dsa,problem',
//       },
//       {
//         number: '02',
//         stacks: 'REST APIs, Firebase, Docker',
//       },
//       {
//         number: '03',
//         stacks: ' React, Node.js, Express.js',
//       },
//     ],
//   },
// ];

// gsap.registerPlugin(ScrollTrigger);

// export default function AnimatedCard() {
//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.cards-wrapper',
//         start: 'top top',
//         end: '+=2000',
//         pin: true,
//         scrub: 1,
//         scroller: document.body,
//       },
//     });

//     tl.to('.card', {
//       height: 330,
//       stagger: 0.7,
//       ease: 'none',
//     })
//   });

//   return (
//     <section className='bg-black min-h-screen'>
//       <div className='cards-wrapper p-4 grid grid-cols-1 min-h-screen gap-10 overflow-hidden'>
//         {cards.map((card, index) => (
//           <div key={index} className='card border-t h-40 bg-amber-500 overflow-hidden'>
//             <div className='flex items-center justify-center'>
//               <h1 className='font-bold text-4xl'>{card.number}</h1>
//               <h1 className='font-bold text-4xl'>{card.title}</h1>
//             </div>

//             <div className='flex justify-end'>
//               <p className='mt-8 w-[40%] text-muted-foreground'>
//                 {card.description}
//               </p>
//             </div>

//             {card.stack.map((item, i) => (
//               <div
//                 key={i}
//                 className={`flex space-x-4 mt-4 ${
//                   i < card.stack.length - 1
//                     ? 'border-b border-muted-foreground'
//                     : ''
//                 }`}
//               >
//                 <h3 className='font-semibold text-2xl'>{item.number}</h3>
//                 <h2 className='text-4xl mb-2 font-bold'>{item.stacks}</h2>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// 'use client';

// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// type Cards = {
//   number: string;
//   title: string;
//   description: string;
//   stack: {
//     number: string;
//     stacks: string;
//   }[];
// };

// const cards: Cards[] = [
//   {
//     number: '(01)',
//     title: 'Full-Stack Development',
//     description:
//       'From frontend interactions to backend APIs, I build complete web solutions using modern stacks that are scalable and production ready.',
//     stack: [
//       { number: '01', stacks: 'React, Next.js, Tailwind' },
//       { number: '02', stacks: 'Node.js, Express, MongoDB' },
//       { number: '03', stacks: 'Docker, Firebase, REST APIs' },
//     ],
//   },
//   {
//     number: '(02)',
//     title: 'UI / UX Engineering',
//     description:
//       'I design and build smooth, accessible, and animated interfaces focused on user experience and performance.',
//     stack: [
//       { number: '01', stacks: 'Framer Motion, GSAP' },
//       { number: '02', stacks: 'Design Systems' },
//       { number: '03', stacks: 'Micro Interactions' },
//     ],
//   },
//   {
//     number: '(03)',
//     title: 'Optimization',
//     description:
//       'Performance tuning, bundle optimization, and algorithmic improvements for scalable applications.',
//     stack: [
//       { number: '01', stacks: 'DSA & Problem Solving' },
//       { number: '02', stacks: 'Code Splitting' },
//       { number: '03', stacks: 'Caching Strategies' },
//     ],
//   },
// ];

// export default function AnimatedCard() {
//   useGSAP(() => {
//     const cards = gsap.utils.toArray<HTMLElement>('.card');

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.cards-wrapper',
//         start: 'top 15%',
//         // end: 'bottom top',
//         end: () => `+=${cards.length * 300}`,
//         scrub: 1,
//         pin: true,
//         pinType: 'transform',
//       },
//     });

//     cards.forEach((card, index) => {
//       const content = card.querySelector('.card-content');

//       // expand card
//       tl.to(card, {
//         height: 380,
//         duration: 1,
//         ease: 'none',
//       });

//       // reveal content
//       if (index === cards.length - 1 && content) {
//         tl.to(
//           content,
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.5,
//             ease: 'power2.out',
//           },
//           '<+=0.25',
//         );
//         tl.set(content, {
//           opacity: 1,
//           y: 0,
//         });
//       }
//     });
//   }, []);

//   return (
//     <section className='bg-black text-white  overflow-hidden px-4'>
//       <div className='cards-wrapper md:ml-2 h-280  '>
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className='card relative h-26 overflow-hidden border-t border-muted-foreground '
//           >
//             {/* HEADER — ALWAYS VISIBLE */}
//             <div className='flex  card-header justify-items-start items-center gap-4 md:gap-138 py-6'>
//               <h1 className=' text-3xl md:text-5xl font-bold'>{card.number}</h1>
//               <h1 className='text-4xl md:text-5xl font-bold'>{card.title}</h1>
//             </div>

//             {/* CONTENT — HIDDEN INITIALLY */}
//             <div
//               className='card-content transition-all duration-300'
//               // className={`card-content transition-all duration-300 ${
//               //   index === cards.length - 1
//               //     ? 'opacity-100 translate-y-0 bg-amber-500 '
//               //     : 'opacity-0 translate-y-10'
//               // }`}
//             >
//               <div className='flex justify-end '>
//                 <div className=' space-y-4 mt-8'>
//                   <p className=' text-white/60 md:w-2xl'>{card.description}</p>
//                   {card.stack.map((item, i) => (
//                     <div
//                       key={i}
//                       className={` gap-4 flex items-center pb-2 ${
//                         i < card.stack.length - 1
//                           ? 'border-b border-white/20'
//                           : ''
//                       }`}
//                     >
//                       <span className='text-lg opacity-60'>{item.number}</span>
//                       <h2 className='text-xl font-semibold'>{item.stacks}</h2>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

type Cards = {
  number: string;
  title: string;
  description: string;
  stack: {
    number: string;
    stacks: string;
  }[];
};

const cards: Cards[] = [
  {
    number: '(01)',
    title: 'Full-Stack Development',
    description:
      'I architect and build end-to-end, production-grade web platforms with a focus on scalability, performance, and systems that are built to last.',
    stack: [
      { number: '01', stacks: 'React, Next.js, Tailwind, TypeScript' },
      { number: '02', stacks: 'Node.js, Express, MongoDB, Prisma' },
      { number: '03', stacks: 'Docker, Firebase, REST APIs, CI/CD' },
    ],
  },
  {
    number: '(02)',
    title: 'UI/UX & Frontend',
    description:
      'I craft visually striking, buttery-smooth, and highly interactive user experiences that feel fast, modern, and delightful across all devices.',
    stack: [
      { number: '01', stacks: 'Framer Motion, GSAP, Micro Animations' },
      { number: '02', stacks: 'Design Systems, Responsive UI, Accessibility' },
      { number: '03', stacks: 'Interaction Design, Motion Systems' },
    ],
  },
  {
    number: '(03)',
    title: 'Performance',
    description:
      'I obsess over speed, efficiency, and scalability by optimizing rendering, networking, data flow, and algorithms for real-world, high-traffic applications.',
    stack: [
      { number: '01', stacks: 'DSA, Problem Solving, System Thinking' },
      { number: '02', stacks: 'Code Splitting, Lazy Loading, Bundling' },
      { number: '03', stacks: 'Caching, CDN, Performance Profiling' },
    ],
  },
];

export default function AnimatedCard() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useGSAP(() => {
    const cardElements = gsap.utils.toArray<HTMLElement>('.card');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cards-wrapper',
        start: 'top 15%',
        end: () => `+=${cardElements.length * 370}`,
        scrub: 0.8,
        pin: true,
        pinSpacing: true,
        fastScrollEnd: true,
      },
    });

    cardElements.forEach((card, index) => {
      const content = card.querySelector('.card-content');
      const isLastCard = index === cardElements.length - 1;

      tl.to(
        card,
        {
          height: isLastCard ? 480 : 500,
          ease: 'power1.inOut',
        },
        index === 0 ? 0 : '<+=0.15',
      );

      if (content && !isLastCard) {
        tl.to(
          content,
          {
            opacity: 1,
            y: 0,
            ease: 'power2.inOut',
          },
          '<+=0.1',
        );
      }
    });
  }, []);

  const toggleLastCard = () => {
    const isExpanded = expandedCard === 2;
    setExpandedCard(isExpanded ? null : 2);
  };

  return (
    <section className='overflow-hidden bg-[#080807] px-4 font-sans text-white'>
      <div className='cards-wrapper h-400 md:ml-2'>
        {cards.map((card, index) => {
          const isLastCard = index === cards.length - 1;
          const isExpandedNow = expandedCard === index && isLastCard;

          return (
            <div
              key={index}
              className={`card relative h-155 overflow-hidden border-t border-white/15 ${
                isLastCard ? 'cursor-pointer' : ''
              }`}
              style={{
                height:
                  isLastCard && isExpandedNow
                    ? '450px'
                    : isLastCard
                      ? '450px'
                      : '104px',
                willChange: 'height',
              }}
              onClick={isLastCard ? toggleLastCard : undefined}
            >
              {/* HEADER */}
              <div className='card-header flex items-center justify-items-start gap-4 py-6 md:gap-10 md:py-6 lg:gap-16'>
                <h2 className='shrink-0 text-base font-semibold tracking-tight text-lime-400 md:text-xl'>
                  {card.number}
                </h2>

                <h2 className='text-lg font-semibold tracking-tight text-white/90 transition-colors duration-300 hover:text-lime-300 sm:text-xl md:text-2xl'>
                  {card.title}
                </h2>

                {isLastCard && (
                  <span
                    className='ml-auto shrink-0 text-lg font-medium text-lime-400'
                    aria-hidden='true'
                  >
                    {isExpandedNow ? '−' : '+'}
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div
                className='card-content translate-y-0 opacity-100'
                style={{ willChange: 'opacity, transform' }}
              >
                <div className='flex justify-end'>
                  <div className='mt-4 space-y-4'>
                    <p className='text-sm font-medium leading-7 text-white/65 md:w-3xl md:text-base md:leading-8'>
                      {card.description}
                    </p>

                    {card.stack.map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-start space-x-6 pb-2 ${
                          i < card.stack.length - 1
                            ? 'border-b border-white/10'
                            : ''
                        }`}
                      >
                        <span className='pt-1 text-xs font-semibold tabular-nums text-lime-400/80'>
                          {item.number}
                        </span>

                        <h3 className='text-sm font-medium leading-relaxed tracking-tight text-white/75 sm:text-base md:text-lg'>
                          {item.stacks}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
