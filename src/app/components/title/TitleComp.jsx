'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export default function TitleComp() {

    const pathname = usePathname();
    const componentName = pathname ? pathname.replace('/', '') || 'Home' : '';

    return (
        <div className='title'>
            <div className="title-blok">
                <p className='title__parent'>Главное</p>
                <p className='title__drop'>/</p>
                <p className='title__children'>{componentName}</p>
            </div>
        </div>
    )
};