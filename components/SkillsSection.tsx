const skills = [
  {
    title: 'Languages & Tools',
    description: ['C++', 'Docker'],
  },
  {
    title: 'Frameworks & Libraries',
    description: ['React', 'Node.js', 'Express.js'],
  },
  {
    title: 'Core CS Concepts',
    description: ['DSA', 'DBMS', 'OOP'],
  },
];

export default function SkillsSection() {
  return (
    <section className='bg-black '>
      {/* main wrapper */}
      <div className='grid grid-cols-1 md:grid-cols-2 order-2 md:order-1 gap-8  p-4'>
        <div className='flex items-center '>
          <h1 className='font-bold text-5xl md:text-8xl text-white'>
            DEVELOPER <br /> DESIGNER <br />
            CREATOR/
          </h1>
        </div>
        <div className='items-center flex flex-col  justify-center mb-20 px-4'>
          <h1 className='font-bold text-5xl md:text-7xl text-white mb-18'>
            Skills
          </h1>

          <div className='wrapper text-white flex items-start order-1 md:order-2 justify-center'>
            {skills.map((item, index) => (
              <div className='space-x-3 ' key={index}>
                <div className='md:w-41 md:flex hidden space-x-6'>
                  <h1 className='mb-'>{item.title}</h1>
                </div>
                <div className='flex flex-col justify-center items-start space-x-14 space-y-1 mt-4'>
                  {item.description.map((item, index) => (
                    <ul key={item}>
                      <li>{item}</li>
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
