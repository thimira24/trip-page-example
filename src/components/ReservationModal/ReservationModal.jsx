import React, { useState, useEffect } from 'react';
import './ReservationModal.css';
import { X, Calendar, Users, BedDouble, MapPin, Check } from 'lucide-react';
import { format, addDays } from 'date-fns';

const ACCOMMODATION_OPTIONS = [
    {
        id: 'twin',
        name: 'Twin Share',
        description: 'Share a room with another traveller of the same gender',
        priceLabel: 'Included',
        icon: '👥'
    },
    {
        id: 'single',
        name: 'Single Room',
        description: 'Enjoy a private room all to yourself',
        priceLabel: '+ AUD $450',
        icon: '🛏️'
    },
    {
        id: 'multi',
        name: 'Multi-share',
        description: 'Dormitory style shared accommodation (3-6 people)',
        priceLabel: '- AUD $200',
        icon: '🏠'
    }
];

const ReservationModal = ({ isOpen, onClose, departure }) => {
    const [selectedAccommodation, setSelectedAccommodation] = useState('twin');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!isOpen || !departure) return null;

    const startDate = departure.parsedDate;
    const endDate = addDays(startDate, 9); // Example: 10 days total (9 days difference)
    const durationDays = 10;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div>
                        <h3 className="modal-title">Reserve your spot</h3>
                        <p className="modal-subtitle">Private Bali's hidden rice terraces</p>
                    </div>
                    <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                        <X size={20} />
                    </button>
                </div>

                <div className="modal-body">
                    <div className="modal-section">
                        <h4 className="modal-section-title">
                            <Calendar size={16} />
                            Trip dates <span className="modal-duration">({durationDays} days)</span>
                        </h4>
                        <div className="modal-dates-row">
                            <div className="modal-date-field">
                                <label>Start date</label>
                                <div className="modal-date-value">
                                    <MapPin size={14} />
                                    {format(startDate, 'EEEE d MMMM yyyy')}
                                </div>
                            </div>
                            <div className="modal-date-field">
                                <label>End date</label>
                                <div className="modal-date-value">
                                    <MapPin size={14} />
                                    {format(endDate, 'EEEE d MMMM yyyy')}
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="modal-section">
                        <h4 className="modal-section-title">
                            <BedDouble size={16} />
                            Accommodation
                        </h4>
                        <div className="modal-accommodation-grid">
                            {ACCOMMODATION_OPTIONS.map(option => (
                                <button
                                    key={option.id}
                                    className={`accommodation-card ${selectedAccommodation === option.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedAccommodation(option.id)}
                                >
                                    <div className="acc-card-icon">{option.icon}</div>
                                    <div className="acc-card-info">
                                        <span className="acc-card-name">{option.name}</span>
                                        <span className="acc-card-desc">{option.description}</span>
                                    </div>
                                    <span className="acc-card-price">{option.priceLabel}</span>
                                    {selectedAccommodation === option.id && (
                                        <div className="acc-card-check"><Check size={14} strokeWidth={3} /></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="modal-price-summary">
                        <div className="modal-price-label">Total per person</div>
                        <div className="modal-price-value">{departure.currency} <strong>${departure.priceDisplay}</strong></div>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="modal-cta-btn">Let&apos;s reserve</button>
                </div>
            </div>
        </div>
    );
};

export default ReservationModal;
