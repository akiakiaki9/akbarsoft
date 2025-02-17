'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
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
                        <Link href="/">
                            <img src="/images/logo.png" alt="Akbar Soft Logo" />
                        </Link>
                    </div>
                    <div className="burger" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FiX size={30} color="#fff" /> : <FiMenu size={30} color="#fff" />}
                    </div>
                    <nav className={`navbar__menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <Link href="/" onClick={toggleMobileMenu} style={{ color: activePage === '/' ? 'var(--purple-color)' : '' }}>
                                    Homepage
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link href="/about-us" onClick={toggleMobileMenu} style={{ color: activePage === '/about-us' ? 'var(--purple-color)' : '' }}>
                                    About us
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link href='/services' className="dropdown-toggle"
                                    onClick={(e) => {
                                        if (isMobile) {
                                            e.preventDefault();
                                            toggleDropdown(0);
                                        }
                                    }}
                                    onMouseEnter={!isMobile ? () => toggleDropdown(0) : undefined}
                                    onMouseLeave={!isMobile ? () => toggleDropdown(0) : undefined}
                                >
                                    Services
                                    <IoIosArrowDown className={`navbar__arrow ${openDropdowns[0] ? 'open' : ''}`} />
                                </Link>
                                {(isMobile && openDropdowns[0]) || !isMobile ? (
                                    <ul className="navbar__sub-list">
                                        <li>
                                            <Link href="/services" onClick={toggleMobileMenu} style={{ color: activePage === '/services' ? 'var(--purple-color)' : '' }}>
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing-plan" onClick={toggleMobileMenu} style={{ color: activePage === '/pricing-plan' ? 'var(--purple-color)' : '' }}>
                                                Pricing plan
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/detail" onClick={toggleMobileMenu} style={{ color: activePage === '/services/detail' ? 'var(--purple-color)' : '' }}>
                                                Detail Service
                                            </Link>
                                        </li>
                                    </ul>
                                ) : null}
                            </li>
                            <li className="navbar__item">
                                <Link href="/cases" onClick={toggleMobileMenu} style={{ color: activePage === '/cases' ? 'var(--purple-color)' : '' }}>
                                    Our Cases
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link href="/contacts" onClick={toggleMobileMenu} style={{ color: activePage === '/contacts' ? 'var(--purple-color)' : '' }}>
                                    Contact us
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link href='/' className="dropdown-toggle"
                                    onClick={(e) => {
                                        if (isMobile) {
                                            e.preventDefault();
                                            toggleDropdown(1);
                                        }
                                    }}
                                    onMouseEnter={!isMobile ? () => toggleDropdown(1) : undefined}
                                    onMouseLeave={!isMobile ? () => toggleDropdown(1) : undefined}
                                >
                                    Others
                                    <IoIosArrowDown className={`navbar__arrow ${openDropdowns[1] ? 'open' : ''}`} />
                                </Link>
                                {(isMobile && openDropdowns[1]) || !isMobile ? (
                                    <ul className="navbar__sub-list">
                                        <li>
                                            <Link href="/team" onClick={toggleMobileMenu} style={{ color: activePage === '/team' ? 'var(--purple-color)' : '' }}>
                                                Team
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq" onClick={toggleMobileMenu} style={{ color: activePage === '/faq' ? 'var(--purple-color)' : '' }}>
                                                FAQ
                                            </Link>
                                        </li>
                                    </ul>
                                ) : null}
                            </li>
                        </ul>
                        <button className="navbar__button">
                            <Link href="/pricing-plan" onClick={toggleMobileMenu}>ORDER</Link>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};