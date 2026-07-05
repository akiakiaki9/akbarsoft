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
            title: "What services does your company provide?",
            content: "We specialize in web development, web design, Telegram bot creation, and IT consulting. Our team creates modern and high-performance solutions tailored to your needs.",
            icon: <FaRocket />
        },
        {
            title: "How long does website development take?",
            content: "Website development typically takes from 1 day to 2 weeks, depending on the project's complexity. We always strive to deliver quality work within the agreed timeframe.",
            icon: <FaQuestionCircle />
        },
        {
            title: "What technologies do you use?",
            content: "We use modern technologies such as React, Next.js, Node.js, TypeScript, TailwindCSS, and others to create high-performance and scalable solutions.",
            icon: <FaRocket />
        },
        {
            title: "Do you provide SEO optimization?",
            content: "Yes, we offer SEO services to improve your website's visibility in search engines and attract more potential clients. We include basic SEO optimization in every project.",
            icon: <FaShieldAlt />
        },
        {
            title: "How much does website development cost?",
            content: "The cost of website development depends on the project's complexity, functionality, and design. For accurate information, please contact us through the feedback form.",
            icon: <FaHeadset />
        },
        {
            title: "Do you provide support after launch?",
            content: "Yes, we provide technical support and maintenance for websites after launch. You can choose a convenient pricing plan or one-time service.",
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
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h1>
                        <p className="faq-description">
                            Find answers to the most frequently asked questions about our services.
                            If you can't find the answer to your question, contact us.
                        </p>
                        <Link href='/en/contacts'>
                            <button className='grad-button'>
                                CONTACT US
                            </button>
                        </Link>

                        <div className="faq-stats">
                            <div className="faq-stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Satisfied clients</span>
                            </div>
                            <div className="faq-stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Completed projects</span>
                            </div>
                            <div className="faq-stat">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Support</span>
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