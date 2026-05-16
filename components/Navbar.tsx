
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Kenapa Kami', href: '#kenapa-kami' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/70 backdrop-blur-xl border-b border-slate-200/50 py-3 shadow-xl shadow-slate-900/5' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-2xl sm:text-3xl font-black tracking-tighter group transition-all">
                <span className="text-blue-600 group-hover:text-blue-700 transition-colors">Alifvate</span>
                <span className="text-slate-900">Digital</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center lg:space-x-6 xl:space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm xl:text-[15px] font-bold text-slate-600 hover:text-blue-600 transition-all hover:-translate-y-0.5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex">
              <InteractiveButton
                href="https://wa.me/6281234567890?text=Halo%20Alifvate%20Digital,%20saya%20tertarik%20pesan%20website%2099rb"
                className="bg-[#2563eb] text-white px-6 py-3 xl:px-8 xl:py-3.5 rounded-full text-xs xl:text-[15px] font-black hover:bg-blue-700 shadow-xl shadow-blue-200"
              >
                Konsultasi Gratis
              </InteractiveButton>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-2xl text-slate-900 bg-slate-50 hover:text-blue-600 transition-all focus:outline-none shadow-sm"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-900/10 overflow-hidden z-50 p-6"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex justify-between items-center px-4 py-4 rounded-2xl text-lg font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all"
                  >
                    {link.name}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                ))}
                <div className="pt-4">
                  <InteractiveButton
                    href="https://wa.me/6281234567890?text=Halo%20Alifvate%20Digital,%20saya%20tertarik%20pesan%20website%2099rb"
                    className="block w-full text-center bg-blue-600 text-white px-6 py-5 rounded-2xl font-black text-lg shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
                  >
                    Konsultasi Gratis Sekarang
                  </InteractiveButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/6281234567890"
        target="_blank"
        initial={{ scale: 0, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-5 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.4)] flex items-center justify-center cursor-pointer group"
      >
        <MessageCircle className="w-8 h-8 md:w-9 md:h-9" />
        <div className="absolute right-full mr-5 pointer-events-none">
          <div className="bg-white text-slate-900 px-5 py-3 rounded-2xl text-[15px] font-black shadow-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            Tanya Admin Sekarang!
          </div>
        </div>
      </motion.a>
    </>
  );
};

