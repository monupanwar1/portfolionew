import ScrollImage from './ScrollImage';
import { TextAnimate } from './ui/text-animate';
export default function SelectedWorks() {
  return (
    // <Element name='service'>
    <section id='service min-h-screen'>
      <div
        id='services'
        className='relative bg-[#080807]  text-white px-4 overflow-hidden'
      >
        {/* service----heading */}
        <div className='grid grid-cols-1 md:grid-cols-2 p-4 mb-6 '>
          <div className=''>
            <TextAnimate
              className='font-bold  text-white text-5xl md:text-7xl'
              animation='blurInUp'
              by='word'
            >
              SELECTED WORKS /
            </TextAnimate>
          </div>
          <div
            className='md:inline-flex mt-4 md:mt-34 space-x-10  text-white/80
           '
          >
            <h3 className='text-white text-xl font-medium'>
              <TextAnimate animation='blurInUp' by='word'>
                (Projects)
              </TextAnimate>
            </h3>
            <h4 className='overflow-hidden text-xl/relaxed font-semibold md:pr-20 '>
              <TextAnimate animation='slideUp' by='word'>
                Thought fully crafted digital experiences that blend utility and
                aesthetics into something functional,memorable,and refined.
              </TextAnimate>
            </h4>
          </div>
        </div>
      </div>
        <ScrollImage />
    </section>
    // </Element>
  );
}
