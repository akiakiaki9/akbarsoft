"use client";
import React, { useState } from 'react';
import { FaTelegramPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './requestForm.css';

export default function RequestForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const response = await fetch('/api/send-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    budget: '',
                    message: ''
                });
                setTimeout(() => {
                    setSubmitStatus('');
                }, 5000);
            } else {
                throw new Error(data.error || 'Form submission failed');
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Form submission error:', error);
            setTimeout(() => {
                setSubmitStatus('');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="request-section" id="request">
            <div className="main">
                <div className="request-container">
                    <div className="request-left">
                        <span className="request-badge">BIZ BILAN BOG'LANING</span>
                        <h2 className="request-title">
                            Loyihani boshlashga <span className="gradient-text">tayyormisiz?</span>
                        </h2>
                        <p className="request-description">
                            Ariza qoldiring va kelajakdagi loyihangizning tafsilotlarini muhokama qilamiz.
                            Jamoamiz siz bilan eng qisqa vaqt ichida bog'lanadi.
                        </p>

                        <div className="request-features">
                            <div className="request-feature">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Bepul maslahat</h4>
                                    <p>Loyihangizni majburiyatsiz muhokama qilamiz</p>
                                </div>
                            </div>
                            <div className="request-feature">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 6h-2v2h-2V6h-2V4h2V2h2v2h2v2zm-10 3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 4c-2.33 0-7 1.17-7 3.5V17h14v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Individual yondashuv</h4>
                                    <p>Barcha istaklaringizni inobatga olamiz</p>
                                </div>
                            </div>
                            <div className="request-feature">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.5-13h-1v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Tez javob</h4>
                                    <p>24 soat ichida javob beramiz</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="request-right">
                        <form className="request-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Ismingiz *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Email *"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Telefon *"
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Xizmat turini tanlang *</option>
                                        <option value="Сайт визитка">Vizitka sayt</option>
                                        <option value="Бизнес-сайт">Biznes sayt</option>
                                        <option value="Интернет-магазин">Internet-do'kon</option>
                                        <option value="Телеграм бот">Telegram bot</option>
                                        <option value="Мобильное приложение">Mobil ilova</option>
                                        <option value="SEO продвижение">SEO targ'ibot</option>
                                        <option value="Другое">Boshqa</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Taxminiy byudjet *</option>
                                        <option value="до $500">$500 gacha</option>
                                        <option value="$500 - $1000">$500 - $1000</option>
                                        <option value="$1000 - $3000">$1000 - $3000</option>
                                        <option value="$3000 - $5000">$3000 - $5000</option>
                                        <option value="$5000+">$5000+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Loyihangizni tasvirlab bering *"
                                    rows="5"
                                />
                            </div>

                            {submitStatus === 'success' && (
                                <div className="form-success">
                                    <FaCheckCircle />
                                    <span>Ariza yuborildi! Biz siz bilan eng qisqa vaqt ichida bog'lanamiz.</span>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="form-error">
                                    <FaExclamationCircle />
                                    <span>Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="request-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Yuborilmoqda...' : 'Ariza yuborish'}
                                <FaTelegramPlane />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}