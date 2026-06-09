import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquareCode } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: Testimonial[] = [
    {
      id: 'r1',
      name: 'Ravi Jha',
      location: 'Begusarai Town',
      rating: 5,
      review: 'Absolutely marvelous! The Rain Dance section is incredibly energetic, and the water quality is premium. We had our kid birthday party here in the restaurant, and the staff cooked outstanding Butter Paneer!',
      date: 'June 2026',
    },
    {
      id: 'r2',
      name: 'Aditi Sinha',
      location: 'Patna, Bihar',
      rating: 5,
      review: 'We stayed in the Imperial Suite at Raj Hotel while travelling through NH 28. Unbelievable comfort, soundproof rooms, and huge secured parking. Getting a resort of this calibre in Begusarai is a boon.',
      date: 'May 2026',
    },
    {
      id: 'r3',
      name: 'Vikram Chaudhary',
      location: 'Samastipur',
      rating: 5,
      review: 'I booked the Raj Banquet Hall for my brotherTilak ceremony. The golden lighting and professional stage setup are pure class. Special thanks to the banquet manager for handling 600+ guests smoothly.',
      date: 'April 2026',
    },
    {
      id: 'r4',
      name: 'Dr. Ramesh Kumar',
      location: 'Begusarai Medical Union',
      rating: 5,
      review: 'Took a school outing of 80 students to Raj Water Park last Sunday. The security guards and lifeguards are highly watchful. The children were completely safe, and school packages were super pocket friendly!',
      date: 'March 2026',
    }
  ];

  // Auto scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-slate-900/60 overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase px-3 py-1 bg-cyan-400/10 rounded-full">
            REAL VOICES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
            Loved By Families & Hosts
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Read stories of wonderful experiences shared by guests visiting our resort and park.
          </p>
        </div>

        {/* Sliding card block with framing */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Big quotes icon background decorative */}
          <div className="absolute -top-10 -left-6 text-cyan-500/10 pointer-events-none">
            <Quote className="w-28 h-28 transform -rotate-12 fill-current" />
          </div>

          <div className="relative rounded-3xl bg-slate-950/80 border border-white/5 p-8 sm:p-14 backdrop-blur-xl shadow-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Stars Indicator */}
                <div className="flex gap-1 items-center">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs text-slate-500 font-mono ml-2">Verified Reviewer</span>
                </div>

                {/* Review Body Text */}
                <p className="text-slate-200 text-base sm:text-lg italic font-light leading-relaxed font-sans">
                  "{reviews[activeIndex].review}"
                </p>

                {/* Author Block */}
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  {/* Round profile mockup */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-500 to-cyan-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-md">
                    {reviews[activeIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{reviews[activeIndex].name}</h4>
                    <span className="text-xs text-slate-400">{reviews[activeIndex].location} • {reviews[activeIndex].date}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Micro navigation triggers on bottom right */}
            <div className="flex gap-2 self-end mt-6 sm:mt-0">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer select-none"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer select-none"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dots indexes indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-6 bg-cyan-400' : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
