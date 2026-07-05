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
        if (formErrors[name]) {
            setFormErrors({ ...formErrors, [name]: '' });
        }
    };

    const validateForm = () => {
        const errors = {};
        
        if (!formData.name.trim() || formData.name.length < 3) {
            errors.name = 'Ism kamida 3 ta belgidan iborat bo\'lishi kerak';
        }
        
        if (!formData.phone.trim()) {
            errors.phone = 'Telefon raqamini kiriting';
        } else if (!/^[\+\d\s\(\)-]{9,}$/.test(formData.phone)) {
            errors.phone = 'To\'g\'ri telefon raqamini kiriting';
        }
        
        if (!formData.email.trim()) {
            errors.email = 'Emailni kiriting';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'To\'g\'ri email manzilini kiriting';
        }
        
        if (!formData.subject.trim() || formData.subject.length < 5) {
            errors.subject = 'Mavzu kamida 5 ta belgidan iborat bo\'lishi kerak';
        }
        
        if (!formData.message.trim() || formData.message.length < 10) {
            errors.message = 'Xabar kamida 10 ta belgidan iborat bo\'lishi kerak';
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
            const response = await fetch('/api/send-review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Server returned non-JSON response');
            }

            const data = await response.json();

            if (response.ok) {
                alert('✅ Xabar muvaffaqiyatli yuborildi! Biz siz bilan eng qisqa vaqt ichida bog\'lanamiz.');
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
                alert(`❌ ${data.error || 'Xabarni yuborishning iloji bo\'lmadi. Iltimos, keyinroq qayta urinib ko\'ring.'}`);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('❌ Yuborishda xatolik yuz berdi. Iltimos, internetga ulanishni tekshiring.');
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className='contacts'>
            <div className="main">
                <div className="contacts-blok">
                    <div className="contacts-blok__section-1">
                        <p className="contacts-blok__section-1__p-1">Biz bilan bog'laning</p>
                        <h1 className='contacts-blok__section-1__h1-1'>Kontakt ma'lumotlari</h1>
                        <p className="contacts-blok__section-1__p-2">Yaxshi munosabatlar va biznes o'rnatish uchun muloqotni boshlang</p>
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
                                            Telefon raqam
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
                                <a className='contacts-blok__section-1__footer__container-a' href="https://www.instagram.com/akbarsoft.uz/" target="_blank" rel="noopener noreferrer">
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
                            <h1>Bizga xabar yuboring</h1>
                            <p>Iltimos, savollar, fikrlar yoki takliflarni yuborishdan tortinmang.</p>
                            
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Ism *</label>
                                    <input 
                                        minLength={3} 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        placeholder="Ism" 
                                        required 
                                        className={formErrors.name ? 'error' : ''}
                                    />
                                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                                </div>
                                <div className="contacts-form__section-part">
                                    <label>Kompaniya</label>
                                    <input 
                                        minLength={2} 
                                        type="text" 
                                        name="company" 
                                        value={formData.company} 
                                        onChange={handleChange} 
                                        placeholder="Kompaniya" 
                                    />
                                </div>
                            </div>
                            
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Telefon *</label>
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
                                    <label>Mavzu *</label>
                                    <input 
                                        minLength={5} 
                                        type="text" 
                                        name="subject" 
                                        value={formData.subject} 
                                        onChange={handleChange} 
                                        placeholder="Xabar mavzusi" 
                                        required 
                                        className={formErrors.subject ? 'error' : ''}
                                    />
                                    {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                                </div>
                            </div>
                            
                            <div className="contacts-form__section">
                                <div className="contacts-form__section-part">
                                    <label>Xabar *</label>
                                    <textarea 
                                        minLength={10} 
                                        name="message" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        placeholder="Xabaringiz..." 
                                        required 
                                        rows={5}
                                        className={formErrors.message ? 'error' : ''}
                                    />
                                    {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                                </div>
                            </div>
                            
                            <button type='submit' disabled={isLoading}>
                                {isLoading ? 'YUBORILMOQDA...' : 'XABAR YUBORISH'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}