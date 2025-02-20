"use client"
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t } = useTranslation();
    return (
        <div className='header'>
            <video autoPlay loop muted playsInline>
                <source src="/videos/header.mp4" type="video/mp4" />
            </video>
            <div className="header-blok">
                <p className='header__p1'>{t("header.1")}</p>
                <h1>{t("header.2")}</h1>
                <p className='header__p2'>
                    {t("header.3")}
                </p>
                <div className="header-blok__container">
                    <button className='grad-button'>{t("header.4")}</button>
                    <Link href='/en/about-us'><button className='header-blok__container__button-2'>{t("header.5")}</button></Link>
                </div>
            </div>
        </div>
    )
};