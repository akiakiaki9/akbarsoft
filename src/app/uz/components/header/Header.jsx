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
            {/* Video barcha qurilmalarda ko'rsatiladi */}
            <video autoPlay loop muted playsInline className="header-video">
                <source src="/videos/header.mp4" type="video/mp4" />
            </video>

            <div className="header-overlay"></div>
            <div className="header-blok">
                <p className={`header__p1 ${isVisible ? 'visible' : ''}`}>
                    AKBAR SOFT
                </p>
                <h1 className={isVisible ? 'visible' : ''}>
                    Internet mahsulot yaratamiz
                </h1>
                <p className={`header__p2 ${isVisible ? 'visible' : ''}`}>
                    Biznesga veb-saytlar, Telegram botlar va mini ilovalar yaratishda yordam beramiz.
                </p>
                <div className={`header-blok__container ${isVisible ? 'visible' : ''}`}>
                    <a href='#services'>
                        <button className='grad-button'>XIZMATLAR</button>
                    </a>
                    <Link href='/uz/contacts'>
                        <button className='header-blok__container__button-2'>KONTAKTLAR</button>
                    </Link>
                </div>
            </div>

            {/* Skroll indikatori */}
            <div className="scroll-indicator">
                <div className="mouse"></div>
                <div className="arrow-down"></div>
            </div>
        </div>
    )
}