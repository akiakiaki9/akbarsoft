"use client"
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Team from '../components/team/Team'
import Section5 from '../components/section/Section5'
import Join from '../components/team/Join'
import { useTranslation } from 'react-i18next'

export default function page() {
    const { t } = useTranslation();
    return (
        <div>
            <Navbar />
            <div className='pagename'>
                <div className='pagename__container'>
                    <div className='pagename-blok'>
                        <h1>{t("team.pagename_1")}</h1>
                        <p>{t("team.pagename_2")}</p>
                    </div>
                </div>
            </div>
            <Team />
            <Section5 />
            <Join />
            <Footer />
        </div>
    )
};