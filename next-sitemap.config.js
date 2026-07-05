/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ziweidoushucalculator.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/*',
      },
    ],
  },
};
