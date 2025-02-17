"use client"
import Link from 'next/link'
import React from 'react'

export default function Section2() {
    return (
        <div className='section2'>
            <div className="main">
                <div className="section2-blok">
                    <div className="section2-blok__section">
                        <div className="section2-blok__section__image">
                            <img src="/images/section2/section2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="section2-blok__section">
                        <p className='section2-blok__section__p1'>Who we are</p>
                        <h1>Your Digital Future, Our Expertise: Akbar Soft Delivers Excellence.</h1>
                        <p className='section2-blok__section__p2'>We are a team of passionate innovators, dedicated to crafting cutting-edge digital solutions that drive success and growth.
                        </p>
                        <Link href='/about-us'><button className='grad-button'>DISCOVER MORE</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};