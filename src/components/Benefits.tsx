import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { JumpButton } from './Buttons';
import { Flame, Heart, Zap, Smile, Users, Compass, ChevronRight } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } }
};

interface BenefitsProps {
  currentLang: Language;
}

export default function Benefits({ currentLang }: BenefitsProps) {
  // Translations following visual design
  const translations = {
    en: {
      sectionLabel: "/// BENEFITS ///",
      titlePre: "MORE THAN A WORKOUT.",
      titleHighlight: " REAL BENEFITS.",
      subtitle: "Move better. Feel stronger. Live brighter.",
      footerHeader: "ONE JUMP. COUNTLESS BENEFITS.",
      footerSub: "Join a class and feel the difference for yourself.",
      footerBtn: "JOIN JUMP ZONE",
      items: [
        {
          id: "calories",
          title: "BURN CALORIES",
          desc: "High-energy workouts that burn more calories in less time."
        },
        {
          id: "cardio",
          title: "IMPROVE CARDIO",
          desc: "Boost your heart health and endurance with every jump."
        },
        {
          id: "strengthen",
          title: "TONE & STRENGTHEN",
          desc: "Build lean muscle and improve overall strength with low-impact moves."
        },
        {
          id: "balance",
          title: "BETTER BALANCE",
          desc: "Enhance coordination, balance, and body awareness."
        },
        {
          id: "mood",
          title: "BOOST MOOD",
          desc: "Release stress, increase energy, and leave feeling amazing."
        },
        {
          id: "community",
          title: "STRONG COMMUNITY",
          desc: "Real people. Real support. A community that lifts you up."
        }
      ]
    },
    es: {
      sectionLabel: "/// BENEFICIOS ///",
      titlePre: "MÁS QUE UN ENTRENAMIENTO.",
      titleHighlight: " BENEFICIOS REALES.",
      subtitle: "Muévete mejor. Siéntete más fuerte. Vive más brillante.",
      footerHeader: "UN SALTO. BENEFICIOS INCONTABLES.",
      footerSub: "Únete a una clase y siente la diferencia por ti mismo.",
      footerBtn: "ÚNETE A JUMP ZONE",
      items: [
        {
          id: "calories",
          title: "QUEMAR CALORÍAS",
          desc: "Entrenamientos de alta energía que queman más calorías en menos tiempo."
        },
        {
          id: "cardio",
          title: "MEJORAR EL CARDIO",
          desc: "Mejora tu salud cardiovascular y resistencia con cada salto."
        },
        {
          id: "strengthen",
          title: "TONIFICAR Y FORTALECER",
          desc: "Desarrolla músculo magro y mejora tu fuerza con movimientos de bajo impacto."
        },
        {
          id: "balance",
          title: "MEJOR EQUILIBRIO",
          desc: "Fomenta la coordinación, el equilibrio y la percepción de tu propio cuerpo."
        },
        {
          id: "mood",
          title: "MEJORAR EL ÁNIMO",
          desc: "Libera el estrés, aumenta tu nivel de energía y sal sintiéndote increíble."
        },
        {
          id: "community",
          title: "COMUNIDAD FUERTE",
          desc: "Gente real. Apoyo real. Una comunidad que te motiva."
        }
      ]
    },
    pt: {
      sectionLabel: "/// BENEFÍCIOS ///",
      titlePre: "MAIS QUE UM TREINO.",
      titleHighlight: " BENEFÍCIOS REAIS.",
      subtitle: "Mova-se melhor. Sinta-se mais forte. Viva melhor.",
      footerHeader: "UM SALTO. BENEFÍCIOS INCONTÁVEIS.",
      footerSub: "Participe de uma aula e sinta a diferença em você mesmo.",
      footerBtn: "ENTRE PARA O JUMP ZONE",
      items: [
        {
          id: "calories",
          title: "QUEIMAR CALORIAS",
          desc: "Treinos de alta energia que queimam mais calorias em muito menos tempo."
        },
        {
          id: "cardio",
          title: "MELHORAR O CARDIO",
          desc: "Aprimore sua saúde cardiovascular e resistência a cada salto."
        },
        {
          id: "strengthen",
          title: "TONIFICAR & FORTALECER",
          desc: "Construa massa magra e melhore sua força com exercícios de baixo impacto."
        },
        {
          id: "balance",
          title: "MELHOR EQUILÍBRIO",
          desc: "Aprimore sua coordenação motora, equilíbrio e consciência corporal."
        },
        {
          id: "mood",
          title: "AUMENTAR O HUMOR",
          desc: "Libere o estresse, aumente sua energia e termine o treino se sentindo incrível."
        },
        {
          id: "community",
          title: "COMUNIDADE FORTE",
          desc: "Pessoas reais. Apoio real. Uma comunidade que te impulsiona."
        }
      ]
    }
  };

  const t = translations[currentLang] || translations.en;

  const getIcon = (id: string) => {
    const iconClass = "w-14 h-14 text-energy-green stroke-[1.2] transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(168,255,0,0.25)]";
    switch (id) {
      case "calories":
        return <Flame className={iconClass} />;
      case "cardio":
        return <Heart className={iconClass} />;
      case "strengthen":
        // Bi-directional icon representing strength/energy
        return <Zap className={iconClass} />;
      case "balance":
        return <Compass className={iconClass} />;
      case "mood":
        return <Smile className={iconClass} />;
      case "community":
        return <Users className={iconClass} />;
      default:
        return <Zap className={iconClass} />;
    }
  };

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
      id="benefits-section"
      className="relative bg-deep-black py-24 sm:py-32 px-4 overflow-hidden border-t border-white/[0.04]"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-energy-green/[0.03] blur-[160px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        
        {/* Upper Heading Block */}
        <div className="text-center mb-16 sm:mb-20">

          <p className="text-energy-green font-mono uppercase text-xs sm:text-sm tracking-[0.25em] font-bold select-none mb-3">
            {t.sectionLabel}
          </p>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black leading-none tracking-normal text-white uppercase italic -skew-x-6">
            {t.titlePre}
            <span className="text-energy-green block sm:inline font-black">
              {t.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-steel-gray font-sans font-medium mt-4">
            {t.subtitle}
          </p>
        </div>

        {/* Benefits Grid - Horizontal divided layout inspired by the reference image */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-y-12 sm:gap-y-16 gap-x-6 mb-20 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {t.items.map((item, index) => {
            return (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                className="group flex flex-col items-center text-center relative px-4"
              >
                {/* Vertical Separator for Desktop / Large views */}
                {index < 5 && (
                  <div className="hidden xl:block absolute right-0 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
                )}

                {/* Outer icon container featuring zero background, just glowing raw strokes */}
                <div className="mb-6 flex items-center justify-center h-20 w-20 relative">
                  {/* Floating effect */}
                  <div className="absolute inset-0 bg-energy-green/5 rounded-full blur-xl scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    {getIcon(item.id)}
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-display font-black tracking-wider text-base sm:text-lg text-white uppercase italic mb-3">
                  {item.title}
                </h4>

                {/* Custom styling separating bar */}
                <div className="w-8 h-[1.5px] bg-energy-green/30 group-hover:bg-energy-green/75 group-hover:w-12 transition-[width,background-color] duration-200 mb-4 rounded-full" />

                {/* Description */}
                <p className="text-xs sm:text-sm text-steel-gray leading-relaxed font-sans max-w-[200px]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </motion.div>

        {/* Bottom Horizontal Promo Banner Panel */}
        <div className="relative group w-full p-5 px-6 sm:px-8">
          {/* Outer Border following the exact system cut shape */}
          <div 
            className="absolute inset-0 bg-white/10 group-hover:bg-energy-green transition-colors duration-200"
            style={{
              clipPath: "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)"
            }}
          />
          {/* Inner offset background */}
          <div 
            className="absolute inset-[1px] bg-deep-black group-hover:bg-dark-charcoal backdrop-blur-md transition-colors duration-200"
            style={{
              clipPath: "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)"
            }}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            
            {/* Left Header area */}
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-energy-green/5 border border-energy-green/20 rounded-md">
                <Zap className="w-6 h-6 text-energy-green animate-pulse" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase italic -skew-x-3 tracking-wider">
                  {t.footerHeader}
                </h3>
              </div>
            </div>

            {/* Middle Vertical Divider & Description for medium screens and above */}
            <div className="hidden md:flex items-center space-x-6 flex-1 px-8">
              <div className="w-[1.5px] h-10 bg-white/10" />
              <p className="text-xs sm:text-sm text-steel-gray font-sans font-medium line-clamp-2 max-w-sm">
                {t.footerSub}
              </p>
            </div>

            {/* Mobile-only Description */}
            <p className="block md:hidden text-xs text-steel-gray font-sans font-medium text-center -mt-2">
              {t.footerSub}
            </p>

            {/* Right button action */}
            <div className="w-full md:w-auto shrink-0 flex justify-center">
              <JumpButton 
                onClick={handleScrollToClasses}
                variant="primary"
                showIcon={true}
                iconType="arrow"
                className="w-full sm:w-[260px]"
              >
                {t.footerBtn}
              </JumpButton>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
