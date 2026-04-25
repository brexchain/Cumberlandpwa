import { motion } from 'motion/react';
import { Settings, Wrench, Activity, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

const BOTTOM_ITEMS = [
  { label: 'Vibe', icon: Activity, id: 'about' },
  { label: 'Sync', icon: Calendar, id: 'contact' },
  { label: 'Gear', icon: Wrench, id: 'equipment' },
  { label: 'Flow', icon: Settings, id: 'economics' },
];

export function BottomNav() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const reversedItems = [...BOTTOM_ITEMS].reverse();
      for (const item of reversedItems) {
        const element = document.getElementById(item.id);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-1 p-1 bg-brand-surface/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
      {BOTTOM_ITEMS.map((item) => (
        <motion.button
          key={item.label}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollTo(item.id)}
          className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-colors ${activeSection === item.id ? 'bg-brand-primary text-white' : 'text-gray-400 hover:text-white'}`}
        >
          <item.icon size={20} />
          <span className="text-[10px] mt-1 font-bold uppercase tracking-tighter">{item.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
