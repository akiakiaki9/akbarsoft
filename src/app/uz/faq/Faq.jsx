"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaQuestionCircle, FaHeadset, FaRocket, FaShieldAlt } from "react-icons/fa";
import "./faq.css";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            title: "Kompaniyangiz qanday xizmatlar ko'rsatadi?",
            content: "Biz veb-ishlab chiqish, veb-dizayn, Telegram botlar yaratish va IT-konsaltingga ixtisoslashganmiz. Jamoamiz sizning ehtiyojlaringizga mos keladigan zamonaviy va yuqori samarali yechimlarni yaratadi.",
            icon: <FaRocket />
        },
        {
            title: "Saytni ishlab chiqish qancha vaqt oladi?",
            content: "Saytni ishlab chiqish odatda 1 kundan 2 haftagacha davom etadi, loyihaning murakkabligiga bog'liq. Biz har doim ishni sifatli va kelishilgan muddatlarda bajarishga intilamiz.",
            icon: <FaQuestionCircle />
        },
        {
            title: "Qanday texnologiyalardan foydalanasiz?",
            content: "Biz React, Next.js, Node.js, TypeScript, TailwindCSS va boshqa zamonaviy texnologiyalardan foydalanib, yuqori samarali va kengaytiriladigan yechimlar yaratamiz.",
            icon: <FaRocket />
        },
        {
            title: "SEO-optimizatsiya xizmatlarini taklif qilasizmi?",
            content: "Ha, biz saytingizning qidiruv tizimlarida ko'rinishini yaxshilash va ko'proq potensial mijozlarni jalb qilish uchun SEO xizmatlarini taklif qilamiz. Har bir loyihaga asosiy SEO-optimizatsiyani kiritamiz.",
            icon: <FaShieldAlt />
        },
        {
            title: "Saytni ishlab chiqish qancha turadi?",
            content: "Saytni ishlab chiqish narxi loyihaning murakkabligi, funksionalligi va dizayniga bog'liq. Aniq ma'lumot olish uchun, iltimos, biz bilan aloqa formasi orqali bog'lang.",
            icon: <FaHeadset />
        },
        {
            title: "Ishga tushirilgandan keyin qo'llab-quvvatlovni taqdim qilasizmi?",
            content: "Ha, biz saytlarni ishga tushirilgandan keyin texnik qo'llab-quvvatlash va xizmat ko'rsatishni taqdim qilamiz. Siz qulay tarif rejasini yoki bir martalik xizmatni tanlashingiz mumkin.",
            icon: <FaShieldAlt />
        }
    ];

    return (
        <div className='faq' id="faq" ref={sectionRef}>
            <div className="faq-bg-decoration"></div>
            <div className="main">
                <div className={`faq-blok ${isVisible ? 'visible' : ''}`}>
                    <div className="faq-blok__section-1">
                        <span className="faq-badge">FAQ</span>
                        <h1 className="faq-title">
                            Ko'p so'raladigan <span className="gradient-text">savollar</span>
                        </h1>
                        <p className="faq-description">
                            Xizmatlarimiz haqida eng ko'p beriladigan savollarga javob toping.
                            Agar savolingizga javob topmasangiz, biz bilan bog'lang.
                        </p>
                        <Link href='/uz/contacts'>
                            <button className='grad-button'>
                                BIZ BILAN BOG'LANISH
                            </button>
                        </Link>

                        <div className="faq-stats">
                            <div className="faq-stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Mamnun mijozlar</span>
                            </div>
                            <div className="faq-stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Amalga oshirilgan loyihalar</span>
                            </div>
                            <div className="faq-stat">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Qo'llab-quvvatlash</span>
                            </div>
                        </div>
                    </div>

                    <div className="faq-blok__section-2">
                        {faqData.map((item, index) => (
                            <div
                                className={`faq-accordion ${openIndex === index ? "open" : ""}`}
                                key={index}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div
                                    className="faq-accordion__header"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="faq-accordion__header-left">
                                        <span className="faq-accordion__icon">{item.icon}</span>
                                        <p className='faq-accordion__title'>{item.title}</p>
                                    </div>
                                    {openIndex === index ?
                                        <IoIosArrowUp className='faq-accordion__arrow' /> :
                                        <IoIosArrowDown className='faq-accordion__arrow' />
                                    }
                                </div>
                                <div className="faq-accordion__content">
                                    <p className='faq-accordion__text'>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};