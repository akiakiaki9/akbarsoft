"use client"
import React from 'react'
import Section2 from '../components/section/Section2'
import Section from '../components/section/Section'
import Section3 from '../components/section/Section3'
import Section4 from '../components/section/Section4'
import Footer from '../components/footer/Footer'
import Team from '../components/team/Team'
import Navbar from '../components/navbar/Navbar'
import { useTranslation } from 'react-i18next'

export default function AboutUs() {
    const { t } = useTranslation();
    return (
        <div>
            <Navbar />
            <div className='pagename'>
                <div className='pagename__container'>
                    <div className='pagename-blok'>
                        <h1>{t("aboutus.pagename_1")}</h1>
                        <p>{t("aboutus.pagename_2")}</p>
                    </div>
                </div>
            </div>
            <Section2 />
            <Section />
            <Section3 />
            <Section4 />
            <Team />
            <Footer />
        </div>
    )
};