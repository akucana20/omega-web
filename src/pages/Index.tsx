import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import VideoReel from '@/components/VideoReel';
import PackagesSection from '@/components/PackagesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <VideoReel />
        <PackagesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
