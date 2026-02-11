import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Music, MapPin } from 'lucide-react';
import vilsoniImg from '@/assets/vilsoni dj.jpg';
import izmoImg from '@/assets/IZMO DJ.jpg';

const DJPage = () => {
  const { t } = useLanguage();

  const djs = [
    {
      name: 'DJ Vilson',
      location: 'Lezhë',
      image: vilsoniImg,
    },
    {
      name: 'IZMO DJ',
      location: 'Shkodër',
      image: izmoImg,
    },
  ];

  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Music className="h-12 w-12" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat">
                {t.services.dj}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              {t.services.djDesc}
            </p>
          </div>
        </section>

        {/* DJs Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {djs.map((dj, index) => (
                <DJCard key={index} dj={dj} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              {t.services.djDesc}
            </p>
            <a
              href={`https://wa.me/355677383866?text=${encodeURIComponent(t.packages.whatsappMessage + ' DJ Service')}`}
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

interface DJCardProps {
  dj: {
    name: string;
    location: string;
    image: string;
  };
}

const DJCard = ({ dj }: DJCardProps) => {
  return (
    <div className="group relative bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-border">
      {/* Image Section */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={dj.image}
          alt={dj.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content Section */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-2">{dj.name}</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">{dj.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DJPage;

