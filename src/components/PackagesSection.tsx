import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface PackagesSectionProps {
  showAll?: boolean;
}

const PackagesSection = ({ showAll = false }: PackagesSectionProps) => {
  const { t } = useLanguage();

  const packages = [
    {
      name: t.packages.package1,
      features: [
        t.packages.package1Feature1,
        t.packages.package1Feature2,
      ],
    },
    {
      name: t.packages.package2,
      features: [
        t.packages.package2Feature1,
        t.packages.package2Feature2,
        t.packages.package2Feature3,
      ],
    },
    {
      name: t.packages.package3,
      features: [
        t.packages.package3Feature1,
        t.packages.package3Feature2,
        t.packages.package3Feature3,
      ].filter(Boolean),
    },
  ];

  const extraServices = [
    t.packages.extraService1,
    t.packages.extraService2,
    t.packages.extraService3,
    t.packages.extraService4,
  ];

  const displayedPackages = showAll ? packages : packages.slice(0, 3);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {displayedPackages.map((pkg, index) => (
            <div
              key={index}
              className="relative rounded-3xl p-8 bg-card border border-border shadow-lg flex flex-col"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {pkg.name}
                </h3>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="h-6 w-6 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/355677383866?text=${encodeURIComponent(t.packages.whatsappMessage + ' ' + pkg.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-6 rounded-full font-bold transition-all bg-primary text-white hover:bg-primary/90 mt-auto"
              >
                {t.packages.contactUs}
              </a>
            </div>
          ))}
        </div>

        {showAll && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              {t.packages.extraServices}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extraServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card border border-border rounded-2xl p-4 shadow-lg"
                >
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {!showAll && (
          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/packages">{t.hero.viewAll}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackagesSection;
