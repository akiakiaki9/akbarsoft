"use client"
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className='footer'>
            <div className="main">
                <div className="footer-blok">
                    <div className="footer-blok__section-1">
                        <div className="footer-blok__section-1__image">
                            <Link href='/ru/'><img src="/images/logo.png" alt="Akbar Soft Logo" /></Link>
                        </div>
                        <p>{t("footer.1")}</p>
                        <div className="footer-blok__section-1__footer">
                            <a href="https://www.facebook.com/share/18XvQozToa/?mibextid=wwXIfr"><FaFacebookF className='footer-blok__section-1__icon' /></a>
                            <a href="https://www.instagram.com/akbarsoftuz/?utm_source=ig_web_button_share_sheet"><FaInstagram className='footer-blok__section-1__icon' /></a>
                            <a href="https://t.me/akbar_soft"><FaTelegramPlane className='footer-blok__section-1__icon' /></a>
                            <a href=""><FaXTwitter className='footer-blok__section-1__icon' /></a>
                        </div>
                    </div>
                    <div className="footer-blok__section-2">
                        <div className="footer-blok__section-2__part">
                            <p className='footer-blok__section-2__part__p-1'>{t("footer.item_1")}</p>
                            <Link href='/ru/services'><p className='footer-blok__section-2__part__p-2'>{t("footer.item_2")}</p></Link>
                            <Link href='/ru/services'><p className='footer-blok__section-2__part__p-2'>{t("footer.item_3")}</p></Link>
                            <Link href='/ru/services'><p className='footer-blok__section-2__part__p-2'>{t("footer.item_4")}</p></Link>
                        </div>
                        <div className="footer-blok__section-2__part">
                            <p className='footer-blok__section-2__part__p-1'>{t("footer.item_5")}</p>
                            <Link href='/ru/faq'><p className='footer-blok__section-2__part__p-2'>{t("footer.item_6")}</p></Link>
                            <Link href='/ru/contacts'><p className='footer-blok__section-2__part__p-2'>{t("footer.item_7")}</p></Link>
                        </div>
                        <div className="footer-blok__section-2__part">
                            <p className='footer-blok__section-2__part__p-1'>{t("footer.item_8")}</p>
                            <Link href='/ru/about-us'><p className='footer-blok__section-2__part__p-2'>{t("footer.item_9")}</p></Link>
                            <Link href='/ru/team'><p className='footer-blok__section-2__part__p-2'>{t("footer.item_10")}</p></Link>
                            <Link href='/ru//cases'><p className='footer-blok__section-2__part__p-2'>{t("footer.item_11")}</p></Link>
                        </div>
                    </div>
                </div>
                <div className="footer-footer">
                    <div className="footer-footer-blok">
                        <p>{t("footer.footer_1")}</p>
                        <Link href='/ru/'>{t("footer.footer_2")}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};