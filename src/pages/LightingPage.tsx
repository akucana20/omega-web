import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Lightbulb } from 'lucide-react';
import ndricimi1 from '@/assets/Ndricimi1.jpeg';
import ndricimi2 from '@/assets/Ndricimi2.jpeg';
import ndricimi3 from '@/assets/Ndricimi3.jpeg';

const LightingPage = () => {
  const { t } = useLanguage();

  const images = [ndricimi1, ndricimi2, ndricimi3];

  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Lightbulb className="h-12 w-12" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat">
                {t.services.lighting}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              {t.services.lightingDesc}
            </p>
          </div>
        </section>

        {/* Lighting Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-border bg-card"
                >
                  <div className="relative overflow-hidden aspect-video bg-muted">
                    <img
                      src={image}
                      alt={t.services.lighting}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              {t.services.lightingDesc}
            </p>
            <a
              href={`https://wa.me/355677383866?text=${encodeURIComponent(
                t.packages.whatsappMessage + ' Lighting Service'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:scale-105 transition-transform"
            >
              {t.packages.contactUs}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LightingPage;


