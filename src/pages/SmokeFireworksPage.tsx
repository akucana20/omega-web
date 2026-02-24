import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Sparkles } from 'lucide-react';
import logoPink from '@/assets/logo pink.png';

const SmokeFireworksPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Sparkles className="h-12 w-12" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat">
                {t.services.smokefireworks}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              {t.services.smokefireworksDesc}
            </p>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-border bg-card">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <video
                    src="/IMG_9550.MOV"
                    controls
                    poster={logoPink}
                    className="w-full h-full object-cover"
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              {t.services.smokefireworksDesc}
            </p>
            <a
              href={`https://wa.me/355677383866?text=${encodeURIComponent(t.packages.whatsappMessage + ' Smoke & Fireworks Service')}`}
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

export default SmokeFireworksPage;

