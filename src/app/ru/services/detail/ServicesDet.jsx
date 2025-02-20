"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaCheck } from "react-icons/fa";

export default function ServicesDet() {
    const { t } = useTranslation();
    return (
        <div>
            <div className='servicedet-1'>
                <div className="servicedet-1-blok">
                    <div className="servicedet-1-blok__section servicedet-1-blok__section-1">
                        <p className='servicedet-1__p-1'>{t("detailservice.item_1.1")}</p>
                        <h1>{t("detailservice.item_1.2")}</h1>
                        <p className='servicedet-1__p-2'>{t("detailservice.item_1.3")}</p>
                        <button className='grad-button'>{t("detailservice.item_1.4")}</button>
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
                            <h1>{t("detailservice.item_2.1")}</h1>
                            <p className='servicedet-2-blok__section__p-1'>{t("detailservice.item_2.2")}</p>
                            <p className='servicedet-2-blok__section__p-1'>{t("detailservice.item_2.3")}</p>
                            <div className="servicedet-2-blok__section-1__container">
                                <div className="servicedet-2-blok__section-1__container-part">
                                    <div>
                                        <FaCheck className='servicedet-2__icon' />
                                        <p>{t("detailservice.item_2.4")}</p>
                                    </div>
                                    <div>
                                        <FaCheck className='servicedet-2__icon' />
                                        <p>{t("detailservice.item_2.5")}</p>
                                    </div>
                                    <div>
                                        <FaCheck className='servicedet-2__icon' />
                                        <p>{t("detailservice.item_2.6")}</p>
                                    </div>
                                    <div>
                                        <FaCheck className='servicedet-2__icon' />
                                        <p>{t("detailservice.item_2.7")}</p>
                                    </div>
                                </div>
                                <div className="servicedet-2-blok__section-1__container-part">
                                    <div>
                                        <FaCheck className='servicedet-2__icon' />
                                        <p>{t("detailservice.item_2.8")}</p>
                                    </div>
                                    <div>
                                        <FaCheck className='servicedet-2__icon' />
                                        <p>{t("detailservice.item_2.9")}</p>
                                    </div>
                                    <div>
                                        <FaCheck className='servicedet-2__icon' />
                                        <p>{t("detailservice.item_2.10")}</p>
                                    </div>
                                    <div>
                                        <FaCheck className='servicedet-2__icon' />
                                        <p>{t("detailservice.item_2.11")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="servicedet-2-blok__section-2">
                            <div className="servicedet-2-blok__section-2__container">
                                <h1>{t("detailservice.item_2.12")}</h1>
                                <div className="servicedet-2-blok__section-2__container-part">
                                    <img src="/images/servicesdet2/servicesdet2-1.png" alt="" />
                                    <p>{t("detailservice.item_2.13")}</p>
                                </div>
                                <div className="servicedet-2-blok__section-2__container-part">
                                    <img src="/images/servicesdet2/servicesdet2-2.png" alt="" />
                                    <p>{t("detailservice.item_2.14")}</p>
                                </div>
                                <div className="servicedet-2-blok__section-2__container-part">
                                    <img src="/images/servicesdet2/servicesdet2-3.png" alt="" />
                                    <p>{t("detailservice.item_2.15")}</p>
                                </div>
                                <div className="servicedet-2-blok__section-2__container-part">
                                    <img src="/images/servicesdet2/servicesdet2-4.png" alt="" />
                                    <p>{t("detailservice.item_2.16")}</p>
                                </div>
                                <div className="servicedet-2-blok__section-2__container-part">
                                    <img src="/images/servicesdet2/servicesdet2-5.png" alt="" />
                                    <p>{t("detailservice.item_2.17")}</p>
                                </div>
                            </div>
                            <button className='grad-button'>{t("detailservice.item_2.18")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};