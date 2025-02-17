"use client"
import React from 'react'
import Services from './Services'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Offers from '../components/offers/Offers'
import Section5 from '../components/section/Section5'
import Section4 from '../components/section/Section4'

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


export default function page() {
    return (
        <div>
            <Navbar />
            <div className='pagename'>
                <div className='pagename__container'>
                    <div className='pagename-blok'>
                        <h1>Services</h1>
                        <p>Beyond Pixels, Beyond Expectations: Digimax, Where Ideas Soar.</p>
                    </div>
                </div>
            </div>
            <Services />
            <Offers />
            <Section5 />
            <Section4 />
            <Footer />
        </div>
    )
};