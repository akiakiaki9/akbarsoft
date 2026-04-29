"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Header() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100)
    }, [])

    return (
        <div className='header'>
            {/* Видео будет показываться на всех устройствах */}
            <video autoPlay loop muted playsInline className="header-video">
                <source src="/videos/header.mp4" type="video/mp4" />
            </video>

            <div className="header-overlay"></div>
            <div className="header-blok">
                <p className={`header__p1 ${isVisible ? 'visible' : ''}`}>
                    AKBAR SOFT
                </p>
                <h1 className={isVisible ? 'visible' : ''}>
                    Создаем интернет продукт
                </h1>
                <p className={`header__p2 ${isVisible ? 'visible' : ''}`}>
                    Помогаем бизнесу с созданием веб-сайтов, телеграм ботов и мини приложений.
                </p>
                <div className={`header-blok__container ${isVisible ? 'visible' : ''}`}>
                    <a href='#services'>
                        <button className='grad-button'>УСЛУГИ</button>
                    </a>
                    <Link href='/ru/contacts'>
                        <button className='header-blok__container__button-2'>КОНТАКТЫ</button>
                    </Link>
                </div>
            </div>

            {/* Индикатор скролла */}
            <div className="scroll-indicator">
                <div className="mouse"></div>
                <div className="arrow-down"></div>
            </div>
        </div>
    )
}