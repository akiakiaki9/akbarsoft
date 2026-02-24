"use client"
import Link from 'next/link'
import React from 'react'

export default function Offers() {
    const OFFERS = [
        {
            id: 1,
            image: '/images/offers/offers-1.png',
            title: "Разработка сайтов",
            subtitle: "Создаем быстрые, безопасные и адаптивные сайты для вашего бизнеса."
        },
        {
            id: 2,
            image: '/images/offers/offers-2.png',
            title: "Локация на картах",
            subtitle: "Добавим ваш бизнес в карты Google, Яндекс (Такси), 2Gis и Apple."
        },
        {
            id: 3,
            image: '/images/offers/offers-3.png',
            title: "Таргет в инстаграм",
            subtitle: "Настроим таргетированную рекламу в Instagram для привлечения клиентов и роста продаж."
        }
    ];
    return (
        <div className='offers'>
            <div className="main">
                <div className="offers-blok">
                    {OFFERS.map(item => (
                        <div className='offers-blok__section' key={item.id}>
                            <div className="offers-blok__section__absolute">
                                <img src={item.image} alt="" />
                                <Link href='/ru/'><h1>{item.title}</h1></Link>
                                <p>{item.subtitle}</p>
                                <Link href='/ru/services'><button className='grad-button'>УЗНАТЬ БОЛЬШЕ</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};