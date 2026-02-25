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
                        <Link href="/uz/">
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
                                <Link href="/uz/" onClick={toggleMobileMenu} style={{ color: activePage === '/uz/' ? 'var(--purple-color)' : '' }}>
                                    Bosh sahifa
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link href="/uz/#cases" onClick={toggleMobileMenu} style={{ color: activePage === '/uz/cases' ? 'var(--purple-color)' : '' }}>
                                    Loyihalar
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link href="/uz/contacts" onClick={toggleMobileMenu} style={{ color: activePage === '/uz/contacts' ? 'var(--purple-color)' : '' }}>
                                    Kontaktlar
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link href='/uz/' className="dropdown-toggle"
                                    onClick={(e) => {
                                        if (isMobile) {
                                            e.preventDefault();
                                            toggleDropdown(1);
                                        }
                                    }}
                                    onMouseEnter={!isMobile ? () => toggleDropdown(1) : undefined}
                                    onMouseLeave={!isMobile ? () => toggleDropdown(1) : undefined}
                                >
                                    Boshqa
                                    <IoIosArrowDown className={`navbar__arrow ${openDropdowns[1] ? 'open' : ''}`} />
                                </Link>
                                {(isMobile && openDropdowns[1]) || !isMobile ? (
                                    <ul className="navbar__sub-list">
                                        <li>
                                            <Link href="/uz/#pricing-plan" onClick={toggleMobileMenu} style={{ color: activePage === '/uz/team' ? 'var(--purple-color)' : '' }}>
                                                Narxlar
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/uz/#faq" onClick={toggleMobileMenu} style={{ color: activePage === '/uz/faq' ? 'var(--purple-color)' : '' }}>
                                                FAQ
                                            </Link>
                                        </li>
                                    </ul>
                                ) : null}
                            </li>
                        </ul>
                        <div className="navbar__lang-2"><LanguageSwitcher /></div>
                        <Link className='navbar__button-a' href="/uz/#pricing-plan" onClick={toggleMobileMenu}>
                            <button className="navbar__button">BUYURTMA</button>
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