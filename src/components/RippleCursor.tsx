import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function RippleCursor() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [bubbles, setBubbles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    let rippleId = 0;
    let bubbleId = 0;
    let lastSpawn = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle ripple spawning to prevent state overflow
      if (now - lastSpawn > 150) {
        setRipples((prev) => [
          ...prev.slice(-10), // Keep max 10 active ripples
          { id: rippleId++, x: e.clientX, y: e.clientY },
        ]);
        lastSpawn = now;
      }

      // Occasional gentle floating bubble from cursor
      if (Math.random() < 0.2) {
        setBubbles((prev) => [
          ...prev.slice(-15),
          {
            id: bubbleId++,
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 12 + 6,
          },
        ]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Filter out older ripples and bubbles after animation time
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.filter((r) => Date.now() - r.id > 1500));
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Interactive Water Ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={`ripple-${ripple.id}`}
            initial={{ transform: 'translate(-50%, -50%) scale(0.1)', opacity: 0.5 }}
            animate={{ transform: 'translate(-50%, -50%) scale(2.5)', opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: ripple.x,
              top: ripple.y,
              width: '40px',
              height: '40px',
              border: '1.5px solid rgba(56, 189, 248, 0.4)', // aqua color
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(56, 189, 248, 0.2), inset 0 0 10px rgba(56, 189, 248, 0.1)',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Gentle Floating Cursor Bubbles */}
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.div
            key={`bubble-${bubble.id}`}
            initial={{ x: bubble.x - bubble.size / 2, y: bubble.y - bubble.size / 2, opacity: 0.7, scale: 0.8 }}
            animate={{
              y: bubble.y - 120 - Math.random() * 80,
              x: bubble.x + (Math.random() - 0.5) * 50,
              opacity: 0,
              scale: 1.2,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6) 0%, rgba(56, 189, 248, 0.25) 50%, rgba(14, 165, 233, 0.1) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              boxShadow: '0 2px 5px rgba(56, 189, 248, 0.1)',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
