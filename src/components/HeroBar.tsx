import { motion, AnimatePresence, useDragControls } from 'motion/react';
import { ShoppingBag, Handshake, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const HERO_IMAGES = [
  'https://www.cumberland54.com/wp-content/uploads/2023/02/20220423_142923-1536x2048.jpg',
  'https://www.cumberland54.com/wp-content/uploads/2023/02/20220423_142907.jpg',
  'https://www.cumberland54.com/wp-content/uploads/2023/02/20220423_142939.jpg',
  'https://www.cumberland54.com/wp-content/uploads/2022/09/IMG_20220911_190321.jpg',
  'https://www.cumberland54.com/wp-content/uploads/2023/02/cropped-siteicon-192x192.png',
  'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1558231221-7298938992ca?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1565193298425-f860d5ed219b?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
].sort(() => Math.random() - 0.5);

export function HeroBar() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextStep, 6000);
    return () => clearInterval(timer);
  }, [nextStep]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const openWhatsApp = (type: 'buy' | 'collab') => {
    const msg = type === 'buy' 
      ? encodeURIComponent("Hallo C54 Team! Ich interessiere mich für den Kauf eines Kunstwerks aus der aktuellen Kollektion.")
      : encodeURIComponent("Hallo C54! Ich habe Interesse an einer künstlerischen Kollaboration oder Projektausführung.");
    window.open(`https://wa.me/43123456789?text=${msg}`, '_blank');
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-brand-bg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={HERO_IMAGES[index]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              nextStep();
            } else if (swipe > swipeConfidenceThreshold) {
              prevStep();
            }
          }}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-auto"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-b from-brand-bg/60 via-transparent to-brand-bg pointer-events-none" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="pointer-events-auto"
        >
          <h1 className="text-4xl md:text-7xl font-display font-black text-white mb-6 drop-shadow-2xl">
            C54 <span className="text-gradient">SYNERGY</span> LAB
          </h1>
          <p className="max-w-2xl text-gray-200 text-lg md:text-xl font-medium mb-10 drop-shadow-lg">
            Where industrial heritage meets contemporary vision. <br className="hidden md:block" />
            Discover artworks that redefine the physical and digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={() => openWhatsApp('buy')}
              className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-2xl shadow-brand-primary/40 group border border-white/10"
            >
              <ShoppingBag size={20} className="group-hover:rotate-12 transition-transform" /> 
              BUY OUR WORK
            </button>
            <button
              onClick={() => openWhatsApp('collab')}
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-bg rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-2xl shadow-brand-accent/40 group"
            >
              <Handshake size={20} className="group-hover:-rotate-12 transition-transform" /> 
              SYNC & COLLAB
            </button>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center z-20 pointer-events-none">
        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={prevStep}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-brand-primary/20 transition-colors border-white/20"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextStep}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-brand-primary/20 transition-colors border-white/20"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex gap-2 pointer-events-auto">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-brand-accent' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
      
      {/* WhatsApp Floating Hint */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        className="fixed bottom-24 right-6 z-50 md:hidden"
      >
        <button 
          onClick={() => openWhatsApp('collab')}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <MessageCircle size={30} />
        </button>
      </motion.div>
    </section>
  );
}
