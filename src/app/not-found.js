"use client"
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className='n404'>
            <video autoPlay loop muted className="n404-video">
                <source src="/videos/404.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='n404-blok'>
                <div className='n404-blok__section'>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                    <Link href='/'><button className='grad-button'>BACK HOME</button></Link>
                </div>
            </div>
        </div>
    )
};