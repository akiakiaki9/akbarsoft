'use client'
import { useState, useEffect } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavbarComp() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();
    const [activePage, setActivePage] = useState(pathname);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1200);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    useEffect(() => {
        setActivePage(pathname);
    }, [pathname]);

    const handleLinkClick = (path) => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Добавляем обработчик скролла
    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerHeight * 0.2;
            setIsScrolled(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled blur' : ''}`}>
            <div className="navbar-content">
                <Link href="/"><h2>Akbar <span>Soft</span></h2>{/*<img src="/images/brand.svg" alt="Brand" className='navbar__brand' />*/}</Link>
                {!isMobile && (
                    <ul className="navbar-items">
                        <li><Link onClick={() => handleLinkClick('/')} style={{ color: activePage === '/' ? 'var(--violet-color)' : '' }} href="/">Главная</Link></li>
                        <li><Link onClick={() => handleLinkClick('/contacts')} style={{ color: activePage === '/contacts' ? 'var(--violet-color)' : '' }} href="/contacts">Контакты</Link></li>
                        <li><Link onClick={() => handleLinkClick('/projects')} style={{ color: activePage === '/projects' ? 'var(--violet-color)' : '' }} href="/projects">Работы</Link></li>
                    </ul>
                )}
                <div onClick={toggleMenu} className="menu-icon">
                    <RiMenu3Line />
                </div>
            </div>

            {isMenuOpen && isMobile && (
                <div className="navbar-fullscreen-menu active">
                    <ul className="menu-items">
                        <li><Link onClick={() => handleLinkClick('/')} style={{ color: activePage === '/' ? 'var(--violet-color)' : '' }} href="/">Главная</Link></li>
                        <li><Link onClick={() => handleLinkClick('/contacts')} style={{ color: activePage === '/contacts' ? 'var(--violet-color)' : '' }} href="/contacts">Контакты</Link></li>
                        <li><Link onClick={() => handleLinkClick('/projects')} style={{ color: activePage === '/projects' ? 'var(--violet-color)' : '' }} href="/projects">Работы</Link></li>
                        <AiOutlineClose className='navbar__close' onClick={toggleMenu} />
                    </ul>
                </div>
            )}
        </nav>
    );
};