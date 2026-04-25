import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code, Hammer, Layers } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[600px]">
        {/* Main Hero Bento Item */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="md:basis-2/3 glass-card p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group shadow-xl shadow-brand-primary/5"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[100px]" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-brand-accent mb-4">
              <Sparkles size={20} />
              <span className="font-medium tracking-wider uppercase text-xs">Cumberland 54</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-[1.1] mb-6">
              CUMBERLAND <span className="text-gradient">fifty-four</span> <br />
              Synergy Lab.
            </h2>
            <p className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
              Verein zur Förderung und Vernetzung von Kunst, Handwerk & Kultur. 200m² creative hub in Vienna featuring large display windows, co-working zones, and specialized labs for diverse crafts.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('artists');
                  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-brand-primary text-white rounded-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Meet the Team <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Side Grid */}
        <div className="md:basis-1/3 flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1 glass-card p-8 flex flex-col justify-center border-l-brand-primary/40 border-l-4"
          >
            <div className="flex gap-2 mb-4 text-brand-accent">
              <Code size={24} />
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Multi-Disciplinary</h3>
            <p className="text-sm text-gray-400">Labs for Wood, Metal, Ceramics, Textile, Leather, Glass, and Model building. Integrated kitchen and cellar infrastructure.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 glass-card p-8 flex flex-col justify-center border-l-brand-accent/40 border-l-4"
          >
            <Hammer className="text-brand-primary mb-4" size={32} />
            <h3 className="text-xl font-display font-bold mb-2">Heavy Craft</h3>
            <p className="text-sm text-gray-400">Full access to professional metalworking, woodworking, and welding equipment.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
