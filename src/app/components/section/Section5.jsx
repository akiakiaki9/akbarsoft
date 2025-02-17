"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { usePathname } from "next/navigation";

export default function Section5() {
    const pathname = usePathname();
    const imageSrc = pathname === "/team" ? "/images/services/services.jpg" : "/images/section5/section5.jpg";

    const skills = [
        { name: "Web Development", percentage: 91 },
        { name: "Web Design", percentage: 87 },
        { name: "Search Engine Optimization", percentage: 83 },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div className="section5" ref={ref}>
            <div className="section5-blok">
                <div className="section5-blok__section section5-blok__section-1">
                    <h1>Experience the magic of Akbar Soft. Contact us to discuss your project.</h1>
                    <p className="section5-blok__p">
                        Transform your vision into reality with Akbar Soft. We combine innovation, strategy, and cutting-edge
                        technology to deliver exceptional digital solutions. Reach out and let's build something great together!
                    </p>
                    <div className="section5-blok__section__container">
                        {skills.map((skill, index) => (
                            <div className="section5-blok__section__container-part" key={index}>
                                <div className="section5-blok__section__container-part__header">
                                    <p>{skill.name}</p>
                                    <p>
                                        {inView && (
                                            <CountUp start={0} end={skill.percentage} duration={5} delay={0.3} />
                                        )}
                                        %
                                    </p>
                                </div>
                                <div className="section5-blok__section__container-part__bar">
                                    <div
                                        className={`section5-blok__section__container-part__bar-fill ${inView ? "active" : ""}`}
                                        style={{ width: inView ? `${skill.percentage}%` : "0%" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section5-blok__section">
                    <img src={imageSrc} alt="" />
                </div>
            </div>
        </div>
    );
};