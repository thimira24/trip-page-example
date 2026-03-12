import React, { useState, useRef, useEffect, useMemo } from 'react';
import './DepartureDates.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Banknote, TrendingDown, ChevronDown, Calendar, Check } from 'lucide-react';
import { DateRange } from 'react-date-range';
import { format, isWithinInterval } from 'date-fns';
import { departures } from '../../data/departureData';
import ReservationModal from '../ReservationModal/ReservationModal';

const SORT_OPTIONS = [
    { key: 'date-asc', label: 'Start date (Earliest)' },
    { key: 'price-asc', label: 'Price (low to high)' },
    { key: 'price-desc', label: 'Price (high to low)' },
];

const DepartureDates = () => {
    const [sortOption, setSortOption] = useState('date-asc');
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
    const sortRef = useRef(null);
    const [dealsActive, setDealsActive] = useState(false);
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [dateRange, setDateRange] = useState([{ startDate: null, endDate: null, key: 'selection' }]);
    const calendarRef = useRef(null);
    const dateInputRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDeparture, setSelectedDeparture] = useState(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sortRef.current && !sortRef.current.contains(e.target)) setSortDropdownOpen(false);
            if (calendarRef.current && !calendarRef.current.contains(e.target) && dateInputRef.current && !dateInputRef.current.contains(e.target)) setCalendarOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredDepartures = useMemo(() => {
        let result = [...departures];
        if (dealsActive) result = result.filter(dep => dep.tag && dep.tag.type === 'tag-sale');
        if (dateRange[0].startDate && dateRange[0].endDate) {
            result = result.filter(dep => isWithinInterval(dep.parsedDate, { start: dateRange[0].startDate, end: dateRange[0].endDate }));
        }
        if (sortOption === 'date-asc') result.sort((a, b) => a.parsedDate - b.parsedDate);
        else if (sortOption === 'price-asc') result.sort((a, b) => a.price - b.price);
        else if (sortOption === 'price-desc') result.sort((a, b) => b.price - a.price);
        return result;
    }, [sortOption, dealsActive, dateRange]);

    const currentSortLabel = SORT_OPTIONS.find(o => o.key === sortOption)?.label;
    const dateInputValue = dateRange[0].startDate && dateRange[0].endDate
        ? `${format(dateRange[0].startDate, 'dd MMM yyyy')} – ${format(dateRange[0].endDate, 'dd MMM yyyy')}` : '';

    const handleClearDates = () => setDateRange([{ startDate: null, endDate: null, key: 'selection' }]);
    const handleReserveClick = (dep) => { setSelectedDeparture(dep); setModalOpen(true); };

    return (
        <div className="trip-card departure-dates-section">
            <h2 className="section-title">Departure dates</h2>

            <div className="deposit-alert">
                <Banknote size={18} className="deposit-icon" />
                <span>Lock in your trip with a <strong>$400</strong> flexible deposit if it departs 56+ days from now. <a href="#">Terms and conditions</a></span>
            </div>

            <div className="dep-filters">
                <div className="dep-calendar-wrapper">
                    <div className={`dep-filter-input date-input ${calendarOpen ? 'active' : ''}`} ref={dateInputRef} onClick={() => setCalendarOpen(!calendarOpen)}>
                        <Calendar size={16} className="date-input-icon" />
                        <span className={`date-input-text ${dateInputValue ? '' : 'placeholder'}`}>{dateInputValue || 'Travel dates'}</span>
                        {dateInputValue && <button className="date-clear-btn" onClick={(e) => { e.stopPropagation(); handleClearDates(); }}>✕</button>}
                    </div>
                    {calendarOpen && (
                        <div className="calendar-popover" ref={calendarRef}>
                            <DateRange editableDateInputs={false} onChange={item => setDateRange([item.selection])} moveRangeOnFirstSelection={false}
                                ranges={dateRange[0].startDate ? dateRange : [{ startDate: new Date(), endDate: new Date(), key: 'selection' }]}
                                months={2} direction="horizontal" rangeColors={['#222222']} showDateDisplay={false} />
                        </div>
                    )}
                </div>

                <div className="dep-filter-actions">
                    <button className={`dep-filter-btn deals-toggle ${dealsActive ? 'active' : ''}`} onClick={() => setDealsActive(!dealsActive)}>
                        {dealsActive && <Check size={14} strokeWidth={3} />} Deals
                    </button>
                    <div className="sort-wrapper" ref={sortRef}>
                        <button className={`dep-filter-btn has-icon ${sortDropdownOpen ? 'active' : ''}`} onClick={() => setSortDropdownOpen(!sortDropdownOpen)}>
                            {currentSortLabel} <ChevronDown size={16} className={`sort-chevron ${sortDropdownOpen ? 'rotated' : ''}`} />
                        </button>
                        {sortDropdownOpen && (
                            <div className="sort-dropdown">
                                {SORT_OPTIONS.map(option => (
                                    <button key={option.key} className={`sort-dropdown-item ${sortOption === option.key ? 'selected' : ''}`}
                                        onClick={() => { setSortOption(option.key); setSortDropdownOpen(false); }}>
                                        {option.label} {sortOption === option.key && <Check size={14} />}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="departures-list">
                {filteredDepartures.length === 0 && <div className="dep-empty">No departures match your filters.</div>}
                {filteredDepartures.map((dep) => (
                    <div className="dep-card" key={dep.id}>
                        <div className="dep-info">
                            <div className="dep-date">{dep.date}</div>
                            <div className="dep-status">{dep.statusText}</div>
                        </div>
                        <div className="dep-tag-container">
                            {dep.tag && <span className={`dep-tag ${dep.tag.type}`}>{dep.tag.text}</span>}
                        </div>
                        <div className="dep-price-block">
                            <div className="price-drop"><TrendingDown size={14} /><span>PRICE DROP</span></div>
                            <div className="dep-price">{dep.currency} <strong>${dep.priceDisplay}</strong></div>
                        </div>
                        <div className="dep-action">
                            <button className={`dep-btn ${dep.isPrimaryAction ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => dep.isPrimaryAction && handleReserveClick(dep)}>
                                {dep.action}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dep-load-more"><button className="btn-load-more">Load more</button></div>

            <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} departure={selectedDeparture} />
        </div>
    );
};

export default DepartureDates;
