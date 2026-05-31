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

export function getSavedLanguage(): Language | null {
  try {
    const savedLanguage = window.localStorage.getItem('jumpzone-language');
    return isLanguage(savedLanguage) ? savedLanguage : null;
  } catch {
    return null;
  }
}

export function getInitialLanguage(explicitLanguage?: Language): Language {
  return explicitLanguage ?? getSavedLanguage() ?? getBrowserLanguage();
}

export function saveLanguage(language: Language) {
  try {
    window.localStorage.setItem('jumpzone-language', language);
  } catch {
    // Ignore storage failures in private browsing or restricted webviews.
  }
}

export function isLanguage(value: string | undefined): value is Language {
  return value === 'en' || value === 'es' || value === 'pt';
}
