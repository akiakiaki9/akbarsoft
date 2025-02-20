"use client"
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Section6() {
    const { t } = useTranslation();
    return (
        <div className='section6'>
            <div className='title'>
                <div className="title-blok">
                    <p>{t("section6.1")}</p>
                    <h1>{t("section6.2")}</h1>
                </div>
            </div>
            <div className="main">
                <div className="section6-blok">
                    <div className='section6-blok__section'>
                        <div className="section6-blok__section__image">
                            <img src="/images/section6/section6-1.png" alt="" />
                        </div>
                        <Link href='/en/contacts'><h1>{t("section6.item_1")}</h1></Link>
                        <p>{t("section6.item_2")}</p>
                        <Link href='/en/contacts'><button className='grad-button'>{t("section6.item_3")}</button></Link>
                    </div>
                    <div className='section6-blok__section'>
                        <div className="section6-blok__section__image">
                            <img src="/images/section6/section6-2.png" alt="" />
                        </div>
                        <Link href='/en/cases'><h1>{t("section6.item_4")}</h1></Link>
                        <p>{t("section6.item_5")}</p>
                        <Link href='/en/cases'><button className='grad-button'>{t("section6.item_6")}</button></Link>
                    </div>
                    <div className='section6-blok__section'>
                        <div className="section6-blok__section__image">
                            <img src="/images/section6/section6-4.png" alt="" />
                        </div>
                        <Link href='/en/cases'><h1>{t("section6.item_7")}</h1></Link>
                        <p>{t("section6.item_8")}</p>
                        <Link href='/en/cases'><button className='grad-button'>{t("section6.item_9")}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};