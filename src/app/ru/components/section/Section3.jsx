"use client"
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

export default function Section3() {
    const { t } = useTranslation();
    return (
        <div className='section3'>
            <div className="main">
                <div className="section3-blok">
                    <div className="section3-blok__section-1">
                        <div className="section3-blok__section-1__absolute">
                            <p className='section3-blok__section-1__p1'>{t("section3.1")}</p>
                            <h1>{t("section3.2")}</h1>
                            <p className='section3-blok__section-1__p2'>{t("section3.3")} </p>
                            <Link href='/ru/cases'><button className='grad-button'>{t("section3.4")}</button></Link>
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
                                <p className='section3-blok__section-2__container__p-1'>{t("section3.5")}</p>
                                <h1>{t("section3.6")}</h1>
                                <p className='section3-blok__section-2__container__p-2'>{t("section3.7")}</p>
                                <Link href='/ru/'>
                                    <div className="section3__absolute-2">
                                        <HiMiniArrowTopRightOnSquare className="section3__icon-2" />
                                    </div>
                                </Link>
                            </div>
                            <div className="section3-blok__section-2__container-part-2">
                                <p className='section3-blok__section-2__container__p-1'>{t("section3.8")}</p>
                                <h1>{t("section3.9")}</h1>
                                <p className='section3-blok__section-2__container__p-2'>{t("section3.10")}</p>
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