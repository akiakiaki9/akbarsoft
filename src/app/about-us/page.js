"use client"
import React from 'react'
import Section2 from '../components/section/Section2'
import Section from '../components/section/Section'
import Section3 from '../components/section/Section3'
import Section4 from '../components/section/Section4'
import Footer from '../components/footer/Footer'
import Team from '../components/team/Team'
import Navbar from '../components/navbar/Navbar'

export default function AboutUs() {
    return (
        <div>
            <Navbar />
            <div className='pagename'>
                <div className='pagename__container'>
                    <div className='pagename-blok'>
                        <h1>About us</h1>
                        <p>Your Digital Journey Starts Here: Dive into Akbar Soft Expertise.</p>
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