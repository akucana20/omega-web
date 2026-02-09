import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const ServicesPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-montserrat">
              {t.services.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
        </section>

        {/* All Services */}
        <ServicesSection showAll={true} />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
