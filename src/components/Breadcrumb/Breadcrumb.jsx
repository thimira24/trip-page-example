import React from 'react';
import './Breadcrumb.css';
import { ChevronRight, Share2, Heart } from 'lucide-react';

const Breadcrumb = () => {
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({ title: document.title, url: window.location.href });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="breadcrumb-row">
            <nav className="breadcrumb">
                <a href={import.meta.env.BASE_URL}>Home</a>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <a href="#bali">Bali</a>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-current">Private Bali&apos;s hidden rice terraces</span>
            </nav>

            <div className="breadcrumb-actions">
                <button className="breadcrumb-action-btn" onClick={handleShare} aria-label="Share">
                    <Share2 size={18} />
                    <span>Share</span>
                </button>
                <button className="breadcrumb-action-btn" aria-label="Save to wishlist">
                    <Heart size={18} />
                    <span>Wishlist</span>
                </button>
            </div>
        </div>
    );
};

export default Breadcrumb;
