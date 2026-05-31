import { Instagram, Music, Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { NavLinkButton } from './Buttons';
import { optimizedSrc, optimizedSrcSet } from '../lib/img';

const LOGO_SRC = '/images/jump_zone_logo_1780012118773.png';

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang];
  const currentYear = new Date().getFullYear();

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
                src={optimizedSrc(LOGO_SRC, 256)} 
                srcSet={optimizedSrcSet(LOGO_SRC, 256)}
                alt="JUMP ZONE STUDIO Logo" 
                loading="lazy"
                decoding="async"
                className="h-24 sm:h-28 w-auto object-contain absolute left-0 top-1/2 -translate-y-1/2 transition-transform duration-200 ease-out group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm sm:text-base text-white uppercase font-display font-extrabold tracking-widest leading-snug">
              &quot;WE DON&apos;T JUST JUMP. <span className="text-energy-green block mt-0.5">WE LEVEL UP.&quot;</span>
            </p>

            <p className="text-xs sm:text-sm text-steel-gray font-sans font-medium leading-relaxed max-w-sm">
              {currentLang === 'en' 
                ? "Experience Newark's elite rebound concert fitness. High intensity cardio intervals mapped specifically to bone-rattling audio systems."
                : currentLang === 'es'
                ? "La experiencia de fitness de rebote de élite en Newark. Sincronización metabólica de ritmos con sistemas de sonido premium."
                : "A experiência fitness de elite em Newark. Intervalos de alta intensidade sincronizados com o sistema de graves supremo."}
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
              NEWARK HEADQUARTERS
            </h5>
            <ul className="space-y-4 text-xs sm:text-sm font-sans font-medium text-steel-gray">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-energy-green shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  122 Mulberry St, Newark, NJ 07102 
                  <span className="block text-white/40 text-[11px] mt-1">Adjacent to Mulberry Commons</span>
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
              STUDIO OPERATIONS
            </h5>
            <ul className="space-y-3 text-xs font-mono">
              <li className="flex justify-between border-b border-white/[0.03] pb-2">
                <span className="text-steel-gray font-medium">MON - FRI:</span>
                <span className="text-white font-bold">06:00 AM - 09:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/[0.03] pb-2">
                <span className="text-steel-gray font-medium">SATURDAY:</span>
                <span className="text-white font-bold">07:00 AM - 05:00 PM</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="text-steel-gray font-medium">SUNDAY:</span>
                <span className="text-white font-bold">08:00 AM - 02:00 PM</span>
              </li>
              <li className="pt-2">
                <div className="inline-flex items-center space-x-1.5 py-1 px-2.5 bg-energy-green/5 border border-energy-green/10 rounded-sm">
                  <span className="inline-block w-1.5 h-1.5 bg-energy-green rounded-full animate-pulse" />
                  <span className="text-[10px] text-energy-green tracking-wider uppercase font-bold">LIVE HOLIDAY TIMINGS</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <h5 className="text-xs font-mono font-bold tracking-[0.2em] text-white uppercase sm:border-l-2 sm:border-energy-green sm:pl-3">
              THE CLUB ZONE
            </h5>
            <div className="flex flex-col space-y-3">
              <NavLinkButton onClick={() => scrollToEl('hero-root')}>
                {currentLang === 'pt' ? 'INÍCIO' : currentLang === 'es' ? 'INICIO' : 'HOME'}
              </NavLinkButton>
              <NavLinkButton onClick={() => scrollToEl('more-than-workout')}>
                {currentLang === 'pt' ? 'CONCEITO' : currentLang === 'es' ? 'CONCEPTO' : 'OUR STYLE'}
              </NavLinkButton>
              <NavLinkButton onClick={() => scrollToEl('how-it-works-section')}>
                {currentLang === 'pt' ? 'COMO FUNCIONA' : currentLang === 'es' ? 'CÓMO FUNCIONA' : 'HOW IT WORKS'}
              </NavLinkButton>
              <NavLinkButton onClick={() => scrollToEl('benefits-section')}>
                {currentLang === 'pt' ? 'BENEFÍCIOS' : currentLang === 'es' ? 'BENEFICIOS' : 'BENEFITS'}
              </NavLinkButton>
              <NavLinkButton onClick={() => scrollToEl('classes')}>
                {t.navClasses}
              </NavLinkButton>
              <NavLinkButton onClick={() => scrollToEl('pricing')}>
                {currentLang === 'pt' ? 'MENSALIDADES' : currentLang === 'es' ? 'TARIFAS' : 'PRICING'}
              </NavLinkButton>
            </div>
          </div>

        </div>

        {/* Closing details and credit */}
        <div className="pt-10 flex flex-col lg:flex-row justify-between items-center text-[10px] uppercase font-mono text-cool-gray gap-6">
          <div className="text-center lg:text-left space-y-1">
            <p>© {currentYear} JUMP ZONE FITNESS LLC.<br className="sm:hidden" /> ALL METRIC AND CHOREOGRAPHY SIMULATIONS RESERVED.</p>
            <p className="tracking-widest">DESIGNED FOR MOVEMENT, ENGAGED FOR CONCERTS.</p>
          </div>

          {/* NexLink credit */}
          <a
            href="https://www.nexlink.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 tracking-widest font-bold text-cool-gray hover:text-energy-green transition-colors duration-150"
          >
            <span>FEITO PELA</span>
            <span className="text-energy-green">NEXLINK</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

