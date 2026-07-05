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
                        <span className="request-badge">CONTACT US</span>
                        <h2 className="request-title">
                            Ready to start <span className="gradient-text">your project?</span>
                        </h2>
                        <p className="request-description">
                            Leave a request and we will discuss the details of your future project.
                            Our team will get back to you shortly.
                        </p>

                        <div className="request-features">
                            <div className="request-feature">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Free consultation</h4>
                                    <p>Discuss your project with no obligations</p>
                                </div>
                            </div>
                            <div className="request-feature">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 6h-2v2h-2V6h-2V4h2V2h2v2h2v2zm-10 3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 4c-2.33 0-7 1.17-7 3.5V17h14v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Individual approach</h4>
                                    <p>We will consider all your preferences</p>
                                </div>
                            </div>
                            <div className="request-feature">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.5-13h-1v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Quick response</h4>
                                    <p>We will respond within 24 hours</p>
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
                                        placeholder="Your name *"
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
                                        placeholder="Phone *"
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
                                        <option value="">Select a service *</option>
                                        <option value="Сайт визитка">Business card website</option>
                                        <option value="Бизнес-сайт">Business website</option>
                                        <option value="Интернет-магазин">Online store</option>
                                        <option value="Телеграм бот">Telegram bot</option>
                                        <option value="Мобильное приложение">Mobile application</option>
                                        <option value="SEO продвижение">SEO promotion</option>
                                        <option value="Другое">Other</option>
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
                                        <option value="">Estimated budget *</option>
                                        <option value="до $500">Up to $500</option>
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
                                    placeholder="Describe your project *"
                                    rows="5"
                                />
                            </div>

                            {submitStatus === 'success' && (
                                <div className="form-success">
                                    <FaCheckCircle />
                                    <span>Request sent! We will contact you shortly.</span>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="form-error">
                                    <FaExclamationCircle />
                                    <span>Submission error. Please try again.</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="request-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send request'}
                                <FaTelegramPlane />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}