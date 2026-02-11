import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Music, Mic } from 'lucide-react';
import mariglenImg from '@/assets/MARIGLEN HAZIZAJ.jpg';
import pavlinImg from '@/assets/PAVLIN KOLA.jpg';
import danielaImg from '@/assets/daniela kovaci.jpg';
import arbenImg from '@/assets/arben pacani.jpg';
import ronaldoImg from '@/assets/RONALDO MESULI.jpg';
import izmoImg from '@/assets/IZMO DJ.jpg';
import sinanImg from '@/assets/sinan hoxha.jpg';
import vilsoniImg from '@/assets/vilsoni dj.jpg';
import ylliImg from '@/assets/ylli baka.jpg';
import klodianImg from '@/assets/Klodian Gjondrekaj.jpg';
import erikImg from '@/assets/erik lloshin.jpg';
import fatjonImg from '@/assets/fation dervishi.jpg';

const ArtistsPage = () => {
  const { t } = useLanguage();

  const artists: Array<{
    name: string;
    type: 'singer' | 'dj';
    image: string;
  }> = [
    {
      name: 'Sinan Hoxha',
      type: 'singer' as const,
      image: sinanImg,
    },
    {
      name: 'Ylli Baka',
      type: 'singer' as const,
      image: ylliImg,
    },
    {
      name: 'Erik Lloshi',
      type: 'singer' as const,
      image: erikImg,
    },
    {
      name: 'Fation Dervishi',
      type: 'singer' as const,
      image: fatjonImg,
    },
    {
      name: 'Arben Pacani',
      type: 'singer' as const,
      image: arbenImg,
    },
    {
      name: 'Ronaldo Mesuli',
      type: 'singer' as const,
      image: ronaldoImg,
    },
    {
      name: 'Mariglen Hazizaj',
      type: 'singer' as const,
      image: mariglenImg,
    },
   
    {
      name: 'Daniela Kovaci',
      type: 'singer' as const,
      image: danielaImg,
    },
    {
      name: 'Pavlin Kola',
      type: 'singer' as const,
      image: pavlinImg,
    },
    {
      name: 'Klodian Gjondrekaj',
      type: 'singer' as const,
      image: klodianImg,
    },

    {
      name: 'DJ Vilson',
      type: 'dj' as const,
      image: vilsoniImg,
    },
    {
      name: 'IZMO DJ',
      type: 'dj' as const,
      image: izmoImg,
    }
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
                {t.artists.title}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              {t.artists.subtitle}
            </p>
          </div>
        </section>

        {/* Artists Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {artists.map((artist, index) => (
                <ArtistCard key={index} artist={artist} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              {t.artists.subtitle}
            </p>
            <a
              href={`https://wa.me/355677383866?text=${encodeURIComponent(t.packages.whatsappMessage + ' Artist Booking')}`}
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

interface ArtistCardProps {
  artist: {
    name: string;
    type: 'singer' | 'dj';
    image: string;
  };
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  const { t } = useLanguage();
  
  const whatsappMessage = `${t.packages.whatsappMessage} ${artist.name} (${artist.type === 'dj' ? 'DJ' : 'Singer'})`;
  const whatsappUrl = `https://wa.me/355677383866?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-border cursor-pointer block"
    >
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Type Badge - Moved to bottom to avoid blocking faces */}
        <div className="absolute bottom-4 left-4">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm ${
            artist.type === 'dj' 
              ? 'bg-accent/80 text-white' 
              : 'bg-primary/80 text-white'
          }`}>
            {artist.type === 'dj' ? (
              <Music className="h-4 w-4" />
            ) : (
              <Mic className="h-4 w-4" />
            )}
            <span className="uppercase">{artist.type === 'dj' ? 'DJ' : 'Singer'}</span>
          </div>
        </div>
      </div>

      {/* Name Section */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {artist.name}
        </h3>
      </div>
    </a>
  );
};

export default ArtistsPage;

