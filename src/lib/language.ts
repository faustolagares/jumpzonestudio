import { Language } from '../types';

export const supportedLanguages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
];

export function getBrowserLanguage(): Language {
  const language = navigator.language.toLowerCase();

  if (language.startsWith('pt')) {
    return 'pt';
  }

  if (language.startsWith('es')) {
    return 'es';
  }

  return 'en';
}

export function isLanguage(value: string | undefined): value is Language {
  return value === 'en' || value === 'es' || value === 'pt';
}
