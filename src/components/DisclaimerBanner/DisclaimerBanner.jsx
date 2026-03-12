import React, { useState, useEffect } from 'react';
import './DisclaimerBanner.css';
import { X } from 'lucide-react';

const DisclaimerBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show banner after a short delay for better visibility
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="disclaimer-banner">
            <div className="banner-container">
                <p className="banner-text">
                    "This future-state design and concept were developed by <strong>Thimira K.</strong>
                    It is intended for brainstorming and conceptual exploration purposes only and
                    should not be considered a finalized design or implementation."
                </p>
                <button
                    className="banner-close-btn"
                    onClick={() => setIsVisible(false)}
                    aria-label="Close disclaimer"
                >
                    <X size={18} />
                </button>
            </div>
        </div>
    );
};

export default DisclaimerBanner;
