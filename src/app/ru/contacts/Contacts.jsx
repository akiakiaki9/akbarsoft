"use client"
import React, { useState } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Contacts() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        theme: "CONTACTS (FOR FEEDBACK)",
        name: '',
        company: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://formspree.io/f/mpwaljag', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Message sent successfully!');
            setFormData({
                name: '',
                company: '',
                phone: '',
                email: '',
                subject: '',
                message: ''
            });
        } else {
            alert('Failed to send message.');
        }
    };
    return (
        <div className='contacts'>
            <div className="main">
                <div className="contacts-blok">
                    <div className="contacts-blok__section-1">
                        <p className="contacts-blok__section-1__p-1">{t("contacts.item_1.1")}</p>
                        <h1 className='contacts-blok__section-1__h1-1'>{t("contacts.item_1.2")}</h1>
                        <p className="contacts-blok__section-1__p-2">{t("contacts.item_1.3")}</p>
                        <div className="contacts-blok__section-1__container">
                            <div className="contacts-blok__section-1__container__section">
                                <div className="contacts-blok__section-1__container__section-part">
                                    <div className="contacts-blok__section-1__container__section__class">
                                        <div className="contacts-blok__section-1__container__section__class__icon">
                                            <SlLocationPin className='contacts-blok__section-1__icon' />
                                        </div>
                                    </div>
                                    <div className="contacts-blok__section-1__container__section__class">
                                        <p className='contacts-blok__section-1__container__section__class__p-1'>
                                        {t("contacts.item_1.4")}
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Jln Cempaka Wangi No
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            22Jakarta - Indonesia
                                        </p>
                                    </div>
                                </div>
                                <div className="contacts-blok__section-1__container__section-part">
                                    <div className="contacts-blok__section-1__container__section__class">
                                        <div className="contacts-blok__section-1__container__section__class__icon">
                                            <MdOutlineMail className='contacts-blok__section-1__icon' />
                                        </div>
                                    </div>
                                    <div className="contacts-blok__section-1__container__section__class">
                                        <p className='contacts-blok__section-1__container__section__class__p-1'>
                                        {t("contacts.item_1.5")}
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            support@yourdomain.tld
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            hello@yourdomain.tld
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts-blok__section-1__container__section">
                                <div className="contacts-blok__section-1__container__section-part">
                                    <div className="contacts-blok__section-1__container__section__class">
                                        <div className="contacts-blok__section-1__container__section__class__icon">
                                            <BsTelephone className='contacts-blok__section-1__icon' />
                                        </div>
                                    </div>
                                    <div className="contacts-blok__section-1__container__section__class">
                                        <p className='contacts-blok__section-1__container__section__class__p-1'>
                                        {t("contacts.item_1.6")}
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Phone : +998 932201512
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Fax : +998 93 220 15 12
                                        </p>
                                    </div>
                                </div>
                                <div className="contacts-blok__section-1__container__section-part">
                                    <div className="contacts-blok__section-1__container__section__class">
                                        <div className="contacts-blok__section-1__container__section__class__icon">
                                            <IoTimeOutline className='contacts-blok__section-1__icon' />
                                        </div>
                                    </div>
                                    <div className="contacts-blok__section-1__container__section__class">
                                        <p className='contacts-blok__section-1__container__section__class__p-1'>
                                        {t("contacts.item_1.7")}
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Monday - Friday
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            07am - 09pm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contacts-blok__section-1__footer">
                            <h2>{t("contacts.item_1.8")}</h2>
                            <div className="contacts-blok__section-1__footer__container">
                                <a href="https://www.facebook.com/share/18XvQozToa/?mibextid=wwXIfr"><FaFacebookF className='footer-blok__section-1__icon' /></a>
                                <a href="https://www.instagram.com/akbarsoftuz/?utm_source=ig_web_button_share_sheet"><FaInstagram className='footer-blok__section-1__icon' /></a>
                                <a href="https://t.me/akbar_soft"><FaTelegramPlane className='footer-blok__section-1__icon' /></a>
                                <a href=""><FaXTwitter className='contacts-blok__section-1__footer__icon' /></a>
                            </div>
                        </div>
                    </div>
                    <div className="contacts-blok__section-2">
                        <form className='contacts-form' onSubmit={handleSubmit}>
                            <h1>{t("contacts.item_2.1")}</h1>
                            <p>{t("contacts.item_2.2")}</p>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>{t("contacts.item_2.3")}</label>
                                    <input minLength={3} type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t("contacts.item_2.3")} required />
                                </div>
                                <div className="contacts-form__section-part">
                                    <label>{t("contacts.item_2.4")}</label>
                                    <input minLength={2} type="text" name="company" value={formData.company} onChange={handleChange} placeholder={t("contacts.item_2.4")} required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>{t("contacts.item_2.5")}</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t("contacts.item_2.5")} required />
                                </div>
                                <div className="contacts-form__section-part">
                                    <label>{t("contacts.item_2.6")}</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t("contacts.item_2.6")} required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>{t("contacts.item_2.7")}</label>
                                    <input minLength={5} type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder={t("contacts.item_2.7")} required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>{t("contacts.item_2.8")}</label>
                                    <textarea minLength={10} name="message" value={formData.message} onChange={handleChange} placeholder={t("contacts.item_2.8")} required />
                                </div>
                            </div>
                            <button type='submit'>{t("contacts.item_2.9")}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};