export const metadata = {
    title: 'Услуги Akbar Soft — профессиональная разработка и IT-решения',
    description: 'Ознакомьтесь с услугами Akbar Soft. Мы предлагаем качественные IT-решения и веб-разработку.',
    keywords: 'Akbar Soft, услуги, разработка, Web, IT, веб сайт, веб-разработка, Бухара, Bukhara',
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
        title: 'Услуги Akbar Soft',
        description: 'Профессиональные IT-решения и веб-разработка от Akbar Soft. Свяжитесь с нами сегодня!',
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
};