"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./reviewCarousel.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        img: "/images/reviews/1.png",
        name: "Tillaev Abdukholik",
        position: "Boshqaruvchi hamkor",
        text: "Akbar Soft bilan yuridik firmamiz uchun sayt ishlab chiqdik. Professional, qulay va uslubiy jihatdan qat'iy, bizning barcha talablarimizga to'liq javob beradigan mahsulot oldik. Ish sifatli va o'z vaqtida bajarildi.",
        company: "Tillayev Law Partners",
        rating: 5,
        date: "15-mart 2024"
    },
    {
        id: 2,
        img: "/images/reviews/2.png",
        name: "Kamila Rakhimova",
        position: "CEO",
        text: "Ajoyib professionallar jamoasi! 2 oy ichida noldan internet-do'kon yaratdik. Natijadan juda mamnunmiz, sotuvlar 150% ga oshdi. Tavsiya qilaman!",
        company: "Fashion Store",
        rating: 5,
        date: "10-fevral 2024"
    },
    {
        id: 3,
        img: "/images/reviews/3.png",
        name: "Dostonbek Karimov",
        position: "Asoschi",
        text: "Biznesim uchun Telegram bot buyurtma qildim. Yigitlar hamma narsani tez va sifatli qilishdi. Bot ajoyib ishlaydi, mijozlar mamnun. Rahmat!",
        company: "Smart Service",
        rating: 5,
        date: "5-yanvar 2024"
    },
    {
        id: 4,
        img: "/images/reviews/4.png",
        name: "Madina Usmanova",
        position: "Marketolog",
        text: "Ishga ajoyib yondashuv. Hammasini tushuntirib berishdi, yechimlarni tanlashda yordam berishdi. Sayt zamonaviy va tezkor bo'lib chiqdi. Yana albatta murojaat qilaman!",
        company: "Digital Agency",
        rating: 4,
        date: "20-dekabr 2023"
    },
];

export default function ReviewCarousel() {
    const [isVisible, setIsVisible] = useState(false);

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

        const element = document.querySelector('.carousel');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={`carousel ${isVisible ? 'visible' : ''}`} id="reviews">
            <div className="testimonial-header">
                <div className="testimonial-header__section">
                    <span className="testimonial-badge">Mijozlar fikri</span>
                    <h1 className="testimonial-title">
                        Mijozlar biz haqimizda <span className="gradient-text">nima deyishadi</span>
                    </h1>
                    <p className="testimonial-subtitle">
                        O'zbekiston bo'ylab 50 dan ortiq mamnun mijozlar
                    </p>
                </div>
            </div>

            <div className="main">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: ".custom-dots",
                        dynamicBullets: true
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 20 },
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 25 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="testimonial-card">
                                <FaQuoteLeft className="testimonial-quote" />
                                <div className="testimonial-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                                        />
                                    ))}
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <div className="testimonial-author">
                                    <img
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        onError={(e) => {
                                            e.target.src = "/images/reviews/default.png";
                                        }}
                                    />
                                    <div className="testimonial-author-info">
                                        <h4>{testimonial.name}</h4>
                                        <span className="testimonial-position">{testimonial.position}</span>
                                        <span className="testimonial-company">{testimonial.company}</span>
                                    </div>
                                </div>
                                <div className="testimonial-date">{testimonial.date}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="custom-navigation">
                <div className="swiper-button-prev-custom">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="custom-dots"></div>
                <div className="swiper-button-next-custom">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}