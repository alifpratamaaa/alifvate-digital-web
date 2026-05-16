
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Layers } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

export const Services: React.FC = () => {
  const serviceTypes = [
    { title: 'Landing Page', desc: 'Halaman promosi produk/jasa biar jualan makin laris.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Company Profile', desc: 'Profile bisnis biar terlihat profesional di mata klien.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92fb1ab?auto=format&fit=crop&q=80&w=800' },
    { title: 'Portfolio Pribadi', desc: 'Pamerin karya atau CV online biar makin dilirik recruiter.', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800' },
    { title: 'Katalog Produk', desc: 'List produk jualanmu biar customer gampang milih.', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
    { title: 'Microsite / Link Bio', desc: 'Alternatif Linktree yang lebih eksklusif & branded.', img: 'https://images.unsplash.com/photo-1512428559083-a401c338e45e?auto=format&fit=crop&q=80&w=800' },
    { title: 'Promo Page', desc: 'Halaman khusus event atau promo terbatas bisnismu.', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div id="layanan" className="py-20 bg-slate-50/50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-24">
           <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-blue-600 font-black text-xs uppercase tracking-[0.34em] mb-6"
            >
               <Layers className="w-4 h-4" /> LAYANAN KAMI
            </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[44px] md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8"
          >
            Satu Harga untuk <br className="hidden md:block" /> Berbagai Kebutuhan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto text-xl text-slate-500 font-medium"
          >
            Pilih jenis website yang sesuai dengan bisnismu. Semua tipe cuma <span className="text-blue-600 font-black">Rp 99.000!</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {serviceTypes.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/5 border border-slate-100 group cursor-default"
            >
              <div className="h-32 sm:h-64 overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-6 sm:left-8 sm:right-8">
                    <h3 className="text-sm sm:text-2xl font-black text-white tracking-tight leading-tight line-clamp-2">{service.title}</h3>
                </div>
              </div>
              <div className="p-4 sm:p-10">
                <p className="text-slate-500 text-[10px] sm:text-lg leading-relaxed font-bold mb-4 sm:mb-8 line-clamp-3 sm:line-clamp-none">{service.desc}</p>
                <InteractiveButton 
                   href="https://wa.me/6289663084201"
                   className="inline-flex items-center gap-1 sm:gap-2 text-blue-600 font-black text-[9px] sm:text-sm uppercase tracking-widest group/link"
                   icon={<ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />}
                >
                    Pesan Tipe Ini 
                </InteractiveButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

