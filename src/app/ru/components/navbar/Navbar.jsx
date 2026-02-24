'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { IoIosArrowDown } from "react-icons/io";
import LanguageSwitcher from '../LanguageSwitcher';

function NavbarContent() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const pathname = usePathname();
    const [activePage, setActivePage] = useState(pathname);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setActivePage(pathname);
    }, [pathname]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const toggleDropdown = (index) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <header className="navbar">
            <div className="container">
                <div className="navbar__inner">
                    <div className="logo">
                        <Link href="/ru/">
                            <img src="/images/logo.png" alt="Akbar Soft Logo" />
                        </Link>
                    </div>
                    <div className="navbar__lang-1"><LanguageSwitcher /></div>
                    <div className="burger" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FiX size={30} color="#fff" /> : <FiMenu size={30} color="#fff" />}
                    </div>
                    <nav className={`navbar__menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <Link href="/ru/" onClick={toggleMobileMenu} style={{ color: activePage === '/ru/' ? 'var(--purple-color)' : '' }}>
                                    Главная
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link href="/ru/#cases" onClick={toggleMobileMenu} style={{ color: activePage === '/ru/cases' ? 'var(--purple-color)' : '' }}>
                                    Проекты
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link href="/ru/contacts" onClick={toggleMobileMenu} style={{ color: activePage === '/ru/contacts' ? 'var(--purple-color)' : '' }}>
                                    Контакты
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link href='/ru/' className="dropdown-toggle"
                                    onClick={(e) => {
                                        if (isMobile) {
                                            e.preventDefault();
                                            toggleDropdown(1);
                                        }
                                    }}
                                    onMouseEnter={!isMobile ? () => toggleDropdown(1) : undefined}
                                    onMouseLeave={!isMobile ? () => toggleDropdown(1) : undefined}
                                >
                                    Прочее
                                    <IoIosArrowDown className={`navbar__arrow ${openDropdowns[1] ? 'open' : ''}`} />
                                </Link>
                                {(isMobile && openDropdowns[1]) || !isMobile ? (
                                    <ul className="navbar__sub-list">
                                        <li>
                                            <Link href="/ru/#pricing-plan" onClick={toggleMobileMenu} style={{ color: activePage === '/ru/team' ? 'var(--purple-color)' : '' }}>
                                                Цены
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/ru/#faq" onClick={toggleMobileMenu} style={{ color: activePage === '/ru/faq' ? 'var(--purple-color)' : '' }}>
                                                FAQ
                                            </Link>
                                        </li>
                                    </ul>
                                ) : null}
                            </li>
                        </ul>
                        <div className="navbar__lang-2"><LanguageSwitcher /></div>
                        <Link className='navbar__button-a' href="/ru/#pricing-plan" onClick={toggleMobileMenu}>
                            <button className="navbar__button">ЗАКАЗ</button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

// 👇 Экспортируем обёрнутый в Suspense
export default function Navbar() {
    return (
        <Suspense fallback={<div className="navbar-placeholder">Loading...</div>}>
            <NavbarContent />
        </Suspense>
    );
};