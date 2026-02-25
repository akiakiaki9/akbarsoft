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
                            <p className='section3-blok__section-1__p1'>Qadriyatlarimiz</p>
                            <h1>Ishonchlilik, samaradorlik, sizning o'sishingiz</h1>
                            <p className='section3-blok__section-1__p2'>Biz raqobatbardoshligingizni oshiradigan va mijozlarni jalb qiladigan yechimlarni ishlab chiqamiz.</p>
                            <Link href='/uz/cases'><button className='grad-button'>LOYIHALAR</button></Link>
                            <Link href='/uz/cases'>
                                <div className="section3__absolute-1">
                                    <HiMiniArrowTopRightOnSquare className="section3__icon-1" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="section3-blok__section-2">
                        <div className="section3-blok__section-2__container">
                            <div className="section3-blok__section-2__container-part-1">
                                <p className='section3-blok__section-2__container__p-1'>Sifat</p>
                                <h1>Yuqori darajadagi yechimlar</h1>
                                <p className='section3-blok__section-2__container__p-2'>Biz eng yuqori sifat standartlariga javob beradigan mahsulotlarni yaratamiz.</p>
                                <Link href='/uz/'>
                                    <div className="section3__absolute-2">
                                        <HiMiniArrowTopRightOnSquare className="section3__icon-2" />
                                    </div>
                                </Link>
                            </div>
                            <div className="section3-blok__section-2__container-part-2">
                                <p className='section3-blok__section-2__container__p-1'>Innovatsiya</p>
                                <h1>Zamonaviy texnologiyalar</h1>
                                <p className='section3-blok__section-2__container__p-2'>Samarali yechimlar yaratish uchun ilg'or texnologiyalardan foydalanamiz.</p>
                                <Link href='/uz/'>
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