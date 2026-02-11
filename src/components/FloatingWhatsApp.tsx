import React from 'react';

const FloatingWhatsApp = () => {
  const phone = '355677383866';
  const href = `https://wa.me/${phone}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open WhatsApp chat"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 blur-md opacity-40 bg-[#25D366] rounded-full scale-95 group-hover:scale-100 transition-transform" />
        <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#1ebe5d] shadow-2xl flex items-center justify-center ring-2 ring-white/60 hover:scale-105 transition-transform">
          {/* High-quality WhatsApp glyph (Font Awesome brand path) */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7 w-7 md:h-8 md:w-8 fill-white">
            <path d="M380.9 97.1C339 55.1 283.3 32 224.1 32 119.1 32 32 119.1 32 224c0 40.3 10.7 79.2 31 113.3L0 480l146.6-61.3c32.9 18 69.9 27.5 107.5 27.5h.1c105 0 192.1-86.9 192.1-192 0-59.2-23.1-114.9-65.1-156.9zM224.2 438.3h-.1c-33.1 0-65.5-8.9-93.7-25.7l-6.7-4-86.8 36.3 37-84.8-4.4-6.9C53.2 320.7 43.8 287.7 43.8 254c0-99.2 80.7-179.9 180-179.9 48.1 0 93.3 18.7 127.3 52.7 33.9 33.9 52.6 79.1 52.6 127.2 0 99.2-80.7 179.9-179.5 179.9zm101.6-138.5c-5.5-2.8-32.5-16.1-37.6-17.9-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.5-14.3 17.9-17.6 21.6-3.2 3.7-6.5 4.2-12 1.4-32.5-16.1-53.8-28.8-75.1-65.3-5.7-9.8 5.7-9.1 16.1-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.5-19.5 19.1-19.5 46.6s20 54.1 22.8 57.9c2.8 3.7 39.2 59.8 95 83.9 35.3 15.2 49.1 16.5 66.7 13.9 10.7-1.6 32.5-13.3 37.1-26.3 4.5-12.9 4.5-24 3.2-26.3-1.3-2.3-5.1-3.7-10.6-6.5z"/>
          </svg>
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;


