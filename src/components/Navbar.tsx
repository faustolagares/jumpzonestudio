import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { HeaderButton, IconButton, JumpButton, NavLinkButton } from './Buttons';
import { JUMP_ZONE_LOGO_SRC } from '../lib/assets';
import { optimizedSrc, optimizedSrcSet } from '../lib/img';
import { supportedLanguages } from '../lib/language';

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
    { label: t.navClasses.toUpperCase(), id: 'classes' },
    { label: t.navSchedule.toUpperCase(), id: 'classes' },
    { label: t.navPricing.toUpperCase(), id: 'pricing' },
    { label: t.navAbout.toUpperCase(), id: 'studio' },
    { label: t.navContact.toUpperCase(), id: 'footer' }
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
              src={optimizedSrc(JUMP_ZONE_LOGO_SRC, 320)} 
              srcSet={optimizedSrcSet(JUMP_ZONE_LOGO_SRC, 320)}
              alt="JUMP ZONE STUDIO Logo" 
              decoding="async"
              fetchPriority="high"
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
              <NavLinkButton
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-white py-1"
              >
                {item.label}
              </NavLinkButton>
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
                {supportedLanguages.map((lang) => (
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
            <HeaderButton
              onClick={onBookClick}
            >
              {t.navBookNow}
            </HeaderButton>
          </div>

          {/* Mobile: language switcher + hamburger */}
          <div className="flex md:hidden items-center space-x-3">
            <div className="flex items-center bg-white/[0.04] p-0.5 rounded-full border border-white/[0.06]">
              <div className="pl-2 pr-1 text-steel-gray">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <div className="flex space-x-0.5">
                {supportedLanguages.map((lang) => (
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
            <IconButton
              icon={<Menu className="w-5 h-5" />}
              variant="dark"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open menu"
            />
          </div>

        </div>
      </div>

      {/* Mobile full-screen overlay menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-[60] bg-deep-black flex flex-col"
        >
            {/* Overlay header — logo + close button */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4 shrink-0">
              <div
                onClick={() => setIsOpen(false)}
                className="cursor-pointer select-none relative h-14 w-36"
              >
                <img
                  src={optimizedSrc(JUMP_ZONE_LOGO_SRC, 256)}
                  srcSet={optimizedSrcSet(JUMP_ZONE_LOGO_SRC, 256)}
                  alt="JUMP ZONE STUDIO Logo"
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-auto object-contain absolute left-0 top-[60%] -translate-y-1/2"
                  referrerPolicy="no-referrer"
                />
              </div>
              <IconButton
                icon={<X className="w-5 h-5" />}
                variant="dark"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              />
            </div>

            {/* Centered nav items */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1 px-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-center py-3 font-display font-black text-4xl sm:text-5xl italic uppercase tracking-tight text-white hover:text-energy-green transition-colors duration-150 leading-none"
                >
                  {item.label}
                </button>
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
        </div>
      )}
    </nav>
  );
}
