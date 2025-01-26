import React from 'react';
import ContactsComp from './ContactsComp';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';

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

export default function Contacts() {
    return (
        <>
            <Navbar />
            <ContactsComp />
            <Footer />
        </>
    );
}
