import React from 'react';
import './Reviews.css';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviewsData = [
    {
        tour: "Marrakech Food & Culture Walk",
        text: "Our guide knew every back street in the medina. We ate things we'd never have found alone and heard stories no guidebook has. This was hands down the highlight of our trip.",
        rating: 5,
        initials: "SM",
        name: "Sarah M",
        location: "Australia"
    },
    {
        tour: "Istanbul Old City Walk",
        text: "Our guide knew every back street in the medina. We ate things we'd never have found alone and heard stories no guidebook has. This was hands down the highlight of our trip.",
        rating: 5,
        initials: "PR",
        name: "Priya R",
        location: "Canada"
    },
    {
        tour: "Melbourne Laneways Tour",
        text: "Booked last minute for our Tokyo trip and it was the best decision. Our guide was incredibly knowledgeable and fun. My kids loved it too!",
        rating: 5,
        initials: "DA",
        name: "David & Anna",
        location: "Germany"
    },
    {
        tour: "Bali Hidden Temples Tour",
        text: "We did the sunset tour in Bali and it was magical. Our guide took us to a temple ceremony that wasn't on any tourist map. Unforgettable.",
        rating: 5,
        initials: "JL",
        name: "James L",
        location: "United Kingdom"
    }
];

const Reviews = () => {
    return (
        <section className="reviews-section">
            <div className="reviews-container">

                {/* Header */}
                <div className="reviews-header">
                    <h2 className="reviews-title">Reviews</h2>
                    <div className="reviews-summary">
                        <span className="rating-score">4.7</span>
                        <div className="rating-stars">
                            <Star size={16} fill="#fbbf24" color="#fbbf24" />
                            <Star size={16} fill="#fbbf24" color="#fbbf24" />
                            <Star size={16} fill="#fbbf24" color="#fbbf24" />
                            <Star size={16} fill="#fbbf24" color="#fbbf24" />
                            <Star size={16} fill="#fbbf24" color="#fbbf24" />
                        </div>
                        <a href="#" className="read-all-link">Read all reviews</a>
                    </div>
                </div>

                {/* Cards */}
                <div className="reviews-grid">
                    {reviewsData.map((review, i) => (
                        <div className="review-card" key={i}>
                            <div className="review-tour-badge">{review.tour}</div>
                            <p className="review-text">"{review.text}"</p>

                            <div className="review-card-stars">
                                {[...Array(review.rating)].map((_, idx) => (
                                    <Star key={idx} size={14} fill="#fbbf24" color="#fbbf24" />
                                ))}
                            </div>

                            <div className="review-user">
                                <div className="review-avatar">{review.initials}</div>
                                <div className="review-user-info">
                                    <span className="review-name">{review.name}</span>
                                    <span className="review-location">{review.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="reviews-controls">
                    <button className="review-nav-btn"><ChevronLeft size={20} /></button>
                    <button className="review-nav-btn"><ChevronRight size={20} /></button>
                </div>

            </div>
        </section>
    );
};

export default Reviews;
