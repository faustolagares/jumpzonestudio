import { Language } from '../types';
import { translations } from '../translations';
import { motion } from 'motion/react';
import { JumpButton } from './JumpButton';
import { Zap, Users, Flame, BarChart3, MapPin } from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onBookClick: () => void;
  onClassesClick: () => void;
}

export default function HeroSection({ currentLang, onBookClick, onClassesClick }: HeroSectionProps) {
  return (
    <section 
      id="hero-root"
      className="relative min-h-screen bg-[#050505] pt-24 sm:pt-28 pb-16 flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, #050505 0%, #050505 30%, rgba(5,5,5,0.5) 50%, rgba(5,5,5,0.05) 68%, rgba(5,5,5,0.85) 90%, #050505 100%), url("https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/1d011d00-e9e8-4d0f-7cd3-35886e138100/public")`,
        backgroundSize: 'cover',
        backgroundPosition: '45% center'
      }}
    >
      {/* Background visual overlay mask - Neon radial gradients & dotted layout grids */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-energy-green/[0.04] blur-[140px]" />
        
        {/* Subtle grid pattern for techno athletic club vibe */}
        <div 
          className="absolute inset-0 opacity-[0.02] select-none"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, #A8FF00 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex-1 flex flex-col justify-between mt-8 lg:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-1">
          
          {/* Hero text information */}
          <div className="lg:col-span-8 flex flex-col space-y-6 sm:space-y-8 text-left">
            
            {/* Promotional Badge / Newark Focus */}
            <div className="flex items-center justify-start">
              <span className="text-energy-green font-display font-medium text-lg sm:text-xl tracking-[0.25em] uppercase">
                NEWARK, NJ
              </span>
            </div>

            {/* Impressive headers - ultra clean, italic, Teko displays */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-1"
            >
              <h1 className="text-7xl sm:text-7xl md:text-8xl xl:text-9xl font-display font-black leading-[0.85] tracking-tight text-white uppercase italic -skew-x-3">
                WE DON'T
                <span className="block text-white">JUST JUMP.</span>
                <span className="block text-energy-green font-black">
                  WE LEVEL UP.
                </span>
              </h1>
            </motion.div>

            {/* Slogan brush style divider */}
            <div className="w-48 h-[3px] bg-gradient-to-r from-energy-green via-energy-green to-transparent mx-0 my-1 rounded-full" />

            {/* Brand slogan description */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-sans font-medium pt-2"
            >
              High-energy trampoline workouts.<br className="hidden sm:inline" />
              Real results. Strong community.<br className="hidden sm:inline" />
              Unforgettable experience.
            </motion.p>

            {/* CTAs - authentic high-energy chamfered buttons */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row items-start justify-start gap-4 w-full sm:w-auto"
            >
              <JumpButton 
                onClick={onBookClick}
                variant="primary"
                showSlashes={false}
                showIcon={true}
                iconType="arrow"
                className="w-full sm:w-auto h-14"
              >
                {currentLang === 'pt' ? 'RESERVA JUMP' : currentLang === 'es' ? 'RESERVAR JUMP' : 'BOOK YOUR JUMP'}
              </JumpButton>
              <JumpButton 
                onClick={onClassesClick}
                variant="secondary"
                showSlashes={false}
                showIcon={true}
                iconType="arrow"
                className="w-full sm:w-auto h-14"
              >
                {currentLang === 'pt' ? 'VER MODALIDADES' : currentLang === 'es' ? 'VER CLASES' : 'VIEW CLASSES'}
              </JumpButton>
            </motion.div>
          </div>

        </div>

        {/* Footer Statistics/Features Banner cards matching the screenshot exactly */}
        <div id="hero-cards-footer" className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-16 sm:mt-24 w-full">
          {/* Left Feature Column (4 items in a row grid) with cut corners */}
          <div className="xl:col-span-9 relative">
            {/* Outer Border */}
            <div 
              className="absolute inset-0 bg-white/10"
              style={{
                clipPath: "polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%, 0% 16px)"
              }}
            />
            {/* Inner Background offset by 1px */}
            <div 
              className="absolute inset-[1px] bg-black/45 backdrop-blur-md"
              style={{
                clipPath: "polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%, 0% 16px)"
              }}
            />

            {/* Inner Content Area */}
            <div className="relative z-10 p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.05]">
                
                {/* Item 1 - High Energy */}
                <div className="flex items-start space-x-4 py-4 first:pt-0 sm:py-0 sm:pr-4 lg:px-4 lg:first:pl-0">
                  <div className="p-2 text-energy-green shrink-0 mt-0.5">
                    <Zap className="w-7 h-7 text-energy-green fill-current" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-lg leading-tight tracking-wider text-white uppercase">HIGH ENERGY</h4>
                    <p className="text-[11px] text-steel-gray mt-1 leading-snug font-sans">Cardio, strength &amp; music-driven workouts.</p>
                  </div>
                </div>

                {/* Item 2 - Strong Community */}
                <div className="flex items-start space-x-4 py-4 sm:py-0 sm:px-4 lg:px-4">
                  <div className="p-2 text-energy-green shrink-0 mt-0.5">
                    <Users className="w-7 h-7 text-energy-green" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-lg leading-tight tracking-wider text-white uppercase">STRONG COMMUNITY</h4>
                    <p className="text-[11px] text-steel-gray mt-1 leading-snug font-sans">Real people. Real support. Real connections.</p>
                  </div>
                </div>

                {/* Item 3 - Burn Calories */}
                <div className="flex items-start space-x-4 py-4 sm:py-0 sm:px-4 lg:px-4">
                  <div className="p-2 text-energy-green shrink-0 mt-0.5">
                    <Flame className="w-7 h-7 text-energy-green" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-lg leading-tight tracking-wider text-white uppercase">BURN CALORIES</h4>
                    <p className="text-[11px] text-steel-gray mt-1 leading-snug font-sans">Jump higher. Burn more. Feel unstoppable.</p>
                  </div>
                </div>

                {/* Item 4 - All Levels */}
                <div className="flex items-start space-x-4 py-4 last:pb-0 sm:py-0 sm:px-4 lg:px-4">
                  <div className="p-2 text-energy-green shrink-0 mt-0.5">
                    <BarChart3 className="w-7 h-7 text-energy-green" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-lg leading-tight tracking-wider text-white uppercase">ALL LEVELS</h4>
                    <p className="text-[11px] text-steel-gray mt-1 leading-snug font-sans">Beginner to advanced. You belong here.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Newark location badge (3 columns grid space) with cut corners */}
          <div className="xl:col-span-3 relative group shrink-0">
            {/* Outer Border */}
            <div 
              className="absolute inset-0 bg-white/10 group-hover:bg-energy-green/40 transition-colors duration-200"
              style={{
                clipPath: "polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%, 0% 16px)"
              }}
            />
            {/* Inner Background offset by 1px */}
            <div 
              className="absolute inset-[1px] bg-black/45 group-hover:bg-dark-charcoal backdrop-blur-md transition-colors duration-200"
              style={{
                clipPath: "polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%, 0% 16px)"
              }}
            />
            
            {/* Subtle Ambient Glow behind on Hover */}
            <div className="absolute inset-0 bg-energy-green/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none -z-10" />

            {/* Inner Content Area */}
            <div className="relative z-10 p-6 lg:p-8 flex items-center space-x-4">
              <div className="p-2 text-energy-green shrink-0">
                <MapPin className="w-7 h-7 text-energy-green fill-current" />
              </div>
              <div>
                <h4 className="font-display font-black text-xl leading-none tracking-wider text-energy-green uppercase italic">NEWARK, NJ</h4>
                <p className="text-xs text-steel-gray mt-1 leading-snug font-sans">Be part of the movement in the heart of Newark.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
