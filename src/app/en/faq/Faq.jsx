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
            title: "What services does your company provide?",
            content: "We specialize in web development, web design, and IT consulting. Our team creates modern, high-performance solutions tailored to your needs."
        }, {
            title: "How long does website development take?",
            content: "Website development typically takes from 1 day to 2 weeks, depending on the project's complexity."
        }, {
            title: "What technologies do you use?",
            content: "We use modern technologies such as React, Next.js, Node.js, and others to create high-performance and scalable solutions."
        }, {
            title: "Do you provide SEO optimization?",
            content: "Yes, we offer SEO services to improve your website's visibility in search engines and attract more potential customers."
        }, {
            title: "How much does website development cost?",
            content: "The cost of website development depends on the project's complexity. For accurate information, please contact us."
        }
    ];

    return (
        <div className='faq' id="faq">
            <div className="main">
                <div className="faq-blok">
                    <div className="faq-blok__section-1">
                        <p className='faq-blok__section-1__p-1'>General Questions</p>
                        <h1>Most Popular Questions</h1>
                        <p className='faq-blok__section-1__p-2'>Find answers to the most frequently asked questions about our services.</p>
                        <Link href='/en/contacts'><button className='grad-button'>LEARN MORE</button></Link>
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