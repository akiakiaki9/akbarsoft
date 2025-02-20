"use client"
import React from 'react'
import CASES from '../utils/cases'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function Cases() {
    const { t } = useTranslation();
    return (
        <div className='cases'>
            <div className='pagename'>
                <div className='pagename__container'>
                    <div className='pagename-blok'>
                        <h1>{t("cases.pagename_1")}</h1>
                        <p>{t("cases.pagename_2")}</p>
                    </div>
                </div>
            </div>
            <div className="cases-header">
                <p>{t("cases.1")}</p>
                <h1>{t("cases.2")}</h1>
            </div>
            <div className="main">
                <div className="cases-blok">
                    {CASES.map(item => (
                        <div className="cases-blok__section" key={item.id}>
                            <div className="cases-blok__section__header">
                                <p>{item.title}</p>
                                <h1>{item.name}</h1>
                            </div>
                            <div className="cases-blok__section__container">
                                <img src={item.image} alt={item.name} className="cases-blok__image" />
                                <div className="cases-blok__section__container__main">
                                    <div className="cases-blok__section__container-part">
                                        <div>
                                            <p className='cases-blok__section__container-part__p-1'>Client</p>
                                            <p className='cases-blok__section__container-part__p-2'>{item.client}</p>
                                        </div>
                                        <div>
                                            <p className='cases-blok__section__container-part__p-1'>Date</p>
                                            <p className='cases-blok__section__container-part__p-2'>{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="cases-blok__section__container-part">
                                        <div>
                                            <p className='cases-blok__section__container-part__p-1'>Location</p>
                                            <p className='cases-blok__section__container-part__p-2'>{item.location}</p>
                                        </div>
                                        <div>
                                            <p className='cases-blok__section__container-part__p-1'>Budget</p>
                                            <p className='cases-blok__section__container-part__p-2'>{item.budget}</p>
                                        </div>
                                    </div>
                                    <div className="cases-blok__section__container__footer">
                                        <p>{item.subtitle}</p>
                                        <Link href={item.link}><button className='grad-button'>LOOK</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};