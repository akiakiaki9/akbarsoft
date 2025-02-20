"use client"
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaCheck } from 'react-icons/fa6'
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2'

export default function Services() {
    const { t } = useTranslation();
    return (
        <div className='services'>
            <div className="main">
                <div className="services-blok">
                    <div className="servicedet-2-blok__section-1">
                        <h1 className='services-blok__section-1__h1'>{t("services.1")}</h1>
                        <p className='services-2-blok__section__p-1'>{t("services.2")}</p>
                        <div className="servicedet-2-blok__section-1__container">
                            <div className="servicedet-2-blok__section-1__container-part">
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>{t("services.3")}</p>
                                </div>
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>{t("services.4")}</p>
                                </div>
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>{t("services.5")}</p>
                                </div>
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>{t("services.6")}</p>
                                </div>
                            </div>
                            <div className="servicedet-2-blok__section-1__container-part">
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>{t("services.7")}</p>
                                </div>
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>{t("services.8")}</p>
                                </div>
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>{t("services.9")}</p>
                                </div>
                                <div>
                                    <FaCheck className='servicedet-2__icon' />
                                    <p>{t("services.10")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-2-blok__section-1">
                        <img src="/images/services/services.jpg" alt="" />
                        <Link href='/en/'>
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