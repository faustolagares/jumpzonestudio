import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCanonicalUrl, DEFAULT_OG_IMAGE, seoContent, SITE_NAME, SITE_URL } from '../lib/seo';
import { Language } from '../types';

type SeoManagerProps = {
  language: Language;
  page: 'home' | 'bio' | 'buttons';
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

export default function SeoManager({ language, page }: SeoManagerProps) {
  const location = useLocation();

  useEffect(() => {
    const isIndexablePage = page !== 'buttons';
    const content = isIndexablePage ? seoContent[page][language] : {
      title: 'Jump Zone Studio | Button System',
      description: 'Internal Jump Zone Studio button system reference.',
    };
    const canonicalUrl = getCanonicalUrl(page, language);

    document.documentElement.lang = language;
    document.title = content.title;

    upsertMeta('meta[name="description"]', { name: 'description', content: content.description });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: isIndexablePage ? 'index,follow' : 'noindex,nofollow',
    });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });

    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: content.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: content.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: DEFAULT_OG_IMAGE });

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: content.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: content.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: DEFAULT_OG_IMAGE });

    if (isIndexablePage) {
      (['en', 'pt', 'es'] as Language[]).forEach((lang) => {
        const href = getCanonicalUrl(page, lang);
        upsertLink(`link[rel="alternate"][hreflang="${lang}"]`, {
          rel: 'alternate',
          hreflang: lang,
          href,
        });
      });
      upsertLink('link[rel="alternate"][hreflang="x-default"]', {
        rel: 'alternate',
        hreflang: 'x-default',
        href: `${SITE_URL}${page === 'bio' ? '/en/bio' : '/en'}`,
      });
    }
  }, [language, location.pathname, page]);

  return null;
}
