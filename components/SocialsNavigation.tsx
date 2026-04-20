import { user } from '@/config/user';
import { TextRoll } from '@/hooks/TextRoll';
import Link from 'next/link';

const socialsNavigationItems = [
  {
    name: 'Instagram',
    href: `${user.socials.instagram}`,
  },
  {
    name: 'LinkedIn',
    href: `${user.socials.linkedin}`,
  },
  {
    name: 'GitHub',
    href: `${user.socials.github}`,
  },
];

export default function SocialsNavigation() {
  return (
    <section className='mt-2'>
      <ul className='space-y-4'>
        {socialsNavigationItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              target='_blank'
              className='relative flex cursor-pointer flex-col'
            >
              <div className='relative flex'>
                <TextRoll
                  center
                  className='text-muted-foreground uppercase leading-2.5'
                >
                  {item.name}
                </TextRoll>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
