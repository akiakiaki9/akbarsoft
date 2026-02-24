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
                        <h1>Свяжитесь с нами</h1>
                        <p>Начните общение для установления хороших отношений и бизнеса</p>
                    </div>
                </div>
            </div>
            <Contacts />
            <Footer />
        </div>
    )
};