import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Camera } from 'lucide-react';
import photographyImg1 from '@/assets/image-photography1.jpeg';
import photographyImg2 from '@/assets/image-photography2.jpeg';
import photographyImg3 from '@/assets/image-photography3.jpeg';
import photographyImg4 from '@/assets/image-photography4.jpeg';
import photographyImg5 from '@/assets/image-photography5.jpeg';
import photographyImg6 from '@/assets/image-photography6.jpeg';
import photographyImg7 from '@/assets/image-photography7.jpeg';
import photographyImg8 from '@/assets/image-photography8.jpeg';

const PhotographyPage = () => {
  const { t } = useLanguage();

  const photographyImages = [
    photographyImg1,
    photographyImg2,
    photographyImg3,
    photographyImg4,
    photographyImg5,
    photographyImg6,
    photographyImg7,
    photographyImg8,
  ];

  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Camera className="h-12 w-12" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat">
                {t.services.photography}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              {t.services.photographyDesc}
            </p>
          </div>
        </section>

        {/* Photography Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {photographyImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-border bg-card"
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={image}
                      alt={`Photography ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
              {t.services.photographyDesc}
            </p>
            <a
              href={`https://wa.me/355677383866?text=${encodeURIComponent(t.packages.whatsappMessage + ' Photography Service')}`}
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

export default PhotographyPage;

