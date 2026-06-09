import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Images, Maximize2, X, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'waterpark' | 'raindance' | 'hotel' | 'restaurant' | 'events'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      category: 'waterpark',
      title: 'Grand Entrance Gate',
      image: '/src/assets/images/waterpark_entrance_1781009839867.png',
    },
    {
      id: 'g2',
      category: 'raindance',
      title: 'Summer Splash Rain Showers',
      image: '/src/assets/images/raindance_arena_1781009862365.png',
    },
    {
      id: 'g3',
      category: 'hotel',
      title: 'Elegant Front Facade',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'g4',
      category: 'restaurant',
      title: 'Restaurant & Front Facade',
      image: '/src/assets/images/raj_restaurant_hotel_1781009882714.png',
    },
    {
      id: 'g5',
      category: 'events',
      title: 'Royal Marriage Stage Setting',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'g6',
      category: 'waterpark',
      title: 'Toddler Mushroom Fountain Arena',
      image: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'g7',
      category: 'raindance',
      title: 'Water Spray Loop & Music',
      image: 'https://images.unsplash.com/photo-1572455863413-a5c689f41de6?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'g8',
      category: 'hotel',
      title: 'Imperial Suite Dining Lounge',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'g9',
      category: 'restaurant',
      title: 'Special Butter Naan Platter',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'g10',
      category: 'events',
      title: 'Exquisite Candle Banquet Tables',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800',
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const filters = [
    { value: 'all', label: 'All Photos' },
    { value: 'waterpark', label: 'Water Park' },
    { value: 'raindance', label: 'Rain Dance' },
    { value: 'hotel', label: 'Hotel' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'events', label: 'Events' },
  ] as const;

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              <Compass className="w-4 h-4 text-cyan-400" /> VISUAL EXPLORER
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Snapshots of Joy
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
              Explore actual high-end luxury sittings, wet loops, and marriage arrays across Raj Water Park.
            </p>
          </div>

          {/* Filters triggers */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md self-start md:self-auto max-w-full overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => {
                  setActiveFilter(f.value);
                  setSelectedImageIndex(null); // Reset index to avoid filter misalignment
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap transition-colors ${
                  activeFilter === f.value
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Items Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-900 border border-white/5 cursor-zoom-in"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover overlay */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-5" >
                  <div className="flex justify-end">
                    <div className="p-2.5 rounded-xl bg-white/10 text-white backdrop-blur-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                      {item.category === 'waterpark' ? 'Water Park' :
                       item.category === 'raindance' ? 'Rain Dance' :
                       item.category === 'hotel' ? 'Hotel Stay' :
                       item.category === 'restaurant' ? 'Restaurant' : 'Banquet Event'}
                    </span>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Glassy border decoration */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-cyan-400/20 rounded-2xl pointer-events-none transition-all duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full Screen Lux Lightbox zoom */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between py-10"
            >
              {/* Top controls */}
              <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center text-white">
                <div>
                  <h4 className="text-lg font-black tracking-wider uppercase text-cyan-400">
                    RAJ SPECIAL PREVIEW
                  </h4>
                  <p className="text-xs text-slate-400">
                    {filteredItems[selectedImageIndex].title}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Middle Image slider stage */}
              <div className="flex items-center justify-between w-full px-4 sm:px-8">
                {/* Previous */}
                <button
                  onClick={handlePrev}
                  className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer select-none shrink-0"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Center Image Container */}
                <div className="max-w-4xl max-h-[65vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl mx-4">
                  <motion.img
                    key={selectedImageIndex}
                    initial={{ scale: 0.95, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    src={filteredItems[selectedImageIndex].image}
                    alt="Lightbox current selection"
                    className="w-full h-full max-h-[65vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Next */}
                <button
                  onClick={handleNext}
                  className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer select-none shrink-0"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom indicators */}
              <div className="text-center text-slate-400 text-xs font-mono">
                Image {selectedImageIndex + 1} of {filteredItems.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
