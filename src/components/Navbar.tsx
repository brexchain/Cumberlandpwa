import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Zap, Cpu, Users, Wallet, MessageSquare, Layers, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'about', label: 'Vibe', icon: Zap },
  { id: 'artists', label: 'Künstler', icon: Users },
  { id: 'equipment', label: 'Machinery', icon: Cpu },
  { id: 'economics', label: 'Flow', icon: Wallet },
  { id: 'membership', label: 'Vortex', icon: Layers },
  { id: 'contact', label: 'Sync', icon: MessageSquare },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Scroll spy logic
      const sections = [...NAV_ITEMS].map(item => item.id).reverse();
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light');
  };

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
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-4xl ${isScrolled ? 'top-4' : 'top-8'}`}>
        <div className="glass-card px-6 py-3 flex items-center justify-between shadow-2xl shadow-brand-primary/10">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              C54
            </div>
            <span className="font-display font-bold tracking-tight hidden sm:block">Lab</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${activeSection === item.id ? 'text-brand-accent' : 'text-gray-400 hover:text-brand-accent'}`}
              >
                <item.icon size={14} />
                {item.label}
              </button>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-brand-accent transition-colors"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <button 
            className="md:hidden text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-xl md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-2xl font-display font-medium text-gray-100 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-brand-accent">
                    <item.icon size={24} />
                  </div>
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
