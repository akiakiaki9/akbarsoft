"use client"
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Faq from './Faq'
import FaqComp from './FaqComp'
import { useTranslation } from 'react-i18next'

export default function page() {
    const { t } = useTranslation();
    return (
        <div>
            <Navbar />
            <div className='pagename'>
                <div className='pagename__container'>
                    <div className='pagename-blok'>
                        <h1>FAQ</h1>
                        <p>{t("faq.pagename_2")}</p>
                    </div>
                </div>
            </div>
            <Faq />
            <FaqComp />
            <Footer />
        </div>
    )
};