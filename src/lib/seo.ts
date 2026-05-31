import { HERO_BACKGROUND_SRC } from './assets';
import { Language } from '../types';

export const SITE_URL = 'https://jumpzonestudio.com';
export const SITE_NAME = 'Jump Zone Studio';
export const DEFAULT_OG_IMAGE = HERO_BACKGROUND_SRC;

type SeoPage = 'home' | 'bio' | 'buttons';

type SeoEntry = {
  title: string;
  description: string;
};

export const seoContent: Record<Exclude<SeoPage, 'buttons'>, Record<Language, SeoEntry>> = {
  home: {
    en: {
      title: 'Jump Zone Studio | New Fitness Experience in Newark, NJ',
      description:
        'Discover Jump Zone Studio, a new high-energy trampoline fitness experience in Newark, NJ. Book your jump, view schedules, memberships, and contact the studio.',
    },
    pt: {
      title: 'Jump Zone Studio | Nova Experiência Fitness em Newark, NJ',
      description:
        'Conheça o Jump Zone Studio, uma nova experiência fitness de trampolim de alta energia em Newark, NJ. Reserve seu jump, veja horários, planos e fale com o estúdio.',
    },
    es: {
      title: 'Jump Zone Studio | Nueva Experiencia Fitness en Newark, NJ',
      description:
        'Conoce Jump Zone Studio, una nueva experiencia fitness de trampolín de alta energía en Newark, NJ. Reserva tu jump, consulta horarios, membresías y contacta al estudio.',
    },
  },
  bio: {
    en: {
      title: 'Jump Zone Studio | Bio',
      description:
        'Jump Zone Studio bio links for booking, schedules, memberships, WhatsApp, directions, and studio contact information in Newark, NJ.',
    },
    pt: {
      title: 'Jump Zone Studio | Bio',
      description:
        'Links da bio do Jump Zone Studio para reservas, horários, planos, WhatsApp, localização e contato do estúdio em Newark, NJ.',
    },
    es: {
      title: 'Jump Zone Studio | Bio',
      description:
        'Links de la bio de Jump Zone Studio para reservas, horarios, membresías, WhatsApp, ubicación y contacto del estudio en Newark, NJ.',
    },
  },
};

export function getCanonicalPath(page: SeoPage, language: Language): string {
  if (page === 'buttons') {
    return '/buttons';
  }

  if (page === 'home') {
    return `/${language}`;
  }

  return `/${language}/bio`;
}

export function getCanonicalUrl(page: SeoPage, language: Language): string {
  return `${SITE_URL}${getCanonicalPath(page, language)}`;
}
