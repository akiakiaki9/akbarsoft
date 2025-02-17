"use client"
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Cases from './Cases'

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


export default function page() {
    return (
        <div>
            <Navbar />
            <Cases />
            <div className='cassec'>
                <div className='cassec-blok'>
                    <h1>Pioneering Digital Excellence: Discover the Digimax Advantage.</h1>
                    <p>Empowering businesses with cutting-edge technology, strategic innovation, and seamless digital solutions to drive success.
                    </p>
                    <button className='grad-button'>DISCOVER MORE</button>
                </div>
            </div>
            <Footer />
        </div>
    )
};