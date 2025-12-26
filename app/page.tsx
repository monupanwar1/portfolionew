import Header from '@/components/Header';
import Herosection from '@/components/Herosection';

export default function Home() {
  return (
    <main className='flex flex-col justify-center bg-[#E8E8E3] w-full min-h-screen'>
      <Header />
      <Herosection />
    </main>
  );
}
