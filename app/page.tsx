import Aboutme from '@/components/Aboutme';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Herosection from '@/components/Herosection';
import SelectedWorks from '@/components/SelectedWorks';
import ServicesSection from '@/components/ServiceSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <main className=' cursor-pointer'>
      <Header />
      <Herosection />
      <ServicesSection />
      <SelectedWorks />
      <SkillsSection />
      <Aboutme />
      <ContactSection />
      <Footer />
    </main>
  );
}
