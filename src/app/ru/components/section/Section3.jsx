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
                            <p className='section3-blok__section-1__p1'>Наши ценности</p>
                            <h1>Надёжность, эффективность, ваш рост</h1>
                            <p className='section3-blok__section-1__p2'>Мы разрабатываем решения, которые повышают вашу конкурентоспособность и привлекают клиентов.</p>
                            <Link href='/ru/cases'><button className='grad-button'>ПРОЕКТЫ</button></Link>
                            <Link href='/ru/cases'>
                                <div className="section3__absolute-1">
                                    <HiMiniArrowTopRightOnSquare className="section3__icon-1" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="section3-blok__section-2">
                        <div className="section3-blok__section-2__container">
                            <div className="section3-blok__section-2__container-part-1">
                                <p className='section3-blok__section-2__container__p-1'>Качество</p>
                                <h1>Решения высокого уровня</h1>
                                <p className='section3-blok__section-2__container__p-2'>Мы создаём продукты, которые соответствуют самым высоким стандартам качества.</p>
                                <Link href='/ru/'>
                                    <div className="section3__absolute-2">
                                        <HiMiniArrowTopRightOnSquare className="section3__icon-2" />
                                    </div>
                                </Link>
                            </div>
                            <div className="section3-blok__section-2__container-part-2">
                                <p className='section3-blok__section-2__container__p-1'>Инновации</p>
                                <h1>Современные технологии</h1>
                                <p className='section3-blok__section-2__container__p-2'>Мы используем передовые технологии для создания эффективных решений.</p>
                                <Link href='/ru/'>
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