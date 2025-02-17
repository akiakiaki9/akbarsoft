"use client"
import React from 'react'
import { FaCheck } from "react-icons/fa";

export default function ServicesDet() {
    return (
        <div>
            <div className='servicedet-1'>
                <div className="servicedet-1-blok">
                    <div className="servicedet-1-blok__section servicedet-1-blok__section-1">
                        <p className='servicedet-1__p-1'>Website Development</p>
                        <h1>Delivering IT solutions that enable you to work smarter.</h1>
                        <p className='servicedet-1__p-2'>Crafting seamless, high-performance websites with intuitive design, robust functionality, and cutting-edge technology to enhance user experience and business growth.
                        </p>
                        <button className='grad-button'>DISCOVER MORE</button>
                    </div>
                    <div className="servicedet-1-blok__section servicedet-1-blok__section-2">
                        <img src="/images/servicedetail/servicedetail-1.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='servicedet-2'>
                <div className="main">
                    <div className="servicedet-2-blok">
                        <div className="servicedet-2-blok__section-1">
                            <h1>Descriptions</h1>
                            <p className='servicedet-2-blok__section__p-1'>We craft tailored digital solutions that drive innovation, efficiency, and business success. Our expertise ensures seamless user experiences, advanced security, and data-driven strategies for sustainable growth.
                            </p>
                            <p className='servicedet-2-blok__section__p-1'>We believe in delivering cutting-edge technology with a focus on scalability, responsiveness, and impactful results. Let’s build a future where your digital presence stands out and thrives.
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
                                        <p>Strategic Digital Marketing</p>
                                    </div>
                                    <div>
                                        <FaCheck className='servicedet-2__icon' />
                                        <p>Data-Driven Decisions</p>
                                    </div>
                                </div>
                                <div className="servicedet-2-blok__section-1__container-part">
                                    <div>
                                        <FaCheck className='servicedet-2__icon' />
                                        <p>Robust Security Measures</p>
                                    </div>
                                    <div>
                                        <FaCheck className='servicedet-2__icon' />
                                        <p>Tailored Digital Strategiesy</p>
                                    </div>
                                    <div>
                                        <FaCheck className='servicedet-2__icon' />
                                        <p>Scalable & Responsive Solutions</p>
                                    </div>
                                    <div>
                                        <FaCheck className='servicedet-2__icon' />
                                        <p>Proven Success & Reliability</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="servicedet-2-blok__section-2">
                            <div className="servicedet-2-blok__section-2__container">
                                <h1>Feature</h1>
                                <div className="servicedet-2-blok__section-2__container-part">
                                    <img src="/images/servicesdet2/servicesdet2-1.png" alt="" />
                                    <p>UI/UX User Friendly</p>
                                </div>
                                <div className="servicedet-2-blok__section-2__container-part">
                                    <img src="/images/servicesdet2/servicesdet2-2.png" alt="" />
                                    <p>Focus on Target</p>
                                </div>
                                <div className="servicedet-2-blok__section-2__container-part">
                                    <img src="/images/servicesdet2/servicesdet2-3.png" alt="" />
                                    <p>Secure App</p>
                                </div>
                                <div className="servicedet-2-blok__section-2__container-part">
                                    <img src="/images/servicesdet2/servicesdet2-4.png" alt="" />
                                    <p>User Experience Flow</p>
                                </div>
                                <div className="servicedet-2-blok__section-2__container-part">
                                    <img src="/images/servicesdet2/servicesdet2-5.png" alt="" />
                                    <p>Awesome Graphics Design</p>
                                </div>
                            </div>
                            <button className='grad-button'>Download Brochure</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};