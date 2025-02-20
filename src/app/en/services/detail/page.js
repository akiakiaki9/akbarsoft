"use client"

import React from 'react'
import ServicesDet from './ServicesDet'
import Navbar from '../../components/navbar/Navbar'
import Section6 from '../../components/section/Section6'
import Section7 from '../../components/section/Section7'
import Carousel from '../../components/carousel/Carousel'
import Footer from '../../components/footer/Footer'

export default function page() {
    return (
        <div>
            <Navbar />
            <ServicesDet />
            <Section6 />
            <Section7 />
            <Carousel />
            <Footer />
        </div>
    )
};