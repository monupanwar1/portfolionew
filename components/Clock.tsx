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
  });

  return (
    <div className='flex text-neutral-950 flex-col gap-2'>
      <h1 className='text-black/80 font-medium'>LOCAL TIME</h1>
      <div className='text-muted-foreground text-lg font-normal tracking-wider uppercase transition-all duration-300'>
        {formattedTime} <span>,IST</span>
      </div>
    </div>
  );
}
