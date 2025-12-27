import Clock from './Clock';
import MenuNavigation from './MenuNavigation';

export default function Footer() {
  return (
    <section className='p-10'>
      {/* {--top--} */}
      <div className='grid grid-cols-[50%_50%] md:grid-cols-[40%_30%_30%] gap-8 px-4 '>
        <div>
          <div className='col-span-1 border-b border-neutral-800/40'>
            <h1 className='font-semibold text-2xl w-full'>Menu</h1>
          </div>
          <MenuNavigation />
        </div>
        <div className='col-span-1 border-b border-neutral-800/40'>
          <h1 className='font-semibold text-2xl w-full '>Menu</h1>
        </div>{' '}
      </div>
      {/* {--bottom--} */}
      <div className='flex justify-end pr-[3%] md:pr-[10%] mb-8 mt-10'>
        <Clock />
      </div>
    </section>
  );
}
