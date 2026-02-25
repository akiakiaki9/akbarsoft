"use client";
import { Suspense } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

function LanguageSwitcherContent() {
    const router = useRouter();
    const pathname = usePathname();

    // Определяем текущий язык
    const currentLang = pathname.startsWith("/ru") ? "ru" : pathname.startsWith("/uz") ? "uz" : "en";

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const switchLanguage = (lang) => {
        localStorage.setItem("language", lang);
        router.push(`/${lang}`);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const flags = {
        en: "/images/flags/en.webp",
        ru: "/images/flags/ru.png",
        uz: "/images/flags/uz.webp" // предположим, что есть флаг Узбекистана
    };

    return (
        <div className="language-switcher" ref={dropdownRef}>
            <div className="selected" onClick={() => setIsOpen(!isOpen)}>
                <img src={flags[currentLang]} alt={currentLang} className="flag" />
                {currentLang.toUpperCase()}
            </div>
            {isOpen && (
                <div className="dropdown">
                    {["en", "ru", "uz"].map((lang) => (
                        <div
                            key={lang}
                            className={`dropdown-item ${currentLang === lang ? "active" : ""}`}
                            onClick={() => switchLanguage(lang)}
                        >
                            <img src={flags[lang]} alt={lang} />
                            {lang.toUpperCase()}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function LanguageSwitcher() {
    return (
        <Suspense fallback={<div className="language-switcher-placeholder">EN</div>}>
            <LanguageSwitcherContent />
        </Suspense>
    );
};