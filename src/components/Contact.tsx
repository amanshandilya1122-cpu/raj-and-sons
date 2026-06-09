import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, Compass, Navigation, Mail, Clock, ShieldAlert } from 'lucide-react';

export default function Contact() {
  const mapQuery = "Raj+Krishna+Cold+Storage,+NH+28,+Gaura,+Begusarai,+Bihar+851113";
  const gMapsLink = `https://maps.google.com/?q=${mapQuery}`;
  const whatsAppLink = "https://wa.me/917493000051?text=Hi%20Raj%20Water%20Park,%20I'm%20planning%20to%20visit%20and%20want%20to%20know%20more%20about%20ticket%20charges!";

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 animate-fade-in">
          <span className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase px-3 py-1 bg-cyan-400/10 rounded-full">
            LOCATE US
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
            Plan Your Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Conveniently situated on NH 28 highways for easy entry, check our coordinates or talk to us directly.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Details column (left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-white tracking-wide">RAJ WATER PARK</h3>
              <p className="text-slate-450 text-sm leading-relaxed font-light">
                Our customer executive frontdesk handles bookings, corporate gatherings, picnicking permits, and room keys daily 24 hours. Feel free to contact.
              </p>
            </div>

            {/* Quick Specs table */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Address</h4>
                  <p className="text-sm text-slate-200 mt-1 leading-relaxed font-sans">
                    Raj Krishna Cold Storage, NH 28, Gaura, Begusarai, Bihar – 851113
                  </p>
                </div>
              </div>

              {/* Phone Line */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Phone Reservation</h4>
                  <p className="text-sm text-slate-200 mt-1 font-mono font-bold hover:text-cyan-400">
                    <a href="tel:+917493000051">+91 7493000051</a>
                  </p>
                </div>
              </div>

              {/* Email / Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider font-sans">Operating Timings</h4>
                  <p className="text-sm text-slate-200 mt-1 font-mono">
                    Park: Daily 10 AM - 6 PM | Hotel: 24 Hours
                  </p>
                </div>
              </div>
            </div>

            {/* Core Launch Actions buttons stack */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {/* Call */}
              <a
                href="tel:+917493000051"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 hover:scale-105 active:scale-95 text-slate-950 font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl cursor-pointer shadow-md transition-all"
              >
                <Phone className="w-4 h-4" /> Call Frontdesk
              </a>

              {/* WhatsApp */}
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-550 border border-emerald-500/30 hover:bg-emerald-600 hover:border-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400" /> WhatsApp Chat
              </a>

              {/* Get Directions */}
              <a
                href={gMapsLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 border border-white/10 text-slate-300 font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all hover:scale-105 hover:bg-slate-950 hover:text-white"
              >
                <Navigation className="w-4 h-4 text-cyan-400 animate-pulse" /> Get Directions
              </a>
            </div>
          </motion.div>

          {/* Map Column (right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative h-[450px] lg:h-auto"
          >
            {/* Outline Frame glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500/20 to-teal-500/20 blur-md opacity-35" />

            <div className="relative rounded-2xl overflow-hidden h-full w-full bg-slate-900 border border-white/10 shadow-2xl">
              <iframe
                title="Google Maps Location for Raj Water Park Begusarai Bihar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.6672322312!2d86.07159047714897!3d25.582767077467652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f21f1d191ec5df%3A0xc669ef02feeb455!2sRaj%20Water%20Park.!5e0!3m2!1sen!2sin!4v1717900000000!5m2!1sen!2sin"
                className="w-full h-full grayscale-[15%] invert-[5%] hover:grayscale-0 hover:invert-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Little disclaimer tag inside map */}
              <div className="absolute bottom-4 right-4 p-2 bg-slate-950/80 backdrop-blur-md rounded border border-white/10 text-[10px] text-slate-400 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5 text-yellow-400" />
                <span>NH-28 highway easy parking point</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
