import { useState } from 'react';
import { HERO_BACKGROUND_SRC, JUMP_ZONE_LOGO_SRC } from '../lib/assets';
import { getInitialLanguage, saveLanguage, supportedLanguages } from '../lib/language';
import { Language } from '../types';

const copy = {
  en: {
    eyebrow: 'JUMP ZONE STUDIO',
    title: "WE DON'T JUST JUMP",
    highlight: 'WE LEVEL UP.',
    subtitle: 'High-energy trampoline workouts.\nReal results. Strong community.\nUnforgettable experience.',
    primary: 'BOOK YOUR JUMP',
    secondary: 'VIEW CLASSES',
    features: ['High energy', 'Strong community', 'Low impact', 'All levels'],
    fastNote: 'Fast mobile test page',
    classesTitle: 'Jump styles',
    classes: ['Jump Fit', 'Jump HIIT', 'Jump Dance', 'Jump Core'],
  },
  es: {
    eyebrow: 'JUMP ZONE STUDIO',
    title: 'NO SOLO SALTAMOS',
    highlight: 'SUBIMOS DE NIVEL.',
    subtitle: 'Entrenamientos de trampolín llenos de energía.\nResultados reales. Comunidad fuerte.\nUna experiencia inolvidable.',
    primary: 'RESERVAR MI ACCESO',
    secondary: 'VER CLASES',
    features: ['Alta energía', 'Comunidad fuerte', 'Bajo impacto', 'Todos los niveles'],
    fastNote: 'Página rápida para prueba móvil',
    classesTitle: 'Estilos Jump',
    classes: ['Jump Fit', 'Jump HIIT', 'Jump Dance', 'Jump Core'],
  },
  pt: {
    eyebrow: 'JUMP ZONE STUDIO',
    title: 'NÃO É SÓ PULAR',
    highlight: 'NÓS SUBIMOS DE NÍVEL.',
    subtitle: 'Treinos de trampolim com muita energia.\nResultados reais. Comunidade forte.\nUma experiência inesquecível.',
    primary: 'GARANTIR MEU ACESSO',
    secondary: 'VER AULAS',
    features: ['Alta energia', 'Comunidade forte', 'Baixo impacto', 'Todos os níveis'],
    fastNote: 'Página rápida para teste mobile',
    classesTitle: 'Modalidades Jump',
    classes: ['Jump Fit', 'Jump HIIT', 'Jump Dance', 'Jump Core'],
  },
} satisfies Record<Language, {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  primary: string;
  secondary: string;
  features: string[];
  fastNote: string;
  classesTitle: string;
  classes: string[];
}>;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function FastHomePage() {
  const [currentLang, setCurrentLang] = useState<Language>(() => getInitialLanguage());
  const t = copy[currentLang];

  const handleLanguageChange = (language: Language) => {
    saveLanguage(language);
    setCurrentLang(language);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-energy-green selection:text-deep-black font-sans antialiased">
      <section className="relative isolate min-h-screen overflow-hidden px-4 pb-10 pt-5">
        <img
          src={HERO_BACKGROUND_SRC}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[48%_center] opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,5,5,0.62)_0%,rgba(5,5,5,0.72)_45%,#050505_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-linear-to-t from-[#050505] to-transparent" />

        <header className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <a href="/" aria-label="Jump Zone Studio home" className="relative h-14 w-36 shrink-0">
            <img
              src={JUMP_ZONE_LOGO_SRC}
              alt="Jump Zone Studio"
              fetchPriority="high"
              decoding="async"
              className="absolute left-0 top-1/2 h-20 w-auto -translate-y-1/2 object-contain"
              referrerPolicy="no-referrer"
            />
          </a>

          <div className="flex items-center rounded-full border border-white/10 bg-black/45 p-0.5 backdrop-blur-sm">
            {supportedLanguages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => handleLanguageChange(language.code)}
                className={`rounded-full px-2 py-1 font-mono text-[10px] font-black transition-colors ${
                  currentLang === language.code ? 'bg-energy-green text-deep-black' : 'text-steel-gray'
                }`}
              >
                {language.label}
              </button>
            ))}
          </div>
        </header>

        <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-5xl flex-col justify-center pt-10">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.28em] text-energy-green">
              {t.eyebrow}
            </p>
            <h1 className="font-display text-6xl font-black uppercase italic leading-[0.86] tracking-tight text-white sm:text-7xl md:text-8xl">
              {t.title}
              <span className="block text-energy-green">{t.highlight}</span>
            </h1>
            <div className="my-6 h-[3px] w-48 rounded-full bg-linear-to-r from-energy-green to-transparent" />
            <p className="max-w-xl whitespace-pre-line text-base font-medium leading-relaxed text-white/75 sm:text-lg">
              {t.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/bio"
                className="group flex min-h-14 items-center justify-between bg-energy-green px-6 py-4 font-sans text-sm font-black uppercase italic tracking-wider text-deep-black"
                style={{ clipPath: 'polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)' }}
              >
                <span>//</span>
                <span>{t.primary}</span>
                <ArrowIcon />
              </a>
              <a
                href="#fast-classes"
                className="flex min-h-14 items-center justify-between border border-white/10 bg-white/5 px-6 py-4 font-sans text-sm font-black uppercase italic tracking-wider text-white"
                style={{ clipPath: 'polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)' }}
              >
                <span>//</span>
                <span>{t.secondary}</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {t.features.map((feature) => (
              <div key={feature} className="border border-white/10 bg-black/45 p-4 backdrop-blur-sm" style={{ clipPath: 'polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)' }}>
                <p className="font-display text-lg font-black uppercase italic tracking-wide text-white">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-steel-gray">
            <PinIcon />
            <span>Newark, NJ</span>
            <span className="text-energy-green">/</span>
            <span>{t.fastNote}</span>
          </div>
        </div>
      </section>

      <section id="fast-classes" className="border-t border-white/5 bg-[#050505] px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs font-black uppercase tracking-[0.25em] text-energy-green">/// {t.classesTitle} ///</p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.classes.map((item) => (
              <div key={item} className="border border-white/10 bg-white/3 p-5" style={{ clipPath: 'polygon(14px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 14px)' }}>
                <h2 className="font-display text-2xl font-black uppercase italic tracking-wide text-white">{item}</h2>
                <div className="mt-4 h-px bg-energy-green/30" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
