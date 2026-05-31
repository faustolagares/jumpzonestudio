import { Instagram, Music, Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { NavLinkButton } from './Buttons';
import { JUMP_ZONE_LOGO_SRC } from '../lib/assets';
import { optimizedSrc, optimizedSrcSet } from '../lib/img';

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang];
  const currentYear = new Date().getFullYear();
  const footerContent = {
    en: {
      quoteLine1: "WE DON'T JUST JUMP.",
      quoteLine2: "WE LEVEL UP.",
      intro: "Experience Newark's new fitness experience with high-energy rebound workouts, music, and community.",
      locationTitle: "NEWARK HEADQUARTERS",
      locationNote: "Adjacent to Mulberry Commons",
      operationsTitle: "STUDIO OPERATIONS",
      weekdays: "MON - FRI:",
      saturday: "SATURDAY:",
      sunday: "SUNDAY:",
      liveTimings: "LIVE HOLIDAY TIMINGS",
      clubZone: "THE CLUB ZONE",
      home: "HOME",
      concept: "OUR STYLE",
      howItWorks: "HOW IT WORKS",
      benefits: "BENEFITS",
      pricing: "PRICING",
      copyright: "ALL METRIC AND CHOREOGRAPHY SIMULATIONS RESERVED.",
      tagline: "DESIGNED FOR MOVEMENT, ENGAGED FOR CONCERTS.",
      madeBy: "MADE BY",
    },
    es: {
      quoteLine1: "NO SOLO SALTAMOS.",
      quoteLine2: "SUBIMOS DE NIVEL.",
      intro: "Vive una nueva experiencia fitness en Newark con entrenamientos rebound, música y comunidad.",
      locationTitle: "SEDE EN NEWARK",
      locationNote: "Junto a Mulberry Commons",
      operationsTitle: "OPERACIÓN DEL ESTUDIO",
      weekdays: "LUN - VIE:",
      saturday: "SÁBADO:",
      sunday: "DOMINGO:",
      liveTimings: "HORARIOS ESPECIALES EN VIVO",
      clubZone: "ZONA DEL CLUB",
      home: "INICIO",
      concept: "CONCEPTO",
      howItWorks: "CÓMO FUNCIONA",
      benefits: "BENEFICIOS",
      pricing: "TARIFAS",
      copyright: "TODOS LOS DERECHOS RESERVADOS.",
      tagline: "DISEÑADO PARA MOVERTE, HECHO PARA EL SHOW.",
      madeBy: "HECHO POR",
    },
    pt: {
      quoteLine1: "NÓS NÃO APENAS PULAMOS.",
      quoteLine2: "NÓS SUBIMOS DE NÍVEL.",
      intro: "Viva uma nova experiência fitness em Newark com treinos rebound, música e comunidade.",
      locationTitle: "SEDE EM NEWARK",
      locationNote: "Ao lado do Mulberry Commons",
      operationsTitle: "OPERAÇÃO DO ESTÚDIO",
      weekdays: "SEG - SEX:",
      saturday: "SÁBADO:",
      sunday: "DOMINGO:",
      liveTimings: "HORÁRIOS ESPECIAIS AO VIVO",
      clubZone: "ZONA DO CLUBE",
      home: "INÍCIO",
      concept: "CONCEITO",
      howItWorks: "COMO FUNCIONA",
      benefits: "BENEFÍCIOS",
      pricing: "PLANOS",
      copyright: "TODOS OS DIREITOS RESERVADOS.",
      tagline: "CRIADO PARA MOVIMENTO, FEITO PARA O SHOW.",
      madeBy: "FEITO PELA",
    },
  };
  const f = footerContent[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToEl = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer 
      id="footer-root" 
      className="bg-[#030303] border-t border-white/[0.04] pt-24 pb-16 text-steel-gray relative z-10"
    >
      {/* Visual background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-energy-green/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-10 w-[300px] h-[300px] bg-energy-green/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Core footer container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-16 gap-x-8 lg:gap-x-12 pb-20 border-b border-white/[0.05]">
          
          {/* Column 1: Logo and Slogan (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            {/* Same Brand Logo absolute structure from header adapted for footer height */}
            <div 
              onClick={scrollToTop} 
              className="cursor-pointer select-none relative h-20 w-52 sm:w-60 group block -ml-3"
            >
              <img 
                src={optimizedSrc(JUMP_ZONE_LOGO_SRC, 256)} 
                srcSet={optimizedSrcSet(JUMP_ZONE_LOGO_SRC, 256)}
                alt="JUMP ZONE STUDIO Logo" 
                loading="lazy"
                decoding="async"
                className="h-24 sm:h-28 w-auto object-contain absolute left-0 top-1/2 -translate-y-1/2 transition-transform duration-200 ease-out group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm sm:text-base text-white uppercase font-display font-extrabold tracking-widest leading-snug">
              &quot;{f.quoteLine1} <span className="text-energy-green block mt-0.5">{f.quoteLine2}&quot;</span>
            </p>

            <p className="text-xs sm:text-sm text-steel-gray font-sans font-medium leading-relaxed max-w-sm">
              {f.intro}
            </p>

            {/* Social handles with Spotify playlists highlights */}
            <div className="flex items-center space-x-5 pt-2">
              <a href="#" className="text-white/60 hover:text-energy-green transition-colors duration-150" title="Follow Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-energy-green transition-colors duration-150" title="Spotify Gym Beats">
                <Music className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-energy-green transition-colors duration-150" title="Follow Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Venue Location (Spans 3 columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h5 className="text-xs font-mono font-bold tracking-[0.2em] text-white uppercase sm:border-l-2 sm:border-energy-green sm:pl-3">
              {f.locationTitle}
            </h5>
            <ul className="space-y-4 text-xs sm:text-sm font-sans font-medium text-steel-gray">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-energy-green shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  122 Mulberry St, Newark, NJ 07102 
                  <span className="block text-white/40 text-[11px] mt-1">{f.locationNote}</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-energy-green shrink-0" />
                <span>+1 (973) 555-JUMP</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-energy-green shrink-0" />
                <span className="hover:text-white transition-colors">rebels@jumpzonestudio.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio Operations (Spans 3 columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h5 className="text-xs font-mono font-bold tracking-[0.2em] text-white uppercase sm:border-l-2 sm:border-energy-green sm:pl-3">
              {f.operationsTitle}
            </h5>
            <ul className="space-y-3 text-xs font-mono">
              <li className="flex justify-between border-b border-white/[0.03] pb-2">
                <span className="text-steel-gray font-medium">{f.weekdays}</span>
                <span className="text-white font-bold">06:00 AM - 09:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/[0.03] pb-2">
                <span className="text-steel-gray font-medium">{f.saturday}</span>
                <span className="text-white font-bold">07:00 AM - 05:00 PM</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="text-steel-gray font-medium">{f.sunday}</span>
                <span className="text-white font-bold">08:00 AM - 02:00 PM</span>
              </li>
              <li className="pt-2">
                <div className="inline-flex items-center space-x-1.5 py-1 px-2.5 bg-energy-green/5 border border-energy-green/10 rounded-sm">
                  <span className="inline-block w-1.5 h-1.5 bg-energy-green rounded-full animate-pulse" />
                  <span className="text-[10px] text-energy-green tracking-wider uppercase font-bold">{f.liveTimings}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <h5 className="text-xs font-mono font-bold tracking-[0.2em] text-white uppercase sm:border-l-2 sm:border-energy-green sm:pl-3">
              {f.clubZone}
            </h5>
            <div className="flex flex-col space-y-3">
              <NavLinkButton onClick={() => scrollToEl('hero-root')}>
                {f.home}
              </NavLinkButton>
              <NavLinkButton onClick={() => scrollToEl('more-than-workout')}>
                {f.concept}
              </NavLinkButton>
              <NavLinkButton onClick={() => scrollToEl('how-it-works-section')}>
                {f.howItWorks}
              </NavLinkButton>
              <NavLinkButton onClick={() => scrollToEl('benefits-section')}>
                {f.benefits}
              </NavLinkButton>
              <NavLinkButton onClick={() => scrollToEl('classes')}>
                {t.navClasses}
              </NavLinkButton>
              <NavLinkButton onClick={() => scrollToEl('pricing')}>
                {f.pricing}
              </NavLinkButton>
            </div>
          </div>

        </div>

        {/* Closing details and credit */}
        <div className="pt-10 flex flex-col lg:flex-row justify-between items-center text-[10px] uppercase font-mono text-cool-gray gap-6">
          <div className="text-center lg:text-left space-y-1">
            <p>© {currentYear} JUMP ZONE FITNESS LLC.<br className="sm:hidden" /> {f.copyright}</p>
            <p className="tracking-widest">{f.tagline}</p>
          </div>

          {/* NexLink credit */}
          <a
            href="https://www.nexlink.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 tracking-widest font-bold text-cool-gray hover:text-energy-green transition-colors duration-150"
          >
            <span>{f.madeBy}</span>
            <span className="text-energy-green">NEXLINK</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

