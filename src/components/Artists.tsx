import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Globe, MessageCircle, ShoppingBag, Handshake, X } from 'lucide-react';
import { useState } from 'react';

const ARTISTS = [
  {
    name: 'Hannah König',
    role: 'Bühnen-/Kostümbildnerin & Ledergalanteristin',
    img: 'https://www.cumberland54.com/wp-content/uploads/2023/02/20220423_142923-1536x2048.jpg',
    tags: ['Leder', 'Stoff', 'Stick'],
    url: 'https://www.hannahkoenig.at/'
  },
  {
    name: 'Jörg Kammerhofer',
    role: 'Prototypen & Spezialanfertigungen',
    img: 'https://www.cumberland54.com/wp-content/uploads/2023/02/20220423_142907.jpg',
    tags: ['Maschinen', 'Technik'],
    url: 'http://www.cumberland54.com/?page_id=65'
  },
  {
    name: 'Florian Tanzer',
    role: 'Launische Keramik & Video-Design',
    img: 'https://www.cumberland54.com/wp-content/uploads/2023/02/20220423_142939.jpg',
    tags: ['Keramik', 'Video'],
    url: 'https://www.lumalaunisch.com/'
  },
  {
    name: 'Anissa Kuhn',
    role: 'Bildende Künstlerin & Innenarchitektin',
    img: 'https://www.cumberland54.com/wp-content/uploads/2022/09/IMG_20220911_190321.jpg',
    tags: ['Wachs', 'Gips', '3D-Gestaltung'],
    url: 'http://www.cumberland54.com/?page_id=555'
  },
  {
    name: 'Spion aka M. Jackson',
    role: 'Concept Art & Fashion',
    img: 'https://www.cumberland54.com/wp-content/uploads/2023/02/cropped-siteicon-192x192.png',
    tags: ['Fashion', 'Öl', 'Exklusiv'],
    url: 'https://www.cumberland54.com/?page_id=48'
  }
];

export function Artists() {
  const [activeInquiry, setActiveInquiry] = useState<string | null>(null);

  const openWhatsApp = (name: string, type: 'buy' | 'collab') => {
    let msg = '';
    if (type === 'buy') {
      msg = encodeURIComponent(`Hallo C54! Ich interessiere mich für den Kauf von Werken von ${name}. Was ist derzeit verfügbar?`);
    } else {
      msg = encodeURIComponent(`Hallo C54! Ich würde gerne mit ${name} an einem Projekt zusammenarbeiten. Könnt ihr den Kontakt herstellen?`);
    }
    window.open(`https://wa.me/43123456789?text=${msg}`, '_blank');
    setActiveInquiry(null);
  };

  const openPortfolio = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="artists" className="py-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">Resident <span className="text-gradient">Innovators</span></h2>
            <p className="text-gray-400 max-w-xl">Im CoCreativity Cumberland gibt es natürlich auch viele Kunstwerke und die Künstler*innen dahinter zu entdecken.</p>
          </div>
          <button 
            onClick={() => window.open('https://www.cumberland54.com/?page_id=48', '_blank')}
            className="px-8 py-4 glass-card font-bold hover:bg-white/5 transition-colors border-brand-accent/30 text-brand-accent"
          >
            Alle KünstlerInnen
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTISTS.map((artist, idx) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card overflow-hidden h-[500px] relative flex flex-col justify-end"
            >
              <img 
                src={artist.img} 
                alt={artist.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-transparent to-transparent opacity-80" />
              
              <div className="relative z-10 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  {artist.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-brand-primary/20 backdrop-blur-md rounded border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold mb-1">{artist.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{artist.role}</p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 relative">
                  <div className="flex-1 relative">
                    <button 
                      onClick={() => setActiveInquiry(activeInquiry === artist.name ? null : artist.name)}
                      className="w-full bg-brand-primary text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-brand-primary/80 transition-colors"
                    >
                      <MessageCircle size={16} /> {activeInquiry === artist.name ? 'Cancel' : 'Inquiry'}
                    </button>

                    <AnimatePresence>
                      {activeInquiry === artist.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute bottom-full left-0 right-0 mb-2 p-2 glass-card flex flex-col gap-2 z-20"
                        >
                          <button 
                            onClick={() => openWhatsApp(artist.name, 'buy')}
                            className="flex items-center gap-2 text-xs font-bold p-2 hover:bg-white/5 rounded transition-colors text-brand-accent px-4"
                          >
                            <ShoppingBag size={14} /> Buy Works
                          </button>
                          <button 
                            onClick={() => openWhatsApp(artist.name, 'collab')}
                            className="flex items-center gap-2 text-xs font-bold p-2 hover:bg-white/5 rounded transition-colors text-brand-accent px-4"
                          >
                            <Handshake size={14} /> Collaboration
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => openPortfolio(artist.url)}
                      className="w-10 h-10 glass-card flex items-center justify-center text-gray-400 hover:text-white"
                      title="Portfolio"
                    >
                      <Globe size={18} />
                    </button>
                    <button className="w-10 h-10 glass-card flex items-center justify-center text-gray-400 hover:text-white">
                      <Instagram size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
