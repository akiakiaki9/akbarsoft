"use client";
import React, { useState } from 'react';
import { RiRecordCircleLine } from "react-icons/ri";
import { IoCloseSharp } from 'react-icons/io5';

export default function PricingPlan() {
    const PRICING = [
        {
            id: 1,
            title: "Vizitka sayt",
            subtitle: "Landing-page — mijozlarni jalb qilish, reklama va lead'lar uchun bir sahifali sayt.",
            price: '$300 - $500',
            discount: '$200 - $300',
            includes: {
                include_1: "Moslashuvchan dizayn",
                include_2: "Harakatga chaqiruv tugmalari",
                include_3: "Asosiy SEO",
                include_4: "Tez yuklanish",
                include_5: "Kontakt formasi integratsiyasi"
            }
        },
        {
            id: 2,
            title: "Biznes-sayt",
            subtitle: "Kengaytirish imkoniyatiga ega, to'liq funksiyali biznes sayt.",
            price: '$400 - $1500',
            discount: '$350 - $1000',
            includes: {
                include_1: "Moslashuvchan dizayn",
                include_2: "Sayt konstruktori",
                include_3: "Ijtimoiy tarmoqlar integratsiyasi",
                include_4: "Asosiy SEO",
                include_5: "Kontakt formasi integratsiyasi"
            }
        },
        {
            id: 3,
            title: "Xaritalarda joylashuv",
            subtitle: "Kompaniyangizni Google Maps, 2GIS, Yandex.Maps (Taxi) va Apple maps-ga qo'shamiz",
            price: '$100',
            discount: '$50',
            includes: {
                include_1: "Google Maps-ga qo'shish",
                include_2: "2GIS-ga qo'shish",
                include_3: "Yandex.Maps-ga qo'shish",
                include_4: "Apple Maps-ga qo'shish",
                include_5: "Barcha formatlarni qo'llab-quvvatlash"
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
                            <h2 className='pricing-blok__section__h2'>O'z ichiga oladi:</h2>
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
                                BUYURTMA
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
                        <p>Aynan nimani buyurtma qilmoqchi ekanligingizni yozing va biz albatta siz bilan bog'lanamiz!</p>

                        <form className="join-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder='Sizning Email'
                            />
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                placeholder='Sizning Telefon'
                            />
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                placeholder='Xabar'
                                rows="4"
                            />

                            {submitStatus === 'success' && (
                                <div className="form-success">
                                    Rahmat! Tez orada siz bilan bog'lanamiz.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="form-error">
                                    Nimadir xato ketdi. Iltimos, qayta urinib ko'ring.
                                </div>
                            )}

                            <button
                                type="submit"
                                className="grad-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Yuborilmoqda...' : 'Yuborish'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};