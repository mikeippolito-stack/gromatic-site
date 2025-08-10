import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base='https://www.gromatic.co';
  return ['', '/how-it-works','/services','/case-studies','/about','/contact','/blog'].map(r=>({
    url: base+r, lastModified: new Date(), changeFrequency:'weekly', priority: r===''?1.0:0.7
  }));
}
