'use client';
import Image from 'next/image';
import { Element, Link } from 'react-scroll';
import { TextAnimate } from './ui/text-animate';
import { user } from '@/config/user';

function Herosection() {
  return (
    <Element name='home'>
      <main className='flex w-full flex-col p-4 space-y-10 md:space-y-24 min-h-screen'>
        <section className='relative flex flex-col justify-center gap-4 '>
          <TextAnimate
            className='font-extrabold text-lg md:text-3xl lg:text-4xl'
            animation='blurInUp'
            by='word'
          >
            {user.name}
          </TextAnimate>
          <TextAnimate
            className='capitalize text-center font-extrabold text-5xl md:text-8xl'
            animation='blurInUp'
            by='word'
          >
            {user.description}
          </TextAnimate>
        </section>
        {/* content */}

        <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 p-4'>
          <div className='lg:col-span-4 space-y-6 max-w-4xl px-4'>
            <div className='text-2xl opacity-60'>
              <Image src='/arrowdown.svg' alt='arrowup' height={4} width={20} />
            </div>

            <h6 className='text-2xl md:mt-20 font-semibold  opacity-70  '>
              I build scalable, high performance, production ready web
              applications with clean, maintainable code from intuitive frontend
              experiences to robust backend systems, APIs, databases, and
              deployment workflows.
            </h6>

            <Link
              to='contact'
              className='group inline-flex items-center gap-2
              rounded-full bg-black px-10 py-6
             text-white 
             transition-transform duration-300 ease-out text-xl
             hover:scale-105'
            >
              CONTACT
              <span
                className='
               transition-transform duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
    '
              >
                ↗
              </span>
            </Link>

            {/* <InteractiveHoverButton className='px-10 py-4 active:scale-75  text-white bg-neutral-900 hover:scale-0.75 '>
              <Link to='contact' smooth={true} duration={500}>
                Contacts
              </Link>
            </InteractiveHoverButton> */}
          </div>

          {/* IMAGE */}
          <div className='lg:col-span-4 flex justify-center'>
            <div
              className=' w-100 h-115 


          overflow-hidden
          rounded-2xl
          bg-purple-700 '
            >
              <Image
                src='/boy1.jpg'
                alt='Hero'
                height={90}
                width={820}
                className='w-full h-full object-cover grayscale-50 '
              />
            </div>
          </div>

          {/* RIGHT STATUS */}
          <div className='flex flex-col  lg:col-span-4  h-full justify-end-safe items-start md:items-end text-left md:text-right '>
            <h6 className='text-lg font-semibold uppercase tracking-widest opacity-70 whitespace-nowrap'>
              Open to Opportunities
            </h6>
            <p className='text-4xl md:text-6xl font-bold'>Worldwide</p>
          </div>
        </section>
      </main>
    </Element>
  );
}

export default Herosection;
