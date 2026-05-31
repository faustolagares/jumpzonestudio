import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';

interface MoreThanWorkoutProps {
  currentLang: Language;
}

export default function MoreThanWorkout({ currentLang }: MoreThanWorkoutProps) {
  // Richer feature content in multiple languages to solve the empty feel
  const content = {
    en: {
      line1: "MORE THAN",
      line2: "A WORKOUT.",
      features: [
        {
          id: "music",
          title: "MUSIC THAT MOVES YOU",
          desc: "High-BPM synchronized playlists and deep studio bass frequencies engineered to synchronize your bounce with the music.",
          tag: "AUDIO ENGINE"
        },
        {
          id: "community",
          title: "COMMUNITY THAT LIFTS",
          desc: "Zero judgment, 100% positive reinforcement. An active tribe of real people celebrating every high-impact jump.",
          tag: "TRIBE CONNECT"
        },
        {
          id: "energy",
          title: "ENERGY YOU CAN FEEL",
          desc: "Reactive low-frequency subwoofers and immersive laser strobe lights turning routine cardio into a fitness concert.",
          tag: "STIMULUS SHOCK"
        }
      ]
    },
    es: {
      line1: "MÁS QUE",
      line2: "UN TRABAJO.",
      features: [
        {
          id: "music",
          title: "MÚSICA QUE TE MUEVE",
          desc: "Listas de reproducción sincronizadas de alto BPM y frecuencias de graves de estudio diseñadas para guiar tu salto.",
          tag: "MOTOR DE AUDIO"
        },
        {
          id: "community",
          title: "COMUNIDAD QUE TE ELEVA",
          desc: "Cero juicios, 100% de motivación pura. Una tribu activa comprometida en apoyar cada uno de tus saltos.",
          tag: "CONEXIÓN"
        },
        {
          id: "energy",
          title: "ENERGÍA QUE SIENTES",
          desc: "Subwoofers reactivos y luces de estroboscópicas que convierten tu cardio en un concierto inmersivo.",
          tag: "INYECCIÓN ADRENAL"
        }
      ]
    },
    pt: {
      line1: "MAIS QUE",
      line2: "UM TREINO.",
      features: [
        {
          id: "music",
          title: "MÚSICA QUE TE MOVE",
          desc: "Playlists sincronizadas de alto BPM combinadas com graves premium planejados para guiar seus movimentos.",
          tag: "SINTONIA SONORA"
        },
        {
          id: "community",
          title: "COMUNIDADE QUE ELEVA",
          desc: "Sem julgamentos, apenas incentivo positivo. Uma tribo acolhedora pronta para celebrar cada conquista.",
          tag: "CONEXÃO REAL"
        },
        {
          id: "energy",
          title: "ENERGIA QUE SE SENTE",
          desc: "Subwoofers potentes com luzes dinâmicas de estúdio que transformam o exercício aeróbico em um verdadeiro show.",
          tag: "PULSO CRIATIVO"
        }
      ]
    }
  };

  const t = content[currentLang] || content.en;

  const imagesMap: Record<string, string> = {
    music: "/images/jump_dance_beat_1780015235229.png",
    community: "/images/more_than_workout_1780014659695.png",
    energy: "/images/jump_hiit_power_1780015204717.png"
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } }
  };

  return (
    <section 
      id="more-than-workout"
      className="relative bg-black w-full flex flex-col items-center justify-center overflow-hidden py-24 sm:py-32 px-4 border-t border-white/[0.04]"
    >
      {/* Subtle glowing ambient green color pulse in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-energy-green/[0.02] blur-[150px] pointer-events-none z-0" />

      {/* Main Grid & Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col items-center text-center space-y-16 sm:space-y-20">
        
        {/* Dynamic header title block */}
        <div className="space-y-4 select-none">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-display font-black leading-[0.85] tracking-tight text-white uppercase italic -skew-x-6">
            {t.line1}
            <span className="block text-energy-green font-black select-text mt-2">
              {t.line2}
            </span>
          </h2>
          
          {/* Lightning stroke separator */}
          <div className="w-48 sm:w-64 md:w-72 h-8 mx-auto text-energy-green/45 select-none pt-2">
            <svg className="w-full h-full fill-none" viewBox="0 0 400 40" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M 0,20 L 175,20 L 180,15 L 187,26 L 193,5 L 202,34 L 207,18 L 212,23 L 216,20 L 400,20" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_0_3px_rgba(168,255,0,0.35)]"
              />
            </svg>
          </div>
        </div>

        {/* 3 Columns Premium Grid with 3:5 aspect ratio clipped cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mx-auto"
        >
          {t.features.map((feat) => {
            const imageUrl = imagesMap[feat.id] || "/images/more_than_workout_1780014659695.png";
            return (
              <motion.div 
                key={feat.id}
                variants={cardVariants}
                className="group relative w-full flex flex-col"
              >
                {/* 1. Outer Border following asymmetrical cut shape system */}
                <div 
                  className="absolute inset-0 bg-white/10 group-hover:bg-energy-green transition-colors duration-200"
                  style={{
                    clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)"
                  }}
                />

                {/* 2. Inner content block — 1px margin reveals the border, height driven by content */}
                <div 
                  className="relative m-px flex-1 bg-deep-black group-hover:bg-dark-charcoal transition-colors duration-200 flex flex-col overflow-hidden"
                  style={{
                    clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)"
                  }}
                >
                  {/* Image section */}
                  <div className="relative w-full h-72 sm:h-64 overflow-hidden bg-black shrink-0">
                    <img 
                      src={imageUrl} 
                      alt={feat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    {/* Shadow overlay at bottom of image for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Text section */}
                  <div className="flex-1 p-5 sm:p-6 flex flex-col text-left relative z-10 bg-deep-black group-hover:bg-dark-charcoal transition-colors duration-200">
                    <div>
                      {/* Tag at top of text block */}
                      <span className="font-mono text-[10px] tracking-widest text-energy-green uppercase block font-bold">
                        {feat.tag}
                      </span>

                      {/* Card Title */}
                      <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase italic tracking-wide group-hover:text-energy-green transition-colors duration-200 mt-2 mb-2 leading-none">
                        {feat.title}
                      </h3>

                      {/* Card description */}
                      <p className="text-xs sm:text-[13px] text-cool-gray leading-relaxed font-sans font-medium">
                        {feat.desc}
                      </p>
                    </div>

                    {/* Bottom accent line decoration */}
                    <div className="w-full h-[1px] bg-white/[0.05] group-hover:bg-energy-green/15 transition-colors duration-200 mt-5 relative shrink-0">
                      <div className="absolute top-0 left-0 w-6 h-[1.5px] bg-energy-green/20 group-hover:bg-energy-green group-hover:w-16 transition-[width,background-color] duration-200" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Slashes Indicator block */}
        <div className="select-none flex space-x-1.5 justify-center">
          <span className="text-energy-green/65 text-xs font-black italic tracking-tighter">/</span>
          <span className="text-energy-green/65 text-xs font-black italic tracking-tighter">/</span>
          <span className="text-energy-green/65 text-xs font-black italic tracking-tighter">/</span>
        </div>

      </div>
    </section>
  );
}
