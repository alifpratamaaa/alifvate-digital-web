
import React from 'react';
import { Instagram, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  return (
    <footer id="kontak" className="bg-slate-950 text-white pt-16 pb-12 sm:pt-20 sm:pb-16 border-t border-slate-900 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-12 lg:col-span-5">
            <a href="#" className="text-3xl sm:text-4xl font-black tracking-tighter block mb-6 sm:mb-10">
              <span className="text-white">Alifvate</span><span className="text-blue-500">Digital</span>
            </a>
            <p className="text-slate-400 max-w-sm text-lg sm:text-xl leading-relaxed font-bold mb-8 sm:mb-10">
              Website simpel, cepat, dan terjangkau untuk semua pelaku usaha di Indonesia.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/alifvate/" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all border border-slate-800">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:halo@alifvatedigital.com" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all border border-slate-800">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://wa.me/89663084201" target="_blank" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all border border-slate-800">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="font-black text-white mb-6 sm:mb-10 uppercase tracking-[0.3em] text-[10px] sm:text-[12px]">NAVIGASI</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-4 sm:gap-y-6">
              {['Tentang', 'Kenapa Kami', 'Portfolio', 'Layanan'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 text-base sm:text-lg font-bold hover:text-white transition-all flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
 
          <div className="md:col-span-6 lg:col-span-4">
            <h4 className="font-black text-white mb-6 sm:mb-10 uppercase tracking-[0.3em] text-[10px] sm:text-[12px]">KANTOR KAMI</h4>
            <div className="bg-slate-900/50 p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem] border border-slate-900">
              <p className="text-slate-400 text-base sm:text-lg font-bold leading-relaxed sm:leading-loose mb-2">
                Jakarta Selatan, Indonesia <br className="hidden sm:block" />
                Sedia 24/7 buat konsultasi brand kamu.
              </p>
              <a href="mailto:halo@alifvatedigital.com" className="text-blue-500 font-black text-base sm:text-lg hover:underline decoration-2 underline-offset-8 transition-all">
                halo@alifvatedigital.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 sm:mt-32 pt-8 sm:pt-10 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs sm:text-[15px] font-bold text-center md:text-left">© {new Date().getFullYear()} Alifvate Digital. Dibuat dengan 🔥 untuk UMKM.</p>
          <div className="flex gap-6 sm:gap-10 text-slate-500 text-xs sm:text-[15px] font-bold">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

