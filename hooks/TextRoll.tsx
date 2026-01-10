'use client';

// import { cn } from '@/lib/utils';
// import { motion } from 'framer-motion';

// const STAGGER = 0.035;

// const 'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const STAGGER = 0.035;

const TextRoll: React.FC<{
  children: string;
  className?: string;
  center?: boolean;
}> = ({ children, className, center = false }) => {
  return (
    <motion.span
      initial='initial'
      whileHover='hovered'
      className={cn(
        'relative inline-block overflow-hidden align-bottom',
        className,
      )}
      style={{
        lineHeight: 1.2,   // ✅ IMPORTANT: allow wrapping
      }}
    >
      {/* Top layer */}
      <span className='block'>
        {children.split('').map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              key={`top-${i}`}
              className='inline-block'
              variants={{
                initial: { y: 0 },
                hovered: { y: '-100%' },
              }}
              transition={{ ease: 'easeInOut', delay }}
            >
              {l === ' ' ? '\u00A0' : l}
            </motion.span>
          );
        })}
      </span>

      {/* Bottom layer */}
      <span className='absolute left-0 top-0 block w-full'>
        {children.split('').map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              key={`bottom-${i}`}
              className='inline-block'
              variants={{
                initial: { y: '100%' },
                hovered: { y: 0 },
              }}
              transition={{ ease: 'easeInOut', delay }}
            >
              {l === ' ' ? '\u00A0' : l}
            </motion.span>
          );
        })}
      </span>
    </motion.span>
  );
};

export { TextRoll };
