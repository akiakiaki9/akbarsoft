export const metadata = {
    title: 'Что предлагает Akbar Soft?',
    description: 'Ознакомьтесь с услугами Akbar Soft. Мы предлагаем качественные веб-сайты, веб-дизайны и т.д.',
    keywords: 'Akbar Soft, услуги, разработка, Web, IT, веб сайт, веб-разработка, Бухара, Bukhara, заказать сайт, заказать веб-сайт',
    robots: 'index, follow',
    canonical: 'https://akbarsoft.uz/services',
    openGraph: {
        title: 'Услуги Akbar Soft',
        description: 'Профессиональные IT-решения и веб-разработка от Akbar Soft. Свяжитесь с нами сегодня!',
        url: 'https://akbarsoft.uz/services',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Что предлагает Akbar Soft?',
        description: 'Ознакомьтесь с услугами Akbar Soft. Мы предлагаем качественные веб-сайты, веб-дизайны и т.д.',
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
};