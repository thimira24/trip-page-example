import React from 'react';
import './Inclusions.css';
import { Check, X, Plus } from 'lucide-react';

const Inclusions = () => {
    return (
        <div className="trip-card inclusions-section">
            <h2 className="section-title">Inclusions and activities</h2>

            <div className="incl-grid">
                {/* Top Left */}
                <div className="incl-column">
                    <h4 className="incl-subtitle">What's inlcuded</h4>
                    <ul className="incl-list">
                        <li><Check size={18} color="#059669" className="list-icon" /> Local English-speaking guide</li>
                        <li><Check size={18} color="#059669" className="list-icon" /> Mineral water</li>
                        <li><Check size={18} color="#059669" className="list-icon" /> Coconut water or coffee</li>
                        <li><Check size={18} color="#059669" className="list-icon" /> Light snacks</li>
                        <li><Check size={18} color="#059669" className="list-icon" /> A gift of uden for men or a sash for women</li>
                        <li><Check size={18} color="#059669" className="list-icon" /> Rice field donation</li>
                    </ul>
                </div>

                {/* Top Right */}
                <div className="incl-column">
                    <h4 className="incl-subtitle">Not included</h4>
                    <ul className="incl-list">
                        <li><X size={18} color="#dc2626" className="list-icon" /> Additional food and drinks</li>
                        <li><X size={18} color="#dc2626" className="list-icon" /> Tips/gratuities for your guide</li>
                    </ul>
                </div>
            </div>

            <hr className="incl-divider" />

            <div className="incl-grid">
                {/* Bottom Left */}
                <div className="incl-column">
                    <h4 className="incl-subtitle">Activities included</h4>
                    <ul className="incl-list">
                        <li><Check size={18} color="#059669" className="list-icon" /> Bali - Kecak Fire Dance</li>
                        <li><Check size={18} color="#059669" className="list-icon" /> Undisan - Village tour</li>
                        <li><Check size={18} color="#059669" className="list-icon" /> Sibetan - Salak community plantation walk</li>
                        <li><Check size={18} color="#059669" className="list-icon" /> Lovina - Banjar Hot Springs</li>
                        <li><Check size={18} color="#059669" className="list-icon" /> Bedugul - Pura Ulun Danu Bratan Temple</li>
                        <li><Check size={18} color="#059669" className="list-icon" /> Gitgit - Waterfall walk</li>
                    </ul>
                </div>

                {/* Bottom Right */}
                <div className="incl-column">
                    <h4 className="incl-subtitle">Optional Activities</h4>
                    <ul className="incl-list">
                        <li><Plus size={18} color="#888" className="list-icon" /> Local community cooking class</li>
                        <li><Plus size={18} color="#888" className="list-icon" /> Mt Batur - Hot springs - IDR280000</li>
                        <li><Plus size={18} color="#888" className="list-icon" /> Lovina - Yoga class</li>
                        <li><Plus size={18} color="#888" className="list-icon" /> Balinese Massage</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Inclusions;
