"use client";
import React, { useState } from 'react';
import { RiRecordCircleLine } from "react-icons/ri";
import { IoCloseSharp } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

export default function PricingPlan() {
    const { t } = useTranslation();
    const PRICING = [
        {
            id: 1,
            title: t("pricingplan.item_1.1"),
            subtitle: t("pricingplan.item_1.2"),
            price: '$300 - $500',
            discount: '$100 - $300',
            includes: {
                include_1: t("pricingplan.item_1.4"),
                include_2: t("pricingplan.item_1.5"),
                include_3: t("pricingplan.item_1.6"),
                include_4: t("pricingplan.item_1.7"),
                include_5: t("pricingplan.item_1.8")
            }
        },
        {
            id: 2,
            title: t("pricingplan.item_2.1"),
            subtitle: t("pricingplan.item_2.2"),
            price: '$500 - $800',
            discount: '$400 - $700',
            includes: {
                include_1: t("pricingplan.item_2.4"),
                include_2: t("pricingplan.item_2.5"),
                include_3: t("pricingplan.item_2.6"),
                include_4: t("pricingplan.item_2.7"),
                include_5: t("pricingplan.item_2.8")
            }
        },
        {
            id: 3,
            title: t("pricingplan.item_3.1"),
            subtitle: t("pricingplan.item_3.2"),
            price: '$100',
            discount: '$30',
            includes: {
                include_1: t("pricingplan.item_3.4"),
                include_2: t("pricingplan.item_3.5"),
                include_3: t("pricingplan.item_3.6"),
                include_4: t("pricingplan.item_3.7"),
                include_5: t("pricingplan.item_3.8")
            }
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        message: '',
        plan: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleButtonClick = (plan) => {
        setSelectedPlan(plan);
        setFormData(prev => ({ ...prev, plan: plan.title }));
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPlan(null);
        setFormData({ email: '', phone: '', message: '', plan: '' });
        setSubmitStatus('');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const response = await fetch('https://formspree.io/f/mpwaljag', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    plan: formData.plan,
                    subject: `New Quote Request: ${formData.plan}`
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ email: '', phone: '', message: '', plan: '' });
                setTimeout(() => {
                    closeModal();
                }, 2000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='pricing' id='pricing-plan'>
            <div className="main">
                <div className="pricing-blok">
                    {PRICING.map(item => (
                        <div className='pricing-blok__section' key={item.id}>
                            <h1 className='pricing-blok__section__h1'>{item.title}</h1>
                            <p className='pricing-blok__section__p'>{item.subtitle}</p>
                            <div className="pricing-blok__section__header">
                                <h1>{item.discount}</h1>
                                <p>{item.price}</p>
                            </div>
                            <h2 className='pricing-blok__section__h2'>{t("pricingplan.item_1.3")}</h2>
                            <div className="pricing-blok__section__container">
                                <div className="pricing-blok__section__container-part">
                                    <RiRecordCircleLine className='pricing__icon' />
                                    <p>{item.includes.include_1}</p>
                                </div>
                                <div className="pricing-blok__section__container-part">
                                    <RiRecordCircleLine className='pricing__icon' />
                                    <p>{item.includes.include_2}</p>
                                </div>
                                <div className="pricing-blok__section__container-part">
                                    <RiRecordCircleLine className='pricing__icon' />
                                    <p>{item.includes.include_3}</p>
                                </div>
                                <div className="pricing-blok__section__container-part">
                                    <RiRecordCircleLine className='pricing__icon' />
                                    <p>{item.includes.include_4}</p>
                                </div>
                                <div className="pricing-blok__section__container-part">
                                    <RiRecordCircleLine className='pricing__icon' />
                                    <p>{item.includes.include_5}</p>
                                </div>
                            </div>
                            <button className='grad-button' onClick={() => handleButtonClick(item)}>
                                {t("pricingplan.item_1.9")}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && selectedPlan && (
                <div className="join-modal-overlay">
                    <div className="join-modal-content">
                        <div className="join-modal-content__header">
                            <h2>{selectedPlan.title}</h2>
                            <IoCloseSharp className="join__close" onClick={closeModal} />
                        </div>
                        <p>Write what exactly you want to issue and we will definitely contact you!</p>
                        
                        <form className="join-form" onSubmit={handleSubmit}>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleInputChange}
                                required 
                                placeholder='Your Email' 
                            />
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleInputChange}
                                required 
                                placeholder='Your Phone' 
                            />
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message}
                                onChange={handleInputChange}
                                required 
                                placeholder='Message' 
                                rows="4"
                            />
                            
                            {submitStatus === 'success' && (
                                <div className="form-success">
                                    Thank you! We will contact you soon.
                                </div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <div className="form-error">
                                    Something went wrong. Please try again.
                                </div>
                            )}
                            
                            <button 
                                type="submit" 
                                className="grad-button" 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};