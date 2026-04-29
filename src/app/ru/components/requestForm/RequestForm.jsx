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
                        <span className="request-badge">СВЯЖИТЕСЬ С НАМИ</span>
                        <h2 className="request-title">
                            Готовы начать <span className="gradient-text">проект?</span>
                        </h2>
                        <p className="request-description">
                            Оставьте заявку и мы обсудим детали вашего будущего проекта.
                            Наша команда свяжется с вами в ближайшее время.
                        </p>

                        <div className="request-features">
                            <div className="request-feature">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Бесплатная консультация</h4>
                                    <p>Обсудим ваш проект без обязательств</p>
                                </div>
                            </div>
                            <div className="request-feature">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 6h-2v2h-2V6h-2V4h2V2h2v2h2v2zm-10 3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 4c-2.33 0-7 1.17-7 3.5V17h14v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Индивидуальный подход</h4>
                                    <p>Учтем все ваши пожелания</p>
                                </div>
                            </div>
                            <div className="request-feature">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.5-13h-1v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Быстрый ответ</h4>
                                    <p>Ответим в течение 24 часов</p>
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
                                        placeholder="Ваше имя *"
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
                                        placeholder="Телефон"
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
                                        <option value="">Выберите услугу *</option>
                                        <option value="Сайт визитка">Сайт визитка</option>
                                        <option value="Бизнес-сайт">Бизнес-сайт</option>
                                        <option value="Интернет-магазин">Интернет-магазин</option>
                                        <option value="Телеграм бот">Телеграм бот</option>
                                        <option value="Мобильное приложение">Мобильное приложение</option>
                                        <option value="SEO продвижение">SEO продвижение</option>
                                        <option value="Другое">Другое</option>
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
                                        <option value="">Примерный бюджет *</option>
                                        <option value="до $500">до $500</option>
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
                                    placeholder="Опишите ваш проект *"
                                    rows="5"
                                />
                            </div>

                            {submitStatus === 'success' && (
                                <div className="form-success">
                                    <FaCheckCircle />
                                    <span>Заявка отправлена! Мы свяжемся с вами в ближайшее время.</span>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="form-error">
                                    <FaExclamationCircle />
                                    <span>Ошибка отправки. Пожалуйста, попробуйте еще раз.</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="request-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                                <FaTelegramPlane />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}