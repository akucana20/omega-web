import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import eventHallRranxa from '@/assets/event hall - rranxa.jpg';
import eventHallFreskia from '@/assets/event hall - Freskia.jpg';
import eventHallDiadema from '@/assets/event hall - diadema.jpg';
import eventHallColis from '@/assets/event hall - colis.jpg';

interface PartnersSectionProps {
  showAll?: boolean;
}

const PartnersSection = ({ showAll = false }: PartnersSectionProps) => {
  const { t } = useLanguage();

  const partners = [
    { name: 'Coli Event', location: 'Kamëz', image: eventHallColis },
    { name: 'Diadema', location: 'Lezhë', image: eventHallDiadema },
    { name: 'Freskia', location: 'Lezhë', image: eventHallFreskia },
    { name: 'Rranxa', location: 'Shkodër', image: eventHallRranxa },
  ];

  const displayedPartners = showAll ? partners : partners.slice(0, 3);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.partners.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.partners.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPartners.map((partner, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div 
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${partner.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-montserrat">
                  {partner.name}
                </h3>
                {partner.location && (
                  <p className="text-white/90 mb-1 flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {partner.location}
                  </p>
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a
                  href={`https://wa.me/355677383866?text=${encodeURIComponent(t.packages.whatsappMessage + ' ' + partner.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform"
                >
                  {t.packages.contactUs}
                </a>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/partners">{t.hero.viewAll}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnersSection;
