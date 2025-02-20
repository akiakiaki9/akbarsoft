"use client"
import React from 'react'
import Contacts from './Contacts'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import { useTranslation } from 'react-i18next'

export default function page() {
    const { t } = useTranslation();
    return (
        <div>
            <Navbar />
            <div className='pagename'>
                <div className='pagename__container'>
                    <div className='pagename-blok'>
                        <h1>{t("contacts.pagename_1")}</h1>
                        <p>{t("contacts.pagename_2")}</p>
                    </div>
                </div>
            </div>
            <Contacts />
            <Footer />
        </div>
    )
};