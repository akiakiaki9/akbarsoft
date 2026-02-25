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
                            <Link href='/uz/'><img src="/images/logo.png" alt="Akbar Soft Logo" /></Link>
                        </div>
                        <p>Biznesga natijaga erishish uchun innovatsion veb-saytlar va xizmatlar yaratishda yordam beramiz. Kelajakni birga yaratamiz.</p>
                        <div className="footer-blok__section-1__footer">
                            <a href="https://www.instagram.com/by.tillayev/?utm_source=ig_web_button_share_sheet"><FaInstagram className='footer-blok__section-1__icon' /></a>
                            <a href="https://t.me/akbar_soft"><FaTelegramPlane className='footer-blok__section-1__icon' /></a>
                        </div>
                    </div>
                    <div className="footer-blok__section-2">
                        <div className="footer-blok__section-2__part">
                            <p className='footer-blok__section-2__part__p-1'>Ma'lumot</p>
                            <Link href='/uz/#faq'><p className='footer-blok__section-2__part__p-2'>FAQ</p></Link>
                            <Link href='/uz/contacts'><p className='footer-blok__section-2__part__p-2'>Kontaktlar</p></Link>
                        </div>
                        <div className="footer-blok__section-2__part">
                            <p className='footer-blok__section-2__part__p-1'>Kompaniya</p>
                            <Link href='/uz#pricing-plan'><p className='footer-blok__section-2__part__p-2'>Narxlar</p></Link>
                            <Link href='/uz#cases'><p className='footer-blok__section-2__part__p-2'>Loyihalarimiz</p></Link>
                        </div>
                    </div>
                </div>
                <div className="footer-footer">
                    <div className="footer-footer-blok">
                        <p>© 2024 Akbar Soft. Barcha huquqlar himoyalangan.</p>
                        <Link href='/uz/'>Kontaktlar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};