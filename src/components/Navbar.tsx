import React, { useState, useEffect } from 'react';
import { Waves, Phone, Menu, X, Sun, Moon, Sparkles, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'waterpark', 'hotel', 'restaurant', 'banquet', 'gallery', 'booking', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Water Park', href: '#waterpark', id: 'waterpark' },
    { label: 'Hotel', href: '#hotel', id: 'hotel' },
    { label: 'Restaurant', href: '#restaurant', id: 'restaurant' },
    { label: 'Banquet', href: '#banquet', id: 'banquet' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top micro bar for quick address info on desktop */}
      <div className="hidden lg:block bg-gradient-to-r from-teal-950 via-slate-950 to-sky-950 text-white/80 py-2 border-b border-white/5 z-40 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 hover:text-cyan-400 cursor-pointer">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              NH 28, Gaura, Begusarai, Bihar
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-emerald-400 font-medium font-mono">Open Daily - 10:00 AM to 6:00 PM</span>
            </span>
            <a href="tel:+917493000051" className="font-mono text-cyan-400 hover:underline flex items-center gap-1 font-bold">
              <Phone className="w-3 h-3 text-cyan-400" />
              +91 7493000051
            </a>
          </div>
        </div>
      </div>

      <header
        className={`fixed top-0 lg:top-10 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3 lg:top-0'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative p-2 rounded-xl bg-gradient-to-tr from-sky-400 to-cyan-400 text-slate-900 shadow-md group-hover:scale-110 transition-transform duration-300">
              <Waves className="w-6 h-6" />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-amber-300">
                RAJ WATER PARK
              </span>
              <span className="block text-[8px] tracking-[0.3em] font-light text-slate-400 uppercase font-sans">
                Begusarai - Bihar
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (with glassmorphism container built into navbar if scrolled) */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 dark:bg-white/2 pb-1.5 pt-1.5 px-2 rounded-full border border-white/5 backdrop-blur-sm">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-sky-500 to-cyan-500 shadow-md'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Control Buttons (Call + Theme Toggle + Mobile Menu Trigger) */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 cursor-pointer transition-colors duration-300 border border-white/10"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* CTA Book Now Button (Desktop) */}
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-gradient-sky via-cyan-500 to-teal-500 bg-cyan-500 hover:scale-105 active:scale-95 text-slate-900 font-bold px-6 py-2.5 rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-sm tracking-wider uppercase"
            >
              Book Passes
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-white/10 text-slate-300 cursor-pointer block border border-white/10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with glassmorphism backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-[60px] md:top-[80px] bottom-0 z-30 bg-slate-950/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4 mt-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-medium py-3 border-b border-white/5 flex items-center justify-between group ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  <span>{item.label}</span>
                  <Waves className="w-4 h-4 opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 mb-10">
              <p className="text-slate-400 text-xs text-center uppercase tracking-widest leading-relaxed">
                "Play • Stay • Dine • Celebrate"
              </p>
              <div className="flex gap-3">
                <a
                  href="tel:+917493000051"
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-900 border border-white/10 hover:border-cyan-500/50 text-cyan-400 px-4 py-3.5 rounded-full text-base font-bold transition-all text-center"
                >
                  <Phone className="w-4 h-4" /> Call Frontdesk
                </a>
                <a
                  href="#booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-sky-400 to-cyan-400 text-slate-950 px-4 py-3.5 rounded-full text-base font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 text-center"
                >
                  Book Tickets
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
