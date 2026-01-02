export default function Aboutme() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-[30%_70%]  py-10 bg-black min-h-svh px-4 overflow-hidden'>
      <div className='col-span-1 rounded-md p-4 flex justify-center'>
        <div className='md:h-125 md:w-90 w-full h-[60vh] bg-purple-800 rounded-md'></div>
      </div>
      <div className='col-span-1 flex flex-col  '>
        <div className='md:pl-40'>
          <h1 className='font-bold text-xl md:text-3xl md:max-w-3xl text-white'>
            I'm a software engineer driven by a passion for turning ideas
            into clean,intuitive digital experiences.
          </h1>
          <h4 className='py-10 flex flex-col md:flex text-xl space-x-6 gap-4 text-white mt-4'>
            <span className='text-nowrap text-lg'>(ABOUT ME)</span>i am a
            passionate SoftwareEngineer with a knack <br /> for building
            full-stackweb applications using <br /> modern technologies
            likeNext.js and TailwindCSS. <br />
            My journey in tech began with a curiosity for <br /> solving
            real-world problems through innovative <br /> solutions,which
            evolved into a love for crafting <br />
            user-centric digital experiences.
            <br />
            <br />
            Beyond coding,I thrive in collaborative <br /> environments and
            enjoy tackling challenging <br /> problems with creative solutions.{' '}
            <br />I aim to contribute to impactful projects <br />
            that make a difference in users' lives.
          </h4>
        </div>
      </div>
    </section>
  );
}
