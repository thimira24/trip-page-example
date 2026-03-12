import React, { useState, useRef, useEffect, useMemo } from 'react';
import './PricingCard.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { TrendingDown, Plus, Calendar } from 'lucide-react';
import { DateRange } from 'react-date-range';
import { format, isWithinInterval } from 'date-fns';
import { departures } from '../../data/departureData';
import ReservationModal from '../ReservationModal/ReservationModal';

const PricingCard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDeparture, setSelectedDeparture] = useState(null);

    // Calendar state
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [dateRange, setDateRange] = useState([{ startDate: null, endDate: null, key: 'selection' }]);
    const calendarRef = useRef(null);
    const dateInputRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (calendarRef.current && !calendarRef.current.contains(e.target) && dateInputRef.current && !dateInputRef.current.contains(e.target)) {
                setCalendarOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredDepartures = useMemo(() => {
        let result = [...departures];
        if (dateRange[0].startDate && dateRange[0].endDate) {
            result = result.filter(dep =>
                isWithinInterval(dep.parsedDate, { start: dateRange[0].startDate, end: dateRange[0].endDate })
            );
        }
        return result;
    }, [dateRange]);

    const dateInputValue = dateRange[0].startDate && dateRange[0].endDate
        ? `${format(dateRange[0].startDate, 'dd MMM')} – ${format(dateRange[0].endDate, 'dd MMM')}`
        : '';

    const handleClearDates = () => setDateRange([{ startDate: null, endDate: null, key: 'selection' }]);

    const handleDepartureClick = (dep) => {
        if (dep.isPrimaryAction) {
            setSelectedDeparture(dep);
            setModalOpen(true);
        }
    };

    return (
        <div className="pricing-card sticky-sidebar">
            <h2 className="pricing-header">Upcoming departures</h2>

            {/* Travel Dates Filter */}
            <div className="sidebar-calendar-wrapper">
                <div
                    className={`sidebar-date-input ${calendarOpen ? 'active' : ''}`}
                    ref={dateInputRef}
                    onClick={() => setCalendarOpen(!calendarOpen)}
                >
                    <Calendar size={15} className="sidebar-date-icon" />
                    <span className={`sidebar-date-text ${dateInputValue ? '' : 'placeholder'}`}>
                        {dateInputValue || 'Travel dates'}
                    </span>
                    {dateInputValue && (
                        <button className="sidebar-date-clear" onClick={(e) => { e.stopPropagation(); handleClearDates(); }}>✕</button>
                    )}
                </div>

                {calendarOpen && (
                    <div className="sidebar-calendar-popover" ref={calendarRef}>
                        <DateRange
                            editableDateInputs={false}
                            onChange={item => setDateRange([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dateRange[0].startDate ? dateRange : [{ startDate: new Date(), endDate: new Date(), key: 'selection' }]}
                            months={1}
                            direction="vertical"
                            rangeColors={['#222222']}
                            showDateDisplay={false}
                        />
                    </div>
                )}
            </div>

            <div className="departures-list">
                {filteredDepartures.length === 0 && (
                    <div className="sidebar-dep-empty">No matches</div>
                )}
                {filteredDepartures.map((dep) => (
                    <div
                        key={dep.id}
                        className={`departure-item ${dep.isPrimaryAction ? 'clickable' : ''}`}
                        onClick={() => handleDepartureClick(dep)}
                    >
                        <div className="dep-left">
                            <div className="dep-date">{dep.shortDate}</div>
                            <div className={`dep-status status-${dep.statusColor}`}>{dep.statusText}</div>
                        </div>
                        <div className="dep-right">
                            <TrendingDown size={18} className="dep-icon" color="#10b981" />
                            <div className="dep-price">{dep.currency} ${dep.priceDisplay}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pricing-actions">
                <button className="btn btn-primary">See all departures</button>
                <button className="btn btn-secondary">
                    <Plus size={16} className="btn-icon" /> Add to compare
                </button>
            </div>

            <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} departure={selectedDeparture} />
        </div>
    );
};

export default PricingCard;
