import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, MessageCircle, Mail, Phone } from 'lucide-react';
import logoImage from '@/assets/logo pink.png';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/packages', label: t.nav.packages },
    { to: '/partners', label: t.nav.partners },
    { to: '/artists', label: t.nav.artists },
    { to: '/contact', label: t.nav.contact },
  ];

  // TikTok Icon Component
  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );

  const socialLinks = [
    {
      name: 'TikTok',
      icon: TikTokIcon,
      url: 'https://www.tiktok.com/@omega_eventt',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/omega_event',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/355677383866',
    },
  ];

  return (
    <footer className="bg-foreground/5 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="mb-4">
              <img 
                src={logoImage} 
                alt="Omega Event" 
                className="h-16 w-auto"
              />
            </Link>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Omega Event
          </h3>
            <p className="text-muted-foreground text-sm mb-4">
            www.omegaevent.al
          </p>
            {/* Contact Info */}
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a 
                href="tel:+355677383866" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+355 67 738 3866</span>
              </a>
              <a 
                href="mailto:info@omegaevent.al" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@omegaevent.al</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-4 text-foreground">
              {t.footer.quickLinks}
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-4 text-foreground">
              {t.footer.followUs}
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Omega Event. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
