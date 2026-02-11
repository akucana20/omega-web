import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const { t } = useLanguage();

  const whatsappNumber = '+355677383866';
  const phoneNumber = '+355 67 738 3866';
  const phoneNumberClean = '+355677383866'; // Clean format for tel: links
  const email = 'info@omegaevent.al';

  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-montserrat">
              {t.contact.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-gradient-to-br from-primary to-accent text-white rounded-3xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t.contact.phone}</h3>
                <a href={`tel:${phoneNumberClean}`} className="text-white/90 hover:text-white">
                  {phoneNumber}
                </a>
              </div>

              <div className="bg-gradient-to-br from-primary to-accent text-white rounded-3xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t.contact.email}</h3>
                <a href={`mailto:${email}`} className="text-white/90 hover:text-white break-all">
                  {email}
                </a>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Jolly,+Kati+i+Dyte,+Lezhe,+Albania"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-primary to-accent text-white rounded-3xl p-8 text-center hover:shadow-xl transition-shadow cursor-pointer block"
              >
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Location</h3>
                <p className="text-white/90">
                  Jolly, Kati i Dyte, Lezhe
                </p>
              </a>

              <div className="bg-gradient-to-br from-primary to-accent text-white rounded-3xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Hours</h3>
                <p className="text-white/90">
                  Mon-Sun: 9:00-21:00
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-2xl font-bold text-lg px-10 py-6 rounded-full hover:scale-105 transition-transform"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Përshëndetje! Dua të mësoj më shumë për shërbimet tuaja.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>{t.contact.whatsapp}</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
