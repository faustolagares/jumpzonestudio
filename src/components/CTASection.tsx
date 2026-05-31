import React from 'react';
import { Language } from '../types';
import { LightPrimaryButton } from './Buttons';

interface CTASectionProps {
  currentLang: Language;
}

export default function CTASection({ currentLang }: CTASectionProps) {
  const content = {
    en: {
      tag: "/// CRUSH YOUR LIMITS ///",
      titlePre: "READY TO JOIN THE",
      titleHighlight: "JUMP ZONE STUDIO",
      subtitle: "Stop waiting to experience Newark's most addictive choreographic workout. Lock in your individual rebounder space today and feel the difference from the very first beat.",
      primaryCta: "SECURE MY SPACE",
    },
    es: {
      tag: "/// SUPERA TUS LÍMITES ///",
      titlePre: "¿LISTO PARA ENTRAR A LA",
      titleHighlight: "JUMP ZONE STUDIO?",
      subtitle: "No esperes más para sentir la energía del entrenamiento coreografiado más adictivo de Newark. Reserva tu trampolín individual hoy y siente la diferencia desde el primer pulso.",
      primaryCta: "RESERVAR MI LUGAR",
    },
    pt: {
      tag: "/// SUPERE SEUS LIMITES ///",
      titlePre: "PRONTO PARA ENTRAR NA",
      titleHighlight: "JUMP ZONE STUDIO",
      subtitle: "Não espere mais para sentir a energia do treino coreografado mais viciante de Newark. Garanta seu trampolim individual hoje mesmo e sinta o impacto desde o primeiro beat.",
      primaryCta: "RESERVAR MEU ESPAÇO",
    }
  };

  const t = content[currentLang] || content.en;

  const handlePrimaryClick = () => {
    // Scroll to interactive class schedules
    const el = document.getElementById('classes');
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="cta-section" className="relative bg-[#050505] py-20 sm:py-28 overflow-hidden border-t border-white/[0.04]">
      {/* Immersive background green lights for maximum depth */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-energy-green/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-energy-green/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Large Asymmetrical Box Container with Energy Green Background */}
        <div 
          className="relative w-full max-w-[1400px] mx-auto p-[1px] bg-white/10"
          style={{
            clipPath: "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)"
          }}
        >
          {/* Main Inner Card using strong accent colors in the background */}
          <div 
            className="relative bg-energy-green text-black py-24 sm:py-28 px-6 sm:px-12 md:px-16 overflow-hidden flex flex-col items-center text-center"
            style={{
              clipPath: "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)"
            }}
          >
            {/* Visual background detailing (slashes, grid lines, energy patterns) to prevent plain color look */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none select-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.15)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.15)_50%,rgba(0,0,0,0.15)_75%,transparent_75%,transparent)] bg-[size:40px_40px]" />
            </div>

            {/* Glowing orb accent inside the card to enrich the gradient effect */}
            <div className="absolute -top-24 -left-20 w-[400px] h-[400px] bg-white/20 rounded-full blur-[80px] pointer-events-none select-none" />
            <div className="absolute -bottom-24 -right-20 w-[400px] h-[400px] bg-black/10 rounded-full blur-[80px] pointer-events-none select-none" />

            {/* Inner Content block */}
            <div className="relative z-10 max-w-5xl space-y-6">
              
              {/* Eyebrow Label */}
              <span className="font-mono text-xs sm:text-sm tracking-[0.25em] font-extrabold text-black/75 uppercase select-none block">
                {t.tag}
              </span>

              {/* Big Title Display */}
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tight text-black uppercase italic -skew-x-6">
                {t.titlePre}
                <span className="text-black font-black block">
                  {t.titleHighlight}
                </span>
              </h2>

              {/* Action Description */}
              <p className="text-sm sm:text-base md:text-lg text-black/85 leading-relaxed font-sans font-semibold max-w-2xl mx-auto">
                {t.subtitle}
              </p>

              {/* Action Button */}
              <div className="flex items-center justify-center pt-6 w-full max-w-xs mx-auto">
                <LightPrimaryButton onClick={handlePrimaryClick} className="w-full">
                  {t.primaryCta}
                </LightPrimaryButton>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
