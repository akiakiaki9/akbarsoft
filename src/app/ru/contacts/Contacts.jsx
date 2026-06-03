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
    
    const [isLoading, setIsLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Очищаем ошибку для этого поля при вводе
        if (formErrors[name]) {
            setFormErrors({ ...formErrors, [name]: '' });
        }
    };

    const validateForm = () => {
        const errors = {};
        
        if (!formData.name.trim() || formData.name.length < 3) {
            errors.name = 'Имя должно содержать минимум 3 символа';
        }
        
        if (!formData.phone.trim()) {
            errors.phone = 'Введите номер телефона';
        } else if (!/^[\+\d\s\(\)-]{9,}$/.test(formData.phone)) {
            errors.phone = 'Введите корректный номер телефона';
        }
        
        if (!formData.email.trim()) {
            errors.email = 'Введите email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Введите корректный email адрес';
        }
        
        if (!formData.subject.trim() || formData.subject.length < 5) {
            errors.subject = 'Тема должна содержать минимум 5 символов';
        }
        
        if (!formData.message.trim() || formData.message.length < 10) {
            errors.message = 'Сообщение должно содержать минимум 10 символов';
        }
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsLoading(true);
        
        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert('✅ Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
                setFormData({
                    theme: "CONTACTS (FOR FEEDBACK)",
                    name: '',
                    company: '',
                    phone: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setFormErrors({});
            } else {
                alert(`❌ ${data.error || 'Не удалось отправить сообщение. Пожалуйста, попробуйте позже.'}`);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('❌ Произошла ошибка при отправке. Пожалуйста, проверьте подключение к интернету.');
        } finally {
            setIsLoading(false);
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
                                <a className='contacts-blok__section-1__footer__container-a' href="https://www.instagram.com/by.tillayev/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className='footer-blok__section-1__icon' />
                                </a>
                                <a className='contacts-blok__section-1__footer__container-a' href="https://t.me/akbar_soft" target="_blank" rel="noopener noreferrer">
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
                                    <label>Имя *</label>
                                    <input 
                                        minLength={3} 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        placeholder="Имя" 
                                        required 
                                        className={formErrors.name ? 'error' : ''}
                                    />
                                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                                </div>
                                <div className="contacts-form__section-part">
                                    <label>Компания</label>
                                    <input 
                                        minLength={2} 
                                        type="text" 
                                        name="company" 
                                        value={formData.company} 
                                        onChange={handleChange} 
                                        placeholder="Компания" 
                                    />
                                </div>
                            </div>
                            
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Телефон *</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                        placeholder="+998 XX XXX XX XX" 
                                        required 
                                        className={formErrors.phone ? 'error' : ''}
                                    />
                                    {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                                </div>
                                <div className="contacts-form__section-part">
                                    <label>Email *</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        placeholder="example@mail.com" 
                                        required 
                                        className={formErrors.email ? 'error' : ''}
                                    />
                                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                                </div>
                            </div>
                            
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Тема *</label>
                                    <input 
                                        minLength={5} 
                                        type="text" 
                                        name="subject" 
                                        value={formData.subject} 
                                        onChange={handleChange} 
                                        placeholder="Тема сообщения" 
                                        required 
                                        className={formErrors.subject ? 'error' : ''}
                                    />
                                    {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                                </div>
                            </div>
                            
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Сообщение *</label>
                                    <textarea 
                                        minLength={10} 
                                        name="message" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        placeholder="Ваше сообщение..." 
                                        required 
                                        rows={5}
                                        className={formErrors.message ? 'error' : ''}
                                    />
                                    {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                                </div>
                            </div>
                            
                            <button type='submit' disabled={isLoading}>
                                {isLoading ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ СООБЩЕНИЕ'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}