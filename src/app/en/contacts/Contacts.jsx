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
                        <p className="contacts-blok__section-1__p-1">Get in touch</p>
                        <h1 className='contacts-blok__section-1__h1-1'>Contact Information</h1>
                        <p className="contacts-blok__section-1__p-2">Start a conversation to build a good relationship and business</p>
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
                                            Main Office
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Uzbekistan
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Bukhara - center
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
                                            Our Email
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
                                            Phone Number
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
                                            Working Hours
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Monday - Saturday
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            10:00 - 17:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contacts-blok__section-1__footer">
                            <h2>We are on social media</h2>
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
                            <h1>Send us a message</h1>
                            <p>Please feel free to send us questions, feedback, or suggestions.</p>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Name</label>
                                    <input minLength={3} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                                </div>
                                <div className="contacts-form__section-part">
                                    <label>Company</label>
                                    <input minLength={2} type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Phone</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                                </div>
                                <div className="contacts-form__section-part">
                                    <label>Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Subject</label>
                                    <input minLength={5} type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Message</label>
                                    <textarea minLength={10} name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
                                </div>
                            </div>
                            <button type='submit'>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};