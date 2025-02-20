"use client"
import TEAM from '../../utils/team';
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Team() {
    const { t } = useTranslation();
    return (
        <div className='team'>
            <div className="main">
                <div className="team-header">
                    <h1>{t("team.1")}</h1>
                    <div></div>
                    <p>{t("team.2")}</p>
                </div>
                <div className="team-blok">
                    {TEAM.map(item => (
                        <div className='team-blok__section' key={item.id}>
                            <div className="team-blok__section__image">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="team-blok__section__container">
                                <h3>{item.name}</h3>
                                <p>{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};