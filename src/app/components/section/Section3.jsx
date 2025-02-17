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
                            <p className='section3-blok__section-1__p1'>OUr Value</p>
                            <h1>Smart Designs, Sharp Results - Choose Akbar Soft for Digital Excellence.</h1>
                            <p className='section3-blok__section-1__p2'>We create innovative, user-friendly, and high-performance digital solutions tailored to your success.
                            </p>
                            <Link href='/cases'><button className='grad-button'>LEARN MORE</button></Link>
                            <Link href='/cases'>
                                <div className="section3__absolute-1">
                                    <HiMiniArrowTopRightOnSquare className="section3__icon-1" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="section3-blok__section-2">
                        <div className="section3-blok__section-2__container">
                            <div className="section3-blok__section-2__container-part-1">
                                <p className='section3-blok__section-2__container__p-1'>Our Vision</p>
                                <h1>Elevate Your Digital Presence with Akbar Soft Expertise.</h1>
                                <p className='section3-blok__section-2__container__p-2'>We strive to innovate, empower businesses, and deliver cutting-edge digital solutions for lasting success.
                                </p>
                                <Link href='/'>
                                    <div className="section3__absolute-2">
                                        <HiMiniArrowTopRightOnSquare className="section3__icon-2" />
                                    </div>
                                </Link>
                            </div>
                            <div className="section3-blok__section-2__container-part-2">
                                <p className='section3-blok__section-2__container__p-1'>Our Mission</p>
                                <h1>Unleash Your Potential in the Digital Realm with Akbar Soft.</h1>
                                <p className='section3-blok__section-2__container__p-2'>We craft innovative solutions, drive digital growth, and empower businesses to thrive in a competitive landscape.
                                </p>
                                <Link href='/'>
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