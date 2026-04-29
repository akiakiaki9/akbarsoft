"use client"
import React, { useState, useEffect, useRef } from 'react'
import CASES from '@/app/utils/cases'
import Link from 'next/link'
import { FiArrowRight, FiCalendar, FiMapPin, FiDollarSign, FiUser } from 'react-icons/fi'

export default function Cases() {
    const [hoveredId, setHoveredId] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className='cases' id='cases' ref={sectionRef}>
            <div className="cases-header">
                <span className="cases-header__badge">наши проекты</span>
                <h1 className="cases-header__title">РЕАЛИЗОВАННЫЕ НАМИ ПРОЕКТЫ</h1>
                <p className="cases-header__description">
                    Ознакомьтесь с нашими лучшими проектами и получите подробную информацию о них
                </p>
            </div>

            <div className="main">
                <div className={`cases-grid ${isVisible ? 'visible' : ''}`}>
                    {CASES.map((item, index) => (
                        <div
                            className="cases-card"
                            key={item.id}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="cases-card__image-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cases-card__image"
                                />
                                <div className={`cases-card__overlay ${hoveredId === item.id ? 'active' : ''}`}>
                                    <span className="cases-card__category">{item.title}</span>
                                    <h3 className="cases-card__title">{item.name}</h3>
                                </div>
                            </div>

                            <div className="cases-card__content">
                                <div className="cases-card__stats">
                                    <div className="cases-card__stat">
                                        <FiUser className="cases-card__stat-icon" />
                                        <div>
                                            <span className="cases-card__stat-label">Клиент</span>
                                            <span className="cases-card__stat-value">{item.client}</span>
                                        </div>
                                    </div>
                                    <div className="cases-card__stat">
                                        <FiCalendar className="cases-card__stat-icon" />
                                        <div>
                                            <span className="cases-card__stat-label">Дата</span>
                                            <span className="cases-card__stat-value">{item.date}</span>
                                        </div>
                                    </div>
                                    <div className="cases-card__stat">
                                        <FiMapPin className="cases-card__stat-icon" />
                                        <div>
                                            <span className="cases-card__stat-label">Локация</span>
                                            <span className="cases-card__stat-value">{item.location}</span>
                                        </div>
                                    </div>
                                    <div className="cases-card__stat">
                                        <FiDollarSign className="cases-card__stat-icon" />
                                        <div>
                                            <span className="cases-card__stat-label">Бюджет</span>
                                            <span className="cases-card__stat-value">{item.budget}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="cases-card__description">{item.subtitle}</p>

                                <Link href={item.link} className="cases-card__link">
                                    <span>Подробнее</span>
                                    <FiArrowRight className="cases-card__link-icon" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}