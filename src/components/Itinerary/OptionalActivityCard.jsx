import React from 'react';
import './OptionalActivityCard.css';
import { Clock, Users, Star, Plus, ExternalLink } from 'lucide-react';

const OptionalActivityCard = () => {
    return (
        <div className="optional-activity-wrapper">
            <div className="optional-pill">Optional Urban Adventure</div>
            <div className="optional-card">
                <div className="opt-image-container">
                    <img src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=400&auto=format&fit=crop" alt="Ubud evening tour" />
                </div>
                <div className="opt-content">
                    <h4 className="opt-title">Ubud evening food & night market tour</h4>
                    <p className="opt-desc">Taste local street food with a guide during your free evening in Ubud</p>

                    <div className="opt-details">
                        <div className="opt-detail-item">
                            <Clock size={16} />
                            <span><strong>3 Hours</strong></span>
                        </div>
                        <div className="opt-detail-item">
                            <Users size={16} />
                            <span><strong>Max 8</strong> Travelers</span>
                        </div>
                        <div className="opt-detail-item">
                            <Star size={16} fill="#eab308" color="#eab308" />
                            <span><strong>4.6</strong> (247 Reviews)</span>
                        </div>
                    </div>

                    <div className="opt-footer">
                        <div className="opt-price-action">
                            <div className="price-row">
                                <span className="opt-price">$ 45.00</span>
                            </div>
                            <div className="buttons-row">
                                <button className="btn-add"><Plus size={16} /> Add to trip</button>
                                <a href="#" className="btn-link">View details <ExternalLink size={16} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptionalActivityCard;
