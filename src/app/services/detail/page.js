"use client"
import Navbar from '@/app/components/navbar/Navbar'
import React from 'react'
import ServicesDet from './ServicesDet'
import Footer from '@/app/components/footer/Footer'
import Section6 from '@/app/components/section/Section6'
import Section7 from '@/app/components/section/Section7'
import Carousel from '@/app/components/carousel/Carousel'

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