import React from 'react'
import Navbar from '../components/navbar/Navbar'
import PricingPlan from './PricingPlan'
import Footer from '../components/footer/Footer'
import Section from '../components/section/Section'

export default function page() {
    return (
        <div>
            <Navbar />
            <PricingPlan />
            <Section />
            <Footer />
        </div>
    )
};