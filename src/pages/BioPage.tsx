import {
  CalendarDays,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Music2,
  Phone,
  Users,
  Youtube,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import { IconButton, JumpButton } from '../components/Buttons';
import { HERO_BACKGROUND_SRC, JUMP_ZONE_LOGO_SRC } from '../lib/assets';
import { optimizedSrc, optimizedSrcSet } from '../lib/img';

const INSTAGRAM_URL = 'https://www.instagram.com/jumpzonestudio';

const bioLinks = [
  { label: 'BOOK YOUR JUMP', variant: 'primary' as const, icon: <CalendarDays className="w-4 h-4" /> },
  { label: 'VIEW SCHEDULE', variant: 'secondary' as const, icon: <Clock3 className="w-4 h-4" /> },
  { label: 'MEMBERSHIPS', variant: 'secondary' as const, icon: <Users className="w-4 h-4" /> },
  { label: 'INSTAGRAM', variant: 'secondary' as const, icon: <Instagram className="w-4 h-4" /> },
  { label: 'TIKTOK', variant: 'secondary' as const, icon: <Music2 className="w-4 h-4" /> },
  { label: 'CALL NOW', variant: 'secondary' as const, icon: <Phone className="w-4 h-4" /> },
  { label: 'GET DIRECTIONS', variant: 'secondary' as const, icon: <MapPin className="w-4 h-4" /> },
];

const socialLinks = [
  { label: 'Instagram', icon: <Instagram className="w-5 h-5" /> },
  { label: 'TikTok', icon: <Music2 className="w-5 h-5" /> },
  { label: 'Facebook', icon: <Facebook className="w-5 h-5" /> },
  { label: 'YouTube', icon: <Youtube className="w-5 h-5" /> },
];

export default function BioPage() {
  const openInstagram = () => {
    window.location.href = INSTAGRAM_URL;
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-energy-green selection:text-deep-black font-sans antialiased">
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
              High-energy trampoline fitness in Newark, NJ.
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
                  variant={item.label === 'Instagram' ? 'green' : 'dark'}
                  onClick={openInstagram}
                  aria-label={item.label}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {bioLinks.map((item, index) => (
              <div
                key={item.label}
                className="bio-rise-in"
                style={{ '--bio-delay': `${280 + index * 55}ms` } as CSSProperties}
              >
                <JumpButton
                  variant={item.variant}
                  fullWidth
                  iconType="arrow"
                  onClick={openInstagram}
                  aria-label={`${item.label} - opens Instagram`}
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
            Move. Connect. Level up.
          </p>
        </section>
      </div>
    </main>
  );
}
