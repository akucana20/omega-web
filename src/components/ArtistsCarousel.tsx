import { useLanguage } from '@/contexts/LanguageContext';
import { Mic } from 'lucide-react';
import sinanImg from '@/assets/sinan hoxha.jpg';
import ylliImg from '@/assets/ylli baka.jpg';
import mariglenImg from '@/assets/MARIGLEN HAZIZAJ.jpg';
import ronaldoImg from '@/assets/RONALDO MESULI.jpg';
import fatjonImg from '@/assets/fation dervishi.jpg';

const homeArtists = [
  {
    name: 'Sinan Hoxha',
    image: sinanImg,
  },
  {
    name: 'Ylli Baka',
    image: ylliImg,
  },
  {
    name: 'Mariglen Hazizaj',
    image: mariglenImg,
  },
  {
    name: 'Ronaldo Mesuli',
    image: ronaldoImg,
  },
  {
    name: 'Fation Dervishi',
    image: fatjonImg,
  },
];

const ArtistsCarousel = () => {
  const { t } = useLanguage();

  return (
    <section className="py-4 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {t.artists.title}
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent">
            {homeArtists.map((artist) => (
              <div
                key={artist.name}
                className="snap-start min-w-[110px] sm:min-w-[120px] md:min-w-[130px] bg-card border border-border rounded-lg shadow-sm overflow-hidden flex-shrink-0"
              >
                <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-1.5 left-1.5">
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-semibold bg-primary/80 text-white backdrop-blur-sm">
                      <Mic className="h-3 w-3" />
                      <span className="uppercase tracking-wide">Singer</span>
                    </div>
                  </div>
                </div>
                <div className="px-2 py-1.5 text-center">
                  <h3 className="text-xs font-semibold text-foreground">
                    {artist.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsCarousel;


