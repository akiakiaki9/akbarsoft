import CASES from '@/app/utils/cases'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
    FiArrowLeft,
    FiCalendar,
    FiMapPin,
    FiUser,
    FiExternalLink,
    FiSend,
} from 'react-icons/fi'
import QrLightbox from './QrLightbox'
import './case-page.css'
import Footer from '../../components/footer/Footer'

const BASE_URL = 'https://ваш-домен.uz'

export function generateStaticParams() {
    return CASES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const item = CASES.find((c) => c.slug === slug)

    if (!item) {
        return { title: 'Loyiha topilmadi', robots: { index: false, follow: false } }
    }

    const title = `${item.name} — Veb-sayt keysi | Akbar Soft`
    const description = item.description
        ? item.description.slice(0, 160)
        : `${item.subtitle}. Sayt Akbar Soft jamoasi tomonidan ishlab chiqilgan (www.akbarsoft.uz).`
    const url = `${BASE_URL}/uz/case/${item.slug}`

    return {
        title,
        description,
        keywords: [
            item.name,
            item.client,
            item.title,
            'veb-ishlanma',
            'sayt yaratish',
            'keys',
            'Akbar Soft',
            'akbarsoft.uz',
            item.location,
        ],
        authors: [{ name: 'Akbar Soft', url: 'https://www.akbarsoft.uz' }],
        alternates: {
            canonical: url,
            languages: {
                'ru': `${BASE_URL}/ru/case/${item.slug}`,
                'uz': `${BASE_URL}/uz/case/${item.slug}`,
                'en': `${BASE_URL}/en/case/${item.slug}`,
            },
        },
        openGraph: {
            type: 'article',
            url,
            title,
            description,
            siteName: 'Akbar Soft',
            locale: 'uz_UZ',
            images: [{ url: item.image, width: 1200, height: 630, alt: item.name }],
        },
        twitter: { card: 'summary_large_image', title, description, images: [item.image] },
        robots: {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
        },
    }
}

export default async function CasePage({ params }) {
    const { slug } = await params
    const item = CASES.find((c) => c.slug === slug)
    if (!item) notFound()

    const currentIndex = CASES.findIndex((c) => c.slug === slug)
    const prev = currentIndex > 0 ? CASES[currentIndex - 1] : null

    const hasQr = Boolean(item.qr)
    const hasTelegram = Boolean(item.telegram)
    const hasLink = Boolean(item.link)
    const hasActions = hasLink || hasTelegram
    const hasDescription = Boolean(item.description)

    const paragraphs = hasDescription
        ? item.description
            .split(/(?<=\.)\s+(?=[A-ZА-ЯЁ])/)
            .reduce((acc, s) => {
                const last = acc[acc.length - 1]
                if (last && last.split('. ').length < 2) acc[acc.length - 1] = `${last} ${s}`
                else acc.push(s)
                return acc
            }, [])
        : []

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: item.name,
        headline: item.subtitle,
        description: item.description || item.subtitle,
        image: `${BASE_URL}${item.image}`,
        url: `${BASE_URL}/uz/case/${item.slug}`,
        dateCreated: item.date,
        inLanguage: 'uz',
        keywords: [item.name, item.client, item.title, 'veb-ishlanma', 'keys', 'Akbar Soft'].join(', '),
        creator: { '@type': 'Organization', name: 'Akbar Soft', url: 'https://www.akbarsoft.uz' },
        about: { '@type': 'Organization', name: item.client },
        locationCreated: { '@type': 'Place', name: item.location },
        genre: item.title,
    }

    const breadcrumbsLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Bosh sahifa', item: `${BASE_URL}/uz` },
            { '@type': 'ListItem', position: 2, name: 'Loyihalar', item: `${BASE_URL}/uz#cases` },
            { '@type': 'ListItem', position: 3, name: item.name, item: `${BASE_URL}/uz/case/${item.slug}` },
        ],
    }

    return (
        <>
            <main className="case-page">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />

                {/* HERO */}
                <section className="case-page__hero">
                    <img
                        src={item.image}
                        alt={`${item.name} — ${item.title}`}
                        className="case-page__hero-image"
                    />
                    <div className="case-page__hero-overlay" />

                    <div className="case-page__container">
                        <nav className="case-page__breadcrumbs" aria-label="Breadcrumb">
                            <Link href="/uz">Bosh sahifa</Link>
                            <span className="case-page__breadcrumbs-sep">/</span>
                            <Link href="/uz#cases">Loyihalar</Link>
                            <span className="case-page__breadcrumbs-sep">/</span>
                            <span aria-current="page">{item.name}</span>
                        </nav>

                        <div className="case-page__hero-content">
                            <span className="cases-card__category">{item.title}</span>
                            <h1 className="case-page__title">{item.name}</h1>
                            <p className="case-page__subtitle">{item.subtitle}</p>
                        </div>
                    </div>
                </section>

                {/* KONTENT */}
                <div className="case-page__container">
                    <Link href="/uz#cases" className="case-page__back">
                        <FiArrowLeft /> Loyihalarga qaytish
                    </Link>

                    {/* TOP BAR */}
                    <div className={`case-page__top-bar ${hasActions ? '' : 'case-page__top-bar--no-actions'}`}>
                        {hasActions && (
                            <div className="case-page__actions">
                                {hasLink && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cases-card__link cases-card__link--site"
                                    >
                                        Saytga o‘tish
                                        <FiExternalLink className="cases-card__link-icon" />
                                    </a>
                                )}

                                {hasTelegram && (
                                    <a
                                        href={item.telegram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cases-card__link cases-card__link--tg"
                                    >
                                        <FiSend />
                                        Telegram bot
                                    </a>
                                )}
                            </div>
                        )}

                        <div className="case-page__credit">
                            <span className="case-page__credit-label">Ishlab chiqilgan</span>
                            <a
                                href="https://www.akbarsoft.uz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="case-page__credit-brand"
                            >
                                Akbar Soft
                                <FiExternalLink />
                            </a>
                        </div>
                    </div>

                    {/* INFO + QR */}
                    <div className={`case-page__info ${hasQr ? '' : 'case-page__info--no-qr'}`}>
                        <div className="case-page__grid">
                            <div className="case-page__stat">
                                <FiUser />
                                <div>
                                    <span className="cases-card__stat-label">Mijoz</span>
                                    <span className="cases-card__stat-value">{item.client}</span>
                                </div>
                            </div>
                            <div className="case-page__stat">
                                <FiCalendar />
                                <div>
                                    <span className="cases-card__stat-label">Sana</span>
                                    <span className="cases-card__stat-value">{item.date}</span>
                                </div>
                            </div>
                            <div className="case-page__stat">
                                <FiMapPin />
                                <div>
                                    <span className="cases-card__stat-label">Manzil</span>
                                    <span className="cases-card__stat-value">{item.location}</span>
                                </div>
                            </div>
                        </div>

                        {hasQr && (
                            <QrLightbox
                                src={item.qr}
                                alt={`QR-kod — ${item.name}`}
                                ariaLabel="QR-kodni kattalashtirish"
                                label="Kamerani yo‘naltiring"
                                lightboxAriaLabel="QR-kod to‘liq o‘lchamda"
                                closeAriaLabel="Yopish"
                            />
                        )}
                    </div>

                    {/* LOYIHA HAQIDA */}
                    {hasDescription && (
                        <section className="case-page__about">
                            <h2 className="case-page__about-title">Loyiha haqida</h2>
                            <div className="case-page__about-body">
                                {paragraphs.map((p, i) => (
                                    <p key={i} className="case-page__about-text">{p.trim()}</p>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* PREV */}
                    {prev && (
                        <nav className="case-page__nav" aria-label="Loyihalar bo‘yicha navigatsiya">
                            <Link href={`/uz/case/${prev.slug}`} className="case-page__nav-link case-page__nav-link--prev">
                                <FiArrowLeft />
                                <div>
                                    <span className="case-page__nav-label">Oldingi</span>
                                    <span className="case-page__nav-title">{prev.name}</span>
                                </div>
                            </Link>
                        </nav>
                    )}
                </div>
            </main>

            <Footer />
        </>
    )
}