"use client"
import React from 'react'
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="main">
                <div className="footer-blok">
                    <div className="footer-blok__section-1">
                        <div className="footer-blok__section-1__image">
                            <Link href='/en/'><img src="/images/logo.png" alt="Akbar Soft Logo" /></Link>
                        </div>
                        <p>We help businesses with innovative websites and services that deliver results. Let's create the future.</p>
                        <div className="footer-blok__section-1__footer">
                            <a href="https://www.instagram.com/by.tillayev/?utm_source=ig_web_button_share_sheet"><FaInstagram className='footer-blok__section-1__icon' /></a>
                            <a href="https://t.me/akbar_soft"><FaTelegramPlane className='footer-blok__section-1__icon' /></a>
                        </div>
                    </div>
                    <div className="footer-blok__section-2">
                        <div className="footer-blok__section-2__part">
                            <p className='footer-blok__section-2__part__p-1'>Information</p>
                            <Link href='/en/#faq'><p className='footer-blok__section-2__part__p-2'>FAQ</p></Link>
                            <Link href='/en/contacts'><p className='footer-blok__section-2__part__p-2'>Contacts</p></Link>
                        </div>
                        <div className="footer-blok__section-2__part">
                            <p className='footer-blok__section-2__part__p-1'>Company</p>
                            <Link href='/en#pricing-plan'><p className='footer-blok__section-2__part__p-2'>Pricing</p></Link>
                            <Link href='/en#cases'><p className='footer-blok__section-2__part__p-2'>Our Cases</p></Link>
                        </div>
                    </div>
                </div>
                <div className="footer-footer">
                    <div className="footer-footer-blok">
                        <p>© 2024 Akbar Soft. All rights reserved.</p>
                        <Link href='/en/'>Contacts</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};