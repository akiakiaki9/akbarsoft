"use client"
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Cases from './Cases'
import { useTranslation } from 'react-i18next'

export default function page() {
    const { t } = useTranslation();
    return (
        <div>
            <Navbar />
            <Cases />
            <div className='cassec'>
                {/* <div className='cassec-blok'>
                    <h1>{t("cases.3")}</h1>
                    <p>{t("cases.4")}</p>
                    <button className='grad-button'>{t("cases.5")}</button>
                </div> */}
            </div>
            <Footer />
        </div>
    )
};  