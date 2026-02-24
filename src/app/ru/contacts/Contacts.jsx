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
                        <p className="contacts-blok__section-1__p-1">Свяжитесь с нами</p>
                        <h1 className='contacts-blok__section-1__h1-1'>Контактная информация</h1>
                        <p className="contacts-blok__section-1__p-2">Начните общение для установления хороших отношений и бизнеса</p>
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
                                            Главный офис
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Узбекистан
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Бухара - центр
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
                                            Наша электронной почта
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
                                            Телефон номер
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Phone : +998 88 558 93 00
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Fax : +998 50 095 33 31
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
                                            Рабочие часы
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Понедельник - Суббота
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            10:00 - 17:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contacts-blok__section-1__footer">
                            <h2>Мы в социальных сетях</h2>
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
                            <h1>Отправьте нам сообщение</h1>
                            <p>Пожалуйста, не стесняйтесь отправлять нам вопросы, отзывы или предложения.</p>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Имя</label>
                                    <input minLength={3} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Имя" required />
                                </div>
                                <div className="contacts-form__section-part">
                                    <label>Компания</label>
                                    <input minLength={2} type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Компания" required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Телефон</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Телефон" required />
                                </div>
                                <div className="contacts-form__section-part">
                                    <label>Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Тема</label>
                                    <input minLength={5} type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Тема" required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Сообщение</label>
                                    <textarea minLength={10} name="message" value={formData.message} onChange={handleChange} placeholder="Сообщение" required />
                                </div>
                            </div>
                            <button type='submit'>ОТПРАВИТЬ СООБЩЕНИЕ</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};