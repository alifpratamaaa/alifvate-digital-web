
import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Rocket } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

export const CTA: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-950 rounded-[4rem] p-12 md:p-28 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20"
        >
          {/* Intense Gradient Glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-xs font-black uppercase tracking-[0.2em] mb-12"
            >
                <Rocket className="w-4 h-4" /> SIAP GO DIGITAL?
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-[44px] md:text-7xl font-black text-white mb-6 sm:mb-10 leading-[1.1] sm:leading-[1.05] tracking-tight"
            >
              Tunggu Apa Lagi? <br /> Pesan Website <span className="text-blue-500">Impianmu</span> Sekarang!
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 sm:mb-16 font-bold leading-relaxed"
            >
              Promo <span className="text-white">Rp 99.000</span> hanya untuk 50 klien pertama bulan ini. <br className="hidden md:block" /> Jangan biarkan kompetitormu ambil start lebih dulu!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10"
            >
              <InteractiveButton
                href="https://wa.me/6281234567890?text=Halo%20Alifvate%20Digital,%20saya%20tertarik%20pesan%20website%2099rb"
                className="w-full sm:w-auto px-10 py-5 sm:px-14 sm:py-7 bg-blue-600 text-white rounded-2xl sm:rounded-[2.5rem] font-black text-lg sm:text-2xl shadow-2xl shadow-blue-900/40 hover:bg-blue-700 hover:-translate-y-2"
                icon={<MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />}
              >
                Mulai Website 99rb
              </InteractiveButton>
              <div className="text-left hidden md:block border-l-2 border-slate-800 pl-10">
                <p className="text-white font-black text-2xl mb-1">24 Jam Saja</p>
                <p className="text-slate-500 font-bold text-lg leading-none">Pengerjaan super singkat & rapi.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

