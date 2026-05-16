
import React from 'react';
import { ExternalLink, Eye, LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Coffee Shop Modern',
      category: 'Landing Page',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
      description: 'Landing page estetik untuk bisnis kopi kekinian.'
    },
    {
      title: 'Digital Agency Profile',
      category: 'Company Profile',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
       description: 'Profil perusahaan profesional yang meningkatkan kredibilitas.'
    },
    {
      title: 'Portfolio Fotografer',
      category: 'Personal Brand',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=800',
       description: 'Showcase karya kreatif dengan tampilan minimalis.'
    },
    {
      title: 'Toko Baju Online',
      category: 'Katalog Produk',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800',
       description: 'Katalog produk simpel untuk jualan makin lancar.'
    },
  ];

  return (
    <div id="portfolio" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-[0.34em] mb-4"
            >
               <LayoutGrid className="w-4 h-4" /> PORTFOLIO
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[44px] md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]"
            >
              Karya Terbaru Kami
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:text-right text-xl text-slate-500 font-medium max-w-sm"
          >
            Hasil kerja nyata kami yang simpel, cepat, dan tetap terlihat profesional.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                y: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-slate-50 aspect-[16/10] cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
              />
              
              {/* Overlay Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="absolute inset-0 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-end">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-4">
                  <div className="max-w-md flex-1">
                    <span className="hidden sm:inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-600 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-2 lg:mb-4">{project.category}</span>
                    <h3 className="text-sm sm:text-base md:text-xl lg:text-3xl xl:text-4xl font-black text-white tracking-tight mb-1 sm:mb-2 line-clamp-2">{project.title}</h3>
                    <p className="hidden sm:block text-slate-200 text-[10px] md:text-sm lg:text-base xl:text-lg font-medium">{project.description}</p>
                  </div>
                  <div className="hidden sm:flex gap-4 flex-shrink-0">
                    <button className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95">
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href="https://wa.me/6289663084201?text=Halo%20Alifvate%20Digital,%20saya%20mau%20lihat%20lebih%20banyak%20contoh%20website"
            target="_blank"
            className="inline-flex items-center gap-2 sm:gap-4 bg-slate-900 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-full font-black text-sm sm:text-xl hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-2xl active:scale-95 group"
          >
            Lihat Portfolio Lainnya di WhatsApp
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

