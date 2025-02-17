import React from 'react'
import Contacts from './Contacts'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

export const metadata = {
    title: 'Контакты Akbar Soft — свяжитесь с нами сегодня',
    description: 'Свяжитесь с Akbar Soft. Задайте любые вопросы по услугам.',
    keywords: 'Akbar Soft, контакты, Web, Web Site, website, Bukhara, Бухара, веб сайт, веб',
    robots: 'index, follow',
    canonical: 'https://akbarsoft.uz/contacts',
    openGraph: {
        title: 'Контакты Akbar Soft',
        description: 'Свяжитесь с нами для получения информации о Akbar Soft. Мы ответим моментально.',
        url: 'https://akbarsoft.uz/contacts',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Контакты Akbar Soft',
        description: 'Свяжитесь с нами для получения информации о Akbar Soft. Мы ответим моментально.',
    },
};

export default function page() {
    return (
        <div>
            <Navbar />
            <div className='pagename'>
                <div className='pagename__container'>
                    <div className='pagename-blok'>
                        <h1>Contact us</h1>
                        <p>Start the conversation to established good relationship and business.</p>
                    </div>
                </div>
            </div>
            <Contacts />
            <Footer />
        </div>
    )
};