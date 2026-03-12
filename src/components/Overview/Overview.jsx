import React from 'react';
import './Overview.css';

const Overview = () => {
    return (
        <div className="trip-card overview-section">
            <h2 className="section-title">Overview</h2>
            <p className="overview-text">
                Before most tourists have left their hotel, you'll be deep inside one of the world's greatest food
                markets. This early-morning tour of the outer Tsukiji Market reveals the beating heart of Tokyo's food
                culture, from master sushi chefs to tamagoyaki artisans who've perfected their craft over generations.
            </p>

            <h3 className="section-subtitle">Why you will love this trip</h3>
            <div className="features-grid">
                <div className="feature-card">
                    Immerse yourself in Balinese culture by tucking into lots of delicious street food, meeting songket weavers, witnessing a traditional Kecak dance.
                </div>
                <div className="feature-card">
                    Hike to the summit of Mt Batur for a truly dazzling sunrise view that stretches across the Lombok Strait, all the way over to the peaks of Mt Rinjani.
                </div>
                <div className="feature-card">
                    Escape the tourists (and the heat!) in the lovely, peaceful village of Undisan, which sits in the lush Balinese hills.
                </div>
                <div className="feature-card">
                    Walk through the lush green surroundings of Ubud &ndash; Bali's cultural heart &ndash; and gain an insight into daily village life.
                </div>
            </div>
        </div>
    );
};

export default Overview;
