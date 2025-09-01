"use cliebt"
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import PricingPlan from './PricingPlan'
import Footer from '../components/footer/Footer'

export default function page() {
    return (
        <div>
            <Navbar />
            <PricingPlan />
            <Footer />
        </div>
    )
};