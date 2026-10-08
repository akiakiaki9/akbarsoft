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
import Footer from '../../components/footer/Footer'
import QrLightbox from './QrLightbox'
import './case-page.css'

/* ============================================================
   STATIC PARAMS
   ============================================================ */
export function generateStaticParams() {
    return CASES.map((c) => ({ slug: c.slug }))
}

/* ============================================================
   МЕТАДАННЫЕ (Next.js 15/16 — params это Promise)
   ============================================================ */
export async function generateMetadata({ params }) {
    const { slug } = await params
    const item = CASES.find((c) => c.slug === slug)

    if (!item) {
        return {
            title: 'Проект не найден',
            robots: { index: false, follow: false },
        }
    }

    const title = `${item.name} — кейс веб-разработки | Akbar Soft`
    const description = item.description
        ? item.description.slice(0, 160)
        : `${item.subtitle}. Сайт разработан командой Akbar Soft (www.akbarsoft.uz).`
    const url = `https://ваш-домен.uz/ru/case/${item.slug}`

    return {
        title,
        description,
        keywords: [
            item.name,
            item.client,
            item.title,
            'веб-разработка',
            'создание сайтов',
            'кейс',
            'Akbar Soft',
            'akbarsoft.uz',
            item.location,
        ],
        authors: [{ name: 'Akbar Soft', url: 'https://www.akbarsoft.uz' }],
        alternates: {
            canonical: url,
            languages: {
                'ru': url,
                'uz': `https://ваш-домен.uz/uz/case/${item.slug}`,
                'en': `https://ваш-домен.uz/en/case/${item.slug}`,
            },
        },
        openGraph: {
            type: 'article',
            url,
            title,
            description,
            siteName: 'Akbar Soft',
            locale: 'ru_RU',
            images: [
                {
                    url: item.image,
                    width: 1200,
                    height: 630,
                    alt: item.name,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [item.image],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}

/* ============================================================
   СТРАНИЦА
   ============================================================ */
export default async function CasePage({ params }) {
    const { slug } = await params
    const item = CASES.find((c) => c.slug === slug)
    if (!item) notFound()

    const currentIndex = CASES.findIndex((c) => c.slug === slug)
    const prev = currentIndex > 0 ? CASES[currentIndex - 1] : null

    /* -------- Флаги -------- */
    const hasQr = Boolean(item.qr)
    const hasTelegram = Boolean(item.telegram)
    const hasLink = Boolean(item.link)
    const hasActions = hasLink || hasTelegram
    const hasDescription = Boolean(item.description)

    /* -------- Абзацы -------- */
    const paragraphs = hasDescription
        ? item.description
            .split(/(?<=\.)\s+(?=[А-ЯA-ZЁ])/)
            .reduce((acc, sentence) => {
                const last = acc[acc.length - 1]
                if (last && last.split('. ').length < 2) {
                    acc[acc.length - 1] = `${last} ${sentence}`
                } else {
                    acc.push(sentence)
                }
                return acc
            }, [])
        : []

    /* -------- JSON-LD -------- */
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: item.name,
        headline: item.subtitle,
        description: item.description || item.subtitle,
        image: `https://ваш-домен.uz${item.image}`,
        url: `https://ваш-домен.uz/ru/case/${item.slug}`,
        dateCreated: item.date,
        inLanguage: 'ru',
        keywords: [
            item.name,
            item.client,
            item.title,
            'веб-разработка',
            'кейс',
            'Akbar Soft',
        ].join(', '),
        creator: {
            '@type': 'Organization',
            name: 'Akbar Soft',
            url: 'https://www.akbarsoft.uz',
        },
        about: { '@type': 'Organization', name: item.client },
        locationCreated: { '@type': 'Place', name: item.location },
        genre: item.title,
    }

    const breadcrumbsLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://ваш-домен.uz/ru' },
            { '@type': 'ListItem', position: 2, name: 'Проекты', item: 'https://ваш-домен.uz/ru#cases' },
            { '@type': 'ListItem', position: 3, name: item.name, item: `https://ваш-домен.uz/ru/case/${item.slug}` },
        ],
    }

    return (
        <>
            <main className="case-page">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
                />

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
                            <Link href="/ru">Главная</Link>
                            <span className="case-page__breadcrumbs-sep">/</span>
                            <Link href="/ru#cases">Проекты</Link>
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

                {/* КОНТЕНТ */}
                <div className="case-page__container">
                    <Link href="/ru#cases" className="case-page__back">
                        <FiArrowLeft /> Назад к проектам
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
                                        Перейти на сайт
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
                                        Telegram-бот
                                    </a>
                                )}
                            </div>
                        )}

                        <div className="case-page__credit">
                            <span className="case-page__credit-label">Разработано</span>
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

                    {/* INFO — мета-грид + QR через лайтбокс */}
                    <div className={`case-page__info ${hasQr ? '' : 'case-page__info--no-qr'}`}>
                        <div className="case-page__grid">
                            <div className="case-page__stat">
                                <FiUser />
                                <div>
                                    <span className="cases-card__stat-label">Клиент</span>
                                    <span className="cases-card__stat-value">{item.client}</span>
                                </div>
                            </div>
                            <div className="case-page__stat">
                                <FiCalendar />
                                <div>
                                    <span className="cases-card__stat-label">Дата</span>
                                    <span className="cases-card__stat-value">{item.date}</span>
                                </div>
                            </div>
                            <div className="case-page__stat">
                                <FiMapPin />
                                <div>
                                    <span className="cases-card__stat-label">Локация</span>
                                    <span className="cases-card__stat-value">{item.location}</span>
                                </div>
                            </div>
                        </div>

                        {hasQr && (
                            <QrLightbox
                                src={item.qr}
                                alt={`QR-код — ${item.name}`}
                            />
                        )}
                    </div>

                    {/* О ПРОЕКТЕ */}
                    {hasDescription && (
                        <section className="case-page__about">
                            <h2 className="case-page__about-title">О проекте</h2>
                            <div className="case-page__about-body">
                                {paragraphs.map((p, i) => (
                                    <p key={i} className="case-page__about-text">
                                        {p.trim()}
                                    </p>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* PREV */}
                    {prev && (
                        <nav className="case-page__nav" aria-label="Навигация по проектам">
                            <Link href={`/ru/case/${prev.slug}`} className="case-page__nav-link case-page__nav-link--prev">
                                <FiArrowLeft />
                                <div>
                                    <span className="case-page__nav-label">Предыдущий</span>
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