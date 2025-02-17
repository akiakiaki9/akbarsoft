"use client"
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Faq from './Faq'
import FaqComp from './FaqComp'

export default function page() {
    return (
        <div>
            <Navbar />
            <div className='pagename'>
                <div className='pagename__container'>
                    <div className='pagename-blok'>
                        <h1>FAQ</h1>
                        <p>Start the conversation to established good relationship and business.</p>
                    </div>
                </div>
            </div>
            <Faq />
            <FaqComp />
            <Footer />
        </div>
    )
};