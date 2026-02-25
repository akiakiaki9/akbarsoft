"use client"
import React from 'react'
import Contacts from './Contacts'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

export default function page() {
    return (
        <div>
            <Navbar />
            <div className='pagename'>
                <div className='pagename__container'>
                    <div className='pagename-blok'>
                        <h1>Biz bilan bog'laning</h1>
                        <p>Yaxshi munosabatlar va biznes uchun muloqotni boshlang</p>
                    </div>
                </div>
            </div>
            <Contacts />
            <Footer />
        </div>
    )
};