import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Zap, Users, ShieldCheck, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface StudioOverviewProps {
  currentLang: Language;
}

export default function StudioOverview({ currentLang }: StudioOverviewProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // High fashion studio image set showing different aspects of the physical space
  const studioImages = [
    {
      url: "https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/1d011d00-e9e8-4d0f-7cd3-35886e138100/4K",
      title: {
        en: "Main Arena & Stages",
        es: "Arena Principal y Escenarios",
        pt: "Arena Principal e Palcos"
      },
      desc: {
        en: "Our flagship Newark layout featuring 24 premium elastic bungees aligned to high-definition lighting grids.",
        es: "Nuestra arena insignia en Newark con 24 elásticos alineados a sistemas de luces de alta definición.",
        pt: "Nossa arena em Newark com 24 camas elásticas de alta performance alinhadas a LEDs de alta intensidade."
      }
    },
    {
      url: "/images/more_than_workout_1780014659695.png",
      title: {
        en: "Rebound Cardio Deck",
        es: "Pista de Cardio Rebound",
        pt: "Pista de Cardio Rebound"
      },
      desc: {
        en: "A dark, immersive athletic club equipped with glowing neon linear grids to focus your movement.",
        es: "Un club deportivo oscuro e inmersivo con guías de neón lineales para enfocar tus saltos.",
        pt: "Um clube esportivo escuro e inmersivo com guias de neon lineares que ajudam a focar nos movimentos."
      }
    },
    {
      url: "/images/jump_fit_cardio_1780015183504.png",
      title: {
        en: "High-Energy Live Performance",
        es: "Rendimiento en Vivo de Alta Energía",
        pt: "Treino em Alta Voltagem"
      },
      desc: {
        en: "Low-impact, extremely fast-paced exercises led by certified trainers on elevated central stages.",
        es: "Ejercicios rápidos de bajo impacto guiados por entrenadores en escenarios elevados centralizados.",
        pt: "Exercícios pliométricos de baixíssimo impacto comandados por instrutores em palcos elevados."
      }
    },
    {
      url: "/images/jump_dance_beat_1780015235229.png",
      title: {
        en: "Sound & Deep Bass Integration",
        es: "Sinfonía de Graves Extremos",
        pt: "Batidas e Graves Envolventes"
      },
      desc: {
        en: "Dual 18-inch concert subwoofers synchronized to trigger pure endorphins while you bounce.",
        es: "Subwoofers dobles de 18 pulgadas sincronizados para disparar endorfinas en cada rebote.",
        pt: "Subwoofers potentes de 18 polegadas que ajudam a sintonizar a frequência cardíaca com a batida."
      }
    }
  ];

  // Auto-play interval effect for rotating through gallery views
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % studioImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [studioImages.length]);

  const content = {
    en: {
      tag: "/// OUR STUDIO ———",
      titlePre: "A SPACE BUILT ",
      titleHighlight: "TO MOVE YOU.",
      subText: "More than a gym. A high-energy studio designed for performance, connection, and unstoppable results.",
      
      features: [
        {
          title: "MODERN DESIGN",
          desc: "Sleek, open space built for high-energy workouts."
        },
        {
          title: "ENERGY EVERYWHERE",
          desc: "Lights, music and atmosphere that keep you moving."
        },
        {
          title: "MADE FOR CONNECTION",
          desc: "A space where motivation and community come together."
        },
        {
          title: "CLEAN & PROFESSIONAL",
          desc: "Safe, top-quality equipment you can trust."
        }
      ],
      slogan: "WALK IN. FEEL IT. BECOME PART OF IT.",
      galleryHint: "CLICK PHOTOS TO EXPAND IN 4K QUALITY"
    },
    es: {
      tag: "/// NUESTRO ESTUDIO ———",
      titlePre: "UN ESPACIO CREADO ",
      titleHighlight: "PARA MOVERTE.",
      subText: "Más que un gimnasio. Un estudio de alta energía diseñado para el rendimiento, la conexión y resultados imparables.",
      
      features: [
        {
          title: "DISEÑO MODERNO",
          desc: "Espacio elegante y abierto construido para entrenamientos vibrantes."
        },
        {
          title: "ENERGÍA ADRENAL",
          desc: "Luces, audio y una atmósfera premium que te mantienen saltando."
        },
        {
          title: "HECHO PARA CONECTAR",
          desc: "Un lugar donde la motivación colectiva y la comunidad se fusionan."
        },
        {
          title: "SEGURO Y PROFESIONAL",
          desc: "Equipos de calidad profesional garantizada en los que puedes confiar."
        }
      ],
      slogan: "ENTRA. SIENTELO. SE PARTE DE NUESTRO CLUB.",
      galleryHint: "HAZ CLIC PARA EXPANDIR EN RESOLUCIÓN 4K"
    },
    pt: {
      tag: "/// O NOSSO ESTÚDIO ———",
      titlePre: "UM ESPAÇO CRIADO ",
      titleHighlight: "PARA MOVER VOCÊ.",
      subText: "Mais que uma academia. Um estúdio de alta energia projetado para performance, conexão e resultados extraordinários.",
      
      features: [
        {
          title: "DESIGN MODERNO",
          desc: "Um espaço amplo, escuro e sofisticado construído para treinos intensos."
        },
        {
          title: "ENERGIA VIBRANTE",
          desc: "Leds especiais, músicas pesadas de estúdio que impulsionam o pulso."
        },
        {
          title: "CONEXÃO REAL",
          desc: "Uma comunidade unida que estimula sua performance sem julgamentos."
        },
        {
          title: "EXTREMA QUALIDADE",
          desc: "Equipamento profissional e camas elásticas certificadas de alta durabilidade."
        }
      ],
      slogan: "ENTRE. SINTA A VIBE. FAÇA PARTE DISSO.",
      galleryHint: "CLIQUE NA FOTO PARA AMPLIAR EM ALTÍSSIMA DEFINIÇÃO"
    }
  };

  const t = content[currentLang] || content.en;

  const getIcon = (idx: number) => {
    const iconClass = "w-7 h-7 text-energy-green";
    switch (idx) {
      case 0: return <Compass className={iconClass} />;
      case 1: return <Zap className={iconClass} />;
      case 2: return <Users className={iconClass} />;
      case 3: return <ShieldCheck className={iconClass} />;
      default: return <Zap className={iconClass} />;
    }
  };

  const handleNextPhoto = () => {
    setActiveImgIndex((prev) => (prev + 1) % studioImages.length);
  };

  const handlePrevPhoto = () => {
    setActiveImgIndex((prev) => (prev - 1 + studioImages.length) % studioImages.length);
  };

  return (
    <section 
      id="studio" 
      className="relative bg-deep-black py-24 sm:py-32 overflow-hidden border-t border-white/[0.04]"
    >
      {/* Soft atmospheric background lights */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-energy-green/[0.025] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] bg-energy-green/[0.015] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* TOP LAYOUT SPLIT BAR & INTERACTIVE STUDIO PHOTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* LEFT COLUMN: Premium High-contrast slanting titles */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              {/* Green layout tag */}
              <div className="flex items-center space-x-2.5 mb-4 select-none">
                <span className="text-energy-green font-mono uppercase text-xs tracking-[0.25em] font-black">
                  {t.tag}
                </span>
              </div>

              {/* Slanted Display Typography */}
              <h2 className="text-4.5xl sm:text-6xl lg:text-5xl xl:text-6xl font-display font-black leading-[0.95] tracking-tight text-white uppercase italic -skew-x-6">
                {t.titlePre}
                <br />
                <span className="text-energy-green font-black block mt-2">
                  {t.titleHighlight}
                </span>
              </h2>

              {/* Subtext info */}
              <p className="text-sm sm:text-base text-cool-gray font-sans font-medium mt-6 leading-relaxed max-w-md">
                {t.subText}
              </p>
            </div>

            {/* Lightning Stroke vector divider element matching user style */}
            <div className="w-56 h-8 text-energy-green/40 pt-2 select-none">
              <svg className="w-full h-full fill-none" viewBox="0 0 400 40" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M 0,20 L 175,20 L 180,15 L 187,26 L 193,5 L 202,34 L 207,18 L 212,23 L 216,20 L 400,20" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_0_2px_rgba(168,255,0,0.3)]"
                />
              </svg>
            </div>

            {/* Micro spec parameters details box — chamfered card matching brand shape */}
            <div className="relative max-w-md">
              <div
                className="absolute inset-0 bg-white/[0.06]"
                style={{
                  clipPath: "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)"
                }}
              />
              <div
                className="relative m-px bg-deep-black p-5 space-y-3"
                style={{
                  clipPath: "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)"
                }}
              >
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-cool-gray border-b border-white/[0.04] pb-2">
                  <span>NEWARK SPACE OVERVIEW</span>
                  <span className="text-energy-green font-bold">24 REBOUND SPOTS</span>
                </div>
                <p className="text-xs text-steel-gray font-sans font-medium leading-relaxed">
                  {currentLang === 'pt' 
                    ? "Sua zona exclusiva é equipada com espelhos frontais de estúdio, barras de segurança e amortecimento individual focado em proteger suas articulações."
                    : currentLang === 'es'
                    ? "Tu zona exclusiva cuenta con espejos frontales de estudio, barra opcional y un sistema de elásticos especializado para proteger tus rodillas."
                    : "Your exclusive jumping placement faces high-contrast mirror setups and elevated staging tailored for unmatched trainer line of sight."}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive high-end Gallery with high resolution views */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            <div className="flex items-center justify-between text-xs font-mono text-steel-gray px-1">
              <span className="flex items-center space-x-1.5 font-semibold text-energy-green/80">
                <span className="inline-block w-1.5 h-1.5 bg-energy-green rounded-full animate-pulse" />
                <span>INTERACTIVE SHOWCASE</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] tracking-wider text-white/30">
                {t.galleryHint}
              </span>
            </div>

            {/* LARGE FEATURED IMAGE CARD */}
            <div 
              className="relative aspect-[16/9] w-full group overflow-hidden bg-black flex items-center justify-center cursor-pointer select-none"
              onClick={() => setIsLightboxOpen(true)}
              title="Click to zoom in"
            >
              {/* Bevel outline border */}
              <div 
                className="absolute inset-0 bg-white/10 group-hover:bg-energy-green/30 transition-colors duration-200 z-20 pointer-events-none"
                style={{
                  clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)"
                }}
              />
              
              {/* Inner card clipped wrapping */}
              <div 
                className="absolute inset-[1px] overflow-hidden z-10 bg-black"
                style={{
                  clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)"
                }}
              >
                {/* Main image */}
                <img 
                  src={studioImages[activeImgIndex].url}
                  alt="Studio Physical Space View"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out rounded-sm"
                  referrerPolicy="no-referrer"
                />

                {/* Subtly darkened bottom bar only for typography contrast, keeping the main image 100% raw and clean */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Slogan details overlay */}
                <div className="absolute bottom-5 left-6 right-6 z-20 flex justify-between items-end">
                  <div className="space-y-1 pr-6">
                    <span className="text-[9px] font-mono font-black text-energy-green tracking-widest block uppercase">
                      VIEW {(activeImgIndex + 1)} OF {studioImages.length}
                    </span>
                    <h4 className="font-display font-black text-white text-lg sm:text-xl uppercase italic leading-none tracking-wide">
                      {studioImages[activeImgIndex].title[currentLang]}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-steel-gray font-sans font-medium leading-normal max-w-md hidden sm:block">
                      {studioImages[activeImgIndex].desc[currentLang]}
                    </p>
                  </div>

                  {/* Zoom indicator icon */}
                  <div className="p-2 sm:p-3 bg-black/60 hover:bg-energy-green hover:text-black border border-white/15 hover:border-energy-green rounded-full text-white transition-[transform,background-color,color,border-color] duration-150 hover:scale-110 shrink-0">
                    <Maximize2 className="w-4.5 h-4.5 stroke-[1.5]" />
                  </div>
                </div>
              </div>

              {/* Slider Arrow Navigation Controls overlay */}
              <button 
                onClick={(e) => { e.stopPropagation(); handlePrevPhoto(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white bg-black/40 hover:bg-energy-green hover:text-black rounded-lg border border-white/5 hover:border-energy-green/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-[opacity,background-color,color] duration-150 cursor-pointer"
                aria-label="Previous view"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); handleNextPhoto(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white bg-black/40 hover:bg-energy-green hover:text-black rounded-lg border border-white/5 hover:border-energy-green/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-[opacity,background-color,color] duration-150 cursor-pointer"
                aria-label="Next view"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* INTERACTIVE THUMBNAILS ROW */}
            <div className="grid grid-cols-4 gap-3 select-none">
              {studioImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImgIndex(i)}
                  className="relative aspect-[16/9] bg-black/80 rounded-lg overflow-hidden group cursor-pointer focus:outline-none"
                >
                  {/* Glowing border if active */}
                  <div 
                    className={`absolute inset-0 border transition-colors duration-200 rounded-lg pointer-events-none z-10 ${
                      activeImgIndex === i 
                        ? 'border-energy-green shadow-[0_0_8px_rgba(168,255,0,0.3)] bg-transparent' 
                        : 'border-white/10 hover:border-white/30 bg-black/40 hover:bg-transparent'
                    }`}
                  />
                  <img 
                    src={img.url} 
                    alt={`Thumbnail view ${i + 1}`} 
                    className={`w-full h-full object-cover transition-[filter,transform] duration-200 ${
                      activeImgIndex === i ? 'scale-105 brightness-100' : 'scale-100 brightness-[0.55] hover:brightness-[0.85]'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: 4 COLUMNS FROM THE USER SCRIPT DESIGN */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 py-12 border-t border-b border-white/[0.04]">
          {t.features.map((feat: { title: string; desc: string }, i: number) => (
            <div 
              key={i} 
              className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 group xl:px-4"
            >
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <div className="transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                  {getIcon(i)}
                </div>
                <h4 className="font-display font-black text-base tracking-widest text-white uppercase group-hover:text-energy-green transition-colors duration-150 mt-1">
                  {feat.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-cool-gray leading-relaxed font-sans font-medium max-w-[260px]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BRACKETS SLOGAN AT THE BOTTOM */}
        <div className="mt-16 text-center select-none">
          <div className="inline-flex items-center space-x-3.5 sm:space-x-5 font-display text-sm sm:text-base md:text-lg font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase italic">
            <span className="text-white/40 font-black text-xl sm:text-2xl">[</span>
            <span className="text-steel-gray group-hover:text-white transition-colors duration-300">
              {t.slogan.includes('.') ? (
                (() => {
                  const parts = t.slogan.split('.').map(p => p.trim()).filter(Boolean);
                  return (
                    <>
                      {parts[0]}.{' '}
                      <span className="text-energy-green font-black">{parts[1]}.</span>{' '}
                      {parts[2] ? parts[2] + '.' : ''}
                    </>
                  );
                })()
              ) : (
                t.slogan
              )}
            </span>
            <span className="text-white/40 font-black text-xl sm:text-2xl">]</span>
          </div>
        </div>

      </div>

      {/* FULL RESPONSIVE LIGHTBOX MODAL EXPAND VIEW ENABLING TRUE SPACE SHOWCASE */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center p-4 sm:p-8 select-none"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close button top right */}
            <button 
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 p-2.5 bg-white/[0.03] hover:bg-energy-green hover:text-black rounded-full text-white border border-white/5 hover:border-energy-green/25 transition-[background-color,color] duration-150 z-20 cursor-pointer"
              title="Close view"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Core content slide modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="relative max-w-6xl w-full flex flex-col items-center justify-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* The main picture */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                <img 
                  src={studioImages[activeImgIndex].url} 
                  alt="Studio detailed high-res expanded view"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Slider arrows in lightbox */}
                <button 
                  onClick={handlePrevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white bg-black/60 hover:bg-energy-green hover:text-black rounded-lg border border-white/5 hover:border-energy-green/20 backdrop-blur-md transition-[background-color,color] duration-150 cursor-pointer"
                  aria-label="Previous view"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={handleNextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white bg-black/60 hover:bg-energy-green hover:text-black rounded-lg border border-white/5 hover:border-energy-green/20 backdrop-blur-md transition-[background-color,color] duration-150 cursor-pointer"
                  aria-label="Next view"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Context details banner in lightbox */}
              <div className="text-center space-y-1 px-4 max-w-2xl">
                <span className="text-[10px] font-mono font-black text-energy-green tracking-widest uppercase block">
                  HQ COMPREHENSIVE REBOUND VIEW — {(activeImgIndex + 1)} OF {studioImages.length}
                </span>
                <h3 className="font-display font-black text-white text-xl sm:text-2xl uppercase italic tracking-wide">
                  {studioImages[activeImgIndex].title[currentLang]}
                </h3>
                <p className="text-xs sm:text-sm text-cool-gray font-sans font-medium leading-relaxed">
                  {studioImages[activeImgIndex].desc[currentLang]}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
