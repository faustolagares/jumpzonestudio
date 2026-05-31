import React, { useState } from 'react';
import { Calendar, Clock, Users, ArrowRight, Timer, Sparkles, Flame } from 'lucide-react';
import { Language, StudioClass } from '../types';
import { sampleClasses } from '../translations';
import { JumpButton } from './JumpButton';

interface ClassScheduleProps {
  currentLang: Language;
  onBookClass: (selectedClass: StudioClass, selectedTime: string) => void;
}

export default function ClassSchedule({ currentLang, onBookClass }: ClassScheduleProps) {
  // Mobile day filter state to allow focusing on specific days
  const [mobileActiveDay, setMobileActiveDay] = useState<'ALL' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN'>('ALL');

  // Multi-language translation support
  const translations = {
    en: {
      scheduleLabel: "/// SCHEDULE ///",
      titlePre: "FIND YOUR ",
      titleHighlight: "TIME TO JUMP.",
      subText: "Classes all week long. Morning, midday and evening options to fit your routine.",
      
      highlight1Title: "7 DAYS A WEEK",
      highlight1Desc: "Classes every day to fit your lifestyle.",
      
      highlight2Title: "FLEXIBLE TIMES",
      highlight2Desc: "Morning, midday and evening options.",
      
      highlight3Title: "ALL LEVELS WELCOME",
      highlight3Desc: "Beginner to advanced. You belong here.",
      
      viewScheduleBtn: "VIEW FULL SCHEDULE",
      swipeIndicator: "← SWIPE TO VIEW ENTIRE WEEK →",
      allDaysLabel: "ALL DAYS",
      
      bottomTitleLeft: "50 MINUTE CLASSE",
      bottomTitleRight: "Schedules change. Check the full schedule for the latest updates.",
      bottomSubLeft: "Each class is 50 minutes of high-energy, low-impact exercise.",
      bookSessionTooltip: "Click class to book",
      spotsLeftText: "Spots available! Click to secure your trampoline."
    },
    es: {
      scheduleLabel: "/// HORARIOS ///",
      titlePre: "ENCUENTRA TU ",
      titleHighlight: "MOMENTO DE SALTAR.",
      subText: "Clases toda la semana. Sesiones matutinas, de mediodía y nocturnas para tu rutina.",
      
      highlight1Title: "7 DÍAS A LA SEMANA",
      highlight1Desc: "Clases todos los días para tu estilo de vida.",
      
      highlight2Title: "HORARIOS FLEXIBLES",
      highlight2Desc: "Opciones de mañana, mediodía y noche.",
      
      highlight3Title: "NIVELES BIENVENIDOS",
      highlight3Desc: "De principiante a avanzado. Tu lugar está aquí.",
      
      viewScheduleBtn: "VER HORARIO COMPLETO",
      swipeIndicator: "← DESLIZA PARA VER LA SEMANA COMPLETA →",
      allDaysLabel: "TODOS",
      
      bottomTitleLeft: "CLASES DE 50 MINUTOS",
      bottomTitleRight: "Los horarios cambian. Consulta el calendario completo para ver actualizaciones.",
      bottomSubLeft: "Cada clase es de 50 minutos de alta energía y bajo impacto.",
      bookSessionTooltip: "Clic para reservar",
      spotsLeftText: "¡Lugares disponibles! Haz clic para reservar un trampolín."
    },
    pt: {
      scheduleLabel: "/// QUADRO HORÁRIO ///",
      titlePre: "ENCONTRE SEU ",
      titleHighlight: "MOMENTO DE SALTAR.",
      subText: "Aulas a semana inteira. Opções de manhã, tarde e noite para se ajustar à sua rotina.",
      
      highlight1Title: "7 DIAS POR SEMANA",
      highlight1Desc: "Aulas todos os dias para se adequar ao seu estilo de vida.",
      
      highlight2Title: "HORÁRIOS FLEXÍVEIS",
      highlight2Desc: "Opções pela manhã, almoço e período da noite.",
      
      highlight3Title: "TODOS OS NÍVEIS BEM-VINDOS",
      highlight3Desc: "Iniciante ao avançado. Seu lugar é com a gente.",
      
      viewScheduleBtn: "VER GRADE COMPLETA",
      swipeIndicator: "← ARRASTE LADO PARA VER A SEMANA TODA →",
      allDaysLabel: "TODOS",
      
      bottomTitleLeft: "AULAS DE 50 MINUTOS",
      bottomTitleRight: "Os horários podem mudar. Veja sempre o painel para atualizações recentes.",
      bottomSubLeft: "Cada aula tem 50 minutos de pura energia e baixíssimo impacto.",
      bookSessionTooltip: "Clique para reservar",
      spotsLeftText: "Vagas livres! Clique para reservar seu trampolim individual."
    }
  };

  const t = translations[currentLang] || translations.en;

  // Days list matching columns order
  const daysArray = [
    { key: 'MON', label: { en: 'MON', es: 'LUN', pt: 'SEG' } },
    { key: 'TUE', label: { en: 'TUE', es: 'MAR', pt: 'TER' } },
    { key: 'WED', label: { en: 'WED', es: 'MIÉ', pt: 'QUA' } },
    { key: 'THU', label: { en: 'THU', es: 'JUE', pt: 'QUI' } },
    { key: 'FRI', label: { en: 'FRI', es: 'VIE', pt: 'SEX' } },
    { key: 'SAT', label: { en: 'SAT', es: 'SÁB', pt: 'SÁB' } },
    { key: 'SUN', label: { en: 'SUN', es: 'DOM', pt: 'DOM' } }
  ];

  // Times order list
  const timesArray = ['6:30 AM', '9:30 AM', '12:00 PM', '5:30 PM', '6:30 PM', '7:30 PM'];

  // Hardcoded layout weekly map inspired by the visual screenshot
  const gridScheduleMap: Record<string, Record<string, string>> = {
    '6:30 AM': { MON: 'JUMP FIT', WED: 'JUMP FIT', FRI: 'JUMP FIT' },
    '9:30 AM': { TUE: 'JUMP TONE', THU: 'JUMP TONE', SAT: 'JUMP FIT' },
    '12:00 PM': { MON: 'JUMP CORE', WED: 'JUMP CORE', FRI: 'JUMP CORE' },
    '5:30 PM': { MON: 'JUMP HIIT', TUE: 'JUMP HIIT', WED: 'JUMP HIIT', THU: 'JUMP HIIT', FRI: 'JUMP HIIT' },
    '6:30 PM': { MON: 'JUMP DANCE', WED: 'JUMP DANCE', FRI: 'JUMP DANCE' },
    '7:30 PM': { TUE: 'STRONG JUMP', THU: 'STRONG JUMP', SAT: 'STRONG JUMP' }
  };

  // Helper utility to correctly fetch and bind Studio Class objects inside translations.ts so checkout modal works flawlessly
  const handleCellClick = (className: string, selectedTime: string) => {
    const norm = className.toLowerCase();
    let matchedClass: StudioClass | undefined;

    if (norm.includes('fit') || norm.includes('freestyle')) {
      matchedClass = sampleClasses.find(c => c.id === 'class-freestyle');
    } else if (norm.includes('tone')) {
      matchedClass = sampleClasses.find(c => c.id === 'class-jump-tone');
    } else if (norm.includes('core') || norm.includes('intro')) {
      matchedClass = sampleClasses.find(c => c.id === 'class-intro');
    } else if (norm.includes('hiit') || norm.includes('strong') || norm.includes('dance')) {
      matchedClass = sampleClasses.find(c => c.id === 'class-heavy-rave');
    }

    // Fallback safe assignment
    if (!matchedClass) {
      matchedClass = sampleClasses[0];
    }

    onBookClass(matchedClass, selectedTime);
  };

  const scrollIntoSpecificArea = () => {
    const targetElement = document.getElementById('pricing-section') || document.getElementById('classes');
    if (targetElement) {
      const position = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="classes"
      className="relative bg-black py-24 sm:py-32 overflow-hidden border-t border-white/[0.04]"
    >
      <style>{`
        .custom-schedule-scroll::-webkit-scrollbar {
          height: 5px;
        }
        .custom-schedule-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-schedule-scroll::-webkit-scrollbar-thumb {
          background: #a8ff00;
          border-radius: 2px;
        }
      `}</style>

      {/* Decorative ambiance lights */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-energy-green/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/12 w-[350px] h-[350px] bg-energy-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* LEFT SIDE CONTENT COMPONENT (Spans 4 columns on large views) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div>
              {/* Section Tag */}
              <div className="flex items-center space-x-2 mb-4 select-none">
                <span className="text-energy-green font-mono uppercase text-xs tracking-[0.25em] font-black">
                  {t.scheduleLabel}
                </span>
                <div className="flex-1 max-w-[120px] h-[1px] bg-energy-green/45" />
              </div>

              {/* Display Title skewed styled matching brand mood */}
              <h2 className="text-4.5xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-6xl font-display font-black leading-[0.95] tracking-tight text-white uppercase italic -skew-x-6">
                {t.titlePre}
                <br />
                <span className="text-energy-green font-black block select-text mt-1.5">
                  {t.titleHighlight}
                </span>
              </h2>

              {/* Subtext description */}
              <p className="text-sm sm:text-base text-steel-gray font-sans font-medium mt-6 leading-relaxed max-w-md">
                {t.subText}
              </p>
            </div>

            {/* Custom Outline Features List */}
            <div className="space-y-6 pt-4 border-t border-white/[0.04]">
              
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="py-1 text-energy-green shrink-0">
                  <Calendar className="w-6 h-6 stroke-[1.2]" />
                </div>
                <div>
                  <h4 className="font-display font-black text-base text-energy-green tracking-wider uppercase italic">
                    {t.highlight1Title}
                  </h4>
                  <p className="text-xs text-steel-gray font-sans mt-0.5 font-medium">
                    {t.highlight1Desc}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="py-1 text-energy-green shrink-0">
                  <Clock className="w-6 h-6 stroke-[1.2]" />
                </div>
                <div>
                  <h4 className="font-display font-black text-base text-white tracking-wider uppercase italic">
                    {t.highlight2Title}
                  </h4>
                  <p className="text-xs text-steel-gray font-sans mt-0.5 font-medium">
                    {t.highlight2Desc}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="py-1 text-energy-green shrink-0">
                  <Users className="w-6 h-6 stroke-[1.2]" />
                </div>
                <div>
                  <h4 className="font-display font-black text-base text-white tracking-wider uppercase italic">
                    {t.highlight3Title}
                  </h4>
                  <p className="text-xs text-steel-gray font-sans mt-0.5 font-medium">
                    {t.highlight3Desc}
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Book Classes trigger */}
            <div className="pt-6">
              <JumpButton 
                onClick={scrollIntoSpecificArea}
                variant="primary"
                showSlashes={false}
                showIcon={true}
                iconType="arrow"
                className="w-full sm:w-[260px] h-14"
              >
                {t.viewScheduleBtn}
              </JumpButton>
            </div>
          </div>

          {/* RIGHT SIDE WEEK SCHEDULE TABLE GRID (Spans 8 columns on large views) */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Quick interactive mobile days toggles to ease filtering on small viewports */}
            <div className="flex xl:hidden overflow-x-auto gap-1 mb-4 pb-2 custom-schedule-scroll select-none">
              <button 
                onClick={() => setMobileActiveDay('ALL')}
                className={`px-3.5 py-1.5 shrink-0 rounded-sm font-mono text-[11px] font-black tracking-widest uppercase border transition-colors duration-150 ${
                  mobileActiveDay === 'ALL'
                    ? 'bg-energy-green border-energy-green text-black'
                    : 'bg-transparent border-white/10 text-cool-gray hover:text-white'
                }`}
              >
                {t.allDaysLabel}
              </button>
              {daysArray.map((day) => (
                <button 
                  key={day.key}
                  onClick={() => setMobileActiveDay(day.key as any)}
                  className={`px-3.5 py-1.5 shrink-0 rounded-sm font-mono text-[11px] font-black tracking-widest uppercase border transition-colors duration-150 ${
                    mobileActiveDay === day.key
                      ? 'bg-energy-green border-energy-green text-black'
                      : 'bg-transparent border-white/10 text-cool-gray hover:text-white'
                  }`}
                >
                  {day.label[currentLang] || day.key}
                </button>
              ))}
            </div>

            {/* Visual assist swiping label indicator */}
            <div className="xl:hidden flex items-center justify-between text-[10px] font-mono text-steel-gray mb-2">
              <span>{t.swipeIndicator}</span>
              <span className="text-energy-green animate-pulse">● LIVE</span>
            </div>

            {/* Main Weekly Scheduler Console Card with custom polygonal cut corners */}
            <div className="relative group w-full">
              {/* Custom outer bevel border line */}
              <div 
                className="absolute inset-0 bg-white/10 group-hover:bg-energy-green/20 transition-colors duration-200 pointer-events-none"
                style={{
                  clipPath: "polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%, 0% 16px)"
                }}
              />
              {/* Inner fill card */}
              <div 
                className="absolute inset-[1px] bg-black/85 backdrop-blur-md pointer-events-none"
                style={{
                  clipPath: "polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%, 0% 16px)"
                }}
              />

              {/* Scrollable grid table viewport wrapping inside cut lines */}
              <div className="relative z-10 overflow-x-auto scroll-smooth custom-schedule-scroll w-full p-2">
                <table className="w-full min-w-[700px] border-collapse text-left">
                  
                  {/* Table Header Row representing days */}
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.02]">
                      <th className="py-4 px-6 font-mono text-xs text-steel-gray tracking-widest uppercase border-r border-white/[0.06] select-none text-center">
                        TIME / DAY
                      </th>
                      {daysArray.map((day) => {
                        const isDayFilteredOutOnMobile = mobileActiveDay !== 'ALL' && mobileActiveDay !== day.key;
                        return (
                          <th 
                            key={day.key} 
                            className={`py-4 px-3 text-center border-r border-white/[0.06] last:border-r-0 transition-opacity duration-200 ${isDayFilteredOutOnMobile ? 'opacity-30' : 'opacity-100'}`}
                          >
                            <span className="font-display font-black text-sm tracking-widest text-cool-gray uppercase select-none italic group-hover:text-white">
                              {day.label[currentLang] || day.key}
                            </span>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>

                  {/* Table Body Rows representing timeslots */}
                  <tbody>
                    {timesArray.map((time) => (
                      <tr key={time} className="border-b border-white/[0.06] last:border-0 hover:bg-white/[0.01] transition-colors">
                        
                        {/* Time Slot Header block */}
                        <td className="py-5 px-6 font-mono text-xs text-white uppercase font-black tracking-wider border-r border-white/[0.06] select-none text-center bg-white/[0.01]">
                          {time}
                        </td>

                        {/* Interactive dynamic cells for each day */}
                        {daysArray.map((day) => {
                          const className = gridScheduleMap[time]?.[day.key];
                          const isDayFilteredOutOnMobile = mobileActiveDay !== 'ALL' && mobileActiveDay !== day.key;

                          return (
                            <td 
                              key={day.key}
                              className={`p-1 border-r border-white/[0.06] last:border-0 transition-opacity duration-200 ${isDayFilteredOutOnMobile ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}
                            >
                              {className ? (
                                <button
                                  type="button"
                                  onClick={() => handleCellClick(className, time)}
                                  className="w-full h-full py-3 px-1 rounded flex flex-col items-center justify-center bg-transparent hover:bg-energy-green/15 text-center group cursor-pointer focus:outline-none focus:ring-1 focus:ring-energy-green/30 transition-[background-color] duration-150 active:scale-[0.97]"
                                  title={`${t.bookSessionTooltip}: ${className}`}
                                >
                                  {/* Class title chip styled dynamically */}
                                  <span className="font-display font-black text-xs sm:text-sm tracking-wider text-energy-green uppercase italic group-hover:text-white transition-colors duration-150">
                                    {className}
                                  </span>
                                  <span className="text-[9px] text-cool-gray/60 group-hover:text-energy-green font-mono uppercase mt-0.5 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                    {t.bookSessionTooltip}
                                  </span>
                                </button>
                              ) : (
                                <div className="py-3 text-center text-white/[0.15] font-mono text-xs select-none">
                                  —
                                </div>
                              )}
                            </td>
                          );
                        })}

                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>

            </div>

            {/* Helper micro indicator overlay tooltips */}
            <p className="flex items-center justify-end gap-1.5 text-[10px] sm:text-xs text-right text-cool-gray mt-2 font-sans font-medium tracking-wide">
              <Flame className="w-3.5 h-3.5 text-energy-green shrink-0" />
              <span className="text-energy-green">{t.spotsLeftText}</span>
            </p>

          </div>

        </div>

        {/* BOTTOM HORIZONTAL PROMO STATS BANNER (Reconstructed according to the visual blueprint) */}
        <div className="relative group w-full p-5 px-6 sm:px-8 mt-8">
          
          {/* Custom polygonal cut corners style borders matching image layout style */}
          <div 
            className="absolute inset-0 bg-white/10 group-hover:bg-energy-green/30 transition-colors duration-200"
            style={{
              clipPath: "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)"
            }}
          />
          {/* Offset inner back card fill */}
          <div 
            className="absolute inset-[1px] bg-deep-black group-hover:bg-dark-charcoal backdrop-blur-md transition-colors duration-200"
            style={{
              clipPath: "polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)"
            }}
          />

          {/* Banner inner Grid columns */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 select-none">
            
            {/* Clock highlight info */}
            <div className="flex items-center space-x-3.5 pl-0">
              <Clock className="w-10 h-10 text-energy-green stroke-[1.2] shrink-0" />
              <div>
                <h5 className="font-display font-black tracking-wider text-base text-energy-green italic leading-none">
                  {t.bottomTitleLeft}
                </h5>
                <p className="text-xs text-steel-gray font-sans mt-1 font-medium">
                  {t.bottomSubLeft}
                </p>
              </div>
            </div>

            {/* Vertical Split line divider */}
            <div className="hidden md:block w-[1.5px] h-12 bg-white/10" />

            {/* Calendar changes notice highlight */}
            <div className="flex items-center space-x-3.5 pr-0 md:max-w-md">
              <div>
                <h5 className="font-display font-black tracking-wider text-sm text-white italic text-center md:text-right leading-relaxed">
                  {(() => {
                    const [first, ...rest] = t.bottomTitleRight.split('. ');
                    const second = rest.join('. ');
                    return (
                      <>
                        {first}.
                        {second && (
                          <span className="text-energy-green block sm:inline">
                            {' '}{second}
                          </span>
                        )}
                      </>
                    );
                  })()}
                </h5>
              </div>
              <Calendar className="hidden sm:block w-9 h-9 text-cool-gray stroke-[1.2] shrink-0" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
