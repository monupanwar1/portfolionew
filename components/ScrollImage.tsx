
'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

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
    <section className='w-full min-h-screen pb-20 bg-black text-white flex gap-20'>
      {/* LEFT COUNTER — Sticky */}
      <div className='w-[35%] sticky top-0  h-screen items-start hidden md:flex flex-col pl-10'>
        <h1 className='font-extrabold text-[20rem] opacity-30 leading-none'>
          {String(index + 1).padStart(2, '0')}
        </h1>
      </div>

      {/* RIGHT SCROLL + STICKY CARDS (UI NOT TOUCHED) */}
      <div className='w-180 flex flex-col py-10 gap-60 mx-auto md:mr-10 right-5 px-4'>
        {cards.map((bg, i) => (
          <div key={i}>
            {/* Trigger */}
            <div ref={triggers[i]}/>

            {/* Sticky cards */}
            <div
              className={`sticky top-0 h-screen rounded-3xl shadow-xl ${bg}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}




// 'use client';

// import { useRef, useState, useEffect } from 'react';

// const cards = ['bg-purple-600', 'bg-blue-600', 'bg-orange-500', 'bg-green-600'];

// export default function ScrollStickyNormal() {
//   const triggers = cards.map(() => useRef<HTMLDivElement | null>(null));
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       triggers.forEach((trigger, i) => {
//         const rect = trigger.current?.getBoundingClientRect();
//         if (rect && rect.top <= window.innerHeight * 0.4) {
//           setIndex(i);
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section className='w-full min-h-screen pb-40 bg-black text-white flex gap-20'>
//       {/* LEFT COUNTER — Sticky */}
//       <div className='w-[35%] sticky hidden top-0 mt-50 h-screen  items-start md:flex flex-col  pl-10'>
//         <h1 className='font-extrabold text-[20rem] opacity-30 '>
//           {String(index + 1).padStart(2, '0')}
//         </h1>
//       </div>

//       {/* RIGHT Scroll + Stick Cards */}
//       <div className='w-180 flex flex-col gap-60 mx-auto md:mr-10  right-5 p-4 '>
//         {cards.map((bg, i) => (
//           <>
//             {/* Scroll trigger before each card */}
//             <div ref={triggers[i]} className='h-[1vh]' />

//             <div
//               className={`top-0 h-screen rounded-3xl shadow-xl ${bg}`}
//             />
//           </>
//         ))}
//       </div>
//     </section>
//   );
// }
