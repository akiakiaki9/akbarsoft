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
                        <p className='section2-blok__section__p1'>Кто мы</p>
                        <h1>Надёжный IT-партнёр для бизнеса!</h1>
                        <p className='section2-blok__section__p2'>Профессионалы, реализующие проекты для вашего лидерства в интернете.</p>
                        <Link href='/ru/about-us'><button className='grad-button'>УЗНАТЬ БОЛЬШЕ</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};