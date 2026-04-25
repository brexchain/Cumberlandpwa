import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Github, Twitter, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="pt-24 pb-12 px-6 bg-brand-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center text-white font-bold text-2xl mb-8 shadow-large shadow-brand-primary/20">
              C54
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 italic">
              Ready to <span className="text-gradient">re-configure</span> your workflow?
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-md">
              Drop by for a coffee and a walkthrough of the machinery. We're open for collaborations, commissions, and industrial experiments.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-400 group cursor-pointer hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-brand-accent/50">
                  <MapPin size={20} />
                </div>
                <span>Cumberlandstrasse 54, 1070 Vienna</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 group cursor-pointer hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-brand-accent/50">
                  <Mail size={20} />
                </div>
                <span>lab@cumberland54.io</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 group cursor-pointer hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-brand-accent/50">
                  <Phone size={20} />
                </div>
                <span>+43 1 234 567 89</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 bg-linear-to-b from-white/5 to-transparent border-brand-primary/20">
            <h3 className="text-2xl font-display font-bold mb-6">Quick Sync</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 font-mono">Agent Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-accent outline-none transition-colors" placeholder="Type here..." />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 font-mono">Entity Link</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-accent outline-none transition-colors" placeholder="Email address" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 font-mono">Project Objective</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-accent outline-none transition-colors" placeholder="How can we synergize?"></textarea>
              </div>
              <button className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-brand-primary/20">
                Initalize Uplink
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm font-mono tracking-tighter">© 2026 C54 SYNERGY LAB // ALL RIGHTS RESERVED</p>
          <div className="flex gap-4">
            {[Twitter, Github, Instagram].map((Icon, i) => (
              <motion.a 
                key={i}
                whileHover={{ scale: 1.2, color: '#22d3ee' }}
                href="#" 
                className="text-gray-500 transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
