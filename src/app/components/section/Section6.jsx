"use client"
import Link from 'next/link'
import React from 'react'

export default function Section6() {
    return (
        <div className='section6'>
            <div className='title'>
                <div className="title-blok">
                    <p>How it Works</p>
                    <h1>Unlock Astonishing Results with Just 3 Simple Steps!</h1>
                </div>
            </div>
            <div className="main">
                <div className="section6-blok">
                    <div className='section6-blok__section'>
                        <div className="section6-blok__section__image">
                            <img src="/images/section6/section6-1.png" alt="" />
                        </div>
                        <Link href='/contacts'><h1>Free Consultations</h1></Link>
                        <p>Let's discuss your ideas, goals, and vision to create the perfect strategy for your project.</p>
                        <Link href='/contacts'><button className='grad-button'>Chat Now</button></Link>
                    </div>
                    <div className='section6-blok__section'>
                        <div className="section6-blok__section__image">
                            <img src="/images/section6/section6-2.png" alt="" />
                        </div>
                        <Link href='/cases'><h1>Discover the product</h1></Link>
                        <p>We analyze your needs and present the best digital solutions tailored to your business.</p>
                        <Link href='/cases'><button className='grad-button'>Learn more</button></Link>
                    </div>
                    <div className='section6-blok__section'>
                        <div className="section6-blok__section__image">
                            <img src="/images/section6/section6-4.png" alt="" />
                        </div>
                        <Link href='/cases'><h1>Prototype Application</h1></Link>
                        <p>Our team brings your vision to life, ensuring functionality, aesthetics, and top-notch performance.</p>
                        <Link href='/cases'><button className='grad-button'>Report</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};