'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Kolkata',
  });

  return (
    <div className='w-full rounded-lg bg-transparent text-neutral-800'>
      <h2 className='text-xs font-semibold tracking-[0.2em] text-lime-400'>
        LOCAL TIME
      </h2>

      <div className='text-lg font-medium tracking-wider text-neutral/70 tabular-nums transition-colors duration-300'>
        {formattedTime}
        <span className='ml-2 text-sm font-semibold text-lime-400'>IST</span>
      </div>
    </div>
  );
}
