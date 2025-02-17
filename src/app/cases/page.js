import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Cases from './Cases'

export default function page() {
    return (
        <div>
            <Navbar />
            <Cases />
            <div className='cassec'>
                <div className='cassec-blok'>
                    <h1>Pioneering Digital Excellence: Discover the Digimax Advantage.</h1>
                    <p>Empowering businesses with cutting-edge technology, strategic innovation, and seamless digital solutions to drive success.
                    </p>
                    <button className='grad-button'>DISCOVER MORE</button>
                </div>
            </div>
            <Footer />
        </div>
    )
};