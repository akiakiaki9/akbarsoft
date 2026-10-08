import Link from 'next/link'
import {
    FiArrowRight,
    FiExternalLink,
    FiCode,
    FiSmartphone,
    FiTrendingUp,
    FiSearch,
    FiZap,
    FiUsers,
    FiCheckCircle,
    FiPhone,
    FiMapPin,
    FiMail,
} from 'react-icons/fi'
import './about.css'
import Footer from '../components/footer/Footer'

const BASE_URL = 'https://ваш-домен.uz'

/* ============================================================
   МЕТАДАННЫЕ (SEO)
   ============================================================ */
export const metadata = {
    title: 'Заказать веб-сайт в Бухаре — IT-студия Akbar Soft',
    description:
        'Akbar Soft — IT-студия в Бухаре. Разработка сайтов, интернет-магазинов, веб-приложений, Telegram-ботов и QR-меню под ключ. Онлайн-заказ, SEO-продвижение в Google и Yandex. Оставьте заявку — рассчитаем стоимость за 24 часа.',
    keywords: [
        'заказать сайт в Бухаре',
        'веб-студия Бухара',
        'IT-студия Бухара',
        'Akbar Soft',
        'akbarsoft.uz',
        'создание сайтов Бухара',
        'разработка сайтов Узбекистан',
        'интернет-магазин Бухара',
        'Telegram-бот Узбекистан',
        'QR-меню для ресторана',
        'SEO-продвижение сайта Бухара',
        'веб-разработка Бухара',
        'заказать веб-сайт Узбекистан',
    ],
    authors: [{ name: 'Akbar Soft', url: 'https://www.akbarsoft.uz' }],
    alternates: {
        canonical: `${BASE_URL}/ru/about`,
        languages: {
            ru: `${BASE_URL}/ru/about`,
            uz: `${BASE_URL}/uz/about`,
            en: `${BASE_URL}/en/about`,
        },
    },
    openGraph: {
        type: 'website',
        url: `${BASE_URL}/ru/about`,
        title: 'Заказать веб-сайт в Бухаре — IT-студия Akbar Soft',
        description:
            'Разработка сайтов, интернет-магазинов и веб-приложений под ключ. SEO-продвижение, Telegram-боты, QR-меню. Офис в Бухаре, работаем по всему Узбекистану.',
        siteName: 'Akbar Soft',
        locale: 'ru_RU',
        images: [
            {
                url: `${BASE_URL}/images/og/akbarsoft-about.jpg`,
                width: 1200,
                height: 630,
                alt: 'Akbar Soft — IT-студия в Бухаре',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Заказать веб-сайт в Бухаре — IT-студия Akbar Soft',
        description:
            'Разработка сайтов, интернет-магазинов и веб-приложений под ключ. SEO-продвижение, Telegram-боты, QR-меню.',
        images: [`${BASE_URL}/images/og/akbarsoft-about.jpg`],
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

/* ============================================================
   JSON-LD
   ============================================================ */
const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Akbar Soft',
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    description:
        'IT-студия в Бухаре. Разработка сайтов, веб-приложений, интернет-магазинов, Telegram-ботов и QR-меню.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Бухара',
        addressCountry: 'UZ',
    },
    areaServed: [
        { '@type': 'City', name: 'Бухара' },
        { '@type': 'Country', name: 'Узбекистан' },
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+998-XX-XXX-XX-XX',
        contactType: 'customer service',
        availableLanguage: ['ru', 'uz', 'en'],
    },
    sameAs: ['https://www.akbarsoft.uz', 'https://t.me/akbarsoft'],
}

const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Разработка веб-сайтов и веб-приложений',
    provider: {
        '@type': 'Organization',
        name: 'Akbar Soft',
        url: BASE_URL,
    },
    areaServed: {
        '@type': 'Country',
        name: 'Узбекистан',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Услуги Akbar Soft',
        itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Создание сайтов под ключ' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Интернет-магазины и каталоги' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Веб-приложения и SaaS' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Telegram-боты и автоответчики' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'QR-меню для ресторанов и кафе' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO-продвижение сайтов' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Редизайн и поддержка существующих сайтов' } },
        ],
    },
}

const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: `${BASE_URL}/ru` },
        { '@type': 'ListItem', position: 2, name: 'О нас', item: `${BASE_URL}/ru/about` },
    ],
}

/* ============================================================
   ДАННЫЕ ДЛЯ СЕКЦИЙ
   ============================================================ */
const SERVICES = [
    {
        icon: <FiCode />,
        title: 'Разработка сайтов под ключ',
        text: 'Корпоративные сайты, лендинги, каталоги и интернет-магазины. От идеи до публикации — берём на себя всё: дизайн, вёрстку, программирование и наполнение.',
    },
    {
        icon: <FiSmartphone />,
        title: 'Веб-приложения и SaaS',
        text: 'Личные кабинеты, CRM, системы бронирования, платформы и сервисы. Работаем с React, Next.js, Node.js и современными базами данных.',
    },
    {
        icon: <FiUsers />,
        title: 'Telegram-боты и автоответчики',
        text: 'Боты для приёма заказов, консультаций и поддержки клиентов. Автоответчик мгновенно подскажет адрес, контакты и ссылку на каталог.',
    },
    {
        icon: <FiZap />,
        title: 'QR-меню для ресторанов',
        text: 'Онлайн-меню на нескольких языках с QR-кодом на каждом столике. Мгновенное обновление без перепечаток, удобно для гостей и персонала.',
    },
    {
        icon: <FiSearch />,
        title: 'SEO-продвижение',
        text: 'Оптимизация под Google и Yandex, локальный поиск, микроразметка Schema.org, техническое SEO. Клиенты находят вас в поиске без рекламы.',
    },
    {
        icon: <FiTrendingUp />,
        title: 'Поддержка и развитие',
        text: 'Обновление контента, доработка функционала, аналитика и A/B-тесты. Растём вместе с вашим бизнесом — от MVP до масштабирования.',
    },
]

const ADVANTAGES = [
    'Офис в Бухаре — встретимся, обсудим и покажем работу лично',
    'Работаем по всему Узбекистану и СНГ',
    'Прозрачные цены и фиксированные сроки в договоре',
    'Пишем на Next.js и React — сайты грузятся за секунды',
    'SEO-настройка и микроразметка входят в разработку',
    'Поддержка и обучение после запуска',
]

const STEPS = [
    {
        num: '01',
        title: 'Заявка и бриф',
        text: 'Обсуждаем задачу, цели и бюджет. Составляем техническое задание и фиксируем сроки.',
    },
    {
        num: '02',
        title: 'Дизайн и прототип',
        text: 'Разрабатываем структуру и дизайн-макет. Согласовываем каждую секцию до старта вёрстки.',
    },
    {
        num: '03',
        title: 'Разработка',
        text: 'Верстаем и программируем. Показываем прогресс каждую неделю на тестовом домене.',
    },
    {
        num: '04',
        title: 'Запуск и SEO',
        text: 'Переносим на боевой домен, настраиваем SEO, аналитику и передаём доступы.',
    },
    {
        num: '05',
        title: 'Поддержка',
        text: 'Остаёмся на связи: обновления, доработки, консультации. Работаем вдолгую.',
    },
]

/* ============================================================
   СТРАНИЦА
   ============================================================ */
export default function AboutPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />

            <main className="about-page">
                {/* HERO */}
                <section className="about-hero">
                    <div className="about-hero__container">
                        <nav className="about-hero__breadcrumbs" aria-label="Breadcrumb">
                            <Link href="/ru">Главная</Link>
                            <span>/</span>
                            <span aria-current="page">О нас</span>
                        </nav>

                        <span className="about-hero__badge">IT-студия в Бухаре</span>
                        <h1 className="about-hero__title">
                            Заказать веб-сайт в Бухаре — <span>Akbar Soft</span>
                        </h1>
                        <p className="about-hero__subtitle">
                            Разрабатываем сайты, интернет-магазины и веб-приложения под ключ.
                            Помогаем бизнесу в Бухаре и по всему Узбекистану расти в интернете —
                            от идеи и дизайна до SEO-продвижения и поддержки.
                        </p>

                        <div className="about-hero__actions">
                            <a
                                href="https://t.me/akbarsoft"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about-btn about-btn--primary"
                            >
                                Обсудить проект
                                <FiArrowRight />
                            </a>
                            <Link href="/ru#cases" className="about-btn about-btn--ghost">
                                Посмотреть проекты
                            </Link>
                        </div>

                        <ul className="about-hero__facts">
                            <li><strong>20+</strong><span>реализованных проектов</span></li>
                            <li><strong>3 года</strong><span>в веб-разработке</span></li>
                            <li><strong>1 час</strong><span>на расчёт стоимости</span></li>
                            <li><strong>3 языка</strong><span>интерфейсов и поддержки</span></li>
                        </ul>
                    </div>
                </section>

                {/* О КОМПАНИИ */}
                <section className="about-section">
                    <div className="about-section__container">
                        <div className="about-section__head">
                            <span className="about-section__badge">О компании</span>
                            <h2 className="about-section__title">IT-студия в Бухаре, которой доверяют</h2>
                        </div>

                        <div className="about-about">
                            <div className="about-about__text">
                                <p>
                                    <strong>Akbar Soft</strong> — команда разработчиков, дизайнеров
                                    и SEO-специалистов из Бухары. Мы создаём сайты и цифровые
                                    продукты, которые помогают бизнесу продавать и расти.
                                </p>
                                <p>
                                    За плечами — десятки проектов в разных нишах: рестораны,
                                    цветочные магазины, доставка еды, B2B-поставщики сантехники,
                                    юридические фирмы, сервисы поиска работы. Каждый проект —
                                    это отдельная история про скорость, дизайн и результат.
                                </p>
                                <p>
                                    Мы не просто пишем код — мы думаем о том, как сайт будет
                                    приносить вам клиентов. Поэтому в разработку входят SEO-настройка,
                                    микроразметка, адаптивная вёрстка и понятная админка.
                                </p>
                            </div>

                            <ul className="about-about__list">
                                {ADVANTAGES.map((a, i) => (
                                    <li key={i}>
                                        <FiCheckCircle />
                                        <span>{a}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* УСЛУГИ */}
                <section className="about-section about-section--alt">
                    <div className="about-section__container">
                        <div className="about-section__head">
                            <span className="about-section__badge">Услуги</span>
                            <h2 className="about-section__title">Что мы делаем</h2>
                            <p className="about-section__lead">
                                Полный цикл работ по созданию и продвижению сайтов — от первого
                                созвона до выхода в топ поиска.
                            </p>
                        </div>

                        <div className="about-services">
                            {SERVICES.map((s, i) => (
                                <article key={i} className="about-service">
                                    <div className="about-service__icon">{s.icon}</div>
                                    <h3 className="about-service__title">{s.title}</h3>
                                    <p className="about-service__text">{s.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ПРОЦЕСС */}
                <section className="about-section">
                    <div className="about-section__container">
                        <div className="about-section__head">
                            <span className="about-section__badge">Процесс</span>
                            <h2 className="about-section__title">Как мы работаем</h2>
                        </div>

                        <ol className="about-steps">
                            {STEPS.map((s) => (
                                <li key={s.num} className="about-step">
                                    <span className="about-step__num">{s.num}</span>
                                    <div>
                                        <h3 className="about-step__title">{s.title}</h3>
                                        <p className="about-step__text">{s.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* ПОЧЕМУ МЫ */}
                <section className="about-section about-section--alt">
                    <div className="about-section__container">
                        <div className="about-section__head">
                            <span className="about-section__badge">Почему Akbar Soft</span>
                            <h2 className="about-section__title">Наши принципы</h2>
                        </div>

                        <div className="about-why">
                            <div className="about-why__item">
                                <h3>Локально и близко</h3>
                                <p>
                                    Мы в Бухаре. Можно встретиться лично, показать работу,
                                    обсудить детали за чашкой кофе — без длинных переписок
                                    и созвонов через часовые пояса.
                                </p>
                            </div>
                            <div className="about-why__item">
                                <h3>Прозрачно и по договору</h3>
                                <p>
                                    Фиксируем объём работ, сроки и стоимость в договоре.
                                    Никаких скрытых доплат и «сюрпризов» в конце проекта.
                                </p>
                            </div>
                            <div className="about-why__item">
                                <h3>Современно и быстро</h3>
                                <p>
                                    Пишем на Next.js, React и Node.js. Сайты грузятся за
                                    секунды, корректно индексируются Google и Yandex,
                                    работают на всех устройствах.
                                </p>
                            </div>
                            <div className="about-why__item">
                                <h3>Вдолгую</h3>
                                <p>
                                    После запуска остаёмся на связи: обновления, доработки,
                                    консультации. Наша цель — чтобы вы росли, а сайт
                                    развивался вместе с вами.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ПРОДВИЖЕНИЕ / SEO */}
                <section className="about-section">
                    <div className="about-section__container">
                        <div className="about-seo">
                            <div className="about-seo__content">
                                <span className="about-section__badge">SEO и продвижение</span>
                                <h2 className="about-section__title">
                                    Заказать веб-сайт в Бухаре с продвижением
                                </h2>
                                <p className="about-seo__text">
                                    Сайт без продвижения — как витрина в переулке, куда никто
                                    не заходит. Мы делаем так, чтобы вас находили в Google и
                                    Yandex по запросам «заказать сайт в Бухаре», «веб-студия
                                    Бухара», «IT-студия Узбекистан» и по вашим коммерческим
                                    ключам.
                                </p>
                                <ul className="about-seo__list">
                                    <li><FiCheckCircle /> Техническое SEO и скорость загрузки</li>
                                    <li><FiCheckCircle /> Микроразметка Schema.org для расширенных сниппетов</li>
                                    <li><FiCheckCircle /> Локальное SEO: Google Business и Yandex Справочник</li>
                                    <li><FiCheckCircle /> Семантическое ядро и структура страниц</li>
                                    <li><FiCheckCircle /> Контент-план и регулярные публикации</li>
                                </ul>
                            </div>
                            <aside className="about-seo__card">
                                <h3>Что вы получите</h3>
                                <ul>
                                    <li>Рост органического трафика</li>
                                    <li>Заявки из поиска без рекламного бюджета</li>
                                    <li>Узнаваемость бренда в Бухаре и Узбекистане</li>
                                    <li>Понятную аналитику: откуда приходят клиенты</li>
                                </ul>
                                <a
                                    href="https://t.me/akbarsoft"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="about-btn about-btn--primary about-btn--full"
                                >
                                    Заказать SEO-аудит
                                    <FiArrowRight />
                                </a>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* КОНТАКТЫ / CTA */}
                <section className="about-cta">
                    <div className="about-cta__container">
                        <h2 className="about-cta__title">
                            Готовы обсудить ваш проект?
                        </h2>
                        <p className="about-cta__text">
                            Оставьте заявку — рассчитаем стоимость и сроки в течение 24 часов.
                            Бесплатная консультация и техническое задание.
                        </p>

                        <div className="about-cta__actions">
                            <a
                                href="https://t.me/akbarsoft"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about-btn about-btn--primary"
                            >
                                Написать в Telegram
                                <FiArrowRight />
                            </a>
                            <a href="tel:+998XXXXXXXXX" className="about-btn about-btn--ghost">
                                <FiPhone /> Позвонить
                            </a>
                        </div>

                        <ul className="about-cta__contacts">
                            <li><FiMapPin /> Бухара, Узбекистан</li>
                            <li><FiMail /> akbarfostcompany@gmail.com</li>
                            <li><FiExternalLink /> <a href="https://www.akbarsoft.uz" target="_blank" rel="noopener noreferrer">www.akbarsoft.uz</a></li>
                        </ul>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}