"use client"
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="main">
                <div className="footer-blok">
                    <div className="footer-blok__section-1">
                        <div className="footer-blok__section-1__image">
                            <Link href='/'><img src="/images/logo.png" alt="Akbar Soft Logo" /></Link>
                        </div>
                        <p>Empowering businesses with cutting-edge technology, innovative solutions, and seamless digital experiences. Let’s shape the future together.
                        </p>
                        <div className="footer-blok__section-1__footer">
                            <a href="https://www.facebook.com/share/18XvQozToa/?mibextid=wwXIfr"><FaFacebookF className='footer-blok__section-1__icon' /></a>
                            <a href="https://www.instagram.com/akbarsoftuz/?utm_source=ig_web_button_share_sheet"><FaInstagram className='footer-blok__section-1__icon' /></a>
                            <a href="https://t.me/akbar_soft"><FaTelegramPlane className='footer-blok__section-1__icon' /></a>
                            <a href=""><FaXTwitter className='footer-blok__section-1__icon' /></a>
                        </div>
                    </div>
                    <div className="footer-blok__section-2">
                        <div className="footer-blok__section-2__part">
                            <Link href='/'><p className='footer-blok__section-2__part__p-1'>Services</p></Link>
                            <Link href='/'><p className='footer-blok__section-2__part__p-2'>Website Development</p></Link>
                            <Link href='/'><p className='footer-blok__section-2__part__p-2'>Web Design</p></Link>
                            <Link href='/'><p className='footer-blok__section-2__part__p-2'>Search Engine Optimization</p></Link>
                        </div>
                        <div className="footer-blok__section-2__part">
                            <Link href='/'><p className='footer-blok__section-2__part__p-1'>Support</p></Link>
                            <Link href='/'><p className='footer-blok__section-2__part__p-2'>FAQ</p></Link>
                            <Link href='/'><p className='footer-blok__section-2__part__p-2'>Contact us</p></Link>
                        </div>
                        <div className="footer-blok__section-2__part">
                            <Link href='/'><p className='footer-blok__section-2__part__p-1'>Company</p></Link>
                            <Link href='/'><p className='footer-blok__section-2__part__p-2'>About us</p></Link>
                            <Link href='/'><p className='footer-blok__section-2__part__p-2'>Our team</p></Link>
                            <Link href='/'><p className='footer-blok__section-2__part__p-2'>Careers</p></Link>
                        </div>
                    </div>
                </div>
                <div className="footer-footer">
                    <div className="footer-footer-blok">
                        <p>Copyright© 2024 Akbar Soft, All rights reserved. Powered by Akbar Soft.</p>
                        <Link href='/'>Contacts</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};