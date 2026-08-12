import type { MetadataRoute } from 'next';
import { LOCALES, ROUTES, SITE_URL, type RouteKey } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(ROUTES) as RouteKey[];

  return keys.flatMap((key) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}${ROUTES[key][locale]}`,
      changeFrequency: 'monthly' as const,
      priority: key === 'home' ? 1 : key === 'standard' ? 0.9 : 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}${ROUTES[key].en}`,
          es: `${SITE_URL}${ROUTES[key].es}`,
        },
      },
    })),
  );
}
