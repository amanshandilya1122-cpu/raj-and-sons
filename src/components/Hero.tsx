import React from 'react';
import { motion } from 'motion/react';
import { Waves, CalendarCheck, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const bubbles = Array.from({ length: 15 });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1920"
          alt="Raj Water Park Gateway"
          className="w-full h-full object-cover scale-105 animate-pulse"
          style={{ animationDuration: '15s' }}
          referrerPolicy="no-referrer"
        />
        {/* Luxury Vignette and Color Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/40 via-transparent to-cyan-950/40" />
      </div>

      {/* Floating Animated Bubbles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {bubbles.map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + '%',
              y: '105%',
              opacity: Math.random() * 0.4 + 0.1,
              scale: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              y: '-10%',
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100 + 5}%`,
                `${Math.random() * 100 - 5}%`,
                `${Math.random() * 100}%`,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, rgba(56, 189, 248, 0.1) 70%, transparent 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 10px rgba(56, 189, 248, 0.05)',
            }}
          />
        ))}
      </div>

      {/* Animated Water Wave Bottom separator */}
      <div className="absolute bottom-0 inset-x-0 z-20 h-24 pointer-events-none select-none">
        <svg
          className="absolute left-0 w-full h-full text-slate-950 fill-current dark:text-slate-950 transition-colors"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C320,64 320,0 640,32 C960,64 960,0 1280,32 L1440,32 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center flex flex-col items-center">
        {/* Luxury Badge: Play • Stay • Dine • Celebrate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 backdrop-blur-md mb-8 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase"
        >
          <Waves className="w-4 h-4 text-cyan-400 animate-bounce" />
          Play <span className="text-amber-400">•</span> Stay <span className="text-amber-400">•</span> Dine <span className="text-amber-400">•</span> Celebrate
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-9xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-sky-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] mb-4 uppercase"
        >
          RAJ WATER PARK
        </motion.h1>

        {/* Catchy Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-6 max-w-4xl"
        >
          Begusarai's Ultimate Destination for Fun, Food & Stay
        </motion.h2>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 drop-shadow-md mb-12 max-w-3xl leading-relaxed font-light"
        >
          Experience thrilling water adventures, opulent hotel luxury, exquisite multi-cuisine dining, and magnificent halls for your royal celebrations—all nestled on NH 28, Begusarai.
        </motion.p>

        {/* CTA Buttons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mb-12"
        >
          {/* Explore Water Park */}
          <a
            href="#waterpark"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-slate-950 font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(14,165,233,0.3)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore Water Park <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Book Now */}
          <a
            href="#booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900/80 hover:bg-slate-900 border border-cyan-400/40 hover:border-cyan-400 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider backdrop-blur-md shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Now <CalendarCheck className="w-4 h-4 text-cyan-400" />
          </a>

          {/* Call Now Button */}
          <a
            href="tel:+917493000051"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Call Now <Phone className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Small Trust Micro line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center gap-6 text-slate-400/80 text-xs tracking-wider"
        >
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-cyan-400" /> 100% Family Friendly Environment
          </span>
          <span className="hidden sm:inline">|</span>
          <span>
            Call Support: <a href="tel:+917493000051" className="text-cyan-400 hover:underline font-mono font-bold">+91 7493000051</a>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
