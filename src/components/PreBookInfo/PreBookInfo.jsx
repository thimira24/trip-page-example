import React from 'react';
import './PreBookInfo.css';

const PreBookInfo = () => {
    return (
        <div className="trip-card prebook-section">
            <h2 className="section-title">Before you book, you should know</h2>

            <div className="prebook-grid">
                <div className="prebook-card">
                    <div className="icon-wrapper">
                        <img src={`${import.meta.env.BASE_URL}icons/trip.png`} alt="Is this trip right for you?" className="prebook-img" />
                    </div>
                    <span className="prebook-text">Is this trip right for you?</span>
                </div>

                <div className="prebook-card">
                    <div className="icon-wrapper">
                        <img src={`${import.meta.env.BASE_URL}icons/visa.png`} alt="Visa" className="prebook-img" />
                    </div>
                    <span className="prebook-text">Visa</span>
                </div>

                <div className="prebook-card">
                    <div className="icon-wrapper">
                        <img src={`${import.meta.env.BASE_URL}icons/hotel.png`} alt="Accommodation" className="prebook-img" />
                    </div>
                    <span className="prebook-text">Accommodation</span>
                </div>
            </div>
        </div>
    );
};

export default PreBookInfo;
