import { motion } from 'motion/react';
import { Cpu, Zap, HardDrive, Thermometer, Scissors, Hammer, Layers, Flame } from 'lucide-react';

const GEAR = [
  { 
    name: 'Holzwerkstatt', 
    spec: 'Altendorf Formatkreissäge, Drechselbank, Dickenhobel', 
    icon: Hammer, 
    color: 'text-amber-500',
    img: 'https://www.cumberland54.com/wp-content/uploads/2023/02/20220423_142907.jpg'
  },
  { 
    name: 'Metallwerkstatt', 
    spec: 'MIG/TIG Schweißen, Bandsäge, Ständerbohrmaschine', 
    icon: HardDrive, 
    color: 'text-slate-400',
    img: 'https://www.cumberland54.com/wp-content/uploads/2023/02/20220423_142939.jpg' 
  },
  { 
    name: 'Nähzimmer', 
    spec: 'Industrie-Nähmaschinen, Leder-Schärfmaschine, Textil-Tisch', 
    icon: Scissors, 
    color: 'text-indigo-400',
    img: 'https://www.cumberland54.com/wp-content/uploads/2023/02/20220423_142923-1536x2048.jpg'
  },
  { 
    name: 'Keramik & Glas', 
    spec: 'Brennofen, Töpferscheibe, Glasschleifmaschine', 
    icon: Flame, 
    color: 'text-orange-400',
    img: 'https://images.unsplash.com/photo-1565193298425-f860d5ed219b?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Sandstrahlen', 
    spec: 'Kabine für Oberflächenveredelung & Rostentfernung', 
    icon: Layers, 
    color: 'text-cyan-400',
    img: 'https://www.cumberland54.com/wp-content/uploads/2022/09/IMG_20220911_190321.jpg'
  },
  { 
    name: 'Co-Working Space', 
    spec: '200m² Ladenlokal mit großen Fenstern & viel Licht', 
    icon: Cpu, 
    color: 'text-emerald-400',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  }
];

export function Equipment() {
  return (
    <section id="equipment" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">Profi <span className="text-gradient">Equipment</span></h2>
          <p className="text-gray-400 max-w-xl italic">
            "Jede Menge Geräte und Maschinen für Holz, Glas, Metall, Keramik, Stoff, Leder… Die Benutzung ist für alle Mitglieder inklusive."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GEAR.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="h-48 relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-brand-surface to-transparent" />
                <div className={`absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-brand-bg/80 backdrop-blur-md flex items-center justify-center ${item.color} shadow-xl`}>
                  <item.icon size={24} />
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-display font-bold text-lg mb-1">{item.name}</h4>
                <p className="text-xs text-gray-500 font-mono tracking-tight leading-relaxed">{item.spec}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-brand-accent tracking-widest uppercase">READY FOR USE</span>
                  <div className="w-8 h-px bg-white/10 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Space Breakdown Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-12 glass-card p-8 bg-linear-to-r from-brand-primary/10 to-brand-accent/5 flex flex-col md:flex-row items-center justify-between gap-8 border-brand-primary/20"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-display font-bold mb-2">Workspace Anatomy</h3>
            <p className="text-gray-400">
              200m² Gesamtoberfläche // 1 großer Co-Creative Raum // 3 spezialisierte Labore (Holz, Metall, Nähzimmer) // Ausgebauter Keller & Küche.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center px-6 py-4 glass-card border-brand-accent/30">
              <span className="text-3xl font-display font-black text-brand-accent">200m²</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-mono">Total Space</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
