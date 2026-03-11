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
                <h1>Создаем интернет продукт</h1>
                <p className='header__p2'>
                    Помогаем бизнесу с созданием веб-сайтов, телеграм ботов и мини приложений.
                </p>
                <div className="header-blok__container">
                    <a href='#services'><button className='grad-button'>УСЛУГИ</button></a>
                    <Link href='/ru/contacts'><button className='header-blok__container__button-2'>КОНТАКТЫ</button></Link>
                </div>
            </div>
        </div>
    )
};