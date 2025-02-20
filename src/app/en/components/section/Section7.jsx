"use client"
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Section7() {
    const { t } = useTranslation();
    return (
        <div className='section7'>
            <div className="section7-blok">
                <div className="section7-blok__container">
                    <h1>{t("section7.1")}</h1>
                    <p>{t("section7.2")}</p>
                    <Link href='/en/faq'><button className='grad-button'>{t("section7.3")}</button></Link>
                </div>
            </div>
        </div>
    )
};