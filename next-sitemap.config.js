/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-project.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
