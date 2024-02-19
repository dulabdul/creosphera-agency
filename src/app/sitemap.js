const URL = 'https://creosphera.com';

export default async function sitemap() {
  const routes = [
    '',
    '/portofolio',
    '/tentang-kami',
    '/kontak',
    '/layanan/web-development',
    '/layanan/digital-marketing',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'always',
    priority: 0.7,
  }));

  return [...routes];
}
