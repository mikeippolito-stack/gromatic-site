import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.gromatic.co';
  return [
    '',
    '/how-it-works',
    '/services',
    '/services/google-ads',
    '/services/seo',
    '/services/ai-seo',
    '/case-studies',
    '/about',
    '/contact'
  ].map(r => ({
    url: base + r,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: r === '' ? 1.0 : 0.7
  }));
}
