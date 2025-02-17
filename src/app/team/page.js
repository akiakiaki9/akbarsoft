"use client"
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Team from '../components/team/Team'
import Section5 from '../components/section/Section5'
import Join from '../components/team/Join'

export default function page() {
    return (
        <div>
            <Navbar />
            <div className='pagename'>
                <div className='pagename__container'>
                    <div className='pagename-blok'>
                        <h1>Our Team</h1>
                        <p>Our dedicated team of creative minds and strategic thinkers.</p>
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