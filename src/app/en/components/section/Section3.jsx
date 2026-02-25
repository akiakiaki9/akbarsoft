"use client"
import Link from 'next/link'
import React from 'react'
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

export default function Section3() {
    return (
        <div className='section3'>
            <div className="main">
                <div className="section3-blok">
                    <div className="section3-blok__section-1">
                        <div className="section3-blok__section-1__absolute">
                            <p className='section3-blok__section-1__p1'>Our Values</p>
                            <h1>Reliability, Efficiency, Your Growth</h1>
                            <p className='section3-blok__section-1__p2'>We develop solutions that enhance your competitiveness and attract customers.</p>
                            <Link href='/en/cases'><button className='grad-button'>PROJECTS</button></Link>
                            <Link href='/en/cases'>
                                <div className="section3__absolute-1">
                                    <HiMiniArrowTopRightOnSquare className="section3__icon-1" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="section3-blok__section-2">
                        <div className="section3-blok__section-2__container">
                            <div className="section3-blok__section-2__container-part-1">
                                <p className='section3-blok__section-2__container__p-1'>Quality</p>
                                <h1>High-Level Solutions</h1>
                                <p className='section3-blok__section-2__container__p-2'>We create products that meet the highest quality standards.</p>
                                <Link href='/en/'>
                                    <div className="section3__absolute-2">
                                        <HiMiniArrowTopRightOnSquare className="section3__icon-2" />
                                    </div>
                                </Link>
                            </div>
                            <div className="section3-blok__section-2__container-part-2">
                                <p className='section3-blok__section-2__container__p-1'>Innovation</p>
                                <h1>Modern Technologies</h1>
                                <p className='section3-blok__section-2__container__p-2'>We use cutting-edge technologies to create effective solutions.</p>
                                <Link href='/en/'>
                                    <div className="section3__absolute-2">
                                        <HiMiniArrowTopRightOnSquare className="section3__icon-2" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};