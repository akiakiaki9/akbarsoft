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
            title: "Какие услуги предоставляет ваша компания?",
            content: "Мы специализируемся на веб-разработке, веб-дизайне, создании телеграм ботов и IT-консалтинге. Наша команда создает современные и высокопроизводительные решения, соответствующие вашим потребностям.",
            icon: <FaRocket />
        },
        {
            title: "Как долго длится разработка сайта?",
            content: "Разработка сайта обычно занимает от 1 дня до 2 недель, в зависимости от сложности проекта. Мы всегда стремимся выполнить работу качественно и в оговоренные сроки.",
            icon: <FaQuestionCircle />
        },
        {
            title: "Какие технологии вы используете?",
            content: "Мы используем современные технологии, такие как React, Next.js, Node.js, TypeScript, TailwindCSS и другие, чтобы создавать высокопроизводительные и масштабируемые решения.",
            icon: <FaRocket />
        },
        {
            title: "Предоставляете ли вы SEO-оптимизацию?",
            content: "Да, мы предлагаем услуги SEO, чтобы улучшить видимость вашего сайта в поисковых системах и привлечь больше потенциальных клиентов. Включаем базовую SEO-оптимизацию в каждый проект.",
            icon: <FaShieldAlt />
        },
        {
            title: "Сколько стоит разработка сайта?",
            content: "Стоимость разработки сайта зависит от сложности проекта, функциональности и дизайна. Для получения точной информации, пожалуйста, свяжитесь с нами через форму обратной связи.",
            icon: <FaHeadset />
        },
        {
            title: "Предоставляете ли вы поддержку после запуска?",
            content: "Да, мы предоставляем техническую поддержку и обслуживание сайтов после запуска. Вы можете выбрать удобный тарифный план или разовое обслуживание.",
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
                            Часто задаваемые <span className="gradient-text">вопросы</span>
                        </h1>
                        <p className="faq-description">
                            Найдите ответы на наиболее часто задаваемые вопросы о наших услугах.
                            Если вы не нашли ответ на свой вопрос, свяжитесь с нами.
                        </p>
                        <Link href='/ru/contacts'>
                            <button className='grad-button'>
                                СВЯЗАТЬСЯ С НАМИ
                            </button>
                        </Link>

                        <div className="faq-stats">
                            <div className="faq-stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Довольных клиентов</span>
                            </div>
                            <div className="faq-stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Реализованных проектов</span>
                            </div>
                            <div className="faq-stat">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Поддержка</span>
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