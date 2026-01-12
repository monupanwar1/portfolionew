import { TextRoll } from '@/hooks/TextRoll';
import DecryptedText from './DecryptedText';
import { TextAnimate } from './ui/text-animate';

const skills = [
  {
    title: 'Languages & Tools',
    description: [
      'C++',
      'Typescript',
      'Javascript',
      'Git',
      'Postman',
      'Docker',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    description: [
      'React',
      'Node.js',
      'Express.js',
      'TailwindCSS',
      'Framer Motion',
      'Gsap',
    ],
  },
  {
    title: 'Core CS Concepts',
    description: ['DSA', 'DBMS', 'OOPS', 'Operating System'],
  },
];

export default function SkillsSection() {
  return (
    <section className='bg-[#080807] '>
      {/* main wrapper */}
      <div className='grid grid-cols-1 md:grid-cols-2  gap-8  p-4'>
        <div className='flex items-center order-2 md:order-1 '>
          <h1 className='font-bold text-5xl md:text-8xl text-white mb-4'>
            <TextAnimate animation='blurInUp' by='word'>
              DEVELOPER DESIGNER CREATOR/
            </TextAnimate>
          </h1>
        </div>
        <div className='items-center flex flex-col order-1 md:order-2 justify-center mb-20 px-4'>
          <h1 className='font-bold text-6xl md:text-7xl text-white mb-18'>
            Skills
          </h1>

          <div className='wrapper text-white flex items-start  justify-center'>
            {skills.map((item, index) => (
              <div className='space-x-3 ' key={index}>
                <div className='md:w-44 md:flex hidden space-x-6'>
                  <h1 className='font-bold text-xl'>{item.title}</h1>
                </div>
                <div className='flex flex-col  h-auto justify-center items-start space-x-10 space-y-3 mt-4'>
                  {item.description.map((item, index) => (
                    <ul key={item}>
                      <li className='mb-2 font-normal text-sm md:text-xl'>
                        <TextRoll>{item}</TextRoll>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div></div> */}
    </section>
  );
}
