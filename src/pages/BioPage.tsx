import {
  CalendarDays,
  Clock3,
  Facebook,
  Globe,
  Instagram,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Users,
  Youtube,
} from 'lucide-react';
import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { IconButton, JumpButton } from '../components/Buttons';
import SeoManager from '../components/SeoManager';
import { HERO_BACKGROUND_SRC, JUMP_ZONE_LOGO_SRC } from '../lib/assets';
import { optimizedSrc, optimizedSrcSet } from '../lib/img';
import { getBrowserLanguage, supportedLanguages } from '../lib/language';
import { Language } from '../types';

const INSTAGRAM_URL = 'https://www.instagram.com/jumpzonestudio';
const WEBSITE_URL = '/';
const WHATSAPP_URL = 'https://wa.me/19735555867';
const PHONE_URL = 'tel:+19735555867';
const DIRECTIONS_URL = 'https://www.google.com/maps/search/?api=1&query=122%20Mulberry%20St%2C%20Newark%2C%20NJ%2007102';

type BioLink = {
  label: string;
  url: string;
  variant: 'primary' | 'secondary';
  icon: ReactNode;
};

const bioContent: Record<Language, {
  subtitle: string;
  footer: string;
  links: BioLink[];
}> = {
  en: {
    subtitle: 'High-energy trampoline fitness in Newark, NJ.',
    footer: 'Move. Connect. Level up.',
    links: [
      { label: 'BOOK YOUR JUMP', url: INSTAGRAM_URL, variant: 'primary', icon: <CalendarDays className="w-4 h-4" /> },
      { label: 'VIEW SCHEDULE', url: INSTAGRAM_URL, variant: 'secondary', icon: <Clock3 className="w-4 h-4" /> },
      { label: 'MEMBERSHIPS', url: INSTAGRAM_URL, variant: 'secondary', icon: <Users className="w-4 h-4" /> },
      { label: 'WEBSITE', url: WEBSITE_URL, variant: 'secondary', icon: <Globe className="w-4 h-4" /> },
      { label: 'WHATSAPP', url: WHATSAPP_URL, variant: 'secondary', icon: <MessageCircle className="w-4 h-4" /> },
      { label: 'CALL NOW', url: PHONE_URL, variant: 'secondary', icon: <Phone className="w-4 h-4" /> },
      { label: 'GET DIRECTIONS', url: DIRECTIONS_URL, variant: 'secondary', icon: <MapPin className="w-4 h-4" /> },
    ],
  },
  es: {
    subtitle: 'Fitness de trampolín de alta energía en Newark, NJ.',
    footer: 'Muévete. Conecta. Sube de nivel.',
    links: [
      { label: 'RESERVA TU JUMP', url: INSTAGRAM_URL, variant: 'primary', icon: <CalendarDays className="w-4 h-4" /> },
      { label: 'VER HORARIOS', url: INSTAGRAM_URL, variant: 'secondary', icon: <Clock3 className="w-4 h-4" /> },
      { label: 'MEMBRESÍAS', url: INSTAGRAM_URL, variant: 'secondary', icon: <Users className="w-4 h-4" /> },
      { label: 'WEBSITE', url: WEBSITE_URL, variant: 'secondary', icon: <Globe className="w-4 h-4" /> },
      { label: 'WHATSAPP', url: WHATSAPP_URL, variant: 'secondary', icon: <MessageCircle className="w-4 h-4" /> },
      { label: 'LLAMAR AHORA', url: PHONE_URL, variant: 'secondary', icon: <Phone className="w-4 h-4" /> },
      { label: 'CÓMO LLEGAR', url: DIRECTIONS_URL, variant: 'secondary', icon: <MapPin className="w-4 h-4" /> },
    ],
  },
  pt: {
    subtitle: 'Treino de trampolim de alta energia em Newark, NJ.',
    footer: 'Mova. Conecte. Suba de nível.',
    links: [
      { label: 'RESERVAR JUMP', url: INSTAGRAM_URL, variant: 'primary', icon: <CalendarDays className="w-4 h-4" /> },
      { label: 'VER HORÁRIOS', url: INSTAGRAM_URL, variant: 'secondary', icon: <Clock3 className="w-4 h-4" /> },
      { label: 'PLANOS', url: INSTAGRAM_URL, variant: 'secondary', icon: <Users className="w-4 h-4" /> },
      { label: 'WEBSITE', url: WEBSITE_URL, variant: 'secondary', icon: <Globe className="w-4 h-4" /> },
      { label: 'WHATSAPP', url: WHATSAPP_URL, variant: 'secondary', icon: <MessageCircle className="w-4 h-4" /> },
      { label: 'LIGAR AGORA', url: PHONE_URL, variant: 'secondary', icon: <Phone className="w-4 h-4" /> },
      { label: 'COMO CHEGAR', url: DIRECTIONS_URL, variant: 'secondary', icon: <MapPin className="w-4 h-4" /> },
    ],
  },
};

const socialLinks = [
  { label: 'Instagram', icon: <Instagram className="w-5 h-5" /> },
  { label: 'TikTok', icon: <Music2 className="w-5 h-5" /> },
  { label: 'Facebook', icon: <Facebook className="w-5 h-5" /> },
  { label: 'YouTube', icon: <Youtube className="w-5 h-5" /> },
];

export default function BioPage({ initialLanguage }: { initialLanguage?: Language }) {
  const [currentLang, setCurrentLang] = useState<Language>(() => initialLanguage ?? getBrowserLanguage());
  const content = bioContent[currentLang];

  const openUrl = (url: string) => {
    window.location.href = url;
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-energy-green selection:text-deep-black font-sans antialiased">
      <SeoManager language={currentLang} page="bio" />
      <style>
        {`
          @keyframes bioCoverIn {
            from { opacity: 0; transform: scale(1.04); }
            to { opacity: 1; transform: scale(1); }
          }

          @keyframes bioAvatarIn {
            from { opacity: 0; transform: translateY(10px) scale(0.9); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }

          @keyframes bioRiseIn {
            from { opacity: 0; transform: translateY(14px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .bio-cover-in {
            animation: bioCoverIn 620ms cubic-bezier(0.23, 1, 0.32, 1) both;
          }

          .bio-avatar-in {
            animation: bioAvatarIn 520ms cubic-bezier(0.23, 1, 0.32, 1) 80ms both;
          }

          .bio-rise-in {
            animation: bioRiseIn 420ms cubic-bezier(0.23, 1, 0.32, 1) var(--bio-delay, 0ms) both;
          }

          @media (prefers-reduced-motion: reduce) {
            .bio-cover-in,
            .bio-avatar-in,
            .bio-rise-in {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}
      </style>
      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#050505] shadow-[0_0_80px_rgba(0,0,0,0.55)]">
        <section
          className="bio-cover-in relative h-[238px] overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(5,5,5,0.08) 0%, rgba(5,5,5,0.24) 48%, #050505 100%), url("${HERO_BACKGROUND_SRC}")`,
            backgroundPosition: '52% center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_85%,rgba(168,255,0,0.22),transparent_30%)]" />
          <div className="absolute left-0 right-0 bottom-0 h-28 bg-linear-to-t from-[#050505] via-[#050505]/80 to-transparent" />
          <div className="bio-rise-in absolute right-4 top-4 z-10 flex items-center bg-black/45 p-0.5 rounded-full border border-white/8 backdrop-blur-md" style={{ '--bio-delay': '80ms' } as CSSProperties}>
            <div className="pl-2 pr-1 text-steel-gray">
              <Globe className="w-3.5 h-3.5" />
            </div>
            <div className="flex space-x-0.5">
              {supportedLanguages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setCurrentLang(lang.code)}
                  className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full transition-colors duration-150 ${
                    currentLang === lang.code
                      ? 'bg-energy-green text-deep-black'
                      : 'text-steel-gray hover:text-white'
                  }`}
                  aria-pressed={currentLang === lang.code}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="relative -mt-16 px-5 pb-8">
          <div className="bio-avatar-in mx-auto mb-7 flex h-32 w-32 items-center justify-center rounded-full border border-energy-green bg-black p-2.5 shadow-[0_0_34px_rgba(168,255,0,0.36)]">
            <img
              src={optimizedSrc(JUMP_ZONE_LOGO_SRC, 256)}
              srcSet={optimizedSrcSet(JUMP_ZONE_LOGO_SRC, 256)}
              alt="Jump Zone Studio"
              className="h-auto w-full object-contain"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="bio-rise-in mb-7 text-center" style={{ '--bio-delay': '130ms' } as CSSProperties}>
            <p className="mb-2 font-mono text-[10px] font-bold tracking-[0.32em] text-energy-green uppercase">
              Newark, NJ
            </p>
            <div className="-space-y-1">
              <h1 className="font-display text-6xl font-black leading-none tracking-tight text-white uppercase italic -skew-x-3">
                Jump Zone
              </h1>
              <p className="font-sans text-[11px] font-black leading-none tracking-[0.48em] text-white/60 uppercase">
                Studio
              </p>
            </div>
            <p className="mt-3 text-sm font-medium leading-relaxed text-steel-gray">
              {content.subtitle}
            </p>
          </div>

          <div className="mb-7 flex items-center justify-center gap-3">
            {socialLinks.map((item, index) => (
              <div
                key={item.label}
                className="bio-rise-in"
                style={{ '--bio-delay': `${190 + index * 40}ms` } as CSSProperties}
              >
                <IconButton
                  icon={item.icon}
                  variant="dark"
                  onClick={() => openUrl(INSTAGRAM_URL)}
                  aria-label={item.label}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {content.links.map((item, index) => (
              <div
                key={item.label}
                className="bio-rise-in"
                style={{ '--bio-delay': `${280 + index * 55}ms` } as CSSProperties}
              >
                <JumpButton
                  variant={item.variant}
                  fullWidth
                  iconType="arrow"
                  onClick={() => openUrl(item.url)}
                  aria-label={item.label}
                >
                  <span className="inline-flex items-center justify-center gap-3">
                    {item.icon}
                    {item.label}
                  </span>
                </JumpButton>
              </div>
            ))}
          </div>

          <p
            style={{ '--bio-delay': '720ms' } as CSSProperties}
            className="bio-rise-in mx-auto mt-8 max-w-[18rem] text-center font-mono text-[10px] leading-relaxed tracking-[0.16em] text-white/35 uppercase"
          >
            {content.footer}
          </p>

          <a
            href="https://www.nexlink.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ '--bio-delay': '780ms' } as CSSProperties}
            className="bio-rise-in mt-6 flex items-center justify-center gap-1.5 font-mono text-[10px] font-bold tracking-[0.18em] text-cool-gray uppercase transition-colors duration-150 hover:text-energy-green"
          >
            <span>Made by</span>
            <span className="text-energy-green">NexLink</span>
          </a>
        </section>
      </div>
    </main>
  );
}
