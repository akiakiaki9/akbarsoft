"use client"
import Link from 'next/link'
import React from 'react'

export default function Offers() {
    const OFFERS = [
        {
            id: 1,
            image: '/images/offers/offers-1.png',
            title: "Veb-saytlar yaratish",
            subtitle: "Biznesingiz uchun tez, xavfsiz va moslashuvchan veb-saytlar yaratamiz."
        },
        {
            id: 2,
            image: '/images/offers/offers-2.png',
            title: "Xaritalarda joylashuv",
            subtitle: "Biznesingizni Google, Yandex (Taxi), 2Gis va Apple xaritalariga qo'shamiz."
        },
        {
            id: 3,
            image: '/images/offers/offers-3.png',
            title: "Instagram target",
            subtitle: "Mijozlarni jalb qilish va savdoni oshirish uchun Instagramda target reklama sozlaymiz."
        }
    ];
    return (
        <div className='offers' id='services'>
            <div className="main">
                <div className="offers-blok">
                    {OFFERS.map(item => (
                        <div className='offers-blok__section' key={item.id}>
                            <div className="offers-blok__section__absolute">
                                <img src={item.image} alt="" />
                                <Link href='/uz/'><h1>{item.title}</h1></Link>
                                <p>{item.subtitle}</p>
                                <Link href='/uz/services'><button className='grad-button'>BATAFSIL</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};