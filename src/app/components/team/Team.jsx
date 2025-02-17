"use client"
import TEAM from '@/app/utils/team'
import React from 'react'

export default function Team() {
    return (
        <div className='team'>
            <div className="main">
                <div className="team-header">
                    <h1>Meet our team</h1>
                    <div></div>
                    <p>Alone we can do so little, together we can do so much.</p>
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