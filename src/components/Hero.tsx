import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero.jpg';
import heroImageHorizontal from '@/assets/hero horizontally.jpeg';

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pt-16 pb-20 md:pb-0">
      {/* Mobile/Tablet Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40" />
      </div>
      
      {/* Desktop Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${heroImageHorizontal})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-48 md:pt-48">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-montserrat leading-tight">
          {t.hero.title}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            asChild
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
          >
            <Link to="/contact">{t.hero.cta}</Link>
          </Button>
          <Button 
            size="lg" 
            asChild
            variant="outline"
            className="border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:text-white font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Link to="/packages" key={language}>{t.hero.viewPackages}</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
