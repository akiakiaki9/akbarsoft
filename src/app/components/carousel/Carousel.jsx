"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        img: "/images/carousel/carousel-1.jpg",
        title: "Michael Chen",
        subtitle: "Digimax transformed our online presence! Their web development expertise and creative design elevated our brand, attracting more customers than ever before.",
        company: "Bright Electronics"
    },
    {
        img: "/images/carousel/carousel-2.jpg",
        title: "Артем Ефремов",
        subtitle: "Евгений, профессионал своего дела, быстро закрыл вопрос с сайтом. Дедлайн был 3 дня, Евгений выполнил работу в срок и порадовал нашу команду качественными анимациями и приятным контентом, сайт вышел качественный. Вопросов нет, Евгений это, цена-качество.",
        company: "Источник Траффика"
    },
    {
        img: "/images/carousel/carousel-3.jpg",
        title: "Sarah Thompson",
        subtitle: "Choosing Digimax for digital marketing was a game-changer. Our SEO ranking skyrocketed, leading to increased visibility and a significant boost in sales.",
        company: "Thompson & Co."
    }
];

export default function Carousel() {
    return (
        <div className="carousel">
            <div className="testimonial-header">
                <div className="testimonial-header__section">
                    <p>Testimonial</p>
                    <h1>Client Feedback & Reviews</h1>
                </div>
            </div>
            <div className="main">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true, el: ".custom-dots" }}
                    breakpoints={{
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        480: { slidesPerView: 1 }
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={testimonial.img} alt={testimonial.title} />
                                <p>{testimonial.subtitle}</p>
                                <h4>{testimonial.title}</h4>
                                <span>{testimonial.company}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="custom-dots"></div>
        </div>
    );
};