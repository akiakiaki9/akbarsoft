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
                <h1>Реализуем ваш цифровой потенциал</h1>
                <p className='header__p2'>
                    Помогаем бизнесу с созданием веб-сайтов и сервисов, которые работают на результат.
                </p>
                <div className="header-blok__container">
                    <Link href='/ru/services'><button className='grad-button'>УСЛУГИ</button></Link>
                    <Link href='/ru/contacts'><button className='header-blok__container__button-2'>КОНТАКТЫ</button></Link>
                </div>
            </div>
        </div>
    )
};