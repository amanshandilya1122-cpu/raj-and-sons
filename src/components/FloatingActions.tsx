import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const whatsAppLink = "https://wa.me/917493000051?text=Hi%20Raj%20Water%20Park,%20I'm%20planning%2520to%20visit%20and%20want%2520to%20know%20more%20details!";

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 pointer-events-auto">
      {/* Floating Call Button */}
      <motion.a
        href="tel:+917493000051"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3.5 rounded-full bg-cyan-500 text-slate-900 shadow-2xl flex items-center justify-center hover:bg-cyan-400 group relative cursor-pointer"
        aria-label="Call Frontdesk Now"
      >
        <Phone className="w-5 h-5" />
        
        {/* Hover label */}
        <span className="absolute left-14 bg-slate-900 text-white text-[10px] font-bold tracking-widest uppercase py-1.5 px-3 rounded-lg border border-white/10 shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call +91 7493000051
        </span>
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsAppLink}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3.5 rounded-full bg-emerald-500 text-white shadow-2xl flex items-center justify-center hover:bg-emerald-400 group relative cursor-pointer animate-bounce"
        aria-label="Chat on WhatsApp"
        style={{ animationDuration: '3s' }}
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        
        {/* Hover label */}
        <span className="absolute left-14 bg-slate-900 text-white text-[10px] font-bold tracking-widest uppercase py-1.5 px-3 rounded-lg border border-white/10 shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp Chat
        </span>
      </motion.a>
    </div>
  );
}
