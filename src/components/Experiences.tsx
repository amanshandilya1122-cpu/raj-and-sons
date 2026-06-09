import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Waves, Sparkles, Hotel as HotelIcon, Flame, Coffee, MapPin, 
  Car, Shield, Play, Users, ChefHat, Heart, Gift, Briefcase, 
  Volume2, Sliders, Soup, AlertCircle, ArrowRight
} from 'lucide-react';
import { Attraction, RoomType, MenuItem } from '../types';

interface EventType {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  image: string;
}

export default function Experiences() {
  const [activeTab, setActiveTab] = useState<'waterpark' | 'hotel' | 'restaurant' | 'banquet'>('waterpark');
  const [menuTab, setMenuTab] = useState<'all' | 'indian' | 'chinese' | 'beverages'>('all');
  const [selectedEventId, setSelectedEventId] = useState('wedding');

  // Listen to hash changes in the URL so that clicking navbar links switches the active tab instantly!
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#waterpark') {
        setActiveTab('waterpark');
        scrollToExperiences();
      } else if (hash === '#hotel') {
        setActiveTab('hotel');
        scrollToExperiences();
      } else if (hash === '#restaurant') {
        setActiveTab('restaurant');
        scrollToExperiences();
      } else if (hash === '#banquet') {
        setActiveTab('banquet');
        scrollToExperiences();
      }
    };

    const scrollToExperiences = () => {
      const el = document.getElementById('experiences');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // trigger on initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 1. Water Park Data
  const attractions: Attraction[] = [
    {
      id: 'raindance',
      title: 'Rain Dance Arena',
      description: 'The ultimate rhythmic party experience! Dance under overhead rain shower arches to high-fidelity stereo sound systems with tropical laser lightning.',
      image: '/src/assets/images/raindance_arena_1781009862365.png',
      capacity: '200+ Party Walkers',
      thrillLevel: 'Thrilling',
    },
    {
      id: 'familyzone',
      title: 'Family Water Zone',
      description: 'A spacious and safe shared oasis perfect for parent-child bonding, giant tipping splash buckets, gentle slides, and sprawling wave pools.',
      image: 'https://images.unsplash.com/photo-1572455863413-a5c689f41de6?auto=format&fit=crop&q=80&w=800',
      capacity: '500 Families Pool',
      thrillLevel: 'Family Friendly',
    },
    {
      id: 'splashactivities',
      title: 'Splash Activities',
      description: 'Adrenaline looping sliders, multi-lane racing mats, water spiral tunnels, and hydro-powered launch chambers that push your fun to the limit.',
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800',
      capacity: 'Single & Double Riders',
      thrillLevel: 'Thrilling',
    }
  ];

  // 2. Hotel Data
  const hotelFeatures = [
    { icon: <HotelIcon className="w-4 h-4 text-cyan-400" />, text: 'Air Conditioned Luxury' },
    { icon: <Coffee className="w-4 h-4 text-amber-500" />, text: '24/7 Room Service & Dining' },
    { icon: <MapPin className="w-4 h-4 text-emerald-400" />, text: 'Highway Ease (NH 28)' },
    { icon: <Car className="w-4 h-4 text-blue-400" />, text: 'Secure Free Parking Slots' },
  ];

  const rooms: RoomType[] = [
    {
      id: 'room-executive',
      name: 'Premium Executive',
      description: 'Climate control under secure card-access locks, perfect for couples and travelers.',
      priceEstimate: 'INR 2,499 / Night',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=600',
      features: ['King King Bed', 'AC Control', 'Free Wi-Fi', 'Locker Safe'],
    },
    {
      id: 'room-suite',
      name: 'Imperial Presidential Suite',
      description: 'Opulent lounge with mini bar options, master hot shower, and full pool garden views.',
      priceEstimate: 'INR 4,999 / Night',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600',
      features: ['Balcony View', 'Express Service', 'Mini Fridge', 'LED TV'],
    }
  ];

  // 3. Restaurant Data
  const menuItems: MenuItem[] = [
    { id: '1', name: 'Paneer Butter Masala (Special)', category: 'Indian', description: 'Fresh cottage cheese cubes simmered in our signature rich cashew and cream tomato curry.', price: '₹ 280' },
    { id: '2', name: 'Murg Makhani (Butter Chicken)', category: 'Indian', description: 'Tender tandoori grilled chicken shreds cooked inside an opulent buttery mild spiced sauce.', price: '₹ 380' },
    { id: '3', name: 'Dal Makhani (Laxmi Special)', category: 'Indian', description: 'Black lentils slow cooked overnight on clay oven, finished with white farm butter and cream.', price: '₹ 240' },
    { id: '4', name: 'Spicy Schezwan Fried Rice', category: 'Chinese', description: 'Fragrant basmati wok fried with minced garlic, crisp scallions, and home ground fiery Schezwan paste.', price: '₹ 200' },
    { id: '5', name: 'Veg Hakka Noodles', category: 'Chinese', description: 'Slender wheat noodles flash tossed with julienned fresh capsicum, cabbage, spring onion, and premium soya sauce.', price: '₹ 180' },
    { id: '7', name: 'Blue Curacao Lagoon Fizz', category: 'Beverages', description: 'Chilled carbonated mineral water infused with natural blue curacao syrup, lime squeeze, and fresh mint leaves.', price: '₹ 120' },
  ];

  const filteredMenuItems = menuTab === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category.toLowerCase() === menuTab);

  // 4. Banquet Data
  const events: EventType[] = [
    {
      id: 'wedding',
      title: 'Royal Weddings',
      icon: <Heart className="w-4 h-4" />,
      description: 'Host the wedding of your dreams! Our grand banquet features fully customisable thematic backdrops, red-carpet portals, luxury bridal stages, and ambient dim lighting for standard royal atmospheres.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 'corporate',
      title: 'Meetings & Feasts',
      icon: <Briefcase className="w-4 h-4" />,
      description: 'Equipped with commercial sound arrays, stage podiums, and dedicated silent catering. Perfect for company conventions, birthday milestones, and tilak setups.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000',
    }
  ];

  const currentEvent = events.find(el => el.id === selectedEventId) || events[0];

  return (
    <section id="experiences" className="relative py-20 sm:py-28 bg-slate-900/40 overflow-hidden">
      {/* Scroll-Spy & hash target observers for Navbar highlights */}
      <div id="waterpark" className="absolute top-0 left-0 w-1 h-2 opacity-0 pointer-events-none" />
      <div id="hotel" className="absolute top-[25%] left-0 w-1 h-2 opacity-0 pointer-events-none" />
      <div id="restaurant" className="absolute top-[50%] left-0 w-1 h-2 opacity-0 pointer-events-none" />
      <div id="banquet" className="absolute top-[75%] left-0 w-1 h-2 opacity-0 pointer-events-none" />

      {/* Dynamic Background Overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Compact Elegant Subsection Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase px-3 py-1 bg-cyan-400/10 rounded-full">
            RESORT FACILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-3 tracking-tight">
            The Palace Experiences
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Savor world-class splash loops, peaceful AC stays, rich dining, and golden luxury banquet settings conveniently under one premium roof in Begusarai.
          </p>
        </div>

        {/* Dynamic Navigation Tabs (High end styling) */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12 max-w-2xl mx-auto p-1.5 rounded-2xl bg-slate-950/80 border border-white/5 backdrop-blur-md">
          <button
            onClick={() => setActiveTab('waterpark')}
            className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase cursor-pointer transition-all ${
              activeTab === 'waterpark'
                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 shadow-md scale-102'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Waves className="w-4 h-4 shrink-0" />
            <span>Water Park</span>
          </button>
          
          <button
            onClick={() => setActiveTab('hotel')}
            className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase cursor-pointer transition-all ${
              activeTab === 'hotel'
                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 shadow-md scale-102'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <HotelIcon className="w-4 h-4 shrink-0" />
            <span>Luxe Hotel</span>
          </button>

          <button
            onClick={() => setActiveTab('restaurant')}
            className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase cursor-pointer transition-all ${
              activeTab === 'restaurant'
                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 shadow-md scale-102'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Soup className="w-4 h-4 shrink-0" />
            <span>Raj Diner</span>
          </button>

          <button
            onClick={() => setActiveTab('banquet')}
            className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase cursor-pointer transition-all ${
              activeTab === 'banquet'
                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 shadow-md scale-102'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>Bespoke Banquet</span>
          </button>
        </div>

        {/* Content Container with standard dimensions & micro animations */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'waterpark' && (
              <motion.div
                key="waterpark"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Side: Panoramic Entrance and Rain Dance Media */}
                <div className="lg:col-span-6 relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 blur-sm opacity-20" />
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 border border-white/10 shadow-2xl">
                    <img
                      src="/src/assets/images/raindance_arena_1781009862365.png"
                      alt="Water Park Rain Dance Arena"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20" />
                    <span className="absolute bottom-4 left-4 text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-display">
                      Rain Dance Arena
                    </span>
                  </div>
                </div>

                {/* Right Side: Copy & Compact Grid */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest block mb-2">AGUADRONE SPLASH LAND</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Thrills, Waves and Joyous Slides</h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-3 font-light">
                      Beat the summer heat under overhead rain shower arches, giant tipping buckets, and multi-lane looping sliders. Backed by certified, professional lifeguards for absolute safety.
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    {attractions.map((att) => (
                      <div key={att.id} className="p-4 rounded-xl bg-white/2 border border-white/5 flex gap-4 items-start hover:bg-white/5 hover:border-cyan-500/20 transition-all">
                        <Waves className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                            {att.title}
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-400 text-slate-950">{att.thrillLevel}</span>
                          </h4>
                          <p className="text-xs text-slate-400 mt-1">{att.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:scale-105 transition-all text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-cyan-500/10"
                    >
                      <span>Reserve Passing Tickets</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'hotel' && (
              <motion.div
                key="hotel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Side Feature Block */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest block mb-2">RAJ HOTEL & SUITES</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Highway Ease, Cozy AC Stays</h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-3 font-light">
                      Meticulously cleaned and sanitized bedrooms located securely on Highway NH 28 (Gaura). Perfect for highway explorers, wedding families, and leisure travelers expecting five-star rest.
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {hotelFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/2 border border-white/5">
                        <div className="p-1.5 rounded-lg bg-white/5 shrink-0 flex items-center justify-center">
                          {feat.icon}
                        </div>
                        <span className="text-[11px] font-bold text-slate-300 leading-tight uppercase font-sans tracking-wide">{feat.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trust badge */}
                  <div className="p-3.5 rounded-xl border border-emerald-500/25 bg-emerald-500/5 text-emerald-400 text-xs flex items-center gap-2.5 font-sans leading-relaxed">
                    <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>24-Hour Armed Guard Patrol & Comprehensive CCTV Protection Pool.</span>
                  </div>
                </div>

                {/* Right Side Custom Room Deck */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {rooms.map((room) => (
                    <div key={room.id} className="group rounded-2xl overflow-hidden bg-slate-950 border border-white/5 hover:border-cyan-500/20 transition-all flex flex-col justify-between shadow-xl">
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-3 left-3 px-2 py-1 bg-slate-950/90 border border-white/10 text-[10px] text-cyan-400 font-mono font-bold rounded-md">
                          {room.priceEstimate}
                        </span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-base font-bold text-white group-hover:text-cyan-450 transition-colors">{room.name}</h4>
                          <p className="text-xs text-slate-400 mt-1 h-12 overflow-hidden leading-relaxed font-light">{room.description}</p>
                          <div className="flex flex-wrap gap-1 mt-3.5 mb-5">
                            {room.features.slice(0, 3).map((feat, idx) => (
                              <span key={idx} className="text-[9px] font-medium text-slate-300 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full uppercase tracking-wider">{feat}</span>
                            ))}
                          </div>
                        </div>
                        <a
                          href="#booking"
                          className="w-full block py-2 rounded-lg text-center bg-cyan-500/10 hover:bg-gradient-to-r hover:from-sky-500 hover:to-cyan-500 hover:text-slate-950 font-bold border border-cyan-505/20 text-[10px] uppercase tracking-widest text-cyan-400 transition-colors"
                        >
                          Book Suite Now
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'restaurant' && (
              <motion.div
                key="restaurant"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Side: Real image facade */}
                <div className="lg:col-span-5 relative">
                  <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-amber-500/20 to-yellow-400/20 blur opacity-45" />
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950 border border-white/10 shadow-2xl">
                    <img
                      src="/src/assets/images/raj_restaurant_hotel_1781009882714.png"
                      alt="Exterior view of Raj Restaurant Facade"
                      className="w-full h-full object-cover float-animation"
                      style={{ animationDuration: '8s' }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent" />
                    
                    {/* Chef Stamp quote */}
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/5 flex gap-3">
                      <ChefHat className="w-8 h-8 text-amber-405 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Our Culinary Pledge</h4>
                        <p className="text-[11px] text-slate-300 italic leading-relaxed">"We cook daily 100% fresh, organic-based traditional dishes without chemical additives."</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Menu selection platform */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">FAMILY DINER EXTRAORDINAIRE</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Savor Fine Gastronomy Plates</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      Enjoy absolute privacy in our premium family dining cabins. From classical royal Indian gravies, smoky tandoori breads, to flash-fried Chinese noodles, our master chefs satisfy every craving.
                    </p>
                  </div>

                  {/* Food items mini catalog with filtering */}
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/5">
                    <div className="flex flex-wrap justify-between items-center gap-3 border-b border-white/5 pb-3 mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">Curates Specials Menu</span>
                      
                      {/* Inner Menu Filter Pills */}
                      <div className="flex gap-1">
                        {(['all', 'indian', 'chinese', 'beverages'] as const).map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setMenuTab(tab)}
                            className={`px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                              menuTab === tab
                                ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                                : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Menu columns list */}
                    <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                      {filteredMenuItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-start gap-4 pb-2 border-b border-white/5">
                          <div>
                            <h4 className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                              {item.name}
                              <span className="text-[8px] font-semibold text-amber-400 uppercase font-mono">{item.category}</span>
                            </h4>
                            <p className="text-[10px] text-slate-400 font-light mt-0.5 leading-relaxed">{item.description}</p>
                          </div>
                          <span className="text-xs font-black text-amber-400 font-mono whitespace-nowrap">{item.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-1.5 text-slate-500 text-[10px]">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                      <span>Inclusive of GST taxes. Order delivery starts within 15-20 mins of booking request.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'banquet' && (
              <motion.div
                key="banquet"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Side Tab selectors */}
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">ROYAL WEDDINGS & OUTINGS</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Raj Golden Banquet</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed mt-2">
                      Experience palatial gold-dipped hospitality. Host royal marriage vows, tilak functions, corporate conventions, or majestic private birthday celebrations under 1000+ guest capacity.
                    </p>
                  </div>

                  <div className="space-y-2">
                    {events.map((ev) => (
                      <button
                        key={ev.id}
                        onClick={() => setSelectedEventId(ev.id)}
                        className={`w-full flex items-center gap-3.5 p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                          selectedEventId === ev.id
                            ? 'bg-gradient-to-r from-amber-500/10 to-yellow-400/2 border-amber-500 text-amber-400'
                            : 'bg-white/2 border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg shrink-0 ${
                          selectedEventId === ev.id ? 'bg-amber-500 text-slate-950' : 'bg-white/5'
                        }`}>
                          {ev.icon}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold tracking-wide">{ev.title}</h4>
                          <p className="text-[9px] text-slate-400 uppercase tracking-widest mt-0.5">Explore setup spec</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="p-3 bg-amber-500/5 rounded-xl border border-amber-500/10 text-xs text-amber-200 font-light leading-relaxed">
                    🌟 <strong>Wedding Stage Advisory:</strong> Direct coordination with high-end decorators, flower architects, bridal suites, and customized dinner buffet planning.
                  </div>
                </div>

                {/* Right Side Setup display card */}
                <div className="lg:col-span-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedEventId}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-950/80 rounded-2xl border border-amber-500/15 p-5 sm:p-6 backdrop-blur-xl"
                    >
                      {/* Image frame */}
                      <div className="relative rounded-xl overflow-hidden aspect-square sm:aspect-[4/5] bg-slate-950 border border-white/5">
                        <img
                          src={currentEvent.image}
                          alt={currentEvent.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[8px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full">
                          Royal Setup
                        </span>
                      </div>

                      {/* Info Details */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <h3 className="text-base sm:text-lg font-black text-amber-405 uppercase tracking-wide">{currentEvent.title} Planning</h3>
                          <p className="text-[11px] text-slate-300 leading-relaxed font-light mt-2.5 mb-5">{currentEvent.description}</p>
                          
                          <h4 className="text-[10px] font-black uppercase text-white/90 tracking-wider mb-2">Package Inclusions:</h4>
                          <div className="grid grid-cols-1 gap-2 text-xs text-slate-200">
                            <span className="flex items-center gap-1.5">⚡ 1000+ guest carpet capacity</span>
                            <span className="flex items-center gap-1.5">⚡ Fully sound-array systems</span>
                            <span className="flex items-center gap-1.5">⚡ Premium AC bridal rooms</span>
                          </div>
                        </div>

                        <a
                          href="#booking"
                          className="mt-6 w-full block py-2 text-center rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 text-[10px] font-black tracking-wider uppercase transition-colors"
                        >
                          Check Date Bookings
                        </a>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
