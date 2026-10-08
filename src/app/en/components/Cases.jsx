"use client"
import React, { useState, useEffect, useRef } from 'react'
import CASES from '@/app/utils/cases'
import Link from 'next/link'
import { FiArrowRight, FiCalendar, FiMapPin, FiUser } from 'react-icons/fi'
import '@/app/styles/cases.css'

export default function Cases() {
    const [hoveredId, setHoveredId] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Сортируем: сначала последние id
    const sortedCases = [...CASES].sort((a, b) => b.id - a.id);

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

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className='cases' id='cases' ref={sectionRef}>
            <div className="cases-header">
                <span className="cases-header__badge">our projects</span>
                <h1 className="cases-header__title">PROJECTS WE HAVE DELIVERED</h1>
                <p className="cases-header__description">
                    Explore our best projects and get detailed information about each of them
                </p>
            </div>

            <div className="main">
                <div className={`cases-grid ${isVisible ? 'visible' : ''}`}>
                    {sortedCases.map((item, index) => (
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
                                            <span className="cases-card__stat-label">Client</span>
                                            <span className="cases-card__stat-value">{item.client}</span>
                                        </div>
                                    </div>
                                    <div className="cases-card__stat">
                                        <FiCalendar className="cases-card__stat-icon" />
                                        <div>
                                            <span className="cases-card__stat-label">Date</span>
                                            <span className="cases-card__stat-value">{item.date}</span>
                                        </div>
                                    </div>
                                    <div className="cases-card__stat">
                                        <FiMapPin className="cases-card__stat-icon" />
                                        <div>
                                            <span className="cases-card__stat-label">Location</span>
                                            <span className="cases-card__stat-value">{item.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="cases-card__description">{item.subtitle}</p>

                                <Link
                                    href={`/en/case/${item.slug}`}
                                    className="cases-card__link"
                                >
                                    <span>Learn more</span>
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