import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/classes',
    '/gallery',
  ]

  return routes.map((route) => ({
    url: `${siteConfig.seo.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
