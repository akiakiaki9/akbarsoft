'use client'
import React, { useState } from 'react';
import { PROJECTS_LIST } from '@/app/utils/projects';

export default function ProjectsComp() {
    const [selectedType, setSelectedType] = useState('Все');

    // Получение уникальных типов проектов, включая "All"
    const types = ['Все', ...new Set(PROJECTS_LIST.map(item => item.type))];

    // Фильтрация проектов по выбранному типу
    const filteredProjects = selectedType === 'Все'
        ? PROJECTS_LIST
        : PROJECTS_LIST.filter(item => item.type === selectedType);

    return (
        <div className='projects'>
            <div className="projects-header">
                <h1>Наши Работы</h1>
                <div className="projects-header__container">
                    {types.map((type, index) => (
                        <button
                            key={index}
                            className={selectedType === type ? 'active' : ''} // Добавляем класс для активной кнопки
                            onClick={() => setSelectedType(type)} // Обновляем фильтр
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
            <div className="projects-blok">
                {filteredProjects.map(item => (
                    <div className="projects-blok__section" key={item.id}>
                        <div className="projects-blok__section__image">
                            <a href={item.link}>
                                <img src={item.image} alt={item.title} />
                            </a>
                        </div>
                        <div className="projects-blok__section__container">
                            <a href={item.link}><h2>{item.title}</h2></a>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};