import ScrollImage from './ScrollImage';
export default function SelectedWorks() {
  return (
    <section id='service' className='p-10 rounded-t-4xl bg-black '>
      <div id='services' className='relative  text-white  px-4 overflow-hidden'>
        <div className='grid grid-cols-1 md:grid-cols-2 p-10 mb-6 '>
          <div>
            <h1 className='font-extrabold text-6xl/relaxed'>
              what should i do
            </h1>
          </div>
          <div
            className='px-4 flex h-full justify-end col-span-10 mt-20 space-x-4
              '
          >
            <h3>(services)</h3>
            <h4 className='overflow-hidden text-lg/relaxed'>
              I specialize inbuilding full-stack webapplications <br />{' '}
              thatarefast ,reliable,anduser-friendly.Witha <br />
              solid foundation inbothfrontend and backend <br />
              technologies,Ihelpbringideastolifewhetherit'sforabusiness,astartup,oraproductteam.
            </h4>
          </div>
        </div>
      </div>
      <ScrollImage />
    </section>
  );
}
