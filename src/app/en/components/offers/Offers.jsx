"use client"
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Offers() {
    const { t } = useTranslation();
    const OFFERS = [
        {
            id: 1,
            image: '/images/offers/offers-1.png',
            title: "offers.item_1",
            subtitle: "offers.item_2"
        },
        {
            id: 2,
            image: '/images/offers/offers-2.png',
            title: "offers.item_3",
            subtitle: "offers.item_4"
        },
        {
            id: 3,
            image: '/images/offers/offers-3.png',
            title: "offers.item_5",
            subtitle: "offers.item_6"
        }
    ];
    return (
        <div className='offers'>
            <div className='title'>
                <div className="title-blok">
                    <p>{t("offers.1")}</p>
                    <h1>{t("offers.2")}</h1>
                </div>
            </div>
            <div className="main">
                <div className="offers-blok">
                    {OFFERS.map(item => (
                        <div className='offers-blok__section' key={item.id}>
                            <div className="offers-blok__section__absolute">
                                <img src={item.image} alt="" />
                                <Link href='/en/'><h1>{t(item.title)}</h1></Link>
                                <p>{t(item.subtitle)}</p>
                                <Link href='/en/services'><button className='grad-button'>{t("offers.3")}</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};