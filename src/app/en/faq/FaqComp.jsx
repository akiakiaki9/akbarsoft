"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function FaqComp() {
    const { t } = useTranslation();
    return (
        <div className="main">
            <div className='faqcomp'>
                <div className="faqcomp-blok">
                    <h1>{t("faq.item_2.1")}</h1>
                    <p>{t("faq.item_2.2")}</p>
                    <button className='grad-button'>{t("faq.item_2.3")}</button>
                </div>
            </div>
        </div>
    )
};