import React from 'react'
import Services from './Services'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Offers from '../components/offers/Offers'
import Section5 from '../components/section/Section5'
import Section4 from '../components/section/Section4'

export default function page() {
    return (
        <div>
            <Navbar />
            <div className='pagename'>
                <div className='pagename__container'>
                    <div className='pagename-blok'>
                        <h1>Services</h1>
                        <p>Beyond Pixels, Beyond Expectations: Digimax, Where Ideas Soar.</p>
                    </div>
                </div>
            </div>
            <Services />
            <Offers />
            <Section5 />
            <Section4 />
            <Footer />
        </div>
    )
};