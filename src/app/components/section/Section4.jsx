"use client"
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function Section4() {
    const { ref, inView } = useInView({
        triggerOnce: true, // срабатывает один раз
        threshold: 0.5, // когда 50% элемента появляется в поле зрения
    })

    return (
        <div className='section4'>
            <div className="section4-blok">
                <div className="section4-blok__section section4-blok__section-border" ref={ref}>
                    {inView && (
                        <p className='section4-blok__section__p-1'>
                            <CountUp start={0} end={5} duration={5} />+
                        </p>
                    )}
                    <p className='section4-blok__section__p-2'>Project Done</p>
                </div>
                <div className="section4-blok__section section4-blok__section-border section4-blok__section-border-2" ref={ref}>
                    {inView && (
                        <p className='section4-blok__section__p-1'>
                            <CountUp start={0} end={10} duration={5} />+
                        </p>
                    )}
                    <p className='section4-blok__section__p-2'>Happy Client</p>
                </div>
                <div className="section4-blok__section section4-blok__section-border section4-blok__section-border-3" ref={ref}>
                    {inView && (
                        <p className='section4-blok__section__p-1'>
                            <CountUp start={0} end={5} duration={5} />
                        </p>
                    )}
                    <p className='section4-blok__section__p-2'>Client Ratings</p>
                </div>
                <div className="section4-blok__section" ref={ref}>
                    {inView && (
                        <p className='section4-blok__section__p-1'>
                            <CountUp start={0} end={5} duration={5} />+
                        </p>
                    )}
                    <p className='section4-blok__section__p-2'>Award Winning</p>
                </div>
            </div>
        </div>
    )
}
