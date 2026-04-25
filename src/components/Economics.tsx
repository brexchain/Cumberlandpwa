import { motion } from 'motion/react';
import { ExternalLink, ShoppingCart, Presentation, Briefcase, Users } from 'lucide-react';

const REVENUE_STREAMS = [
  {
    title: 'Machine Day-Passes',
    desc: 'Hourly or daily rental of high-end industrial equipment.',
    icon: ShoppingCart,
    stats: 'From €200',
    tag: 'Active'
  },
  {
    title: 'Corporate Sprints',
    desc: 'Bespoke high-end workshop packages for creative teams.',
    icon: Briefcase,
    stats: 'From €1.2k',
    tag: 'Premium'
  },
  {
    title: 'Pop-Up Showcases',
    desc: 'Short-term industrial space rental for exhibitions and sales.',
    icon: Presentation,
    stats: 'Event-based',
    tag: 'Limited'
  },
  {
    title: 'Focus Sprints',
    desc: 'Fixed-term project support and heavy machinery access.',
    icon: Users,
    stats: 'Monthly Subs',
    tag: 'Beta'
  }
];

export function Economics() {
  const openWhatsApp = (stream: string) => {
    const msg = encodeURIComponent(`Hi C54 Lab! I am interested in your ${stream} offerings. Can we chat about the details?`);
    window.open(`https://wa.me/491234567890?text=${msg}`, '_blank');
  };

  return (
    <section id="economics" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">The <span className="text-gradient">Flow</span> Engine</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Transparent revenue models designed to sustain industrial creative output and facilitate collaboration.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {REVENUE_STREAMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => openWhatsApp(item.title)}
              className="glass-card p-6 flex items-start gap-6 hover:border-brand-primary/50 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform shrink-0">
                <item.icon size={28} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xl font-display font-bold">{item.title}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-gray-400 uppercase tracking-tighter border border-white/10">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-brand-accent font-mono">{item.stats}</span>
                  <ExternalLink size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex-1 glass-card p-10 flex flex-col justify-center relative overflow-hidden bg-linear-to-br from-brand-primary/20 via-transparent to-brand-accent/10">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/20 blur-[60px]" />
            <h3 className="text-2xl font-display font-bold mb-4 italic">"Sustainability is the bedrock of creative freedom."</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              At C54, we don't just host artists; we build ecosystems. Our economic model reinvests 40% of all day-pass revenue directly into the "Vortex" community grant for experimental fabrication.
            </p>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Community Grant Pool</span>
                <span className="text-brand-accent font-mono">€12,450 Locked</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="w-[65%] h-full bg-brand-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
