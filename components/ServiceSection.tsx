'use client';

import { Element } from 'react-scroll';
import AnimatedCard from './AnimatedCard';
import { TextAnimate } from './ui/text-animate';

export default function ServicesSection() {
  return (
    <Element name='services'>
      <section id='service '>
        <div
          id='services'
          className='relative bg-[#080807]  text-white px-4 overflow-hidden'
        >
          {/* service----heading */}
          <div className='grid grid-cols-1 md:grid-cols-2 p-4 mb-6 '>
            <div className=''>
              <TextAnimate
                className='font-bold  text-white text-5xl md:text-8xl'
                animation='blurInUp'
                by='word'
              >
                WHAT I DO /
              </TextAnimate>
            </div>
            <div
              className='md:inline-flex mt-4 md:mt-34 space-x-10  text-white/80
        '
            >
              <h3 className='text-white font-medium text-xl'>
                <TextAnimate animation='blurInUp' by='word'>
                  (services)
                </TextAnimate>
              </h3>
              <h4 className='overflow-hidden text-xl/relaxed font-semibold md:pr-20 '>
                <TextAnimate animation='slideUp' by='word'>
                  I specialize inbuilding full-stack web applications that are
                  fast, reliable , and user-friendly.With a solid foundation in
                  both frontend and backend technologies , I help bring ideas to
                  life whether it's for a business,a startup,or a product team.
                </TextAnimate>
              </h4>
            </div>
          </div>
          <AnimatedCard />
        </div>
      </section>
    </Element>
  );
}
