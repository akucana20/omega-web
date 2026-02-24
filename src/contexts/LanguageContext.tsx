import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'al' | 'en';

interface Translations {
  nav: {
    home: string;
    services: string;
    packages: string;
    partners: string;
    artists: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    viewAll: string;
    viewPackages: string;
  };
  services: {
    title: string;
    subtitle: string;
    photography: string;
    photographyDesc: string;
    videography: string;
    videographyDesc: string;
    decoration: string;
    decorationDesc: string;
    dj: string;
    djDesc: string;
    singers: string;
    singersDesc: string;
    djSingers: string;
    djSingersDesc: string;
    smokefireworks: string;
    smokefireworksDesc: string;
    lighting: string;
    lightingDesc: string;
    venues: string;
    venuesDesc: string;
    viewAllCta: string; // bilingual CTA label
  };
  packages: {
    title: string;
    subtitle: string;
    package1: string;
    package1Feature1: string;
    package1Feature2: string;
    package2: string;
    package2Feature1: string;
    package2Feature2: string;
    package2Feature3: string;
    package3: string;
    package3Feature1: string;
    package3Feature2: string;
    package3Feature3: string;
    package3Feature4: string;
    extraServices: string;
    extraService1: string;
    extraService2: string;
    extraService3: string;
    extraService4: string;
    popular: string;
    contactUs: string;
    whatsappMessage: string;
  };
  partners: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    whatsapp: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    photo: string;
    video: string;
    videoShowreel: string;
  };
  artists: {
    title: string;
    subtitle: string;
  };
  footer: {
    followUs: string;
    quickLinks: string;
  };
}

const translations: Record<Language, Translations> = {
  al: {
    nav: {
      home: '',
      services: 'Shërbimet',
      packages: 'Paketa',
      partners: 'Sallat e Eventeve',
      artists: 'Artistët Tanë',
      contact: 'Kontakti'
    },
    hero: {
      title: 'Omega Event - Na ofroi gjithçka!',
      subtitle: 'Foto, video, salla perfekte, dekor magjik, ndriçim, tym, fishekzjarre & muzikë',
      cta: 'Rezervo Tani',
      viewAll: 'Shiko të Gjitha',
      viewPackages: 'Shiko Paketat'
    },
    services: {
      title: 'Shërbimet Tona',
      subtitle: 'Gjithçka që ju nevojitet për një event të paharrueshme',
      photography: 'Fotografi',
      photographyDesc: 'Fotografi profesionale për të kapur çdo moment të veçantë të eventit tuaj',
      videography: 'Videografi',
      videographyDesc: 'Video cilësi të lartë për të ruajtur kujtimet tuaja përgjithmonë',
      decoration: 'Dekor & Dekorim',
      decorationDesc: 'Dekorime elegante dhe të personalizuara për eventin tuaj',
      dj: 'DJ & Muzikë',
      djDesc: 'Muzikë e gjallë dhe DJ profesional për atmosferë të shkëlqyer',
      singers: 'Këngëtarët',
      singersDesc: 'Këngëtarë profesionistë për të krijuar atmosferë të paharrueshme në eventin tuaj',
      djSingers: 'DJ & Këngëtarët',
      djSingersDesc: 'DJ dhe këngëtarë profesionistë për atmosferë të paharrueshme',
      smokefireworks: 'Tym & Fishekzjarre',
      smokefireworksDesc: 'Efekte speciale me tym dhe fishekzjarre për momente mahnitëse',
      lighting: 'Ndriçim Profesional',
      lightingDesc: 'Ndriçim dhe efekte dritash për atmosferë perfekte',
      venues: 'Sallë eventesh',
      venuesDesc: 'Partneritet me sallat më të mira të eventve në Shqipëri',
      viewAllCta: 'Shiko të Gjitha'
    },
    packages: {
      title: 'Paketa Speciale',
      subtitle: 'Zgjidhni paketën që ju përshtatet më së miri',
      package1: 'PAKETA 1',
      package1Feature1: '1 Kameraman ne ronin',
      package1Feature2: '1 fotograf',
      package2: 'PAKETA 2',
      package2Feature1: '1 Kameraman ne ronin',
      package2Feature2: '1 Kameraman go pro',
      package2Feature3: '1 fotograf',
      package3: 'PAKETA 3',
      package3Feature1: '2 Kameraman ne ronin',
      package3Feature2: '1 Kameraman go pro',
      package3Feature3: '2 fotograf',
      package3Feature4: '',
      extraServices: 'EXTRA SHERBIME',
      extraService1: '1 KAMERAMAN PARADITE',
      extraService2: '1 FOTOGRAF PARADITE',
      extraService3: 'CLIP & PHOTOSHOOTING',
      extraService4: 'DRON',
      popular: 'Më i Popullarizuar',
      contactUs: 'Na Kontaktoni',
      whatsappMessage: 'Përshëndetje, jam i interesuar për'
    },
    partners: {
      title: 'Sallat e Eventeve',
      subtitle: 'Bashkëpunojmë me sallat më të mira të eventve'
    },
    contact: {
      title: 'Na Kontaktoni',
      subtitle: 'Jemi të gatshëm të planifikojmë eventin tuaj të paharrueshme',
      phone: 'Telefon',
      email: 'Email',
      whatsapp: 'Dërgoni Mesazh në WhatsApp'
    },
    portfolio: {
      title: 'Portofolio',
      subtitle: 'Shikoni punën tonë të mahnitshme dhe klientët tanë të kënaqur',
      photo: 'Foto',
      video: 'Video',
      videoShowreel: 'Video Showreel'
    },
    artists: {
      title: 'Artistët Tanë',
      subtitle: 'Bashkëpunojmë me artistët më të talentuar në Shqipëri'
    },
    footer: {
      followUs: 'Na Ndiqni',
      quickLinks: 'Lidhje të Shpejta'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      packages: 'Packages',
      partners: 'Venues',
      artists: 'Our Artists',
      contact: 'Contact'
    },
    hero: {
      title: 'Omega Event - We Offer Everything!',
      subtitle: 'Photos, videos, perfect venue, magical decor, lighting, smoke, fireworks & music',
      cta: 'Book Now',
      viewAll: 'View All',
      viewPackages: 'View Packages'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Everything you need for an unforgettable event',
      photography: 'Photography',
      photographyDesc: 'Professional photography to capture every special moment of your event',
      videography: 'Videography',
      videographyDesc: 'High-quality video to preserve your memories forever',
      decoration: 'Decor & Decoration',
      decorationDesc: 'Elegant and personalized decorations for your event',
      dj: 'DJ & Music',
      djDesc: 'Live music and professional DJ for an amazing atmosphere',
      singers: 'Singers',
      singersDesc: 'Professional singers to create an unforgettable atmosphere at your event',
      djSingers: 'DJ & Singers',
      djSingersDesc: 'Professional DJs and singers for an unforgettable atmosphere',
      smokefireworks: 'Smoke & Fireworks',
      smokefireworksDesc: 'Special effects with smoke and fireworks for stunning moments',
      lighting: 'Professional Lighting',
      lightingDesc: 'Lighting and light effects for the perfect atmosphere',
      venues: 'Event Venues',
      venuesDesc: 'Partnerships with the best event venues in Albania',
      viewAllCta: 'View All'
    },
    packages: {
      title: 'Special Packages',
      subtitle: 'Choose the package that suits you best',
      package1: 'PACKAGE 1',
      package1Feature1: '1 Cameraman with Ronin',
      package1Feature2: '1 photographer',
      package2: 'PACKAGE 2',
      package2Feature1: '1 Cameraman with Ronin',
      package2Feature2: '1 GoPro Cameraman',
      package2Feature3: '1 photographer',
      package3: 'PACKAGE 3',
      package3Feature1: '2 Cameramen with Ronin',
      package3Feature2: '1 GoPro Cameraman',
      package3Feature3: '2 photographers',
      package3Feature4: '',
      extraServices: 'EXTRA SERVICES',
      extraService1: '1 CAMERAMAN MORNING',
      extraService2: '1 PHOTOGRAPHER MORNING',
      extraService3: 'CLIP & PHOTOSHOOTING',
      extraService4: 'DRONE',
      popular: 'Most Popular',
      contactUs: 'Contact Us',
      whatsappMessage: 'Hello, I am interested in'
    },
    partners: {
      title: 'Venues',
      subtitle: 'We collaborate with the best event venues'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are ready to plan your unforgettable event',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'Send WhatsApp Message'
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'See our amazing work and happy clients',
      photo: 'Photo',
      video: 'Video',
      videoShowreel: 'Video Showreel'
    },
    artists: {
      title: 'Our Artists',
      subtitle: 'We collaborate with the most talented artists in Albania'
    },
    footer: {
      followUs: 'Follow Us',
      quickLinks: 'Quick Links'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('al');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
