'use client'
import React, { useState } from 'react';
import { SERVICES, WEBSITE } from '@/app/utils/pricelist';
import { GoArrowRight } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

export default function PriceListComp() {
    const [isWebSite, setIsWebSite] = useState(true); // По умолчанию веб-сайты

    // Выбор данных на основе состояния
    const dataToDisplay = isWebSite ? WEBSITE : SERVICES;

    return (
        <div className='pricelist' id='services'>
            <div className="pricelist-blok">
                <div className="pricelist-blok__section pricelist-blok__section-1">
                    <div className="pricelist-blok__section-part">
                        <p>Цены и упаковка</p>
                        <h1>Лучшие цены для клиента</h1>
                    </div>
                    <div className="pricelist-blok__section-part__container">
                        <button
                            style={{ backgroundColor: isWebSite ? 'var(--violet-color)' : '#1d1d1d' }}
                            onClick={() => setIsWebSite(true)}
                        >
                            Web
                        </button>
                        <button
                            style={{ backgroundColor: !isWebSite ? 'var(--violet-color)' : '#1d1d1d' }}
                            onClick={() => setIsWebSite(false)}
                        >
                            Service
                        </button>
                    </div>
                </div>
                <div className="pricelist-blok__section pricelist-blok__section-2">
                    {dataToDisplay.map(item => (
                        <div className="pricelist-blok__section-2__container-card" key={item.id}>
                            <h1>{item.name}</h1>
                            <div className='pricelist__div'></div>
                            <div className="pricelist-blok__section-2__container-card-part">
                                <h1>
                                    {isWebSite ? `$${item.min_price} - $${item.max_price}` : `$${item.price}`}
                                </h1>
                            </div>
                            <div className='pricelist__div'></div>
                            <div className="pricelist-blok__section-2__container-card__container">
                                {[item.subtitle1, item.subtitle2, item.subtitle3, item.subtitle4, item.subtitle5, item.subtitle6]
                                    .filter(Boolean) // Убираем пустые подзаголовки
                                    .map((subtitle, index) => (
                                        <div className="pricelist-blok__section-2__container-card__container-part" key={index}>
                                            <GoArrowRight className='pricelist__icon1' />
                                            <p>{subtitle}</p>
                                        </div>
                                    ))}
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