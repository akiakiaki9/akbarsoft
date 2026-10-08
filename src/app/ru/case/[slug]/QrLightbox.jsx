"use client"
import { useState, useEffect } from 'react'
import { FiX, FiMaximize2 } from 'react-icons/fi'

export default function QrLightbox({ src, alt }) {
    const [isOpen, setIsOpen] = useState(false)

    // Закрытие по Esc + блокировка скролла body
    useEffect(() => {
        if (!isOpen) return

        const onKey = (e) => {
            if (e.key === 'Escape') setIsOpen(false)
        }
        document.addEventListener('keydown', onKey)
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = prevOverflow
        }
    }, [isOpen])

    return (
        <>
            <button
                type="button"
                className="case-page__qr-trigger"
                onClick={() => setIsOpen(true)}
                aria-label="Увеличить QR-код"
            >
                <img
                    src={src}
                    alt={alt}
                    width={160}
                    height={160}
                    className="case-page__qr-img"
                />
                <span className="case-page__qr-zoom">
                    <FiMaximize2 />
                </span>
                <span className="case-page__qr-label">Наведите камеру</span>
            </button>

            {isOpen && (
                <div
                    className="qr-lightbox"
                    onClick={() => setIsOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="QR-код крупным планом"
                >
                    <button
                        type="button"
                        className="qr-lightbox__close"
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsOpen(false)
                        }}
                        aria-label="Закрыть"
                    >
                        <FiX />
                    </button>

                    <div
                        className="qr-lightbox__content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={src}
                            alt={alt}
                            className="qr-lightbox__image"
                        />
                    </div>
                </div>
            )}
        </>
    )
}