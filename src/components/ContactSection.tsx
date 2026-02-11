import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-accent text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            href="https://wa.me/355677383866"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="bg-white/20 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">WhatsApp</h3>
            <p className="text-white/90 text-center">+355 67 738 3866</p>
          </a>

          <a
            href="tel:+355677383866"
            className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="bg-white/20 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">{t.contact.phone}</h3>
            <p className="text-white/90 text-center">+355 67 738 3866</p>
          </a>

          <a
            href="mailto:info@omegaevent.al"
            className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="bg-white/20 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Email</h3>
            <p className="text-white/90 text-center">info@omegaevent.al</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
