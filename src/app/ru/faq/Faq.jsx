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
            title: "Какие услуги предоставляет ваша компания?",
            content: "Мы специализируемся на веб-разработке, веб-дизайне и IT-консалтинге. Наша команда создает современные и высокопроизводительные решения, соответствующие вашим потребностям."
        }, {
            title: "Как долго длится разработка сайта?",
            content: "Разработка сайта обычно занимает от 1 дня до 2 недель, в зависимости от сложности проекта."
        }, {
            title: "Какие технологии вы используете?",
            content: "Мы используем современные технологии, такие как React, Next.js, Node.js и другие, чтобы создавать высокопроизводительные и масштабируемые решения."
        }, {
            title: "Предоставляете ли вы SEO-оптимизацию?",
            content: "Да, мы предлагаем услуги SEO, чтобы улучшить видимость вашего сайта в поисковых системах и привлечь больше потенциальных клиентов."
        }, {
            title: "Сколько стоит разработка сайта?",
            content: "Стоимость разработки сайта зависит от сложности проекта. Для получения точной информации, пожалуйста, свяжитесь с нами."
        }
    ];

    return (
        <div className='faq' id="faq">
            <div className="main">
                <div className="faq-blok">
                    <div className="faq-blok__section-1">
                        <p className='faq-blok__section-1__p-1'>Общие вопросы</p>
                        <h1>Самые популярные вопросы</h1>
                        <p className='faq-blok__section-1__p-2'>Найдите ответы на наиболее часто задаваемые вопросы о наших услугах.</p>
                        <Link href='/ru/contacts'><button className='grad-button'>УЗНАТЬ БОЛЬШЕ</button></Link>
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