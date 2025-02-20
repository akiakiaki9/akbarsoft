"use client"
import React from 'react'
import Services from './Services'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Offers from '../components/offers/Offers'
import Section5 from '../components/section/Section5'
import Section4 from '../components/section/Section4'
import { useTranslation } from 'react-i18next'

export default function page() {
    const { t } = useTranslation();
    return (
        <div>
            <Navbar />
            <div className='pagename'>
                <div className='pagename__container'>
                    <div className='pagename-blok'>
                        <h1>{t("services.pagename_1")}</h1>
                        <p>{t("services.pagename_2")}</p>
                    </div>
                </div>
            </div>
            <Services />
            <Offers />
            <Section5 />
            <Section4 />
            <Footer />
        </div>
    )
};