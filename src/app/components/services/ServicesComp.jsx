'use client'
import React, { useState } from 'react';
import SERVICES from '@/app/utils/pricelist';
import { GoArrowRight } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

export default function PriceListComp() {
    const [isMonthly, setIsMonthly] = useState(true); // По умолчанию ежемесячный

    return (
        <div className='pricelist' id='services'>
            <div className="pricelist-blok">
                <div className="pricelist-blok__section pricelist-blok__section-1">
                    <div className="pricelist-blok__section-part">
                        <p>Цены и упаковка</p>
                        <h1>Лучшие цен для клиента</h1>
                    </div>
                    <div className="pricelist-blok__section-part__container">
                        <button
                            style={{ backgroundColor: isMonthly ? 'var(--violet-color)' : '#1d1d1d' }}
                            onClick={() => setIsMonthly(true)}
                        >
                            Monthly
                        </button>
                        <button
                            style={{ backgroundColor: !isMonthly ? 'var(--violet-color)' : '#1d1d1d' }}
                            onClick={() => setIsMonthly(false)}
                        >
                            Yearly
                        </button>
                    </div>
                </div>
                <div className="pricelist-blok__section pricelist-blok__section-2">
                    {SERVICES.map(item => (
                        <div className="pricelist-blok__section-2__container-card" key={item.id}>
                            <h1>{item.rate}</h1>
                            <div className='pricelist__div'></div>
                            <div className="pricelist-blok__section-2__container-card-part">
                                <h1>${isMonthly ? item.monthly_price : item.yearly_price}/</h1>
                                <p>{isMonthly ? 'monthly' : 'yearly'}</p>
                            </div>
                            <p className='pricelist-blok__section-2__container-card-p'>Per subscriber per year</p>
                            <div className='pricelist__div'></div>
                            <div className="pricelist-blok__section-2__container-card__container">
                                <div className="pricelist-blok__section-2__container-card__container-part">
                                    <GoArrowRight className='pricelist__icon1' />
                                    <p>Static responsive website</p>
                                </div>
                                <div className="pricelist-blok__section-2__container-card__container-part">
                                    <GoArrowRight className='pricelist__icon1' />
                                    <p>Video marketing</p>
                                </div>
                                <div className="pricelist-blok__section-2__container-card__container-part">
                                    <GoArrowRight className='pricelist__icon1' />
                                    <p>Keywords research</p>
                                </div>
                                <div className="pricelist-blok__section-2__container-card__container-part">
                                    <GoArrowRight className='pricelist__icon1' />
                                    <p>Facebook campaign</p>
                                </div>
                                <div className="pricelist-blok__section-2__container-card__container-part">
                                    <GoArrowRight className='pricelist__icon1' />
                                    <p>eCommerce solution</p>
                                </div>
                                <div className="pricelist-blok__section-2__container-card__container-part">
                                    <GoArrowRight className='pricelist__icon1' />
                                    <p>Google adword</p>
                                </div>
                            </div>
                            <div className="pricelist__div"></div>
                            <div className="pricelist-blok__footer">
                                <p>Purchase Now</p>
                                <FaArrowRightLong className='pricelist__icon2' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};