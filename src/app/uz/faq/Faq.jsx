"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            title: "Kompaniyangiz qanday xizmatlar ko'rsatadi?",
            content: "Biz veb-ishlab chiqish, veb-dizayn va IT-konsaltingga ixtisoslashganmiz. Jamoamiz sizning ehtiyojlaringizga mos keladigan zamonaviy va yuqori samarali yechimlarni yaratadi."
        }, {
            title: "Veb-sayt yaratish qancha vaqt oladi?",
            content: "Veb-sayt yaratish odatda loyihaning murakkabligiga qarab 1 kundan 2 haftagacha davom etadi."
        }, {
            title: "Qanday texnologiyalardan foydalanasiz?",
            content: "Yuqori samarali va kengaytiriladigan yechimlarni yaratish uchun React, Next.js, Node.js va boshqa zamonaviy texnologiyalardan foydalanamiz."
        }, {
            title: "SEO-optimizatsiya xizmatini taklif qilasizmi?",
            content: "Ha, veb-saytingizning qidiruv tizimlarida ko'rinishini yaxshilash va ko'proq potentsial mijozlarni jalb qilish uchun SEO xizmatlarini taklif qilamiz."
        }, {
            title: "Veb-sayt yaratish qancha turadi?",
            content: "Veb-sayt yaratish narxi loyihaning murakkabligiga bog'liq. Aniq ma'lumot olish uchun, iltimos, biz bilan bog'laning."
        }
    ];

    return (
        <div className='faq' id="faq">
            <div className="main">
                <div className="faq-blok">
                    <div className="faq-blok__section-1">
                        <p className='faq-blok__section-1__p-1'>Umumiy savollar</p>
                        <h1>Eng ko'p beriladigan savollar</h1>
                        <p className='faq-blok__section-1__p-2'>Xizmatlarimiz haqida tez-tez so'raladigan savollarga javob toping.</p>
                        <Link href='/uz/contacts'><button className='grad-button'>BATAFSIL</button></Link>
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
};