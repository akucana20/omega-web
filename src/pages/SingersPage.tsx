import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mic } from 'lucide-react';
import mariglenImg from '@/assets/MARIGLEN HAZIZAJ.jpg';
import pavlinImg from '@/assets/PAVLIN KOLA.jpg';
import danielaImg from '@/assets/daniela kovaci.jpg';
import arbenImg from '@/assets/arben pacani.jpg';
import ronaldoImg from '@/assets/RONALDO MESULI.jpg';
import sinanImg from '@/assets/sinan hoxha.jpg';
import ylliImg from '@/assets/ylli baka.jpg';
import klodianImg from '@/assets/Klodian Gjondrekaj.jpg';
import erikImg from '@/assets/erik lloshin.jpg';
import fatjonImg from '@/assets/fation dervishi.jpg';

const SingersPage = () => {
  const { t } = useLanguage();

  // Filter only singers (not DJs)
  const singers = [
    {
      name: 'Sinan Hoxha',
      image: sinanImg,
    },
    {
      name: 'Ylli Baka',
      image: ylliImg,
    },
    {
      name: 'Erik Lloshi',
      image: erikImg,
    },
    {
      name: 'Ronaldo Mesuli',
      image: ronaldoImg,
    },
    {
      name: 'Mariglen Hazizaj',
      image: mariglenImg,
    },
    {
      name: 'Arben Pacani',
      image: arbenImg,
    },
    {
      name: 'Daniela Kovaci',
      image: danielaImg,
    },
    {
      name: 'Pavlin Kola',
      image: pavlinImg,
    },
    {
      name: 'Klodian Gjondrekaj',
      image: klodianImg,
    },
    {
      name: 'Fation Dervishi',
      image: fatjonImg,
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
              <Mic className="h-12 w-12" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat">
                {t.services.singers}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              {t.services.singersDesc}
            </p>
          </div>
        </section>

        {/* Singers Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {singers.map((singer, index) => (
                <SingerCard key={index} singer={singer} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              {t.services.singersDesc}
            </p>
            <a
              href={`https://wa.me/355677383866?text=${encodeURIComponent(t.packages.whatsappMessage + ' Singer Booking')}`}
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

interface SingerCardProps {
  singer: {
    name: string;
    image: string;
  };
}

const SingerCard = ({ singer }: SingerCardProps) => {
  return (
    <div className="group relative bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-border">
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={singer.image}
          alt={singer.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Singer Badge - Moved to bottom to avoid blocking faces */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold bg-primary/80 text-white backdrop-blur-sm">
            <Mic className="h-4 w-4" />
            <span className="uppercase">Singer</span>
          </div>
        </div>
      </div>

      {/* Name Section */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {singer.name}
        </h3>
      </div>
    </div>
  );
};

export default SingersPage;

