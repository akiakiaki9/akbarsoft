"use client"
import Link from 'next/link'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2'

export default function Services() {
    return (
        <div className='services'>
            <div className="main">
                <div className="services-blok">
                    <div className="servicedet-2-blok__section-1">
                        <h1 className='services-blok__section-1__h1'>Pioneering Digital Excellence: Discover the Digimax Advantage</h1>
                        <p className='services-2-blok__section__p-1'>
                        At Akbar Soft, we craft innovative websites, software, and digital strategies to bring your vision to life.
                        </p>
                        <div className="servicedet-2-blok__section-1__container">
                            <div className="servicedet-2-blok__section-1__container-part">
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>Expertise in Digital Solutions</p>
                                </div>
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>Innovative Design Approach</p>
                                </div>
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>Result-Driven Digital Marketing</p>
                                </div>
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>AI-Powered Insights</p>
                                </div>
                            </div>
                            <div className="servicedet-2-blok__section-1__container-part">
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>Robust Cybersecurity Solutions</p>
                                </div>
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>Tailored Digital Strategy</p>
                                </div>
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>Responsive & Scalable</p>
                                </div>
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>Proven Track Record</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-2-blok__section-1">
                        <img src="/images/services/services.jpg" alt="" />
                        <Link href='/'>
                            <div className="section3__absolute-1">
                                <HiMiniArrowTopRightOnSquare className="section3__icon-1" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};