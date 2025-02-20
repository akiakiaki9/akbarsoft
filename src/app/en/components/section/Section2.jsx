"use client"
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Section2() {
    const { t } = useTranslation();
    return (
        <div className='section2'>
            <div className="main">
                <div className="section2-blok">
                    <div className="section2-blok__section">
                        <div className="section2-blok__section__image">
                            <img src="/images/section2/section2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="section2-blok__section">
                        <p className='section2-blok__section__p1'>{t("section2.1")}</p>
                        <h1>{t("section2.2")}</h1>
                        <p className='section2-blok__section__p2'>{t("section2.3")}</p>
                        <Link href='/en/about-us'><button className='grad-button'>{t("section2.4")}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};