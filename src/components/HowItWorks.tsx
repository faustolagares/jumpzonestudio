import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { JumpButton } from './Buttons';
import { Flame, Activity, BarChart3, Users, Timer, Dumbbell } from 'lucide-react';

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 }
  }
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } }
};

interface HowItWorksProps {
  currentLang: Language;
}

export default function HowItWorks({ currentLang }: HowItWorksProps) {
  // Translate labels & subheadings
  const translations = {
    en: {
      sectionLabel: "/// HOW IT WORKS ///",
      title1: "ONE JUMP.",
      title2: " ENDLESS ENERGY.",
      sub1: "Every class is a 50-minute, full-body workout on the trampoline.",
      sub2: "Different styles. Same energy. Real results.",
      ctaBtn: "FIND YOUR CLASS",
      stats: [
        { title: "50 MINUTES", label: "OF PURE ENERGY" },
        { title: "ALL LEVELS", label: "WELCOME" },
        { title: "REAL PEOPLE", label: "REAL COMMUNITY" },
        { title: "LOW IMPACT", label: "HIGH RESULTS" }
      ]
    },
    es: {
      sectionLabel: "/// CÓMO FUNCIONA ///",
      title1: "UN SALTO.",
      title2: " ENERGÍA SIN FIN.",
      sub1: "Cada clase es un entrenamiento de cuerpo completo de 50 minutos en el trampolín.",
      sub2: "Diferentes estilos. Misma energía. Resultados reales.",
      ctaBtn: "BUSCA TU CLASE",
      stats: [
        { title: "50 MINUTOS", label: "DE PURA ENERGÍA" },
        { title: "TODOS LOS NIVELES", label: "BIENVENIDOS" },
        { title: "GENTE REAL", label: "COMUNIDAD REAL" },
        { title: "BAJO IMPACTO", label: "GRANDES RESULTADOS" }
      ]
    },
    pt: {
      sectionLabel: "/// COMO FUNCIONA ///",
      title1: "UM SALTO.",
      title2: " ENERGIA INFINITA.",
      sub1: "Cada aula é um treino de corpo inteiro de 50 minutos no trampolim.",
      sub2: "Diferentes estilos. Mesma energia. Resultados reais.",
      ctaBtn: "ENCONTRE SUA AULA",
      stats: [
        { title: "50 MINUTOS", label: "DE PURA ENERGIA" },
        { title: "TODOS OS NÍVEIS", label: "BEM-VINDOS" },
        { title: "PESSOAS REAIS", label: "COMUNIDADE REAL" },
        { title: "BAIXO IMPACTO", label: "ALTO RESULTADOS" }
      ]
    }
  };

  const cardsData = [
    {
      id: "fit",
      title: "JUMP FIT",
      img: "/images/jump_fit_cardio_1780015183504.png",
      badge: "CARDIO",
      icon: <Activity className="w-5 h-5" />,
      accent: {
        en: "JUMP HIGHER, FEEL STRONGER.",
        es: "SALTA MÁS ALTO, SIENTE LA FUERZA.",
        pt: "PULE MAIS ALTO, SINTA-SE FORTE."
      },
      desc: {
        en: "High-energy cardio workout that burns calories and gets your heart pumping.",
        es: "Entrenamiento cardiovascular de alta energía que quema calorías y hace latir tu corazón.",
        pt: "Treino de cardio de alta energia que queima calorias e faz seu coração pulsar."
      }
    },
    {
      id: "hiit",
      title: "JUMP HIIT",
      img: "/images/jump_hiit_power_1780015204717.png",
      badge: "HIIT",
      icon: <Flame className="w-5 h-5" />,
      accent: {
        en: "MAX EFFORT, QUICK REST.",
        es: "ESFUERZO MÁXIMO, DESCANSO RÁPIDO.",
        pt: "ESFORÇO MÁXIMO, DESCANSO RÁPIDO."
      },
      desc: {
        en: "Short bursts. Big impact. HIIT-style intervals for maximum calorie burn.",
        es: "Ráfagas cortas. Gran impacto. Intervalos de estilo HIIT para una máxima quema de calorías.",
        pt: "Estouros curtos. Grande impacto. Intervalos tipo HIIT para queima máxima de calorias."
      }
    },
    {
      id: "strong",
      title: "JUMP STRONG",
      img: "/images/jump_strong_tone_1780015221543.png",
      badge: "STRENGTH",
      icon: <Dumbbell className="w-5 h-5" />,
      accent: {
        en: "STRONG. INSIDE. STRONGER OUTSIDE.",
        es: "FUERTE. POR DENTRO. MÁS FUERTE POR FUERA.",
        pt: "FORTE. POR DENTRO. MAIS FORTE POR FORA."
      },
      desc: {
        en: "Build strength and tone your body with low-impact moves that deliver.",
        es: "Desarrolla fuerza y tonifica tu cuerpo con movimientos de bajo impacto que dan resultados.",
        pt: "Construa força e tonifique seu corpo com movimentos de baixo impacto que dão resultados."
      }
    },
    {
      id: "dance",
      title: "JUMP DANCE",
      img: "/images/jump_dance_beat_1780015235229.png",
      badge: "DANCE",
      icon: <Activity className="w-5 h-5" />,
      accent: {
        en: "MOVE. DANCE. BE FREE.",
        es: "MUÉVETE. DANZA. SÉ LIBRE.",
        pt: "MOVA-SE. DANCE. SEJA LIVRE."
      },
      desc: {
        en: "Dance to the beat with fun, feel-good moves that boost your mood.",
        es: "Baila al ritmo con movimientos divertidos y revitalizantes que mejoran tu estado de ánimo.",
        pt: "Dance no ritmo com movimentos divertidos e contagiantes que elevam seu humor."
      }
    },
    {
      id: "core",
      title: "JUMP CORE",
      img: "/images/jump_core_balance_1780015249569.png",
      badge: "CORE",
      icon: <Users className="w-5 h-5" />,
      accent: {
        en: "BALANCE, FOCUS, POWER.",
        es: "EQUILIBRIO, ENFOQUE, PODER.",
        pt: "EQUILÍBRIO, FOCO, PODER."
      },
      desc: {
        en: "Focus on core, balance and stability for a stronger, more controlled you.",
        es: "Concéntrate en el núcleo, el equilibrio y la estabilidad para tu yo más fuerte y controlado.",
        pt: "Foque no core, equilíbrio e estabilidade para um corpo mais forte e controlado."
      }
    }
  ];

  const t = translations[currentLang] || translations.en;

  const handleScrollToClasses = () => {
    const el = document.getElementById('classes');
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="how-it-works-section"
      className="relative bg-deep-black py-24 sm:py-32 px-4 overflow-hidden border-t border-white/[0.04]"
    >
      {/* Background radial effects */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-energy-green/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-energy-green/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        
        {/* Upper heading block */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-energy-green font-mono uppercase text-xs sm:text-sm tracking-[0.25em] font-bold select-none mb-3">
            {t.sectionLabel}
          </p>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black leading-none tracking-normal text-white uppercase italic -skew-x-6">
            {t.title1}
            <span className="text-energy-green font-black select-text">
              {t.title2}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans font-medium max-w-2xl mx-auto mt-4 text-balance">
            {t.sub1}{' '}
            <span className="text-cool-gray">
              {t.sub2}
            </span>
          </p>
        </div>

        {/* Five Style Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-5 mb-16 items-stretch"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cardsData.map((card) => {
            return (
              <motion.div 
                key={card.id}
                variants={cardItemVariants}
                className="relative group min-h-[420px] flex flex-col"
              >
                {/* 1. Styled Outer Border following cut path structure */}
                <div 
                  className="absolute inset-0 bg-white/10 group-hover:bg-energy-green transition-colors duration-200"
                  style={{
                    clipPath: "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)"
                  }}
                />
                
                {/* 2. Inner background block */}
                <div 
                  className="absolute inset-[1px] bg-dark-charcoal/40 group-hover:bg-dark-charcoal backdrop-blur-md flex flex-col justify-between overflow-hidden transition-colors duration-200"
                  style={{
                    clipPath: "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)"
                  }}
                >
                  {/* Photo Visual block with slogan overlay */}
                  <div className="h-64 sm:h-56 relative overflow-hidden select-none">
                    {/* Underlying real image asset */}
                    <img 
                      src={card.img} 
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-[transform,filter] duration-350 ease-out"
                    />
                    
                    {/* Dark bottom-to-top gradient for blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />
                  </div>

                  {/* Text details section - fully centered */}
                  <div className="p-5 flex-1 flex flex-col justify-between items-center text-center bg-black/90">
                    
                    <div className="flex flex-col items-center w-full">
                      {/* Class Icon & Class Title */}
                      <div className="flex items-center justify-center space-x-2 text-white mb-2 select-none">
                        <span className="text-energy-green block">
                          {card.icon}
                        </span>
                        <h4 className="font-display font-black tracking-wider text-lg sm:text-xl uppercase italic -skew-x-3">
                          {card.title}
                        </h4>
                      </div>

                      {/* Visual separating line between Title and Description */}
                      <div className="w-10 h-[1.5px] bg-energy-green/50 my-2.5 rounded-full" />

                      {/* Description */}
                      <p className="text-xs text-steel-gray leading-relaxed font-sans max-w-[210px]">
                        {card.desc[currentLang] || card.desc.en}
                      </p>
                    </div>

                    {/* Centered chamfered tag chip matching brand shape system */}
                    <div className="mt-4 pt-1 select-none flex justify-center w-full">
                      <span
                        className="inline-block px-3 py-1 bg-energy-green/10 group-hover:bg-energy-green/15 font-mono font-bold text-[10px] tracking-[0.2em] text-energy-green uppercase transition-colors duration-150"
                        style={{
                          clipPath: "polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px)"
                        }}
                      >
                        {card.badge}
                      </span>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Stats Horizontal Banner Panel */}
        <div className="relative group w-full p-5 px-6 sm:px-8">
          {/* Outer Border with cut corners on left/right edges */}
          <div 
            className="absolute inset-0 bg-white/15 group-hover:bg-energy-green transition-colors duration-200"
            style={{
              clipPath: "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)"
            }}
          />
          {/* Inner Background offset by 1px */}
          <div 
            className="absolute inset-[1px] bg-deep-black group-hover:bg-dark-charcoal backdrop-blur-md transition-colors duration-200"
            style={{
              clipPath: "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)"
            }}
          />
          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-4">
            
            {/* Highlight items list */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 xl:gap-8 w-full xl:w-auto divide-x divide-white/[0.05]">
              {/* Highlight 1 - Timer */}
              <div className="flex items-center space-x-3 pl-0 first:pl-0">
                <Timer className="w-6 h-6 text-energy-green shrink-0" />
                <div>
                  <h5 className="font-display font-black tracking-wider text-sm text-white italic">{t.stats[0].title}</h5>
                  <p className="text-[10px] text-steel-gray leading-none font-sans uppercase font-medium">{t.stats[0].label}</p>
                </div>
              </div>

              {/* Highlight 2 - All Levels */}
              <div className="flex items-center space-x-3 pl-4">
                <BarChart3 className="w-6 h-6 text-energy-green shrink-0" />
                <div>
                  <h5 className="font-display font-black tracking-wider text-sm text-white italic">{t.stats[1].title}</h5>
                  <p className="text-[10px] text-steel-gray leading-none font-sans uppercase font-medium">{t.stats[1].label}</p>
                </div>
              </div>

              {/* Highlight 3 - Real People */}
              <div className="flex items-center space-x-3 pl-4">
                <Users className="w-6 h-6 text-energy-green shrink-0" />
                <div>
                  <h5 className="font-display font-black tracking-wider text-sm text-white italic">{t.stats[2].title}</h5>
                  <p className="text-[10px] text-steel-gray leading-none font-sans uppercase font-medium">{t.stats[2].label}</p>
                </div>
              </div>

              {/* Highlight 4 - Low Impact */}
              <div className="flex items-center space-x-3 pl-4">
                <Activity className="w-6 h-6 text-energy-green shrink-0" />
                <div>
                  <h5 className="font-display font-black tracking-wider text-sm text-white italic">{t.stats[3].title}</h5>
                  <p className="text-[10px] text-steel-gray leading-none font-sans uppercase font-medium">{t.stats[3].label}</p>
                </div>
              </div>
            </div>

            {/* Call to action button */}
            <div className="w-full xl:w-auto shrink-0 flex justify-center sm:justify-end">
              <JumpButton 
                onClick={handleScrollToClasses}
                variant="primary"
                showIcon={true}
                iconType="arrow"
                className="w-full sm:w-[240px]"
              >
                {t.ctaBtn}
              </JumpButton>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
