import React, { useState, useEffect } from 'react';
import OpeningAnimation from './components/OpeningAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RippleCursor from './components/RippleCursor';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Toggle Dark/Light Class on high-level container
  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    // Sync theme with raw browser HTML tag for tailwind if needed
    const htmlEl = document.documentElement;
    if (isDark) {
      htmlEl.classList.add('dark');
      htmlEl.style.backgroundColor = '#020617';
    } else {
      htmlEl.classList.remove('dark');
      htmlEl.style.backgroundColor = '#f8fafc';
    }
  }, [isDark]);

  return (
    <>
      {/* 1. Premier Water Splash Opening Intro Screen */}
      {!isAnimationComplete && (
        <OpeningAnimation onComplete={() => setIsAnimationComplete(true)} />
      )}

      {/* Main Container, only rendered/active after loading completes */}
      {isAnimationComplete && (
        <div className={`min-h-screen transition-colors duration-500 font-sans ${
          isDark 
            ? 'dark bg-slate-950 text-slate-100' 
            : 'bg-slate-50 text-slate-900'
        }`}>
          
          {/* Interactive cursor aqua ripple & bubble trail */}
          <RippleCursor />

          {/* 2. Brand Sticky Navbar */}
          <Navbar isDark={isDark} onToggleTheme={handleToggleTheme} />

          {/* 3. Hero Entrance banner with portal particles */}
          <Hero />

          {/* 4. Welcome Segment with microstats */}
          <About />

          {/* 5. Combined Luxury Resort Experiences Showcase */}
          <Experiences />

          {/* 10. Photo Masonry Grid and custom Zoom Dialog */}
          <Gallery />

          {/* 11. Sliding Testimonial Carousel */}
          <Testimonials />

          {/* 12. Celestial Ticket Pre-registration Booking system */}
          <BookingForm />

          {/* 13. Deep Contact block + Live embedded map panel */}
          <Contact />

          {/* 14. Standard branding Footer */}
          <Footer />

          {/* 15. Quick Support Hotkeys launcher (WhatsApp & Call) */}
          <FloatingActions />
          
        </div>
      )}
    </>
  );
}
