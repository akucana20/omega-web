import { useLanguage } from '@/contexts/LanguageContext';
import { Camera, Play } from 'lucide-react';

const PortfolioSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Photography Portfolio */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={`photo-${item}`}
              className="group relative aspect-square bg-muted rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="h-12 w-12 text-white" />
              </div>
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Camera className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">{t.portfolio.photo} {item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Portfolio */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            {t.portfolio.videoShowreel}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={`video-${item}`}
                className="group relative aspect-video bg-muted rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white rounded-full p-4">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Play className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">{t.portfolio.video} {item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
