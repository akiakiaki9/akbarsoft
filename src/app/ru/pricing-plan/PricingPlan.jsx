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
            price: '$1000 - $3000',
            discount: '$800 - $2500',
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
                    <p className='pricing-header__p-1'>{t("pricingplan.pagename_1")}</p>
                    <h1>{t("pricingplan.pagename_2")}</h1>
                    <p className='pricing-header__p-2'>{t("pricingplan.pagename_3")}</p>
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