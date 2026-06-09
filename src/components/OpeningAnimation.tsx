import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Waves } from 'lucide-react';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export default function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [stage, setStage] = useState<'dark' | 'reveal' | 'tagline' | 'exit'>('dark');

  useEffect(() => {
    // Elegant, punchier, and faster timing sequence (completes in 2.8s) for a premium responsive feel
    const timers = [
      setTimeout(() => setStage('reveal'), 300),
      setTimeout(() => setStage('tagline'), 1100),
      setTimeout(() => setStage('exit'), 2200),
      setTimeout(() => onComplete(), 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'exit' && (
        <motion.div
          id="opening-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
        >
          {/* Subtle Golden Radial Flare Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

          {/* Floating Luxury Gold Dust Sparkles */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 10,
                  opacity: Math.random() * 0.4 + 0.1,
                  scale: Math.random() * 0.4 + 0.3,
                }}
                animate={{
                  y: -50,
                  opacity: [0.2, 0.8, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="absolute w-2 h-2 rounded-full bg-amber-400 blur-[0.5px]"
                style={{ left: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          {/* Golden Ripple Ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={stage !== 'dark' ? { scale: 1.8, opacity: [0, 0.4, 0] } : {}}
              transition={{ duration: 1.6, ease: 'easeOut' }}
              className="absolute w-64 h-64 rounded-full border border-amber-300/20 bg-amber-400/2"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={stage === 'tagline' ? { scale: 2.2, opacity: [0, 0.2, 0] } : {}}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="absolute w-64 h-64 rounded-full border border-cyan-400/10"
            />
          </div>

          {/* Dynamic Content Frame */}
          <div className="z-10 flex flex-col items-center justify-center text-center px-6 max-w-xl">
            {/* Elegant luxury crown line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={stage !== 'dark' ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-1.5 mb-5 text-amber-405"
            >
              <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-amber-400/60" />
              <Sparkles className="w-4 h-4 text-amber-400" />
              <Waves className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-amber-400/60" />
            </motion.div>

            {/* Small premium pretitle */}
            <div className="overflow-hidden mb-2">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={stage !== 'dark' ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[10px] font-black tracking-[0.45em] text-cyan-400 uppercase block font-sans"
              >
                WELOME TO THE PALACE RESORT
              </motion.span>
            </div>

            {/* Main Luxury Title */}
            <h1 className="relative text-4xl sm:text-7xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-amber-200 drop-shadow-[0_4px_12px_rgba(251,191,36,0.15)] leading-none select-none">
              <motion.span
                initial={{ letterSpacing: '0.4em', opacity: 0 }}
                animate={stage !== 'dark' ? { letterSpacing: '0.18em', opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              >
                RAJ WATER PARK
              </motion.span>
            </h1>

            {/* Premium Gold Accent Divider Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={stage !== 'dark' ? { width: '80px' } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-amber-405 to-transparent my-6"
            />

            {/* Tagline */}
            <div className="h-8 flex items-center justify-center overflow-hidden">
              <AnimatePresence>
                {(stage === 'tagline' || stage === 'reveal') && (
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xs sm:text-sm font-bold tracking-[0.3em] text-slate-300 uppercase flex items-center justify-center gap-2"
                  >
                    Play <span className="text-amber-400">•</span> Stay <span className="text-amber-400">•</span> Dine <span className="text-amber-400">•</span> Celebrate
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Quick Skip with subtle lux styling */}
          <button
            onClick={onComplete}
            className="absolute bottom-8 right-8 text-[9px] tracking-[0.25em] uppercase font-mono text-slate-500 hover:text-amber-400 cursor-pointer border border-white/5 px-3.5 py-2 rounded-full bg-slate-900/40 backdrop-blur-sm transition-all hover:border-amber-400/20 active:scale-95 pointer-events-auto"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

