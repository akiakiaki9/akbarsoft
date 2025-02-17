"use client"
import React, { useState } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
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
                        <h1 className='contacts-blok__section-1__h1-1'>Seamless Communication, Global Impact.</h1>
                        <p className="contacts-blok__section-1__p-2">Connect with us to explore innovative solutions, elevate your digital presence, and turn your ideas into reality.
                        </p>
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
                                            Head Office
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
                                            Email Support
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
                                            Let's Talk
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Phone : +6221.2002.2012
                                        </p>
                                        <p className='contacts-blok__section-1__container__section__class__p-2'>
                                            Fax : +6221.2002.2013
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
                            <h2>Follow our social media</h2>
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
                            <h1>Send us a message</h1>
                            <p>Please feel free to send us any questions, feedback or suggestions you might have.</p>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Name</label>
                                    <input minLength={3} type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Name' required />
                                </div>
                                <div className="contacts-form__section-part">
                                    <label>Company</label>
                                    <input minLength={2} type="text" name="company" value={formData.company} onChange={handleChange} placeholder='Company' required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Phone</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder='Phone' required />
                                </div>
                                <div className="contacts-form__section-part">
                                    <label>Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Subject</label>
                                    <input minLength={5} type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder='Subject' required />
                                </div>
                            </div>
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Message</label>
                                    <textarea minLength={10} name="message" value={formData.message} onChange={handleChange} placeholder='Message' required />
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