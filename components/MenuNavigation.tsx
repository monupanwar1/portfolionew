import { TextRoll } from '@/hooks/TextRoll';
import Link from 'next/link';

const menuNavigationItems = [
  {
    name: 'Home',
    href: '/',
    decscription: '[0]',
  },
  {
    name: 'Services',
    href: '/services',
    decscription: '[1]',
  },
  {
    name: 'Works',
    href: '/works',
    decscription: '[2]',
  },
  {
    name: 'About',
    href: '/about',
    decscription: '[3]',
  },
  {
    name: 'Contact',
    href: '/contact',
    decscription: '[4]',
  },
];

export default function MenuNavigation() {
  return (
    <section className='mt-2'>
      <ul className='space-y-4'>
        {menuNavigationItems.map((item, index) => (
          <Link
            className='relative flex cursor-pointer flex-col'
            key={index}
            href={item.href}
          >
            <div className='relative flex '>
              <TextRoll
                center
                className='text-muted-foreground uppercase leading-2.5'
              >
                {item.name}
              </TextRoll>
            </div>
          </Link>
        ))}
      </ul>
    </section>
  );
}
