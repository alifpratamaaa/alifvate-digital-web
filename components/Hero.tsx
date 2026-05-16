
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-white">
      {/* Background Decor - Subtle radial fade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent -z-10"></div>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-[100px] opacity-40 z-0"
      ></motion.div>
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60 z-0"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-10"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">PROMO LAUNCHING: CUMA RP 99.000!</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[48px] md:text-7xl lg:text-[100px] font-black text-slate-900 tracking-[-0.04em] leading-[1] mb-10 max-w-6xl mx-auto"
          >
            Punya Website <span className="text-blue-600">Profesional</span> <br /> Gak Harus Mahal.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-2xl text-slate-500 mb-14 leading-relaxed font-medium"
          >
            Bantu UMKM, Personal Brand, dan Bisnis pemula Go Digital dengan landing page modern, cepat, dan terjangkau.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <InteractiveButton
              href="https://wa.me/6289663084201?text=Halo%20Alifvate%20Digital,%20saya%20tertarik%20pesan%20website%2099rb"
              className="px-6 py-4 sm:px-12 sm:py-6 bg-[#2563eb] text-white rounded-[2rem] font-black text-sm sm:text-xl shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1"
              icon={<ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />}
            >
              Pesan Website 99rb Sekarang
            </InteractiveButton>
            <a
              href="#paket-99rb"
              className="px-6 py-4 sm:px-12 sm:py-6 bg-white text-slate-900 border border-slate-100 rounded-[2rem] font-black text-sm sm:text-xl shadow-xl shadow-slate-100 hover:bg-slate-50 transition-all hover:-translate-y-1 text-center"
            >
              Lihat Contoh Paket
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 sm:mt-20 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-6 sm:gap-x-12 sm:gap-y-6 px-4"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 group justify-center sm:justify-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-blue-50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-[17px] font-bold text-slate-400 leading-tight">Bisa Online 1–2 Hari</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 group justify-center sm:justify-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-blue-50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-[17px] font-bold text-slate-400 leading-tight text-left">Tanpa Biaya Hosting</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
