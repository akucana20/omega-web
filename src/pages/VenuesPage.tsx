import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, MapPin, Play } from 'lucide-react';
import diademaImg from '@/assets/event hall - diadema.jpg';
import freskiaImg from '@/assets/event hall - Freskia.jpg';
import rranxaImg from '@/assets/event hall - rranxa.jpg';
import colisImg from '@/assets/event hall - colis.jpg';
import logoPink from '@/assets/logo pink.png';
import { useState } from 'react';

const VenuesPage = () => {
  const { t } = useLanguage();

  const venues = [
    {
      name: 'DIADEMA',
      location: 'Lezhë',
      description: 'DIADEMA në Lezhë është një sallë dasmash që shquhet për stilin e saj të veçantë dhe atmosferën elegante që ofron. Ambienti i rafinuar, ndriçimi i kuruar dhe organizimi profesional e kthejnë çdo event në një përvojë unike. Çdo detaj është menduar për të reflektuar klas, shije dhe emocione të paharrueshme. DIADEMA është zgjedhja perfekte për ata që kërkojnë një dasmë finesë.',
      image: diademaImg,
      video: 'https://fxxenlsettps35yw.public.blob.vercel-storage.com/diadema%20video.mp4',
    },
    {
      name: 'FRESKIA',
      location: 'Lezhë',
      description: 'FRESKIA në Lezhë është një sallë dasmash e njohur për ambientin e saj të ndritshëm, elegant dhe mikpritës. Dizajni modern, hapësirat e kuruara me shije dhe shërbimi korrekt krijojnë kushtet ideale për evente të veçanta. Çdo festë në FRESKIA shndërrohet në një moment të bukur dhe të organizuar me kujdes. Zgjedhje e shkëlqyer për një dasmë të paharrueshme në Lezhë.',
      image: freskiaImg,
      video: null,
    },
    {
      name: 'Rranxa Event',
      location: 'Shkodër',
      description: 'Rranxa Event është një nga sallat e dasmave më të sugjeruara në Shkodër, e njohur për elegancën, ambientin luksoz dhe shërbimin profesional. Me një dizajn modern dhe hapësira të kuruara në detaje, Rranxa Event krijon atmosferën perfekte për ditën tuaj më të rëndësishme. Stafi i përkushtuar kujdeset që çdo moment të jetë i organizuar me përpikmëri dhe stil. Zgjidhja ideale për një dasmë të paharrueshme në zemër të Shkodrës.',
      image: rranxaImg,
      video: 'https://fxxenlsettps35yw.public.blob.vercel-storage.com/RRANXA%20EVENT%20VIDEO.mp4',
    },
    {
      name: 'COLIS EVENT',
      location: 'Kamëz',
      description: 'COLIS EVENT në Kamëz është një sallë dasmash moderne që ofron elegancë, hapësira komode dhe organizim profesional. Ambienti i kuruar me stil dhe ndriçimi i sofistikuar krijojnë atmosferën ideale për çdo festë të rëndësishme. Me vëmendje ndaj çdo detaji, COLIS EVENT garanton një përvojë të bukur dhe të paharrueshme për ju dhe të ftuarit tuaj.',
      image: colisImg,
      video: null,
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
              <Building2 className="h-12 w-12" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat">
                {t.partners.title}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              {t.partners.subtitle}
            </p>
          </div>
        </section>

        {/* Venues Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {venues.map((venue, index) => (
                <VenueCard key={index} venue={venue} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              {t.partners.subtitle}
            </p>
            <a
              href={`https://wa.me/355677383866?text=${encodeURIComponent(t.packages.whatsappMessage + ' Event Hall')}`}
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

interface VenueCardProps {
  venue: {
    name: string;
    location: string;
    description: string;
    image: string;
    video: string | null;
  };
}

const VenueCard = ({ venue }: VenueCardProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="group relative bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-border">
      {/* Image/Video Section */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {showVideo && venue.video ? (
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            poster={logoPink}
            onEnded={() => setShowVideo(false)}
          >
            <source src={venue.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <>
            <img
              src={venue.image}
              alt={venue.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            {venue.video && (
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors"
                aria-label="Play video"
              >
                <div className="bg-white/90 rounded-full p-4 hover:scale-110 transition-transform">
                  <Play className="h-12 w-12 text-primary fill-primary" />
                </div>
              </button>
            )}
          </>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-2">{venue.name}</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">{venue.location}</span>
            </div>
          </div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed text-lg">
          {venue.description}
        </p>
      </div>
    </div>
  );
};

export default VenuesPage;

