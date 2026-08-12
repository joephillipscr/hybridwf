import type { MetadataRoute } from 'next';
import { SITE_NAME, SITE_SHORT } from '@/lib/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT,
    start_url: '/',
    display: 'standalone',
    background_color: '#0c0814',
    theme_color: '#9333ea',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
