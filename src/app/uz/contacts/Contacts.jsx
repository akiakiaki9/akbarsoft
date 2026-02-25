"use client"
import React, { useState } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { FaInstagram } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Contacts() {
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
                        <p className="contacts-blok__section-1__p-1">Biz bilan bog'laning</p>
                        <h1 className='contacts-blok__section-1__h1-1'>Bog'lanish ma'lumotlari</h1>
                        <p className="contacts-blok__section-1__p-2">Yaxshi munosabatlar va biznes uchun muloqotni boshlang</p>
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
                                            Bosh ofis
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            O'zbekiston
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Buxoro - markaz
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
                                            Elektron pochtamiz
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            akbarsoftfreelance@gmail.com
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            akbarsoftcompany@gmail.com
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
                                            Telefon raqami
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Telefon : +998 88 558 93 00
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Faks : +998 50 095 33 31
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
                                            Ish vaqti
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Dushanba - Shanba
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            10:00 - 17:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contacts-blok__section-1__footer">
                            <h2>Biz ijtimoiy tarmoqlarda</h2>
                            <div className="contacts-blok__section-1__footer__container">
                                <a className='contacts-blok__section-1__footer__container-a' href="https://www.instagram.com/by.tillayev/?utm_source=ig_web_button_share_sheet">
                                    <FaInstagram className='footer-blok__section-1__icon' />
                                </a>
                                <a className='contacts-blok__section-1__footer__container-a' href="https://t.me/akbar_soft">
                                    <FaTelegramPlane className='footer-blok__section-1__icon' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contacts-blok__section-2">
                        <form className='contacts-form' onSubmit={handleSubmit}>
                            <h1>Bizga xabar yuboring</h1>
                            <p>Iltimos, savollar, fikr-mulohazalar yoki takliflarni yuborishda tortinmang.</p>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Ism</label>
                                    <input minLength={3} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ism" required />
                                </div>
                                <div className="contacts-form__section-part">
                                    <label>Kompaniya</label>
                                    <input minLength={2} type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Kompaniya" required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Telefon</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon" required />
                                </div>
                                <div className="contacts-form__section-part">
                                    <label>Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Mavzu</label>
                                    <input minLength={5} type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Mavzu" required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Xabar</label>
                                    <textarea minLength={10} name="message" value={formData.message} onChange={handleChange} placeholder="Xabar" required />
                                </div>
                            </div>
                            <button type='submit'>XABAR YUBORISH</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};