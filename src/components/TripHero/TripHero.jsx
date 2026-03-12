import React, { useState, useEffect, useCallback } from 'react';
import './TripHero.css';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const allImages = [
    { src: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200&auto=format&fit=crop', alt: 'Bali Rice Terraces' },
    { src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop', alt: 'Bali Temple' },
    { src: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1200&auto=format&fit=crop', alt: 'Bali Landscape' },
    { src: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1200&auto=format&fit=crop', alt: 'Bali Culture' },
    { src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop', alt: 'Bali Beach' },
];

const TripHero = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, []);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    }, []);

    useEffect(() => {
        if (!lightboxOpen) return;
        document.body.style.overflow = 'hidden';
        const handleKey = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [lightboxOpen, goNext, goPrev]);

    return (
        <div className="trip-hero-card">
            <h1 className="hero-title">Private Bali&apos;s hidden rice terraces</h1>
            <div className="hero-main-image-container" onClick={() => openLightbox(0)}>
                <img
                    src={allImages[0].src}
                    alt={allImages[0].alt}
                    className="hero-main-image"
                />
                <div className="hero-pills">
                    <span className="pill pill-green">Gift card allowed</span>
                    <span className="pill pill-white">Food & Drink</span>
                </div>
                <div className="hero-image-count">
                    <span>📷 {allImages.length} photos</span>
                </div>
            </div>

            <div className="hero-thumbnails">
                {allImages.slice(1).map((img, i) => (
                    <img
                        key={i}
                        src={img.src.replace('w=1200', 'w=300')}
                        alt={img.alt}
                        onClick={() => openLightbox(i + 1)}
                    />
                ))}
            </div>



            {/* Lightbox */}
            {lightboxOpen && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        {/* Close */}
                        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close gallery">
                            <X size={24} />
                        </button>

                        {/* Counter */}
                        <div className="lightbox-counter">{currentIndex + 1} / {allImages.length}</div>

                        {/* Main Image */}
                        <div className="lightbox-main">
                            <button className="lightbox-nav lightbox-nav-prev" onClick={goPrev} aria-label="Previous image">
                                <ChevronLeft size={28} />
                            </button>
                            <img
                                src={allImages[currentIndex].src}
                                alt={allImages[currentIndex].alt}
                                className="lightbox-image"
                            />
                            <button className="lightbox-nav lightbox-nav-next" onClick={goNext} aria-label="Next image">
                                <ChevronRight size={28} />
                            </button>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="lightbox-thumbs">
                            {allImages.map((img, i) => (
                                <img
                                    key={i}
                                    src={img.src.replace('w=1200', 'w=150')}
                                    alt={img.alt}
                                    className={`lightbox-thumb ${i === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TripHero;
