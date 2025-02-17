export const metadata = {
    title: 'Кейсы Akbar Soft — успешные проекты и решения',
    description: 'Ознакомьтесь с кейсами Akbar Soft. Мы реализовали множество успешных IT-проектов.',
    keywords: 'Akbar Soft, кейсы, проекты, IT-решения, веб-разработка, успешные кейсы, программирование',
    robots: 'index, follow',
    canonical: 'https://akbarsoft.uz/cases',
    openGraph: {
        title: 'Кейсы Akbar Soft',
        description: 'Портфолио успешных IT-проектов от Akbar Soft. Посмотрите наши лучшие работы.',
        url: 'https://akbarsoft.uz/cases',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Кейсы Akbar Soft',
        description: 'Портфолио успешных IT-проектов от Akbar Soft. Посмотрите наши лучшие работы.',
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
};