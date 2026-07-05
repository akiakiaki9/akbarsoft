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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setActivePage(pathname);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (!mobile && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setOpenDropdowns({});
    };

    const toggleDropdown = (index) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenDropdowns({});
    };

    return (
        <>
            <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="navbar__inner">
                        <div className="logo">
                            <Link href="/en" onClick={closeMenu}>
                                <img src="/images/logo.png" alt="Akbar Soft Logo" />
                            </Link>
                        </div>

                        <div className="navbar__desktop">
                            <ul className="navbar__list">
                                <li className="navbar__item">
                                    <Link href="/en" onClick={closeMenu} className={activePage === '/en' ? 'active' : ''}>
                                        Home
                                    </Link>
                                </li>
                                <li className="navbar__item">
                                    <Link href="/en/#cases" onClick={closeMenu}>
                                        Projects
                                    </Link>
                                </li>
                                <li className="navbar__item">
                                    <Link href="/en/contacts" onClick={closeMenu} className={activePage === '/en/contacts' ? 'active' : ''}>
                                        Contacts
                                    </Link>
                                </li>
                                <li className="navbar__item">
                                    <Link href="/en/#pricing-plan" onClick={closeMenu}>
                                        <button className="navbar__button">ORDER NOW</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="navbar__lang">
                            <LanguageSwitcher />
                        </div>

                        <div className="burger" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? <FiX size={30} color="#fff" /> : <FiMenu size={30} color="#fff" />}
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu__header">
                    <div className="logo">
                        <img src="/images/logo.png" alt="Akbar Soft Logo" />
                    </div>
                    <div className="burger close" onClick={toggleMobileMenu}>
                        <FiX size={30} color="#fff" />
                    </div>
                </div>
                <ul className="mobile-menu__list">
                    <li><Link href="/en" onClick={closeMenu}>Home</Link></li>
                    <li><Link href="/en/#cases" onClick={closeMenu}>Projects</Link></li>
                    <li><Link href="/en/contacts" onClick={closeMenu}>Contacts</Link></li>
                    <li className="mobile-dropdown">
                        <button onClick={() => toggleDropdown(1)}>
                            More <IoIosArrowDown className={openDropdowns[1] ? 'open' : ''} />
                        </button>
                        <ul className={`mobile-submenu ${openDropdowns[1] ? 'show' : ''}`}>
                            <li><Link href="/en/#pricing-plan" onClick={closeMenu}>Pricing</Link></li>
                            <li><Link href="/en/#faq" onClick={closeMenu}>FAQ</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/pricing-plan" onClick={closeMenu}>
                        <button className="navbar__button">ORDER NOW</button>
                    </Link></li>
                    <li><LanguageSwitcher /></li>
                </ul>
            </div>

            {isMobileMenuOpen && <div className="mobile-overlay" onClick={closeMenu} />}
        </>
    );
}

export default function Navbar() {
    return (
        <Suspense fallback={<div className="navbar-placeholder">Loading...</div>}>
            <NavbarContent />
        </Suspense>
    );
}