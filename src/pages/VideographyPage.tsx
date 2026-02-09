import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Video } from 'lucide-react';
import video1 from '@/assets/CLIP KUJTIM & ANA 1.mp4';
import video2 from '@/assets/CLIP KUJTIM & ANA 2.mp4';
import video3 from '@/assets/CLIP KUJTIM & ANA 3.mp4';
import logoPink from '@/assets/logo pink.png';

const VideographyPage = () => {
  const { t } = useLanguage();

  const videos = [
    video1,
    video2,
    video3,
  ];

  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Video className="h-12 w-12" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat">
                {t.services.videography}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              {t.services.videographyDesc}
            </p>
          </div>
        </section>

        {/* Videography Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-border bg-card"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <video
                      src={video}
                      controls
                      poster={logoPink}
                      className="w-full h-full object-cover"
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
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
              {t.services.videographyDesc}
            </p>
            <a
              href={`https://wa.me/355677383866?text=${encodeURIComponent(t.packages.whatsappMessage + ' Videography Service')}`}
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

export default VideographyPage;

