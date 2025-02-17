"use client"
import OFFERS from '@/app/utils/offers'
import Link from 'next/link'
import React from 'react'

export default function Offers() {
    return (
        <div className='offers'>
            <div className='title'>
                <div className="title-blok">
                    <p>What we offer</p>
                    <h1>Where Strategy Meets Digital. Your Success Story Begins with Digimax.</h1>
                </div>
            </div>
            <div className="main">
                <div className="offers-blok">
                    {OFFERS.map(item => (
                        <div className='offers-blok__section' key={item.id}>
                            <div className="offers-blok__section__absolute">
                                <img src={item.image} alt="" />
                                <Link href='/'><h1>{item.title}</h1></Link>
                                <p>{item.subtitle}</p>
                                <Link href='/services'><button className='grad-button'>LEARN MORE</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};