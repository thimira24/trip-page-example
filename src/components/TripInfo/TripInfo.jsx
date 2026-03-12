import React from 'react';
import './TripInfo.css';
import { Star, Clock, Users, Gem, Map, Footprints } from 'lucide-react';

const TripInfo = () => {
    return (
        <div className="trip-info-card">
            <div className="trip-info-row trip-info-top">
                <div className="info-item">
                    <Star size={18} fill="#eab308" color="#eab308" className="info-icon" />
                    <span className="info-text"><strong>4.6</strong> (247 Reviews)</span>
                </div>
                <div className="info-item">
                    <Clock size={18} className="info-icon" />
                    <span className="info-text"><strong>10 Days</strong> &middot; Bali, Indonesia</span>
                </div>
                <div className="info-item">
                    <Users size={18} className="info-icon" />
                    <span className="info-text"><strong>Max 8</strong> Travelers</span>
                </div>
            </div>

            <div className="trip-info-divider"></div>

            <div className="trip-info-row trip-info-bottom">
                <div className="info-item">
                    <Gem size={18} className="info-icon" />
                    <span className="info-text"><strong>Theme</strong> &middot; Premium</span>
                </div>
                <div className="info-item">
                    <Map size={18} className="info-icon" />
                    <span className="info-text"><strong>Style</strong> &middot; Original</span>
                </div>
                <div className="info-item">
                    <Footprints size={18} className="info-icon" />
                    <span className="info-text"><strong>Activity level</strong> &middot; Easy going</span>
                </div>
            </div>
        </div>
    );
};

export default TripInfo;
