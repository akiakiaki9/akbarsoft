"use client"
import React, { useEffect, useState } from 'react'
import { FaInstagram, FaTelegramPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(2024);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className='footer'>
            <div className="footer-bg-decoration"></div>
            <div className="main">
                <div className="footer-blok">
                    <div className="footer-blok__section-1">
                        <div className="footer-logo">
                            <Link href='/en'>
                                <img src="/images/logo.png" alt="Akbar Soft Logo" />
                            </Link>
                        </div>
                        <p className="footer-description">
                            Helping businesses with innovative websites and services that deliver results.
                            We create digital solutions that take your business to the next level.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.instagram.com/akbarsoft.uz/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaInstagram />
                            </a>
                            <a href="https://t.me/akbar_soft" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaTelegramPlane />
                            </a>
                        </div>
                        <div className="footer-contact-info">
                            <div className="contact-item">
                                <FaMapMarkerAlt />
                                <span>Bukhara, Uzbekistan</span>
                            </div>
                            <div className="contact-item">
                                <FaPhone />
                                <a href="tel:+998500953331">+998 50 095 33 31</a>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope />
                                <a href="mailto:akbarsoftcompany@gmail.com">akbarsoftcompany@gmail.com</a>
                            </div>
                            <div className="contact-item">
                                <FaClock />
                                <span>Mon-Fri: 9:00 - 17:00</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-blok__section-2">
                        <div className="footer-links-column">
                            <h4 className="footer-links-title">Information</h4>
                            <ul className="footer-links-list">
                                <li><Link href='/en/#faq'>FAQ</Link></li>
                                <li><Link href='/en/contacts'>Contacts</Link></li>
                                <li><Link href='/en/#pricing-plan'>Pricing</Link></li>
                                <li><Link href='/en/#cases'>Our Projects</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>© {currentYear} Akbar Soft. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};