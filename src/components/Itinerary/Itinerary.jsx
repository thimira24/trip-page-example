import React, { useState } from 'react';
import './Itinerary.css';
import { ChevronDown, ChevronUp, BedDouble, Utensils, Leaf } from 'lucide-react';
import OptionalActivityCard from './OptionalActivityCard';

const itineraryData = [
    {
        day: 1,
        title: 'Explore Rice Terraces',
        accommodation: 'Local Hotel',
        nights: '1 Night',
        meals: 'Dinner',
        desc1: "Welcome to Bali! Arrive at your leisure. In the afternoon, you'll meet up with your group and local leader for a welcome meeting. Then, head out for a walk through the stunning, terraced landscapes.",
        desc2: "Learn about the traditional subak irrigation system that has been practiced here since the 9th century. Enjoy a welcome dinner of local specialties with your new travel companions.",
        hasOptionalComponent: false
    },
    {
        day: 2,
        title: 'Cultural Workshops',
        accommodation: 'Guesthouse',
        nights: '1 Night',
        meals: 'Breakfast and lunch',
        desc1: "Today is all about hands-on learning. We'll visit a local artisan village where you can try your hand at traditional woodcarving or batik textile dyeing.",
        desc2: "After lunch, we'll visit a grand temple complex before returning to your guesthouse for an evening of relaxation or exploring the local markets at your own pace.",
        hasOptionalComponent: false
    },
    {
        day: 3,
        title: 'Rice terraces',
        accommodation: 'Guesthouse',
        nights: '1 Night',
        meals: 'Breakfast and dinner',
        desc1: "Take a morning walk around Undisan's rice terraces, visiting the craftspeople of the traditional trade, village temples and enjoy a traditional 'bungkus' lunch.",
        desc2: "The walk is a great chance to take in the beautiful scenery before you make tracks to Sibetan Village. You'll be given a special welcome by the chief of the village, then check into your homestay accommodation before enjoying some free time in the afternoon.",
        hasOptionalComponent: true
    },
    {
        day: 4,
        title: 'Relax and Rejuvenate',
        accommodation: 'Boutique Hotel',
        nights: '1 Night',
        meals: 'Breakfast',
        desc1: "Enjoy a free morning to soak up the peaceful atmosphere. Perhaps book a local spa treatment or take a yoga class overlooking the lush valleys.",
        desc2: "In the afternoon, we'll take a scenic drive to the coast, passing through small fishing villages and coastal roads offering dramatic ocean views.",
        hasOptionalComponent: false
    },
    {
        day: 5,
        title: 'Local Market Tour',
        accommodation: 'Boutique Hotel',
        nights: '1 Night',
        meals: 'Breakfast and lunch',
        desc1: "Rise early for a guided tour of a bustling traditional market. Your local guide will introduce you to exotic fruits, spices, and Indonesian snacks.",
        desc2: "Participate in a cooking class using the ingredients we just bought. Learn the secrets of Balinese spice pastes and enjoy the fruits of your labor for lunch.",
        hasOptionalComponent: false
    },
    {
        day: 6,
        title: 'Departure Day / Free Time',
        accommodation: 'Resort',
        nights: '1 Night',
        meals: 'Breakfast',
        desc1: "A fully free day to do as you please. Relax by the pool, explore the town, or walk the sandy shores.",
        desc2: "Tonight we'll gather one last time for a farewell dinner (optional) at a highly-rated beachside restaurant to watch the sunset.",
        hasOptionalComponent: false
    },
    {
        day: 7,
        title: 'Adventure in Munduk',
        accommodation: 'Eco-lodge',
        nights: '1 Night',
        meals: 'Breakfast and dinner',
        desc1: "Travel into the cooler, mountainous region of Munduk. Stretch your legs with a hike to a series of spectacular waterfalls hidden in the jungle.",
        desc2: "Later, visit a local coffee, clove, and cacao plantation to taste and see how these essential crops are grown. Spend the night in an eco-lodge surrounded by nature.",
        hasOptionalComponent: true
    },
    {
        day: 8,
        title: 'Beach Day at Seminyak',
        accommodation: null,
        nights: null,
        meals: 'Breakfast',
        desc1: "Wake up and enjoy a final breakfast with your group. The trip officially ends this morning at the hotel.",
        desc2: "If you have extended your stay, or have a late flight out, Seminyak's beaches are the perfect place to relax before you leave.",
        hasOptionalComponent: false
    },
];

const Itinerary = () => {
    const [expandedDay, setExpandedDay] = useState(null);

    const toggleDay = (day) => {
        setExpandedDay(expandedDay === day ? null : day);
    };

    return (
        <div className="trip-card itinerary-section">
            <h2 className="section-title">Itinerary</h2>

            <div className="accordion-list">
                {itineraryData.map((item) => {
                    const isExpanded = expandedDay === item.day;

                    return (
                        <div key={item.day} className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
                            <button
                                className="accordion-header"
                                onClick={() => toggleDay(item.day)}
                                aria-expanded={isExpanded}
                            >
                                <div className="acc-title-wrap">
                                    <span className="acc-day">Day {item.day}</span>
                                    <span className="acc-separator">&middot;</span>
                                    <span className="acc-title">{item.title}</span>
                                </div>
                                {isExpanded ? <ChevronUp size={20} className="acc-icon" /> : <ChevronDown size={20} className="acc-icon" />}
                            </button>

                            {isExpanded && (
                                <div className="accordion-content">
                                    {(item.accommodation || item.meals) && (
                                        <div className="acc-meta-grid">
                                            {item.accommodation && (
                                                <div className="meta-item">
                                                    <BedDouble size={18} className="meta-icon" />
                                                    <div className="meta-text">
                                                        <strong>{item.accommodation}</strong>
                                                        {item.nights && <span>{item.nights}</span>}
                                                    </div>
                                                </div>
                                            )}
                                            {item.meals && (
                                                <div className="meta-item">
                                                    <Utensils size={18} className="meta-icon" />
                                                    <div className="meta-text">
                                                        <strong>Meals</strong>
                                                        <span>{item.meals}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {item.desc1 && <p className="acc-desc">{item.desc1}</p>}
                                    {item.desc2 && <p className="acc-desc">{item.desc2}</p>}

                                    {item.hasOptionalComponent && <OptionalActivityCard />}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="itinerary-footer">
                <Leaf size={16} className="leaf-icon" color="#5d9b56" />
                <span>This trip generates 82 kg of CO2-e per person per day. Learn more about our <a href="#">climate commitment</a></span>
            </div>
        </div>
    );
};

export default Itinerary;
