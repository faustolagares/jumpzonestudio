import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, TranslationSet } from '../types';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { JumpButton } from './JumpButton';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onBookClick: () => void;
}

export default function Navbar({ currentLang, onLanguageChange, onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80; // height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'CLASSES', id: 'classes' },
    { label: 'SCHEDULE', id: 'classes' },
    { label: 'PRICING', id: 'pricing' },
    { label: 'ABOUT', id: 'studio' },
    { label: 'CONTACT', id: 'footer' }
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'pt', label: 'PT' }
  ];

  return (
    <nav 
      id="navbar-root"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled 
          ? 'bg-black border-b border-black py-1.5' 
          : 'bg-transparent py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-11 sm:h-12' : 'h-14 sm:h-16'
        }`}>
          
          {/* Brand Logo with placeholder space and floating absolute image */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`cursor-pointer select-none transition-all duration-300 flex items-center shrink-0 relative ${
              isScrolled 
                ? 'h-11 w-28 sm:w-36 lg:w-44' 
                : 'h-14 sm:h-16 w-36 sm:w-48 lg:w-60 xl:w-64'
            }`}
          >
            <img 
              src="/images/jump_zone_logo_1780012118773.png" 
              alt="JUMP ZONE STUDIO Logo" 
              className={`transition-all duration-300 w-auto object-contain absolute left-0 origin-left max-w-none ${
                isScrolled 
                  ? 'h-14 sm:h-18 lg:h-22 top-[58%] -translate-y-1/2' 
                  : 'h-22 sm:h-30 lg:h-38 xl:h-42 top-[66%] -translate-y-1/2'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-sans font-semibold uppercase tracking-wider text-cool-gray hover:text-white transition-colors duration-150 py-1"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Controls: Multilingual selector + Book CTA */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-5">
            
            {/* Language Switcher */}
            <div className="flex items-center bg-white/[0.04] p-0.5 rounded-full border border-white/[0.06] shrink-0">
              <div className="pl-2 pr-1 text-steel-gray">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <div className="flex space-x-0.5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full transition-all duration-150 ${
                      currentLang === lang.code
                        ? 'bg-energy-green text-deep-black font-semibold'
                        : 'text-steel-gray hover:text-white'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA action */}
            <JumpButton
              onClick={onBookClick}
              variant="primary"
              showSlashes={false}
              showIcon={true}
              iconType="arrow"
              className="!py-1.5 !px-3 sm:!px-4 !h-9 !w-auto !min-w-[145px] sm:!min-w-[160px] font-sans tracking-wider text-[10px] whitespace-nowrap select-none"
            >
              {currentLang === 'pt' ? 'RESERVA JUMP' : currentLang === 'es' ? 'RESERVAR JUMP' : 'BOOK YOUR JUMP'}
            </JumpButton>
          </div>

          {/* Mobile: language switcher + hamburger */}
          <div className="flex md:hidden items-center space-x-3">
            <div className="flex items-center bg-white/[0.04] p-0.5 rounded-full border border-white/[0.06]">
              <div className="pl-2 pr-1 text-steel-gray">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <div className="flex space-x-0.5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full transition-colors duration-150 ${
                      currentLang === lang.code
                        ? 'bg-energy-green text-deep-black'
                        : 'text-steel-gray hover:text-white'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-steel-gray hover:text-white transition-colors duration-150 focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden fixed inset-0 z-[60] bg-deep-black flex flex-col"
          >
            {/* Overlay header — logo + close button */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4 shrink-0">
              <div
                onClick={() => setIsOpen(false)}
                className="cursor-pointer select-none relative h-14 w-36"
              >
                <img
                  src="/images/jump_zone_logo_1780012118773.png"
                  alt="JUMP ZONE STUDIO Logo"
                  className="h-20 w-auto object-contain absolute left-0 top-[60%] -translate-y-1/2"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-steel-gray hover:text-white transition-colors duration-150"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Centered nav items */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1 px-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-center py-3 font-display font-black text-4xl sm:text-5xl italic uppercase tracking-tight text-white hover:text-energy-green transition-colors duration-150 leading-none"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Overlay footer — CTA only, safe-area aware */}
            <div
              className="shrink-0 px-6 pt-6 flex flex-col items-center"
              style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom) + 1.5rem)' }}
            >
              <div className="w-full max-w-xs">
                <JumpButton
                  onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                  }}
                  variant="primary"
                  fullWidth={true}
                  iconType="arrow"
                >
                  {t.navBookNow}
                </JumpButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
