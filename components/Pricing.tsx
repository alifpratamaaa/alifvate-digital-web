
import React from 'react';
import { Check, Sparkles, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';

export const Pricing: React.FC = () => {
  const inclusions = [
    'Website 1 Halaman (Landing Page)',
    'Responsive (Mobile, Tablet, Desktop)',
    'Desain Modern & Exclusive',
    'Domain Gratis (.vercel.app)',
    'Keamanan SSL / HTTPS Ultra Secure',
    'Revisi Sampai Puas*',
    'Integrasi Tombol WhatsApp Direct',
  ];

  return (
    <div id="paket-99rb" className="py-20 bg-white relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-6 block"
          >
            BEST VALUE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[44px] md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8"
          >
            Investasi Murah, <br className="hidden md:block" /> Hasil Berkelas
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-500 font-medium leading-relaxed"
          >
            Satu harga untuk semua fitur yang kamu butuhin buat mulai Go-Digital hari ini.
          </motion.p>
        </div>

        <div className="max-w-xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-8 sm:p-12 md:p-16 bg-white border border-slate-100 rounded-[3rem] sm:rounded-[4rem] shadow-[0_40px_100px_rgba(37,99,235,0.12)] group hover:shadow-[0_40px_100px_rgba(37,99,235,0.2)] transition-shadow duration-500"
          >
            {/* Animated Glow Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent rounded-[3rem] sm:rounded-[4rem] pointer-events-none"></div>
            
            <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 bg-[#2563eb] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl sm:rounded-2xl text-[10px] sm:text-[14px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-xl shadow-blue-200 flex items-center gap-2 whitespace-nowrap">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" /> TERBARU & TERLARIS
            </div>
            
            <div className="text-center mb-10 sm:mb-12 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-50 text-blue-600 text-[8px] sm:text-[10px] font-black uppercase tracking-widest mb-6 sm:mb-8 whitespace-nowrap">
                <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" /> PAKET STARTER UMKM
              </div>
              <div className="flex items-baseline justify-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mr-1 sm:mr-2">Rp</span>
                <span className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-slate-900 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500">99k</span>
              </div>
              <div className="mt-6 sm:mt-8 bg-blue-50/50 py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl border border-blue-100/50">
                 <p className="text-blue-600 font-black text-sm sm:text-lg">PROMO TERBATAS MINGGU INI!</p>
              </div>
            </div>

            <ul className="space-y-4 sm:space-y-6 mb-12 sm:mb-16 relative z-10">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-center group/item transition-all hover:translate-x-1">
                  <div className="flex-shrink-0 bg-blue-600 text-white p-1 rounded-md sm:rounded-lg mr-3 sm:mr-5 shadow-lg shadow-blue-100 group-hover/item:scale-110 transition-transform">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 stroke-[4]" />
                  </div>
                  <p className="text-base sm:text-xl text-slate-600 font-bold">{item}</p>
                </li>
              ))}
            </ul>

            <div className="relative z-10">
              <InteractiveButton
                href="https://wa.me/6281234567890?text=Halo%20Alifvate%20Digital,%20saya%20mau%20ambil%20Paket%2099rb"
                className="block w-full text-center px-6 py-5 sm:px-8 sm:py-7 bg-blue-600 text-white rounded-[2rem] sm:rounded-[2.5rem] font-black text-lg sm:text-2xl shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:bg-blue-700 hover:-translate-y-1.5"
                icon={<Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />}
              >
                Gas, Pesan Sekarang!
              </InteractiveButton>
              
              <p className="mt-10 text-center text-sm text-slate-400 font-bold italic">
                *Tersedia Gratis Konsultasi Sebelum Bayar.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
