"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Faq() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            title: t("faq.item_1.item_1"),
            content: t("faq.item_1.item_2")
        }, {
            title: t("faq.item_1.item_3"),
            content: t("faq.item_1.item_4")
        }, {
            title: t("faq.item_1.item_5"),
            content: t("faq.item_1.item_6")
        }, {
            title: t("faq.item_1.item_7"),
            content: t("faq.item_1.item_8")
        }, {
            title: t("faq.item_1.item_9"),
            content: t("faq.item_1.item_10")
        }
    ];

    return (
        <div className='faq' id="faq">
            <div className="main">
                <div className="faq-blok">
                    <div className="faq-blok__section-1">
                        <p className='faq-blok__section-1__p-1'>{t("faq.item_1.1")}</p>
                        <h1>{t("faq.item_1.2")}</h1>
                        <p className='faq-blok__section-1__p-2'>{t("faq.item_1.3")}</p>
                        <Link href='/ru/contacts'><button className='grad-button'>{t("faq.item_1.4")}</button></Link>
                    </div>
                    <div className="faq-blok__section-2">
                        {faqData.map((item, index) => (
                            <div
                                className={`faq-blok__section-2-part ${openIndex === index ? "open" : ""}`}
                                key={index}
                            >
                                <div className="faq-blok__section-2-part__header" onClick={() => toggleAccordion(index)}>
                                    <p className='faq__title'>{item.title}</p>
                                    {openIndex === index ? <IoIosArrowUp className='faq__icon' /> : <IoIosArrowDown className='faq__icon' />}
                                </div>
                                <div className="faq__content">
                                    <p className='faq__subtitle'>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
