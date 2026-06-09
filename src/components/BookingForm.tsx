import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarCheck, User, Phone, Mail, Calendar, Users, Sliders, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    date: '',
    guests: '1',
    service: 'Water Park',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const services = ['Water Park', 'Hotel', 'Restaurant', 'Banquet Hall'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.date) return;

    setIsSubmitting(true);
    // Simulate luxury API call persistence
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Generate unique premium looking reservation/ticket number
      const code = 'RAJ-' + Math.floor(Math.random() * 90000 + 10000);
      setTicketNumber(code);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      mobile: '',
      email: '',
      date: '',
      guests: '1',
      service: 'Water Park',
    });
    setIsSuccess(false);
  };

  return (
    <section id="booking" className="relative py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 animate-fade-in">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase px-3 py-1 bg-cyan-400/10 rounded-full">
            INSTANT PASS SYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
            Reserve Your Celestial Day
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Pre-register your visit or event below. Our managers will contact you within 15 minutes to confirm booking locks.
          </p>
        </div>

        {/* Content Box with form / success card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-slate-900/60 border border-white/5 p-6 sm:p-12 backdrop-blur-xl shadow-2xl overflow-hidden">
            
            {/* Outline Glowing Strip */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-sky-500 via-cyan-400 to-amber-300" />
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="booking-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your honorable name"
                          className="w-full bg-slate-950/80 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-100 placeholder-slate-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Mobile Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                          placeholder="10-digit mobile number"
                          className="w-full bg-slate-950/80 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-100 placeholder-slate-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Email Address (Optional)</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@luxmail.com"
                          className="w-full bg-slate-950/80 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-100 placeholder-slate-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Date of Visit */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Date of Visit *</label>
                      <div className="relative font-mono">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-slate-950/80 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-100 placeholder-slate-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Number of Guests */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Number of Guests</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full bg-slate-950/80 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-100 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2-4">2-4 Guests</option>
                          <option value="5-10">5-10 Guests</option>
                          <option value="11-25">11-25 Guests</option>
                          <option value="25+">Corporate / School picnic (25+)</option>
                        </select>
                      </div>
                    </div>

                    {/* Service Required */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Service Required</label>
                      <div className="relative">
                        <Sliders className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-slate-950/80 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-100 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all appearance-none cursor-pointer"
                        >
                          {services.map((ser, i) => (
                            <option key={i} value={ser}>{ser}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submission Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cursor-pointer py-4 bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-lg hover:shadow-cyan-400/25 transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <CalendarCheck className="w-4 h-4" />
                          <span>Request Registration</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-6 flex flex-col items-center gap-6"
                >
                  <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-md">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">Pre-Registration Complete!</h3>
                    <p className="text-slate-400 text-sm mt-1 max-w-md mx-auto leading-relaxed">
                      Your celestial ticket has been provisioned. We've locked your details under record pool:
                    </p>
                  </div>

                  {/* Ticket Mockup */}
                  <div className="relative w-full max-w-sm rounded-2xl bg-slate-950 border border-white/10 p-6 shadow-inner text-left overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-cyan-400/10 to-amber-300/10 rounded-bl-[100px] pointer-events-none" />
                    
                    <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-4">
                      <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-widest">Raj Water Park Pass</span>
                      <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs font-mono mb-4 text-slate-300">
                      <div>
                        <span className="text-[9px] block text-slate-500 uppercase tracking-widest">Guest Name</span>
                        <span className="font-bold text-white break-words">{formData.name}</span>
                      </div>
                      <div>
                        <span className="text-[9px] block text-slate-500 uppercase tracking-widest">Pass No.</span>
                        <span className="font-bold text-cyan-400">{ticketNumber}</span>
                      </div>
                      <div>
                        <span className="text-[9px] block text-slate-500 uppercase tracking-widest">Category</span>
                        <span className="font-bold text-white">{formData.service}</span>
                      </div>
                      <div>
                        <span className="text-[9px] block text-slate-500 uppercase tracking-widest">Entry Date</span>
                        <span className="font-bold text-white">{formData.date}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-[11px] text-amber-300 font-light italic leading-relaxed border-t border-white/5 pt-4">
                      <p>✨ Call/WhatsApp us to confirm your payment link or lock in room keys immediately!</p>
                    </div>
                  </div>

                  {/* Call to lock action trigger */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md pt-4">
                    <a
                      href="tel:+917493000051"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 font-bold text-xs uppercase tracking-wider text-slate-950 py-3 rounded-xl shadow-md transition-all hover:scale-105"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Call Frontdesk</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl cursor-pointer select-none transition-colors"
                    >
                      New Booking Request
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </div>

      </div>
    </section>
  );
}
