/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://akbarsoft.uz/', // Замените на URL вашего сайта
    generateRobotsTxt: true, // Создаёт robots.txt автоматически
    sitemapSize: 5000, // Максимум страниц в одном sitemap-файле
    changefreq: 'daily', // Частота обновления страниц
    priority: 0.7, // Приоритет страниц по умолчанию
    exclude: ['/admin', '/private'], // Исключите страницы
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'Googlebot',
                disallow: ['/private'], // Пример настройки для конкретного бота
            },
        ],
        additionalSitemaps: [
            'https://akbarsoft.uz/sitemap-1.xml', // Укажите дополнительные карты сайта, если они есть
        ],
    },
};

module.exports = config;