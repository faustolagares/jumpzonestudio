import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { faqs, translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

interface FAQProps {
  currentLang: Language;
}

export default function FAQ({ currentLang }: FAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const t = translations[currentLang];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const sectionLabel = currentLang === 'pt' ? 'DÚVIDAS' : currentLang === 'es' ? 'PREGUNTAS' : 'FAQ';

  return (
    <section 
      id="faq" 
      className="relative bg-[#050505] py-24 sm:py-32 overflow-hidden border-t border-white/[0.04]"
    >
      {/* Decorative premium neon lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-energy-green/[0.025] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] rounded-full bg-energy-green/[0.015] blur-[110px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* CENTERED HEADER BLOCK */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <p className="text-energy-green font-mono uppercase text-xs sm:text-sm tracking-[0.25em] font-bold select-none mb-3">
            /// {sectionLabel} ///
          </p>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black leading-none tracking-normal text-white uppercase italic -skew-x-6">
            {currentLang === 'pt' ? 'PERGUNTAS' : currentLang === 'es' ? 'PREGUNTAS' : 'QUESTIONS'}
            <span className="text-energy-green font-black block sm:inline">
              {" "}{currentLang === 'pt' ? 'FREQUENTES.' : currentLang === 'es' ? 'FRECUENTES.' : 'CORNER.'}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-steel-gray font-sans font-medium mt-4 max-w-lg mx-auto">
            {t.faqSubtitle}
          </p>
        </div>

        {/* ACCORDION CONTAINER - SLEEK AND RESPONSIVE */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            
            return (
              <div
                key={idx}
                className="group relative w-full"
              >
                {/* 1. Asymmetrical Border following the clipPath style */}
                <div 
                  className={`absolute inset-0 transition-colors duration-200 ${
                    isOpen 
                      ? 'bg-energy-green shadow-[0_0_25px_rgba(168,255,0,0.08)]' 
                      : 'bg-white/10 group-hover:bg-energy-green/45'
                  }`}
                  style={{
                    clipPath: "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)"
                  }}
                />

                {/* 2. Inner card background */}
                <div 
                  className={`relative m-[1px] bg-deep-black transition-colors duration-200 overflow-hidden ${
                    isOpen ? 'bg-[#08080a]' : 'group-hover:bg-[#070709]'
                  }`}
                  style={{
                    clipPath: "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)"
                  }}
                >
                  {/* Toggle button */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex justify-between items-center bg-transparent focus:outline-none cursor-pointer group-hover:text-white"
                  >
                    <div className="flex items-center space-x-4 pr-4">
                      <HelpCircle className={`w-4 h-4 shrink-0 transition-colors duration-200 ${isOpen ? 'text-energy-green' : 'text-steel-gray'}`} />
                      <span className={`font-sans font-black tracking-wide text-sm sm:text-base uppercase transition-colors duration-200 ${isOpen ? 'text-energy-green' : 'text-white'}`}>
                        {faq.question[currentLang] || faq.question.en}
                      </span>
                    </div>
                    
                    <div className={`p-1 rounded-full border transition-all duration-300 shrink-0 ${
                      isOpen ? 'border-energy-green bg-energy-green/10' : 'border-white/10 bg-transparent'
                    }`}>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-energy-green' : 'text-steel-gray'
                        }`} 
                      />
                    </div>
                  </button>

                  {/* Collapsible Answer block */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.22, ease: [0.23, 1, 0.32, 1] },
                          opacity: { duration: 0.18, ease: [0.23, 1, 0.32, 1] }
                        }}
                        className="border-t border-white/[0.04]"
                      >
                        <div className="px-5 pb-6 pt-2 sm:px-6 sm:pb-7 text-xs sm:text-sm text-steel-gray font-sans font-medium leading-relaxed bg-black/10">
                          {faq.answer[currentLang] || faq.answer.en}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
