import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, Home, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logoImage from '@/assets/logo.png';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: '/', label: <Home className="h-4 w-4" />, isIcon: true },
    { to: '/services', label: t.nav.services },
    { to: '/packages', label: t.nav.packages },
    { to: '/partners', label: t.nav.partners },
    { to: '/artists', label: t.nav.artists },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-primary to-accent shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
              <Link to="/" className="flex items-center">
                <img 
                  src={logoImage} 
                  alt="Omega Event" 
                  className="h-20 sm:h-24 w-auto transition-all duration-300 hover:scale-105"
                />
              </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.to} 
                className={`flex items-center gap-2 transition-colors font-medium ${
                  isActive(link.to) ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'al' ? 'en' : 'al')}
              className="gap-2 text-white hover:bg-white/10"
            >
              <Globe className="h-4 w-4" />
              <span className="font-semibold">{language === 'al' ? 'EN' : 'AL'}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 bg-primary/95">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.to} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 transition-colors font-medium px-2 py-2 rounded-lg ${
                    isActive(link.to) 
                      ? 'text-white bg-white/10' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
