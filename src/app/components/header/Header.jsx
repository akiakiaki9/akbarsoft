"use client"
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='header'>
            <video autoPlay loop muted playsInline>
                <source src="/videos/header.mp4" type="video/mp4" />
            </video>
            <div className="header-blok">
                <p className='header__p1'>Welcome to Akbar's</p>
                <h1>Your Path to Digital Excellence Akbar Soft</h1>
                <p className='header__p2'>
                    Empowering businesses with cutting-edge technology, innovative solutions, and seamless digital experiences. Let’s shape the future together.
                </p>
                <div className="header-blok__container">
                    <button className='grad-button'>GET STARTED</button>
                    <Link href='/about-us'><button className='header-blok__container__button-2'>LEARN MORE</button></Link>
                </div>
            </div>
        </div>
    )
};