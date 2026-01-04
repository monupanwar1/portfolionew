import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    number: '01',
    title: 'Full-Stack Development',
    description:
      'From frontend interactions to backend APIs I buildcomplete web solutions.  I work with modern stacks to deliver apps that are scalable,maintainable, and ready for real-world users.',
    stack: [
      {
        number: '01',
        stacks: ' React, Node.js, Express.js',
      },
      {
        number: '02',
        stacks: 'REST APIs, Firebase, Docker',
      },
      {
        number: '03',
        stacks: ' React, Node.js, Express.js',
      },
    ],
  },
  {
    number: '02',
    title: 'UI-UX',
    description:
      'From frontend interactions to backend APIs I buildcomplete web solutions.  I work with modern stacks to deliver apps that are scalable,maintainable, and ready for real-world users.',
    stack: [
      {
        number: '01',
        stacks: ' React, Node.js, Express.js',
      },
      {
        number: '02',
        stacks: 'REST APIs, Firebase, Docker',
      },
      {
        number: '03',
        stacks: ' React, Node.js, Express.js',
      },
    ],
  },
  {
    number: '01',
    title: 'Optimization',
    description:
      'From frontend interactions to backend APIs I buildcomplete web solutions.  I work with modern stacks to deliver apps that are scalable,maintainable, and ready for real-world users.',
    stack: [
      {
        number: '01',
        stacks: ' dsa,problem',
      },
      {
        number: '02',
        stacks: 'REST APIs, Firebase, Docker',
      },
      {
        number: '03',
        stacks: ' React, Node.js, Express.js',
      },
    ],
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCard() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cards-wrapper',
        start: 'top top',
        end: '+=2000',
        pin: true,
        scrub: 1,
        scroller: document.body,
      },
    });

    tl.to('.card', {
      height: 330,
      stagger: 0.7,
      ease: 'none',
    })
  });

  return (
    <section className='bg-black min-h-screen'>
      <div className='cards-wrapper p-4 grid grid-cols-1 min-h-screen gap-10 overflow-hidden'>
        {cards.map((card, index) => (
          <div key={index} className='card border-t h-40 bg-amber-500 overflow-hidden'>
            <div className='flex items-center justify-center'>
              <h1 className='font-bold text-4xl'>{card.number}</h1>
              <h1 className='font-bold text-4xl'>{card.title}</h1>
            </div>

            <div className='flex justify-end'>
              <p className='mt-8 w-[40%] text-muted-foreground'>
                {card.description}
              </p>
            </div>

            {card.stack.map((item, i) => (
              <div
                key={i}
                className={`flex space-x-4 mt-4 ${
                  i < card.stack.length - 1
                    ? 'border-b border-muted-foreground'
                    : ''
                }`}
              >
                <h3 className='font-semibold text-2xl'>{item.number}</h3>
                <h2 className='text-4xl mb-2 font-bold'>{item.stacks}</h2>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
