import { TextRoll } from '@/hooks/TextRoll';
import Link from 'next/link';

const socialsNavigationItems = [
  {
    name: 'Instagram',
    href: '/#',
    decscription: '[0]',
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/monu-panwar',
    decscription: '[1]',
  },
  {
    name: 'Github',
    href: 'https://github.com/monupanwar1',
    decscription: '[2]',
  },
];

export default function SocialsNavigation() {
  return (
    <section className='mt-2'>
      <ul className='space-y-4'>
        {socialsNavigationItems.map((item, index) => (
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
