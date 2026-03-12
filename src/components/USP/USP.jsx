import React from 'react';
import './USP.css';

const USP = () => {
    return (
        <section className="usp-section">
            <div className="usp-container">
                <div className="usp-item">
                    <div className="usp-icon-wrapper">
                        <img src="/icons/local guides.png" alt="Local guides" className="usp-image" />
                    </div>
                    <h3 className="usp-title">Local guides, not scripts</h3>
                    <p className="usp-text">Our guides live in the cities they show you. No rehearsed routes, no tourist traps, just real stories from real locals.</p>
                </div>

                <div className="usp-item">
                    <div className="usp-icon-wrapper">
                        <img src="/icons/small.png" alt="Small groups" className="usp-image" />
                    </div>
                    <h3 className="usp-title">Small groups, big moments</h3>
                    <p className="usp-text">With a maximum of 12 travellers per tour, you'll experience each city like a local, not a number in a crowd.</p>
                </div>

                <div className="usp-item">
                    <div className="usp-icon-wrapper">
                        <img src="/icons/off.png" alt="Off the beaten path" className="usp-image" />
                    </div>
                    <h3 className="usp-title">Off the beaten path</h3>
                    <p className="usp-text">We take you beyond the guidebook to discover hidden gems, secret spots, and authentic experiences others miss.</p>
                </div>
            </div>
        </section>
    );
};

export default USP;
