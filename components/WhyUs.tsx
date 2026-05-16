
import React from 'react';
import { DollarSign, Shield, Zap, Smartphone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyUs: React.FC = () => {
  const features = [
    {
      title: 'Harga Jujur',
      description: 'Cuma 99rb nett. Gak ada biaya tersembunyi atau tambahan biaya setup yang aneh-aneh.',
      icon: <DollarSign className="w-7 h-7 text-blue-600" />,
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      title: 'Super Aman (SSL)',
      description: 'Website otomatis dapet HTTPS/SSL gratis. Jadi pengunjung makin percaya sama bisnismu.',
      icon: <Shield className="w-7 h-7 text-blue-600" />,
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Cepat & Ringan',
      description: 'Kita pakai infrastruktur modern yang bikin website kamu loading secepat kilat.',
      icon: <Zap className="w-7 h-7 text-blue-600" />,
      color: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      title: 'Mobile Friendly',
      description: 'Website otomatis rapi kalau dibuka di HP, Tablet, atau Laptop. Gak bakal berantakan.',
      icon: <Smartphone className="w-7 h-7 text-blue-600" />,
      color: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div id="kenapa-kami" className="py-20 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-50/50 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-indigo-50/50 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-6 block"
          >
            OUR VALUES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[44px] md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8"
          >
            Kenapa Harus Kami?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-500 font-medium leading-relaxed"
          >
            Banyak jasa bikin website mahal, tapi di Alifvate Digital kita fokus ke apa yang kamu butuhin aja.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-[0_10px_50px_rgba(0,0,0,0.03)] transition-all group hover:shadow-[0_30px_70px_rgba(37,99,235,0.08)] relative overflow-hidden"
            >
              {/* Card Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700 opacity-50"></div>
              
              <div className={`${feature.color} w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl sm:rounded-[1.75rem] mb-6 sm:mb-10 transition-transform duration-500 group-hover:rotate-6 shadow-sm`}>
                <div className={`${feature.iconColor} transform scale-75 sm:scale-100`}>{feature.icon}</div>
              </div>
              
              <h3 className="text-lg sm:text-2xl font-black text-slate-900 mb-3 sm:mb-6 tracking-tight relative z-10 line-clamp-2">{feature.title}</h3>
              <p className="text-slate-500 text-xs sm:text-[17px] leading-relaxed font-bold relative z-10 mb-4 sm:mb-8 line-clamp-3 sm:line-clamp-none">{feature.description}</p>
              
              <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] sm:text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Detail <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

