import { Language } from '../types';
import { translations } from '../translations';
import { JumpButton } from './Buttons';
import { Zap, Users, Flame, BarChart3, MapPin } from 'lucide-react';
import { HERO_BACKGROUND_SRC } from '../lib/assets';

interface HeroSectionProps {
  currentLang: Language;
  onBookClick: () => void;
  onClassesClick: () => void;
}

export default function HeroSection({ currentLang, onBookClick, onClassesClick }: HeroSectionProps) {
  const t = translations[currentLang];
  const featureItems = {
    en: [
      { icon: <Zap className="w-7 h-7 text-energy-green" />, title: 'HIGH ENERGY', desc: 'Cardio, strength & music-driven workouts.' },
      { icon: <Users className="w-7 h-7 text-energy-green" />, title: 'STRONG COMMUNITY', desc: 'Real people. Real support. Real connections.' },
      { icon: <Flame className="w-7 h-7 text-energy-green" />, title: 'BURN CALORIES', desc: 'Jump higher. Burn more. Feel unstoppable.' },
      { icon: <BarChart3 className="w-7 h-7 text-energy-green" />, title: 'ALL LEVELS', desc: 'Beginner to advanced. You belong here.' },
    ],
    es: [
      { icon: <Zap className="w-7 h-7 text-energy-green" />, title: 'ALTA ENERGÍA', desc: 'Cardio, fuerza y entrenamientos con música.' },
      { icon: <Users className="w-7 h-7 text-energy-green" />, title: 'COMUNIDAD FUERTE', desc: 'Personas reales. Apoyo real. Conexiones reales.' },
      { icon: <Flame className="w-7 h-7 text-energy-green" />, title: 'QUEMA CALORÍAS', desc: 'Salta más alto. Quema más. Siéntete imparable.' },
      { icon: <BarChart3 className="w-7 h-7 text-energy-green" />, title: 'TODOS LOS NIVELES', desc: 'De principiante a avanzado. Este es tu lugar.' },
    ],
    pt: [
      { icon: <Zap className="w-7 h-7 text-energy-green" />, title: 'ALTA ENERGIA', desc: 'Cardio, força e treinos guiados por música.' },
      { icon: <Users className="w-7 h-7 text-energy-green" />, title: 'COMUNIDADE FORTE', desc: 'Pessoas reais. Apoio real. Conexões reais.' },
      { icon: <Flame className="w-7 h-7 text-energy-green" />, title: 'QUEIMA CALORIAS', desc: 'Pule mais alto. Queime mais. Sinta-se invencível.' },
      { icon: <BarChart3 className="w-7 h-7 text-energy-green" />, title: 'TODOS OS NÍVEIS', desc: 'Do iniciante ao avançado. Seu lugar é aqui.' },
    ],
  };

  return (
    <section 
      id="hero-root"
      className="relative min-h-screen bg-[#050505] pt-24 sm:pt-28 pb-16 flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, #050505 0%, #050505 30%, rgba(5,5,5,0.5) 50%, rgba(5,5,5,0.05) 68%, rgba(5,5,5,0.85) 90%, #050505 100%), url("${HERO_BACKGROUND_SRC}")`,
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
                {t.heroBadge}
              </span>
            </div>

            {/* Impressive headers - ultra clean, italic, Teko displays */}
            <div className="space-y-1">
              <h1 className="text-7xl sm:text-7xl md:text-8xl xl:text-9xl font-display font-black leading-[0.85] tracking-tight text-white uppercase italic -skew-x-3">
                {t.heroTitleFocus}
                <span className="block text-energy-green font-black">
                  {t.heroTitleNormal}
                </span>
              </h1>
            </div>

            {/* Slogan brush style divider */}
            <div className="w-48 h-[3px] bg-gradient-to-r from-energy-green via-energy-green to-transparent mx-0 my-1 rounded-full" />

            {/* Brand slogan description */}
            <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-sans font-medium pt-2 whitespace-pre-line">
              {t.heroSubtitle}
            </p>

            {/* CTAs - authentic high-energy chamfered buttons */}
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 w-full sm:w-auto">
              <JumpButton 
                onClick={onBookClick}
                variant="primary"
                showIcon={true}
                iconType="arrow"
                className="w-full sm:w-auto"
              >
                {t.heroCtaBook}
              </JumpButton>
              <JumpButton 
                onClick={onClassesClick}
                variant="secondary"
                showIcon={true}
                iconType="arrow"
                className="w-full sm:w-auto"
              >
                {t.heroCtaLearn}
              </JumpButton>
            </div>
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
                
                {featureItems[currentLang].map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex items-start space-x-4 py-4 sm:py-0 sm:px-4 lg:px-4 ${
                      index === 0 ? 'first:pt-0 sm:pr-4 lg:first:pl-0' : ''
                    } ${index === featureItems[currentLang].length - 1 ? 'last:pb-0' : ''}`}
                  >
                    <div className="p-2 text-energy-green shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-lg leading-tight tracking-wider text-white uppercase">{item.title}</h4>
                      <p className="text-[11px] text-steel-gray mt-1 leading-snug font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}

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
                <MapPin className="w-7 h-7 text-energy-green" />
              </div>
              <div>
                <h4 className="font-display font-black text-xl leading-none tracking-wider text-energy-green uppercase italic">{t.statsLocation}</h4>
                <p className="text-xs text-steel-gray mt-1 leading-snug font-sans">{t.statsLocationSub}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
