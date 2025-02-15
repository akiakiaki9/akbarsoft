'use client'
import Link from 'next/link'
import React from 'react'

export default function HeaderComp() {
    return (
        <div className="header">
            <img
                src="/header/videobg.gif" alt="Akbar Soft Animation" />
            <div className="header__effects"></div>
            <div className="header__content">
                <div className="header__content__section-1">
                    <h1>Akbar Soft</h1>
                    <p className='header__p1'>Ваш путь к цифровому совершенству!</p>
                    <p className='header__p2'>Современная фриланс команда, которая предлагает корпоративные веб-сайты для вашего бизнеса.
                        Мы специализируемся на разработке веб-сайтов, а также создании
                        программного обеспечения, адаптированного под ваши уникальные задачи.
                    </p>
                </div>
                <div className="header__content__section-2">
                    <Link href="/projects"><button className='header__button-1'>Работы</button></Link>
                    <Link href="/contacts"><button className='header__button-2'>Контакты</button></Link>
                </div>
            </div>
        </div>
    )
};