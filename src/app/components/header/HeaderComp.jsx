'use client'
import React from 'react'

export default function HeaderComp() {
    return (
        <div className="header">
            <img
                src="/header/videobg.gif" />
            <div className="header__effects"></div>
            <div className="header__content">
                <div className="header__content__section-1">
                    <h1>Akbar Soft</h1>
                    <p className='header__p1'>Ваш путь к цифровому совершенству!</p>
                    <p className='header__p2'>Современная фриланс-компания, которая предлагает инновационные IT-решения для вашего бизнеса.
                        Мы специализируемся на разработке веб-сайтов, а также создании
                        программного обеспечения, адаптированного под ваши уникальные задачи.
                    </p>
                </div>
                <div className="header__content__section-2">
                    <a href="#services"><button className='header__button-1'>Услуги</button></a>
                    <button className='header__button-2'>Контакты</button>
                </div>
            </div>
        </div>
    )
};