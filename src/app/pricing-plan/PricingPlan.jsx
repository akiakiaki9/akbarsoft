"use client";
import React, { useState } from 'react';
import PRICING from '../utils/pricing';
import { RiRecordCircleLine } from "react-icons/ri";
import { IoCloseSharp } from 'react-icons/io5';

export default function PricingPlan() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleButtonClick = (plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPlan(null);
    };

    return (
        <div className='pricing'>
            <div className="pricing-header">
                <div className="pricing-header__container">
                    <p className='pricing-header__p-1'>Pricing plan</p>
                    <h1>Predictable Pricing. No Surprises.</h1>
                    <p className='pricing-header__p-2'>Great value at an affordable rate. No hidden costs. No frills.</p>
                </div>
            </div>
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
                            <h2 className='pricing-blok__section__h2'>Includes:</h2>
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
                                PURCHASE ORDER
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
                        <form className="join-form">
                            <input type="email" id="email" name="email" required placeholder='Your Email' />
                            <input type="tel" id="phone" name="phone" required placeholder='Your Phone' />
                            <textarea type="text" id="message" name="message" required placeholder='Message' />
                            <button type="submit" className="grad-button">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};