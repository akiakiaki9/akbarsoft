import React from 'react'
import ProjectsComp from './ProjectsComp'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

export const metadata = {
  title: 'Наши Работы — проекты Akbar Soft',
  description: 'Посмотрите проекты, выполненные командой Akbar Soft. Создание корпоративных сайтов, лендингов и других веб-решений.',
  keywords: 'Akbar Soft, Наши Работы, проекты, портфолио, веб-разработка, веб-сайты, веб-дизайн, Бухара, Bukhara, веб, sayt, sayt zakaz, sayt taxlash, sayt sotib olish, web-site, web-sites, web site, web-sites, web site order',
  robots: 'index, follow',
  canonical: 'https://akbarsoft.uz/projects',
  openGraph: {
    title: 'Наши Работы — проекты Akbar Soft',
    description: 'Посмотрите лучшие проекты Akbar Soft: корпоративные сайты, лендинги и другие веб-решения. Мы находимся в Бухаре.',
    url: 'https://akbarsoft.uz/projects',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Наши Работы — проекты Akbar Soft',
    description: 'Посмотрите лучшие проекты Akbar Soft: корпоративные сайты, лендинги и другие веб-решения. Мы находимся в Бухаре.',
  },
};

export default function Projects() {
  return (
    <div>
      <Navbar />
      <ProjectsComp />
      <Footer />
    </div>
  )
}
