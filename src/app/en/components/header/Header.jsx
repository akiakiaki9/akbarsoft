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
            {/* Video will be shown on all devices */}
            <video autoPlay loop muted playsInline className="header-video">
                <source src="/videos/header.mp4" type="video/mp4" />
            </video>

            <div className="header-overlay"></div>
            <div className="header-blok">
                <p className={`header__p1 ${isVisible ? 'visible' : ''}`}>
                    AKBAR SOFT
                </p>
                <h1 className={isVisible ? 'visible' : ''}>
                    We create digital products
                </h1>
                <p className={`header__p2 ${isVisible ? 'visible' : ''}`}>
                    Helping businesses with website development, Telegram bots, and mini applications.
                </p>
                <div className={`header-blok__container ${isVisible ? 'visible' : ''}`}>
                    <a href='#services'>
                        <button className='grad-button'>SERVICES</button>
                    </a>
                    <Link href='/en/contacts'>
                        <button className='header-blok__container__button-2'>CONTACTS</button>
                    </Link>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="mouse"></div>
                <div className="arrow-down"></div>
            </div>
        </div>
    )
}