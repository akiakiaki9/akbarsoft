"use client"
import { SECTION_PART1, SECTION_PART2 } from '@/app/utils/section'
import React from 'react'

export default function Section() {
    return (
        <div className='section'>
            <div className="main">
                <div className="section__contaeiner">
                    <div className="section-blok">
                        <div className="section-blok__header">
                            <h1>Join over 300,000+ businesses to create unique brand designs.</h1>
                        </div>
                        <div className="section-blok__container">
                            <div className="section-blok__container-part">
                                {SECTION_PART1.map(item => (
                                    <div className="section-blok__container-part__image" key={item.id}>
                                        <img src={item.image} alt="Akbar Soft" />
                                    </div>
                                ))}
                            </div>
                            <div className="section-blok__container-part">
                                {SECTION_PART2.map(item => (
                                    <div className="section-blok__container-part__image" key={item.id}>
                                        <img src={item.image} alt="Akbar Soft" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};