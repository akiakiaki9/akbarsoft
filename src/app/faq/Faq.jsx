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
            content: "We specialize in web development, web design, and IT consulting. Our team creates modern and high-performance solutions tailored to your needs."
        }, {
            title: "How long does it take to develop a website?",
            content: "The development time depends on the complexity of the project. A simple website can take 2-4 weeks, while a complex project may require several months."
        }, {
            title: "Do you offer website maintenance and support?",
            content: "Yes, we provide ongoing maintenance, updates, and security monitoring to ensure your website remains fast and secure."
        }, {
            title: "Do you provide SEO optimization?",
            content: "Yes, we offer SEO services to help improve your website's visibility in search engines and attract more potential customers."
        }, {
            title: "How much does a website cost?",
            content: "The cost varies based on the project's requirements. Contact us for a free consultation and a personalized quote."
        }
    ];

    return (
        <div className='faq'>
            <div className="main">
                <div className="faq-blok">
                    <div className="faq-blok__section-1">
                        <p className='faq-blok__section-1__p-1'>Common Questions</p>
                        <h1>Most Popular Questions</h1>
                        <p className='faq-blok__section-1__p-2'>Find answers to the most frequently asked questions about our services.</p>
                        <Link href='/contacts'><button className='grad-button'>DISCOVER MORE</button></Link>
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
