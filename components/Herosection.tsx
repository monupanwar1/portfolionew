function Herosection() {
  return (
    <main className='flex w-full flex-col items-center  justify-center'>
      <section className='relative'>
        {/* BIG NAME */}
        <h1
          className='font-extrabold text-[6vh] md:text-[18vh] w-full lg:text-[20vh] 
        '
        >
          MONU PANWAR
        </h1>
      </section>

      {/* content */}
      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 p-8'>
        {/* LEFT TEXT */}
        <div className='lg:col-span-4 space-y-6 max-w-4xl'>
          <div className='text-2xl opacity-60'>↘</div>

          <h6 className='text-3xl opacity-70 max-w-4xl'>
            Open to job opportunities worldwide.Passionate about building
            polished, intuitive, and thoughtful digital experiences that leave a
            mark.
          </h6>

          <button
            className='
          inline-flex items-center gap-2
          rounded-full bg-black px-6 py-3
          text-white text-sm
        '
          >
            CONTACT <span>↗</span>
          </button>
        </div>

        {/* IMAGE */}
        <div className='lg:col-span-4 flex justify-center'>
          <div
            className=' w-80 h-100
          max-w-[320px]
         sm:max-w-90
          overflow-hidden
          rounded-xl
          bg-gray-300'
          >
            <img
              src='/hero.jpg'
              alt='Hero'
              className='w-full h-full object-cover grayscale'
            />
          </div>
        </div>

        {/* RIGHT STATUS */}
        <div className='flex flex-col  lg:col-span-4  h-full justify-end-safe items-start md:items-end text-left md:text-right '>
          <p className='text-xs font-semibold uppercase tracking-widest opacity-70 whitespace-nowrap'>
            Available for work
          </p>
          <p className='text-4xl md:text-8xl font-bold'>JUN’25</p>
        </div>
      </section>
    </main>
  );
}

export default Herosection;
