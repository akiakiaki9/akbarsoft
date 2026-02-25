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
                <h1>Raqamli salohiyatingizni ro'yobga chiqaramiz</h1>
                <p className='header__p2'>
                    Natijaga erishish uchun veb-saytlar va xizmatlar yaratishda biznesga yordam beramiz.
                </p>
                <div className="header-blok__container">
                    <a href='#services'><button className='grad-button'>XIZMATLAR</button></a>
                    <Link href='/uz/contacts'><button className='header-blok__container__button-2'>KONTAKTLAR</button></Link>
                </div>
            </div>
        </div>
    )
};