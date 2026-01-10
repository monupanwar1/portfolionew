import { TextAnimate } from './ui/text-animate';

export default function Aboutme() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-[30%_70%]  py-10 bg-[#080807]  px-4 overflow-hidden'>
      <div className='col-span-1 rounded-md p-4 flex justify-center'>
        <div className='md:h-125 md:w-90 w-full h-[60vh] bg-purple-800 rounded-md'></div>
      </div>
      <div className='col-span-1 flex flex-col  '>
        <div className='md:pl-40'>
          <h1 className='font-semibold text-xl md:text-3xl md:max-w-3xl text-white'>
            <TextAnimate animation='blurInUp'>
              I'm a software engineer driven by a passion for turning ideas into
              clean,intuitive digital experiences.
            </TextAnimate>
          </h1>
          <div />
          <div className='flex flex-col md:flex-row gap-8 mt-8 md:mt-28 text-white/80'>
            {/* Label */}
            <div className='shrink-0'>
              <h3 className='text-white text-xl font-medium'>
                <TextAnimate animation='blurInUp' by='word'>
                  (ABOUT ME)
                </TextAnimate>
              </h3>
            </div>

            {/* Content */}
            <div className='flex flex-col gap-8 md:pr-20 max-w-3xl text-xl/relaxed font-medium'>
              <TextAnimate animation='slideUp' by='word'>
                I’m a passionate software engineer who builds modern,
                high-performance full-stack web applications using technologies
                like Next.js and Tailwind CSS. My journey began with a curiosity
                for solving real-world problems and has evolved into a deep
                focus on crafting clean, intuitive, and user-centric digital
                experiences. I enjoy turning complex ideas into scalable,
                reliable products that are both functional and elegant.
              </TextAnimate>

              <TextAnimate animation='slideUp' by='word'>
                Beyond coding, I thrive in collaborative environments and love
                tackling challenging problems with creative solutions. I’m
                driven by the desire to contribute to impactful projects and
                build products that genuinely make a difference in people’s
                lives.
              </TextAnimate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
