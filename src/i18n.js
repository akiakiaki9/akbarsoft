import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            navbar: {
                "item_1": "Homepage",
                "item_2": "About us",
                "item_3": "Services",
                "item_4": "Pricing plan",
                "item_5": "Detail Service",
                "item_6": "Our Cases",
                "item_7": "Contact us",
                "item_8": "Others",
                "item_9": "Team",
                "item_10": "FAQ",
                "item_11": "ORDER",
            },
            header: {
                "1": "Welcome to Akbar's",
                "2": "Your Path to Digital Excellence Akbar Soft",
                "3": "Empowering businesses with cutting-edge technology, innovative solutions, and seamless digital experiences. Let’s shape the future together.",
                "4": "GET STARTED",
                "5": "LEARN MORE",
            },
            section1: {
                "1": "Join over 300,000+ businesses to create unique brand designs."
            },
            section2: {
                "1": "Who we are",
                "2": "Your Digital Future, Our Expertise: Akbar Soft Delivers Excellence.",
                "3": "We are a team of passionate innovators, dedicated to crafting cutting-edge digital solutions that drive success and growth.",
                "4": "DISCOVER MORE",
            },
            section3: {
                "1": "Our Value",
                "2": "Smart Designs, Sharp Results - Choose Akbar Soft for Digital Excellence.",
                "3": "We create innovative, user-friendly, and high-performance digital solutions tailored to your success.",
                "4": "LEARN MORE",
                "5": "Our Vision",
                "6": "Elevate Your Digital Presence with Akbar Soft Expertise.",
                "7": "We strive to innovate, empower businesses, and deliver cutting-edge digital solutions for lasting success.",
                "8": "Our Mission",
                "9": "Unleash Your Potential in the Digital Realm with Akbar Soft.",
                "10": "We craft innovative solutions, drive digital growth, and empower businesses to thrive in a competitive landscape.",
            },
            section4: {
                "1": "Project Done",
                "2": "Happy Client",
                "3": "Client Ratings",
                "4": "Award Winning",
            },
            offers: {
                "1": "What we offer",
                "2": "Strategy and digital technologies for your success.",
                "3": "LEARN MORE",
                "item_1": "Website Development",
                "item_2": "We create fast, secure, and highly responsive websites tailored to your business needs",
                "item_3": "Web Design",
                "item_4": "Stunning, user-friendly, and modern designs that enhance engagement and boost conversions.",
                "item_5": "Hosting and domain connection",
                "item_6": "We set up hosting and connect a domain for stable website performance."
            },
            section5: {
                "1": "Contact Akbar Soft and bring your project to life.",
                "2": "We turn ideas into modern digital solutions. Let's create together!",
                "3": "Web Development",
                "4": "Web Design",
                "5": "Search Engine Optimization",
            },
            section6: {
                "1": "How it Works",
                "2": "Unlock Astonishing Results with Just 3 Simple Steps!",
                "item_1": "Free Consultations",
                "item_2": "Let's discuss your ideas, goals, and vision to create the perfect strategy for your project.",
                "item_3": "Chat Now",
                "item_4": "Discover the product",
                "item_5": "We analyze your needs and present the best digital solutions tailored to your business.",
                "item_6": "Learn more",
                "item_7": "Prototype Application",
                "item_8": "Our team brings your vision to life, ensuring functionality, aesthetics, and top-notch performance.",
                "item_9": "Report",
            },
            section7: {
                "1": "Pioneering Digital Excellence: Discover the Akbar Soft Advantage.",
                "2": "At Akbar Soft, we craft innovative websites, software, and digital strategies to bring your vision to life.",
                "3": "DISCOVER MORE",
            },
            testimonials: {
                "1": "Testimonials",
                "2": "Client Feedback & Reviews",
            },
            footer: {
                "1": "Empowering businesses with cutting-edge technology, innovative solutions, and seamless digital experiences. Let’s shape the future together.",
                "item_1": "Services",
                "item_2": "Website Development",
                "item_3": "Web Design",
                "item_4": "Search Engine Optimization",
                "item_5": "Support",
                "item_6": "FAQ",
                "item_7": "Contact us",
                "item_8": "Company",
                "item_9": "About us",
                "item_10": "Our team",
                "item_11": "Careers",
                "footer_1": "Copyright© 2024 Akbar Soft, All rights reserved. Powered by Akbar Soft.",
                "footer_2": "Contacts",
            },
            aboutus: {
                "pagename_1": "About us",
                "pagename_2": "Your Digital Journey Starts Here: Dive into Akbar Soft Expertise.",
            },
            team: {
                "pagename_1": "Our Team",
                "pagename_2": "Our dedicated team of creative minds and strategic thinkers.",
                "1": "Meet our team",
                "2": "Alone we can do so little, together we can do so much.",
                "3": "Join Us",
                "4": "Interested in joining our team?",
                "5": "Be part of a dynamic, innovative environment where creativity meets technology. Let's build the future together!",
                "6": "CONTACT US",
                "7": "Leave your details, and we will get back to you soon!"
            },
            pricingplan: {
                "pagename_1": "Pricing plan",
                "pagename_2": "Predictable Pricing. No Surprises.",
                "pagename_3": "Great value at an affordable rate. No hidden costs. No frills.",
                "item_1": {
                    "1": "Landing",
                    "2": "Landing Page – a one-page website for attracting clients, advertising, and leads.",
                    "3": "Includes:",
                    "4": "Responsive design",
                    "5": "Call-to-action buttons",
                    "6": "SEO optimization",
                    "7": "Fast loading speed",
                    "8": "Contact form integration",
                    "9": "PURCHASE ORDER",
                },
                "item_2": {
                    "1": "Business Site",
                    "2": "A multi-page website for companies with sections about services, team, and contacts.",
                    "3": "Includes:",
                    "4": "Up to 5 pages",
                    "5": "Custom design",
                    "6": "SEO-friendly structure",
                    "7": "Blog integration",
                    "8": "Admin panel (optional)",
                    "9": "PURCHASE ORDER",
                },
                "item_3": {
                    "1": "E-commerce",
                    "2": "An online store with a product catalog, shopping cart, and secure payments.",
                    "3": "Includes:",
                    "4": "Product catalog",
                    "5": "Shopping cart",
                    "6": "Payment gateway integration",
                    "7": "Order management system",
                    "8": "User account system",
                    "9": "PURCHASE ORDER",
                },
            },
            cases: {
                "pagename_1": "Our Cases",
                "pagename_2": "Start your digital journey with us – explore our cases and expertise.",
                "1": "Featured Project",
                "2": "Unleashing the Power of Innovation and Creativity.",
                "3": "Pioneering Digital Excellence: Discover the Digimax Advantage.",
                "4": "Empowering businesses with cutting-edge technology, strategic innovation, and seamless digital solutions to drive success.",
                "5": "DISCOVER MORE",
            },
            contacts: {
                "pagename_1": "Contact us",
                "pagename_2": "Start the conversation to established good relationship and business.",
                "item_1": {
                    "1": "Get in touch",
                    "2": "Seamless Communication, Global Impact.",
                    "3": "Connect with us to explore innovative solutions, elevate your digital presence, and turn your ideas into reality.",
                    "4": "Head Office",
                    "5": "Email Support",
                    "6": "Let's Talk",
                    "7": "Working Hours",
                    "8": "We are on social networks",
                },
                "item_2": {
                    "1": "Send us a message",
                    "2": "Please feel free to send us any questions, feedback or suggestions you might have.",
                    "3": "Name",
                    "4": "Company",
                    "5": "Phone",
                    "6": "Email",
                    "7": "Subject",
                    "8": "Message",
                    "9": "SEND MESSAGE  ",
                }
            },
            faq: {
                "pagename_1": "FAQ",
                "pagename_2": "Start the conversation to established good relationship and business.",
                "item_1": {
                    "1": "Common Questions",
                    "2": "Most Popular Questions",
                    "3": "Find answers to the most frequently asked questions about our services.",
                    "4": "DISCOVER MORE",
                    "item_1": "What services does your company provide?",
                    "item_2": "We specialize in web development, web design, and IT consulting. Our team creates modern and high-performance solutions tailored to your needs.",
                    "item_3": "How long does it take to develop a website?",
                    "item_4": "The development time depends on the complexity of the project. A simple website can take 2-4 weeks, while a complex project may require several months.",
                    "item_5": "Do you offer website maintenance and support?",
                    "item_6": "Yes, we provide ongoing maintenance, updates, and security monitoring to ensure your website remains fast and secure.",
                    "item_7": "Do you provide SEO optimization?",
                    "item_8": "Yes, we offer SEO services to help improve your website's visibility in search engines and attract more potential customers.",
                    "item_9": "How much does a website cost?",
                    "item_10": "The cost varies based on the project's requirements. Contact us for a free consultation and a personalized quote.",
                },
                "item_2": {
                    "1": "Where Strategy Meets Digital. Your Success Story Begins with Akbar Soft.",
                    "2": "At Akbar Soft, we combine innovation and strategy to bring your digital vision to life. Our expertise in web development and design ensures your success in the online world",
                    "3": "DISCOVER MORE",
                }
            }
        }
    },
    ru: {
        translation: {
            navbar: {
                "item_1": "Главная",
                "item_2": "О нас",
                "item_3": "Услуги",
                "item_4": "Тарифные планы",
                "item_5": "Детали услуги",
                "item_6": "Проекты",
                "item_7": "Контакты",
                "item_8": "Прочее",
                "item_9": "Цены",
                "item_10": "FAQ",
                "item_11": "ЗАКАЗ"
            },
            header: {
                "1": "РАДЫ У НАС",
                "2": "Реализуем ваш цифровой потенциал",
                "3": "Помогаем бизнесу с инновационными сайтами и сервисами, которые работают на результат. Создадим будущее.",
                "4": "УСЛУГИ",
                "5": "КОНТАКТЫ"
            },
            section1: {
                "1": "Примкните к 150 млн компаниям, создающим свой бренд"
            },
            section2: {
                "1": "Кто мы",
                "2": "Надёжный IT-партнёр для бизнеса!",
                "3": "Профессионалы, реализующие проекты для вашего лидерства в интернете.",
                "4": "УЗНАТЬ БОЛЬШЕ"
            },
            section3: {
                "1": "Наши ценности",
                "2": "Надёжность, эффективность, ваш рост",
                "3": "Мы разрабатываем решения, которые повышают вашу конкурентоспособность и привлекают клиентов.",
                "4": "УЗНАТЬ БОЛЬШЕ",
                "5": "Наше видение",
                "6": "Максимальная видимость и технологическое превосходство",
                "7": "Мы создаём современные сайты и продвигаем компании в картах, чтобы обеспечить ваш устойчивый рост и долгосрочное лидерство.",
                "8": "Наша миссия",
                "9": "Реальные результаты для вашего бизнеса в интернете",
                "10": "Мы создаём эффективные сайты и обеспечиваем продвижение в картах, чтобы увеличивать вашу клиентскую базу и помогать бизнесу процветать."
            },
            section4: {
                "1": "Выполненные проекты",
                "2": "Довольные клиенты",
                "3": "Рейтинги клиентов",
                "4": "Награды"
            },
            offers: {
                "1": "Что мы предлагаем",
                "2": "Технологии для роста и видимости вашего бизнеса",
                "3": "УЗНАТЬ БОЛЬШЕ",
                "item_1": "Разработка сайтов",
                "item_2": "Создаем быстрые, безопасные и адаптивные сайты для вашего бизнеса.",
                "item_3": "Продвижение в картах",
                "item_4": "Помогаем клиентам легко находить вас через популярные онлайн карты.",
                "item_5": "Продажа доменов",
                "item_6": "Подберем и зарегистрируем идеальное доменное имя для вашего проекта."
            },
            section5: {
                "1": "Начните свой проект с Akbar Soft",
                "2": "Оставьте заявку, и мы разработаем сайт, продвинем ваш бизнес в картах или подберем идеальное доменное имя для вашего успеха.",
                "3": "Веб-разработка",
                "4": "Продвижение в картах",
                "5": "Продажа доменов"
            },
            section6: {
                "1": "Как это работает",
                "2": "Реализуем ваш проект четко и прозрачно за 3 шага",
                "item_1": "Консультация и анализ",
                "item_2": "Бесплатно изучаем ваши задачи, цели бизнеса и предлагаем оптимальное решение.",
                "item_3": "Начать чат",
                "item_4": "Разработка и интеграция",
                "item_5": "Создаем сайт, настраиваем продвижение в картах или регистрируем домен.",
                "item_6": "Начать чат",
                "item_7": "Запуск и поддержка",
                "item_8": "Запускаем проект, обеспечиваем стабильную работу и помогаем с развитием.",
                "item_9": "Начать чат"
            },
            section7: {
                "1": "Раскройте преимущества Akbar Soft",
                "2": "Мы создаем современные сайты, продвигаем бизнес в картах и подбираем домены, чтобы ваши идеи работали на результат.",
                "3": "УЗНАТЬ БОЛЬШЕ"
            },
            testimonials: {
                "1": "Отзывы",
                "2": "Отзывы наших клиентов"
            },
            footer: {
                "1": "Помогаем бизнесу с инновационными сайтами и сервисами, которые работают на результат. Создадим будущее.",
                "item_1": "Услуги",
                "item_2": "Разработка сайтов",
                "item_3": "Продвижение в картах",
                "item_4": "Доменное подключение",
                "item_5": "Поддержка",
                "item_6": "Частые вопросы",
                "item_7": "Контакты",
                "item_8": "Компания",
                "item_9": "О нас",
                "item_10": "Наша команда",
                "item_11": "Карьера",
                "footer_1": "© 2024 Akbar Soft. Все права защищены.",
                "footer_2": "Контакты"
            },
            aboutus: {
                "pagename_1": "О нас",
                "pagename_2": "Ваш цифровой путь начинается здесь."
            },
            team: {
                "pagename_1": "Наша команда",
                "pagename_2": "Наша команда творческих умов и стратегических мыслителей.",
                "1": "Познакомьтесь с командой",
                "2": "В одиночку мы можем сделать мало, вместе — гораздо больше.",
                "3": "Присоединяйтесь",
                "4": "Хотите работать с нами?",
                "5": "Станьте частью инновационной среды, где технологии встречаются с креативностью.",
                "6": "СВЯЗАТЬСЯ С НАМИ",
                "7": "Оставьте свои данные, свяжемся с вами в ближайшее время!"
            },
            pricingplan: {
                "pagename_1": "Наши цены",
                "pagename_2": "Самые низкие цены в СНГ!",
                "pagename_3": "Отличное качество по доступной цене, без скрытых затрат.",
                "item_1": {
                    "1": "Лендинг",
                    "2": "Лендинг-страница — одностраничный сайт для привлечения клиентов, рекламы и лидов.",
                    "3": "Включает:",
                    "4": "Адаптивный дизайн",
                    "5": "Кнопки призыва к действию",
                    "6": "Базовый SEO",
                    "7": "Быстрая загрузка",
                    "8": "Интеграция контактной формы",
                    "9": "ЗАКАЗАТЬ"
                },
                "item_2": {
                    "1": "Бизнес-сайт",
                    "2": "Многостраничный сайт для компаний с разделами о услугах, команде и контактах.",
                    "3": "Включено:",
                    "4": "До 5 страниц (дальше 50$ за 1 страницу)",
                    "5": "Индивидуальный дизайн",
                    "6": "SEO оптимизация",
                    "7": "Интеграция блога",
                    "8": "Поддержка на 1 год!",
                    "9": "ЗАКАЗАТЬ"
                },
                "item_3": {
                    "1": "Продвижение в картах",
                    "2": "Выведите вашу компанию в Google Maps, 2Гис и Яндекс.Карт.",
                    "3": "Что мы сделаем для вас:",
                    "4": "Добавим и оформим компанию в картах",
                    "5": "Настроим корректное отображение",
                    "6": "Соберем первые положительные отзывы",
                    "7": "Поднимем в поиска по вашему городу",
                    "8": "Увеличим число звонков и заявок",
                    "9": "ПОЛУЧИТЬ КЛИЕНТОВ ИЗ КАРТ"
                }
            },
            cases: {
                "pagename_1": "Наши работы",
                "pagename_2": "Ваш бизнес — следующим в этом списке.",
                "1": "Выдающиеся проекты",
                "2": "Список выполненных нами работ.",
                "3": "Пионеры цифрового совершенства вместе с Akbar Soft.",
                "4": "Помогаем бизнесам с передовыми технологиями, стратегическими инновациями и бесшовными цифровыми решениями для достижения успеха.",
                "5": "УЗНАТЬ БОЛЬШЕ"
            },
            contacts: {
                "pagename_1": "Свяжитесь с нами",
                "pagename_2": "Начните общение для установления хороших отношений и бизнеса.",
                "item_1": {
                    "1": "Свяжитесь с нами",
                    "2": "Бесшовная коммуникация, глобальное влияние.",
                    "3": "Свяжитесь с нами, чтобы исследовать инновационные решения, повысить ваш цифровой след и превратить идеи в реальность.",
                    "4": "Главный офис",
                    "5": "Наша электронной почта",
                    "6": "Телефон номер",
                    "7": "Рабочие часы",
                    "8": "Мы в социальных сетях"
                },
                "item_2": {
                    "1": "Отправьте нам сообщение",
                    "2": "Пожалуйста, не стесняйтесь отправлять нам вопросы, отзывы или предложения.",
                    "3": "Имя",
                    "4": "Компания",
                    "5": "Телефон",
                    "6": "Электронная почта",
                    "7": "Тема",
                    "8": "Сообщение",
                    "9": "ОТПРАВИТЬ СООБЩЕНИЕ"
                }
            },
            faq: {
                "pagename_1": "Часто задаваемые вопросы",
                "pagename_2": "Начните общение для установления хороших отношений и бизнеса.",
                "item_1": {
                    "1": "Общие вопросы",
                    "2": "Самые популярные вопросы",
                    "3": "Найдите ответы на наиболее часто задаваемые вопросы о наших услугах.",
                    "4": "УЗНАТЬ БОЛЬШЕ",
                    "item_1": "Какие услуги предоставляет ваша компания?",
                    "item_2": "Мы специализируемся на веб-разработке, веб-дизайне и IT-консалтинге. Наша команда создает современные и высокопроизводительные решения, соответствующие вашим потребностям.",
                    "item_3": "Как долго длится разработка сайта?",
                    "item_4": "Время разработки зависит от сложности проекта. Простой сайт может занять 2-4 недели, в то время как сложный проект может потребовать несколько месяцев.",
                    "item_5": "Предоставляете ли вы обслуживание и поддержку сайта?",
                    "item_6": "Да, мы предоставляем постоянное обслуживание, обновления и мониторинг безопасности, чтобы ваш сайт оставался быстрым и защищенным.",
                    "item_7": "Предоставляете ли вы SEO-оптимизацию?",
                    "item_8": "Да, мы предлагаем услуги SEO, чтобы улучшить видимость вашего сайта в поисковых системах и привлечь больше потенциальных клиентов.",
                    "item_9": "Сколько стоит разработка сайта?",
                    "item_10": "Стоимость зависит от требований проекта. Свяжитесь с нами для бесплатной консультации и персонализированного предложения."
                },
                "item_2": {
                    "1": "Где стратегия встречает цифровое. История успеха начинается с нами",
                    "2": "В Akbar Soft мы соединяем инновации и стратегию для воплощения вашего цифрового видения. Наш опыт в веб-разработке и дизайне гарантирует ваш успех в онлайн-мире.",
                    "3": "УЗНАТЬ БОЛЬШЕ"
                }
            }
        }
    }
};

const savedLanguage = typeof window !== "undefined" ? localStorage.getItem("language") : null;

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    lng: savedLanguage || "en", // Используем сохраненный язык или "en"
    interpolation: { escapeValue: false }
});

export default i18n;