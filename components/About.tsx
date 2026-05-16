
import React from 'react';
import { motion } from 'motion/react';
import { Target, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div id="tentang" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-24">
          <div className="lg:w-1/2 mb-20 lg:mb-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image with decorative border */}
              <div className="relative p-4 bg-slate-50 rounded-[3rem] border border-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
                  alt="Laptop Mockup"
                  className="rounded-[2.5rem] shadow-2xl transition-all duration-700 w-full group-hover:scale-[1.02]"
                />
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl shadow-blue-200/50 border border-slate-50 z-20 hidden md:block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900 leading-none">99.9%</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Uptime Rate</p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} className="rounded-full" alt="User" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">+50</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-10 -left-10 bg-[#2563eb] text-white p-10 rounded-[3rem] shadow-2xl shadow-blue-200 z-20 hidden md:block"
              >
                <p className="text-5xl font-black mb-2">100%</p>
                <p className="text-xs uppercase font-black tracking-[0.2em] opacity-80">SOLUSI UMKM</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-[0.34em] mb-6">
                 <Users className="w-4 h-4" /> TENTANG KAMI
              </div>
              
              <h2 className="text-[44px] md:text-6xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tight">
                Partner Digital <br /> <span className="text-blue-600">Terbaik</span> UMKM & Personal Brand.
              </h2>
              
              <div className="space-y-8 text-xl text-slate-500 font-medium leading-relaxed mb-14">
                <p>
                  Di <span className="text-slate-900 font-black">Alifvate Digital</span>, kami percaya bahwa setiap usaha layak memiliki "rumah digital" yang keren tanpa harus menguras kantong jutaan rupiah.
                </p>
                <p>
                  Kami hadir untuk memangkas kerumitan teknis. Gak perlu pusing mikirin server, coding, atau desain yang ribet. Cukup kirim kontenmu, biar kami yang bereskan sisanya dalam hitungan hari.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                <div className="p-5 sm:p-8 bg-slate-50 rounded-3xl sm:rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all group">
                  <div className="text-blue-600 font-black text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform origin-left">24h</div>
                  <p className="text-slate-900 font-black text-base sm:text-xl mb-1 sm:mb-2">Proses Cepat</p>
                  <p className="text-slate-500 font-bold text-xs sm:text-base leading-tight sm:leading-normal">Online dalam 1–2 hari kerja saja.</p>
                </div>
                <div className="p-5 sm:p-8 bg-slate-50 rounded-3xl sm:rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all group">
                  <div className="text-blue-600 font-black text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform origin-left">1x</div>
                  <p className="text-slate-900 font-black text-base sm:text-xl mb-1 sm:mb-2">Sangat Simpel</p>
                  <p className="text-slate-500 font-bold text-xs sm:text-base leading-tight sm:leading-normal">Proses order & data via WhatsApp.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
