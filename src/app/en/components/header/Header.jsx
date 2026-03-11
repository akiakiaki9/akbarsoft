"use client"
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='header'>
            <video autoPlay loop muted playsInline>
                <source src="/videos/header.mp4" type="video/mp4" />
            </video>
            <div className="header-blok">
                <p className='header__p1'>AKBAR SOFT</p>
                <h1>Creating Digital Products</h1>
                <p className='header__p2'>
                    Helping businesses build websites, Telegram bots, and mini applications.
                </p>
                <div className="header-blok__container">
                    <a href='#services'><button className='grad-button'>SERVICES</button></a>
                    <Link href='/en/contacts'><button className='header-blok__container__button-2'>CONTACTS</button></Link>
                </div>
            </div>
        </div>
    )
};