"use client"
import React from 'react'
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="main">
                <div className="footer-blok">
                    <div className="footer-blok__section-1">
                        <div className="footer-blok__section-1__image">
                            <Link href='/ru/'><img src="/images/logo.png" alt="Akbar Soft Logo" /></Link>
                        </div>
                        <p>Помогаем бизнесу с инновационными сайтами и сервисами, которые работают на результат. Создадим будущее.</p>
                        <div className="footer-blok__section-1__footer">
                            <a href="https://www.instagram.com/by.tillayev/?utm_source=ig_web_button_share_sheet"><FaInstagram className='footer-blok__section-1__icon' /></a>
                            <a href="https://t.me/akbar_soft"><FaTelegramPlane className='footer-blok__section-1__icon' /></a>
                        </div>
                    </div>
                    <div className="footer-blok__section-2">
                        <div className="footer-blok__section-2__part">
                            <p className='footer-blok__section-2__part__p-1'>Информация</p>
                            <Link href='/ru/#faq'><p className='footer-blok__section-2__part__p-2'>FAQ</p></Link>
                            <Link href='/ru/contacts'><p className='footer-blok__section-2__part__p-2'>Контакты</p></Link>
                        </div>
                        <div className="footer-blok__section-2__part">
                            <p className='footer-blok__section-2__part__p-1'>Компания</p>
                            <Link href='/ru#pricing-plan'><p className='footer-blok__section-2__part__p-2'>Цены</p></Link>
                            <Link href='/ru#cases'><p className='footer-blok__section-2__part__p-2'>Наши кейсы</p></Link>
                        </div>
                    </div>
                </div>
                <div className="footer-footer">
                    <div className="footer-footer-blok">
                        <p>© 2024 Akbar Soft. Все права защищены.</p>
                        <Link href='/ru/'>Контакты</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};