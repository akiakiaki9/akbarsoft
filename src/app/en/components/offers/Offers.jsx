"use client"
import Link from 'next/link'
import React from 'react'

export default function Offers() {
    const OFFERS = [
        {
            id: 1,
            image: '/images/offers/offers-1.png',
            title: "Website Development",
            subtitle: "We create fast, secure, and responsive websites for your business."
        },
        {
            id: 2,
            image: '/images/offers/offers-2.png',
            title: "Map Listings",
            subtitle: "Add your business to Google, Yandex (Taxi), 2Gis, and Apple Maps."
        },
        {
            id: 3,
            image: '/images/offers/offers-3.png',
            title: "Instagram Targeting",
            subtitle: "Set up targeted Instagram ads to attract customers and boost sales."
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
                                <Link href='/en/'><h1>{item.title}</h1></Link>
                                <p>{item.subtitle}</p>
                                <Link href='/en/services'><button className='grad-button'>LEARN MORE</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};