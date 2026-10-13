
'use client';

import { Element } from 'react-scroll';
import AnimatedCard from './AnimatedCard';
import { TextAnimate } from './ui/text-animate';

export default function ServicesSection() {
  return (
    <Element name="services">
      <section id="services" className="font-sans">
        <div className="relative overflow-hidden bg-[#080807] px-4 py-20 text-white md:px-8 md:py-28">
          {/* SERVICES HEADING */}
          <div className="mb-10 grid grid-cols-1 gap-8 p-1 md:mb-14 md:grid-cols-2 md:gap-8 md:p-4">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">
                What I offer
              </p>

              <TextAnimate
                className="text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
                animation="blurInUp"
                by="word"
              >
                WHAT I DO
              </TextAnimate>

              <span className="text-5xl font-extrabold text-lime-400 sm:text-6xl md:text-7xl lg:text-8xl">
                .
              </span>
            </div>

            {/* SERVICES DESCRIPTION */}
            <div className="mt-4 space-y-6 md:mt-28 md:flex md:gap-8 md:space-y-0">
              <h3 className="shrink-0 text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
                <TextAnimate animation="blurInUp" by="word">
                  (SERVICES)
                </TextAnimate>
              </h3>

              <h4 className="max-w-3xl text-sm font-medium leading-7 text-white/60 sm:text-base sm:leading-8 md:pr-4 lg:pr-10">
                <TextAnimate animation="slideUp" by="word">
                  I specialize in building full-stack web applications that are
                  fast, reliable, and user-friendly. With a solid foundation in
                  both frontend and backend technologies, I help bring ideas to
                  life for businesses, startups, and product teams.
                </TextAnimate>
              </h4>
            </div>
          </div>

          {/* SERVICE CARDS */}
          <div className="[&>*]:transition-colors [&>*]:duration-300">
            <AnimatedCard />
          </div>
        </div>
      </section>
    </Element>
  );
}

