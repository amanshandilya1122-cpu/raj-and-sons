import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, Compass, HeartHandshake } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Thrilling Rides & Attractions', value: '15+' },
    { label: 'Happy Visitors Served', value: '50K+' },
    { label: 'Luxury Hotel Rooms', value: '25+' },
    { label: 'Multi-Cuisine Dishes', value: '100+' },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Decorative Lighting */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Visual Bento of Resort Life */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant glowing frame */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-amber-300 blur opacity-35" />
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 aspect-square">
              <img
                src="/src/assets/images/waterpark_entrance_1781009839867.png"
                alt="Raj Water Park Entrance Gate"
                className="w-full h-full object-cover float-animation"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              {/* Floating review card inside image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500 text-slate-950">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Top Rated Resort 2026</h4>
                  <p className="text-xs text-slate-400">Awarded for high sanitary & fun standards</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Textual & counters blocks */}
          <motion.div
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Luxury Prefix Badge */}
            <div className="inline-flex items-center gap-1.5 text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              <Compass className="w-4 h-4 text-cyan-400" />
              PREMIUM LUXURY GATEWAY
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-cyan-100 to-sky-200 text-transparent bg-clip-text">
              Welcome to RAJ WATER PARK
            </h2>

            {/* Main content body */}
            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              <p>
                <strong className="text-white font-semibold">RAJ WATER PARK</strong> is one of Begusarai's fastest-growing entertainment destinations, offering exciting water attractions, premium hospitality, delicious dining, and elegant event facilities under one roof.
              </p>
              <p>
                Located on NH 28, Gaura, Begusarai, it acts as a perfect refuge for those wanting to soak under the sun, plunge down pristine adrenaline slides, and experience grand resort accommodation. It is the gold standard destination for families, friendship groups, school outings, and high-end corporate packages.
              </p>
            </div>

            {/* Icon highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-10">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Ultra Cleansed Water</h4>
                  <p className="text-xs text-slate-400">Equipped with 24/7 advanced automated filtration filters</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Royal Guest Care</h4>
                  <p className="text-xs text-slate-400">Trained lifeguards, medical post and fast services</p>
                </div>
              </div>
            </div>

            {/* Animated numeric counts stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <h3 className="text-3xl font-black text-cyan-400 font-mono tracking-tight mb-1">{stat.value}</h3>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
