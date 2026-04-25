import { motion } from 'motion/react';
import { ShieldCheck, Zap, Globe, Layers } from 'lucide-react';

const PERKS = [
  { title: '24/7 Access', desc: 'Secure biometric access to the lab at any hour of the day.', icon: Zap },
  { title: 'Tech Insurance', desc: 'Comprehensive coverage for experimental machinery use.', icon: ShieldCheck },
  { title: 'Community Pool', desc: 'Vortex fund access for shared resources and exhibitions.', icon: Layers },
  { title: 'Global Node', desc: 'Network with sibling labs in Berlin, London, and Tokyo.', icon: Globe },
];

export function Membership() {
  return (
    <section id="membership" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-brand-primary/10 blur-[150px] -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-12 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 border-brand-accent/20">
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-accent/20 blur-[80px]" />
          
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-[1.1]">
              Space is <span className="text-gradient">Locked</span>.
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl">
              Im Moment sind alle Plätze belegt. Du hast Interesse uns trotzdem kennen zu lernen? Kontaktiere uns gerne für zukünftige Zyklen.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-12">
              {PERKS.map((perk, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start">
                  <perk.icon className="text-brand-accent mb-3" size={24} />
                  <h4 className="font-bold text-sm mb-1">{perk.title}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">{perk.desc}</p>
                </div>
              ))}
            </div>
            <button className="w-full lg:w-fit px-12 py-5 bg-white text-brand-bg font-black rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
              APPLY FOR RESIDENCY
            </button>
          </div>

          <div className="flex-1 w-full lg:w-[400px]">
            <div className="glass-card p-8 bg-black/20 border-white/5 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Membership Tier</span>
                <span className="text-brand-accent font-bold">VORTEX CORE</span>
              </div>
              <div className="py-6 text-center">
                <div className="text-5xl font-display font-black mb-1">€200</div>
                <div className="text-xs text-gray-500 font-mono uppercase tracking-[0.2em]">Ab / Per Month Full Access</div>
              </div>
              <ul className="space-y-4">
                {['Unlimited 3D Printing', 'Priority CNC Booking', 'Exhibition Space', 'Member Only Workshops'].map((item, i) => (
                  <li key={i} className="text-sm flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <p className="text-[10px] text-brand-accent font-mono text-center">STATUS: ALL SPOTS OCCUPIED // 0 SLOTS REMAINING</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
