import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://profpol.online',
      lastModified: new Date(),
    }
  ]
}