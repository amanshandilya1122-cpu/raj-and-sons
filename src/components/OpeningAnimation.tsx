import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Waves } from 'lucide-react';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export default function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [stage, setStage] = useState<'dark' | 'splash' | 'logo' | 'ripple' | 'tagline' | 'exit'>( 'dark' );

  useEffect(() => {
    // Stage sequence
    const timers = [
      setTimeout(() => setStage('splash'), 400),
      setTimeout(() => setStage('logo'), 1000),
      setTimeout(() => setStage('ripple'), 1600),
      setTimeout(() => setStage('tagline'), 2200),
      setTimeout(() => setStage('exit'), 3400),
      setTimeout(() => onComplete(), 4100),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'exit' && (
        <motion.div
          id="opening-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
        >
          {/* Animated Water Background Bubbles */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 10,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  y: -50,
                  x: `calc(${Math.random() * 100}px + ${Math.random() * window.innerWidth}px)`,
                }}
                transition={{
                  duration: Math.random() * 4 + 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute w-4 h-4 rounded-full bg-gradient-to-tr from-sky-400 to-cyan-300 blur-[1px]"
                style={{ left: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          {/* Luxury Water Splash Waves */}
          <div className="absolute inset-x-0 bottom-0 pointer-events-none h-64 opacity-30 select-none">
            <svg
              className="absolute w-full h-full text-sky-500 fill-current"
              viewBox="0 0 1440 200"
              preserveAspectRatio="none"
            >
              <motion.path
                initial={{ d: "M0,160 C320,160 320,180 640,180 C960,180 960,160 1280,160 L1440,160 L1440,200 L0,200 Z" }}
                animate={{
                  d: [
                    "M0,140 C320,180 320,140 640,160 C960,180 960,140 1280,150 L1440,160 L1440,200 L0,200 Z",
                    "M0,160 C320,150 480,190 640,170 C800,150 960,180 1280,160 L1440,170 L1440,200 L0,200 Z",
                    "M0,140 C320,180 320,140 640,160 C960,180 960,140 1280,150 L1440,160 L1440,200 L0,200 Z",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          {/* Splash Circle Emitters / Ripple Rings */}
          <AnimatePresence>
            {(stage === 'splash' || stage === 'logo' || stage === 'ripple') && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ scale: 0, opacity: 0.8 }}
                  animate={{ scale: 6, opacity: 0 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="absolute w-44 h-44 rounded-full border border-sky-400 bg-sky-500/5 mix-blend-screen"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: 12, opacity: 0 }}
                  transition={{ duration: 2.2, ease: 'easeOut', delay: 0.3 }}
                  className="absolute w-44 h-44 rounded-full border border-teal-400/50 bg-teal-500/5 mix-blend-screen"
                />
              </div>
            )}
          </AnimatePresence>

          {/* Logo Content Block */}
          <div className="z-10 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={stage !== 'dark' ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="flex items-center gap-2 mb-4"
            >
              <Waves className="w-12 h-12 text-cyan-400 animate-pulse" />
              <Sparkles className="w-8 h-8 text-amber-300 animate-bounce delay-200" />
            </motion.div>

            {/* RAJ WATER PARK */}
            <h1 className="relative text-5xl md:text-8xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-400 to-amber-300 drop-shadow-[0_5px_15px_rgba(14,165,233,0.3)]">
              {stage === 'dark' ? '' : (
                <motion.span
                  initial={{ letterSpacing: '0.4em', opacity: 0 }}
                  animate={{ letterSpacing: '0.15em', opacity: 1 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                  RAJ WATER PARK
                </motion.span>
              )}
            </h1>

            {/* Tagline: Play • Stay • Dine • Celebrate */}
            <div className="h-10 mt-6 flex items-center justify-center overflow-hidden">
              <AnimatePresence>
                {(stage === 'tagline' || stage === 'ripple') && (
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-lg md:text-2xl font-light tracking-[0.25em] text-cyan-200 uppercase flex items-center justify-center gap-2 font-sans"
                  >
                    Play <span className="text-amber-400 text-sm">•</span> Stay <span className="text-amber-400 text-sm">•</span> Dine <span className="text-amber-400 text-sm">•</span> Celebrate
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Subtle Quick Skip Button for returning visits */}
          <button
            onClick={onComplete}
            className="absolute bottom-10 right-10 text-xs tracking-widest uppercase font-mono text-cyan-500/60 hover:text-cyan-400 cursor-pointer border border-cyan-500/20 px-3 py-1.5 rounded-full bg-slate-900/50 hover:bg-slate-950 transition-all pointer-events-auto"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
