import React from 'react'
import Navbar from '../components/navbar/Navbar'
import PricingPlan from './PricingPlan'
import Footer from '../components/footer/Footer'
import Section from '../components/section/Section'

export const metadata = {
    title: 'Тарифы Akbar Soft — выберите лучший план для вашего бизнеса',
    description: 'Ознакомьтесь с тарифными планами Akbar Soft. Выберите оптимальное решение для вашего IT-проекта.',
    keywords: 'Akbar Soft, тарифы, цены, стоимость, веб-разработка, IT-услуги, pricing, plans, разработка',
    robots: 'index, follow',
    canonical: 'https://akbarsoft.uz/pricing-plan',
    openGraph: {
        title: 'Тарифные планы Akbar Soft',
        description: 'Гибкие тарифные планы Akbar Soft. Найдите подходящее решение для вашего бизнеса.',
        url: 'https://akbarsoft.uz/pricing-plan',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Тарифные планы Akbar Soft',
        description: 'Гибкие тарифные планы Akbar Soft. Найдите подходящее решение для вашего бизнеса.',
    },
};


export default function page() {
    return (
        <div>
            <Navbar />
            <PricingPlan />
            <Section />
            <Footer />
        </div>
    )
};