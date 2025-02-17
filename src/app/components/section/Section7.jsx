"use client"
import Link from 'next/link'
import React from 'react'

export default function Section7() {
    return (
        <div className='section7'>
            <div className="section7-blok">
                <div className="section7-blok__container">
                    <h1>Pioneering Digital Excellence: Discover the Akbar Soft Advantage.</h1>
                    <p>At Akbar Soft, we craft innovative websites, software, and digital strategies to bring your vision to life.
                    </p>
                    <Link href='/faq'><button className='grad-button'>DISCOVER MORE</button></Link>
                </div>
            </div>
        </div>
    )
};