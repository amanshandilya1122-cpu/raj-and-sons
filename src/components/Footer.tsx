import React from 'react';
import { Waves, Sparkles, Phone, Mail, MapPin, ChevronUp, Facebook, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  const getYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = [
    { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="w-4 h-4" />, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-100 border-t border-white/5 pt-16 pb-12 overflow-hidden">
      {/* Absolute decor dots lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 font-sans">
        
        {/* Main Grid blocks */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand/Summary column */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-500 text-slate-900 shadow-md">
                <Waves className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-300">
                  RAJ WATER PARK
                </span>
                <span className="block text-[8px] tracking-[0.25em] font-light text-slate-400 uppercase">
                  Play • Stay • Dine • Celebrate
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              We bring world-class thrill slides, majestic hotel lodging, exquisite multi-cuisine restaurant plates, and golden-designed marriage banquet halls under one unified luxury standard in Begusarai, Bihar.
            </p>
            {/* Social handles */}
            <div className="flex gap-2.5 pt-2">
              {socialIcons.map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  aria-label={soc.label}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-sky-500 hover:to-cyan-500 hover:text-slate-950 text-slate-300 transition-colors border border-white/5"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>•</span> Home Page
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>•</span> Welcome story
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>•</span> Photo Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>•</span> Customer Reviews
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>•</span> Register Tickets
                </a>
              </li>
            </ul>
          </div>

          {/* Facilities Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Our Facilities</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#waterpark" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>•</span> Thrill Water Slides
                </a>
              </li>
              <li>
                <a href="#waterpark" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>•</span> Rain Dance Platform
                </a>
              </li>
              <li>
                <a href="#hotel" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>•</span> Raj Hotel & Suites
                </a>
              </li>
              <li>
                <a href="#restaurant" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>•</span> Raj Multi-Cuisine Diner
                </a>
              </li>
              <li>
                <a href="#banquet" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>•</span> Royal Engagement Hall
                </a>
              </li>
            </ul>
          </div>

          {/* Highway Address Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Reach Us</h4>
            <div className="space-y-3.5 text-xs text-slate-400 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Raj Krishna Cold Storage, NH 28, Gaura, Begusarai, Bihar – 851113</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+917493000051" className="font-mono font-bold hover:underline">+91 7493000051</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>amanshandilya1122@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 text-[11px] text-slate-500 font-mono">
          <p>© {getYear} RAJ WATER PARK. All noble rights reserved.</p>
          
          {/* Back to top indicator button */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 hover:text-cyan-400 border border-white/5 py-1.5 px-3 rounded-full bg-white/2 cursor-pointer transition-colors"
            aria-label="Back to top"
          >
            <span>Retreat to Top</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
