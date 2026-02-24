import { useLanguage } from '@/contexts/LanguageContext';
import { Camera, Video, Lightbulb, Music, Sparkles, Building2, Flower2, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import photographyCoverImg from '@/assets/1.jpg';
import videographyImg from '@/assets/Camera - Videography.jpg';
import decorationImg from '@/assets/Dekor.jpg';
import djSingerImg from '@/assets/DJ And Singer.jpg';
import venuesImg from '@/assets/Eventhalls.jpg';
import fireworksImg from '@/assets/Fireworks.jpg';
import lightingImg from '@/assets/Lightning.jpg';

interface ServicesSectionProps {
  showAll?: boolean;
}

const ServicesSection = ({ showAll = false }: ServicesSectionProps) => {
  const { t } = useLanguage();

  const services = [
    { icon: Camera, titleKey: 'photography', descKey: 'photographyDesc' },
    { icon: Video, titleKey: 'videography', descKey: 'videographyDesc' },
    { icon: Flower2, titleKey: 'decoration', descKey: 'decorationDesc' },
    { icon: Music, titleKey: 'djSingers', descKey: 'djSingersDesc' },
    { icon: Sparkles, titleKey: 'smokefireworks', descKey: 'smokefireworksDesc' },
    { icon: Lightbulb, titleKey: 'lighting', descKey: 'lightingDesc' },
    { icon: Building2, titleKey: 'venues', descKey: 'venuesDesc' },
  ];

  const imagesByService: Record<string, string> = {
    photography: photographyCoverImg,
    videography: videographyImg,
    decoration: decorationImg,
    djSingers: djSingerImg,
    smokefireworks: fireworksImg,
    lighting: lightingImg,
    venues: venuesImg,
  };

  const serviceLinks: Record<string, string> = {
    photography: '/photography',
    videography: '/videography',
    venues: '/venues',
    djSingers: '/artists',
    decoration: '/decoration',
    smokefireworks: '/smoke-fireworks',
    lighting: '/lighting',
  };

  // Show all services on homepage and services page
  const displayedServices = services;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
            const serviceLink = serviceLinks[service.titleKey];
            const CardContent = (
              <>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-accent">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {t.services[service.titleKey as keyof typeof t.services]}
                  </h3>
                  <div className="mb-4 rounded-2xl overflow-hidden aspect-video">
                    <img 
                      src={imagesByService[service.titleKey]}
                      alt={String(t.services[service.titleKey as keyof typeof t.services])}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {t.services[service.descKey as keyof typeof t.services]}
                  </p>
                </div>
              </>
            );

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-card p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border ${
                  serviceLink ? 'cursor-pointer' : ''
                }`}
              >
                {serviceLink ? (
                  <Link to={serviceLink} className="block">
                    {CardContent}
                  </Link>
                ) : (
                  CardContent
                )}
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default ServicesSection;
