import React, { useState } from "react";
import { Zap, HelpCircle, ChevronRight, ArrowRight, Sparkles, AlertCircle, Copy, Check, ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import { Language } from "../types";
import { translations } from "../translations";

interface ButtonShowcaseProps {
  currentLang: Language;
}

export default function ButtonShowcase({ currentLang }: ButtonShowcaseProps) {
  const [activeModel, setActiveModel] = useState<number | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const t = translations[currentLang] || translations.pt;

  // 10 spectacular button variations with different clipPaths, styles, and hover behaviors
  const buttonModels = [
    {
      id: 1,
      name: "MODEL 01 : MICRO-CHAMFER (Symmetrical 6px)",
      tagline: "Ultra-sleek modern military look with compact 6px chamfer cuts on all 4 corners.",
      clipPath: "polygon(6px 0%, calc(100% - 6px) 0%, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0% calc(100% - 6px), 0% 6px)",
      bg: "bg-energy-green",
      hoverBg: "hover:bg-[#b5ff1a] hover:shadow-[0_0_20px_rgba(168,255,0,0.4)]",
      textColor: "text-deep-black",
      leftAccent: (
        <div className="flex space-x-[2px] text-deep-black/30 font-black italic select-none text-xs leading-none shrink-0 pr-1">
          <span>/</span>
          <span>/</span>
        </div>
      ),
      rightAccent: <ChevronRight className="w-4 h-4 stroke-[3px]" />,
    },
    {
      id: 2,
      name: "MODEL 02 : APEX ASYMMETRICAL (Top-L & Bottom-R)",
      tagline: "Dynamic stance. Steeper 10px angled cuts on top-left and bottom-right corners only.",
      clipPath: "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
      bg: "bg-energy-green",
      hoverBg: "hover:bg-[#bbf011] hover:-translate-y-0.5",
      textColor: "text-deep-black",
      leftAccent: (
        <div className="flex space-x-[3px] text-deep-black/40 font-extrabold italic text-[11px] shrink-0 pr-2">
          <span>[//]</span>
        </div>
      ),
      rightAccent: <ArrowRight className="w-4 h-4 stroke-[3px]" />,
    },
    {
      id: 3,
      name: "MODEL 03 : TACTICAL WIREFRAME (Neon Glow Secondary)",
      tagline: "Inner black hollow shell framed by double-intensity razor thin accent border.",
      clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)",
      bg: "bg-black border border-energy-green",
      hoverBg: "hover:bg-energy-green/10 hover:shadow-[0_0_15px_rgba(168,255,0,0.2)]",
      textColor: "text-energy-green hover:text-white",
      leftAccent: (
        <div className="w-1.5 h-1.5 rounded-full bg-energy-green animate-pulse mr-2" />
      ),
      rightAccent: <ChevronRight className="w-4 h-4 text-energy-green" />,
    },
    {
      id: 4,
      name: "MODEL 04 : THE RAID SHIELD (Dual Segment Accent)",
      tagline: "Features high-contrast black stripes screen-printed directly over the dynamic green layer.",
      clipPath: "polygon(12px 0%, calc(100% - 12px) 0%, 100% 8px, 100% 100%, 0% 100%, 0% 8px)",
      bg: "bg-gradient-to-r from-energy-green to-[#9be400]",
      hoverBg: "hover:opacity-95",
      textColor: "text-deep-black",
      leftAccent: (
        <div className="bg-black/15 px-1 rounded text-[9px] font-mono font-bold text-deep-black uppercase mr-2 tracking-tighter">
          A-1
        </div>
      ),
      rightAccent: <Zap className="w-3.5 h-3.5 fill-current" />,
    },
    {
      id: 5,
      name: "MODEL 05 : INDUSTRIAL NOTCH (Side-Lock Bracket)",
      tagline: "Boxed industrial look with inner 4px notch indentations on the side margins.",
      clipPath: "polygon(0% 0%, 94% 0%, 100% 6px, 100% 100%, 6% 100%, 0% calc(100% - 6px))",
      bg: "bg-energy-green",
      hoverBg: "hover:brightness-110",
      textColor: "text-deep-black",
      leftAccent: (
        <div className="flex space-x-[1px] text-deep-black/30 font-black mr-2 select-none">
          <span>|</span>
          <span>|</span>
        </div>
      ),
      rightAccent: <Zap className="w-3 h-3" />,
    },
    {
      id: 6,
      name: "MODEL 06 : COMBAT READY OUTLINE (Minimalist Dark)",
      tagline: "Pure charcoal athletic model with micro neon side decals for absolute contrast.",
      clipPath: "polygon(5px 0%, calc(100% - 5px) 0%, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0% calc(100% - 5px), 0% 5px)",
      bg: "bg-[#141414] border border-white/[0.08] hover:border-energy-green/40",
      hoverBg: "hover:bg-[#1c1c1c]",
      textColor: "text-white hover:text-energy-green",
      leftAccent: (
        <div className="text-energy-green mr-2 font-mono text-[9px] tracking-tighter">[SYS]</div>
      ),
      rightAccent: <ArrowRight className="w-4 h-4 ml-1" />,
    },
    {
      id: 7,
      name: "MODEL 07 : HEX-WING FLIGHT (Flat Horizon Wings)",
      tagline: "Symmetric sharp trapezoidal wing angles, ideal for high-speed dynamic control components.",
      clipPath: "polygon(14px 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0% 50%)",
      bg: "bg-energy-green",
      hoverBg: "hover:scale-105 hover:bg-[#b1fc06]",
      textColor: "text-deep-black",
      leftAccent: null,
      rightAccent: null,
    },
    {
      id: 8,
      name: "MODEL 08 : TOXIC LIQUID GLOW (Solid Matrix Flow)",
      tagline: "Continuous glowing internal backlight bar. Toxic green elements on midnight dark canvas.",
      clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)",
      bg: "bg-black border border-energy-green/20",
      hoverBg: "hover:border-energy-green hover:shadow-[0_0_12px_rgba(168,255,0,0.3)]",
      textColor: "text-white hover:text-energy-green",
      leftAccent: (
        <span className="text-[10px] text-energy-green mr-2">●</span>
      ),
      rightAccent: <ChevronRight className="w-4 h-4 text-energy-green" />,
    },
    {
      id: 9,
      name: "MODEL 09 : BOLD CROSSHAIR (HUD Bracket Border)",
      tagline: "Surrounded by invisible visual target frames with sharp 4px corners and micro dots.",
      clipPath: "polygon(4px 0%, calc(100% - 4px) 0%, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0% calc(100% - 4px), 0% 4px)",
      bg: "bg-energy-green",
      hoverBg: "hover:bg-[#aefc0a] hover:shadow-lg",
      textColor: "text-deep-black font-mono",
      leftAccent: <span className="text-[9px] font-mono mr-1 text-deep-black/60 font-black">+</span>,
      rightAccent: <span className="text-[9px] font-mono ml-1 text-deep-black/60 font-black">+</span>,
    },
    {
      id: 10,
      name: "MODEL 10 : THE CHAMPION CORNER (Double 4px Cutout)",
      tagline: "Premium athletic chamfer with integrated double slash divider on neon active background.",
      clipPath: "polygon(4px 0%, calc(100% - 4px) 0%, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0% calc(100% - 4px), 0% 4px)",
      bg: "bg-energy-green",
      hoverBg: "hover:bg-[#b0ff07] hover:tracking-widest",
      textColor: "text-deep-black",
      leftAccent: (
        <span className="text-xs font-mono tracking-tighter opacity-70 pr-1 select-none font-bold">//</span>
      ),
      rightAccent: <ArrowRight className="w-3.5 h-3.5 stroke-[3px]" />,
    },
  ];

  const handleCopyCode = (id: number, clipPath: string) => {
    const code = `style={{ clipPath: "${clipPath}" }}`;
    navigator.clipboard.writeText(code);
    setCopiedText(code);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="button-playground" className="relative py-16 bg-deep-black border-y border-white/[0.04] overflow-hidden">
      {/* Decorative ambient background mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,255,0,0.02),transparent_40%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-energy-green/[0.025] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block on Dark Canvas */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-white/[0.04] pb-8">
          <div>
            <div className="flex items-center space-x-2 text-energy-green font-mono text-xs tracking-[0.2em] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chamfer UI Lab</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white uppercase italic">
              BUTTON <span className="text-energy-green">STYLE SYSTEM</span>
            </h2>
            <p className="text-cool-gray text-xs sm:text-sm max-w-xl font-normal mt-1">
              Test and choose your favorite high-energy button style below. Each contains precise cut values and responsive indicators built for Newark boutique acoustics.
            </p>
          </div>
          <div className="bg-white/[0.02] border border-white/[0.06] p-3 rounded-lg flex items-center space-x-3 max-w-sm">
            <AlertCircle className="w-5 h-5 text-energy-green shrink-0" />
            <span className="text-[10px] sm:text-xs text-cool-gray font-mono leading-tight">
              Click on a button model to highlight it, or click copy to copy its exact inline CSS clipPath coordinates!
            </span>
          </div>
        </div>

        {/* 10 Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {buttonModels.map((model) => {
            const isSelected = activeModel === model.id;
            return (
              <div 
                key={model.id}
                className={`relative bg-dark-charcoal/30 hover:bg-dark-charcoal/50 p-6 rounded-2xl border transition-colors duration-200 flex flex-col justify-between group ${
                  isSelected 
                    ? "border-energy-green/60 bg-energy-green/[0.02] shadow-[0_4px_30px_rgba(168,255,0,0.05)]" 
                    : "border-white/[0.04] hover:border-white/[0.08]"
                }`}
              >
                {/* Active Indicator Pin */}
                {isSelected && (
                  <span className="absolute top-3 right-3 text-[9px] font-mono text-energy-green font-bold tracking-widest bg-energy-green/10 border border-energy-green/20 px-2 py-0.5 rounded-full uppercase">
                    Selected
                  </span>
                )}

                <div className="space-y-2 mb-6">
                  <h4 className="font-display font-medium tracking-wide text-lg text-white uppercase italic flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-energy-green" />
                    {model.name}
                  </h4>
                  <p className="text-xs text-cool-gray leading-relaxed font-normal pr-12">
                    {model.tagline}
                  </p>
                </div>

                {/* Displaying Live Interactive Button */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.03]">
                  
                  {/* Button target execution container */}
                  <div className="w-full sm:w-auto min-w-[200px] flex justify-center sm:justify-start">
                    <button
                      onClick={() => setActiveModel(model.id)}
                      className={`relative min-w-[190px] py-3.5 flex items-center justify-center transition-[background-color,color,box-shadow,transform,opacity,filter] duration-150 select-none cursor-pointer active:scale-[0.97] ${model.bg} ${model.hoverBg} ${model.textColor} uppercase font-sans font-black italic text-[12px] tracking-wider`}
                      style={{ clipPath: model.clipPath }}
                    >
                      <div className="w-full flex items-center justify-between px-5">
                        {model.leftAccent}
                        <span className="flex-1 text-center font-sans tracking-wide leading-none">
                          TEST CLICK HERE
                        </span>
                        {model.rightAccent}
                      </div>
                    </button>
                  </div>

                  {/* Right side actions - copy clipPath parameters */}
                  <button
                    onClick={() => handleCopyCode(model.id, model.clipPath)}
                    className="w-full sm:w-auto text-[10px] font-mono uppercase bg-white/[0.03] hover:bg-white/[0.08] text-cool-gray hover:text-white border border-white/5 py-2 px-3 rounded-lg flex items-center justify-center space-x-1.5 transition-[background-color,color] duration-150 text-center cursor-pointer"
                  >
                    {copiedText === `style={{ clipPath: "${model.clipPath}" }}` ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-energy-green" />
                        <span className="text-energy-green">COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY CLIPPATH</span>
                      </>
                    )}
                  </button>

                </div>
              </div>
            );
          })}
        </div>

        {/* Selected model system review block */}
        <div className="mt-12 bg-black/40 border border-white/[0.04] p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-energy-green tracking-widest uppercase block font-bold">SYSTEM ACTIVE SHAPING</span>
            <p className="text-xs text-cool-gray max-w-2xl font-normal">
              You can instantly preview whichever model you select. Copy its code and tell me which one keeps your workout style going!
            </p>
          </div>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 text-white font-mono font-bold uppercase tracking-wider text-[10px] py-3 px-6 rounded-lg transition-colors cursor-pointer text-center whitespace-nowrap"
          >
            SCROLL TO TOP
            <ChevronUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
}
