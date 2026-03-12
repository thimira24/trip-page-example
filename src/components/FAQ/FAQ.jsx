import React, { useState, useRef } from 'react';
import './FAQ.css';
import { ChevronDown } from 'lucide-react';

const faqData = {
    'Trip Basics': [
        {
            question: "What type of trip is this, and who is it for?",
            answer: "This is a small group adventure trip designed for curious travellers who want authentic cultural experiences. It's perfect for solo travellers, couples, and friends aged 18+. Our groups typically range from 8–16 people, creating an intimate atmosphere for exploring."
        },
        {
            question: "How physically demanding is this trip?",
            answer: "We rate this trip as moderate. You should be comfortable walking 2–3 hours at a time on uneven terrain, including through rice terraces and temple stairs. No technical hiking experience is required, but a reasonable level of fitness will help you get the most out of the journey."
        },
        {
            question: "What is the group size?",
            answer: "Our small group trips have a maximum of 16 travellers and a minimum of 4. The average group size is around 10 people. This keeps things personal and flexible — allowing us to visit places that larger tour groups simply can't access."
        },
        {
            question: "How long is the trip and what does a typical day look like?",
            answer: "The trip runs for 8 days and 7 nights. A typical day starts with breakfast, followed by a guided activity or excursion (such as a temple visit or rice terrace trek), lunch with the group, and free time in the afternoon for optional experiences or relaxation."
        },
        {
            question: "Is there free time during the trip?",
            answer: "Absolutely! We believe in balancing structured activities with personal time. Most days include 2–3 hours of free time where you can explore on your own, relax, or join optional add-on experiences arranged by your trip leader."
        },
        {
            question: "What style of transport is used during the trip?",
            answer: "We use a mix of private air-conditioned minivans for longer journeys and local transport (such as traditional boats) for shorter, more scenic routes. This variety adds to the cultural experience while keeping travel times manageable."
        },
        {
            question: "Can I extend my stay before or after the trip?",
            answer: "Yes! Many travellers choose to arrive a day or two early, or extend their stay after the trip ends. We can help recommend accommodation and activities for your extra days. Just let us know when booking and we'll assist with planning."
        }
    ],
    'Booking & Payment': [
        {
            question: "How do I book, and can I book on the same day?",
            answer: "You can book directly through our website by selecting your preferred departure date and clicking 'Reserve your spot'. Same-day bookings are subject to availability and cannot be guaranteed online — please call us for urgent requests."
        },
        {
            question: "What is the cancellation and refund policy?",
            answer: "If you cancel at least 56 days prior to departure, your deposit is fully flexible and can be transferred to another trip or date. Cancellations made within 56 days of departure are subject to standard cancellation fees. Full details are in our terms and conditions."
        },
        {
            question: "Can I pay in instalments?",
            answer: "Yes! Secure your spot with a $400 flexible deposit, then pay the remaining balance up to 56 days before departure. We also offer interest-free payment plans through select partners — see checkout for available options."
        },
        {
            question: "Is travel insurance included in the price?",
            answer: "Travel insurance is not included but is mandatory for all travellers. You must have comprehensive travel insurance that covers medical emergencies, evacuation, trip cancellation, and personal belongings. Proof of insurance is required before departure."
        },
        {
            question: "What's included in the trip price?",
            answer: "The price covers accommodation (twin-share), transport between destinations, daily breakfast, listed activities and entrance fees, and an experienced local trip leader. International flights, travel insurance, and most lunches and dinners are not included."
        },
        {
            question: "Can I change my departure date after booking?",
            answer: "Yes, you can transfer to a different departure date free of charge if the change is requested at least 56 days before your original departure. Changes within 56 days may incur a transfer fee. Contact our team to check availability on your preferred new date."
        },
        {
            question: "Do you offer group discounts for friends or families?",
            answer: "We offer group savings when 4 or more people book together on the same departure. Discounts range from 5–10% depending on group size and trip. Contact our groups team for a custom quote — private departures are also available for larger parties."
        }
    ],
    'Before You Go': [
        {
            question: "Do I need a visa to enter Bali?",
            answer: "Many nationalities can obtain a Visa on Arrival (VOA) for 30 days at the airport for approximately US$35. Some nationalities are eligible for visa-free entry for up to 30 days. Please check with your local embassy for the most up-to-date visa requirements."
        },
        {
            question: "What should I pack?",
            answer: "We recommend lightweight, breathable clothing suitable for tropical weather. Essential items include comfortable walking shoes, a reusable water bottle, sun protection (hat, sunscreen, sunglasses), insect repellent, and modest clothing for temple visits (covering shoulders and knees)."
        },
        {
            question: "When will I receive pre-departure information?",
            answer: "You'll receive a detailed pre-departure pack via email approximately 3–4 weeks before your trip starts. This includes your meeting point details, packing tips, weather forecast, emergency contacts, and any last-minute updates from your trip leader."
        },
        {
            question: "Are vaccinations required?",
            answer: "There are no mandatory vaccinations for Bali, but we recommend being up to date on routine vaccines. Hepatitis A, Typhoid, and Tetanus are commonly recommended by travel health advisors. Consult your doctor at least 6–8 weeks before departure."
        },
        {
            question: "What kind of weather should I expect?",
            answer: "Bali has a tropical climate with two seasons: dry (April–October) and wet (November–March). Temperatures range from 27–33°C year-round. Even in the dry season, brief afternoon showers are possible. We recommend packing a light rain jacket regardless of your travel dates."
        },
        {
            question: "Should I learn any basic Indonesian phrases?",
            answer: "While not required, locals genuinely appreciate the effort. A few useful phrases: 'Terima kasih' (thank you), 'Selamat pagi' (good morning), and 'Berapa harganya?' (how much?). Your trip leader will teach you more along the way — it's a great icebreaker!"
        },
        {
            question: "How do I get from the airport to the meeting point?",
            answer: "Ngurah Rai International Airport is approximately 30–40 minutes from Sanur (our meeting point). We recommend booking an airport transfer through us ($15 per person) or using the official airport taxi counter. Ride-hailing apps like Grab also operate outside the airport."
        }
    ],
    'On the Trip': [
        {
            question: "Where does the trip start, and how do I find the meeting point?",
            answer: "The trip starts at our designated hotel in Sanur, Bali on Day 1 at 2:00 PM. You'll receive exact coordinates, maps, and your trip leader's contact details in your pre-departure pack. Airport transfers can be arranged for an additional fee."
        },
        {
            question: "What type of accommodation is provided?",
            answer: "Accommodation ranges from comfortable 3-star hotels to boutique guesthouses and traditional homestays. All rooms are twin-share by default (you'll be paired with someone of the same gender). Single room upgrades are available for a supplement."
        },
        {
            question: "What about meals and dietary requirements?",
            answer: "Breakfast is included daily. Lunch and dinner are at your own expense, giving you flexibility to explore local cuisine. Your trip leader will recommend great local spots. We can accommodate most dietary requirements (vegetarian, vegan, halal, gluten-free) — just let us know when booking."
        },
        {
            question: "Will there be Wi-Fi and phone connectivity?",
            answer: "Most hotels and cafés in Bali offer free Wi-Fi, though connections can be slow in rural areas. We recommend purchasing a local SIM card at the airport (around $5–10) for reliable data throughout the trip."
        },
        {
            question: "What currency is used and how do I access money?",
            answer: "The local currency is Indonesian Rupiah (IDR). ATMs are widely available in towns and cities. Credit cards are accepted at larger establishments, but cash is essential for markets, small restaurants, and rural areas. We recommend carrying both."
        },
        {
            question: "Are tips expected, and how much should I budget?",
            answer: "Tipping is appreciated but not mandatory in Bali. We suggest budgeting around AUD $30–50 for your trip leader at the end of the journey. For restaurants, rounding up or leaving 5–10% is customary. Your trip leader will provide local guidance on tipping etiquette."
        },
        {
            question: "Can I leave the group for part of the trip?",
            answer: "You're welcome to skip optional activities during free time, but we ask that you attend all scheduled group activities and transport. If you need to leave mid-trip for personal reasons, please discuss this with your trip leader — we'll do our best to accommodate."
        }
    ],
    'Health & Safety': [
        {
            question: "Is Bali safe for travellers?",
            answer: "Bali is generally very safe for tourists. However, as with any destination, we recommend standard precautions: secure your valuables, be cautious when swimming (currents can be strong), and stay hydrated. Your trip leader will brief you on local safety considerations."
        },
        {
            question: "What happens in case of a medical emergency?",
            answer: "Your trip leader is first-aid trained and carries a comprehensive medical kit. Bali has modern hospitals and clinics in major towns. Your mandatory travel insurance will cover medical evacuation if needed. We also have 24/7 emergency support available."
        },
        {
            question: "Is the tap water safe to drink?",
            answer: "No, tap water in Bali is not safe to drink. We provide refill stations where possible, and bottled water is widely available. We strongly recommend bringing a reusable water bottle with a built-in filter to reduce plastic waste."
        },
        {
            question: "Are there any health risks I should be aware of?",
            answer: "Dengue fever (from mosquitoes) is present in Bali. Use insect repellent, especially at dawn and dusk. Bali belly (traveller's diarrhoea) is common — avoid ice from unknown sources and eat at reputable establishments. Your trip leader will provide guidance."
        },
        {
            question: "What safety measures are in place for adventure activities?",
            answer: "All our adventure activities (e.g., white-water rafting, snorkelling) are operated by licensed, safety-certified local partners. Equipment is regularly inspected, and safety briefings are mandatory. Your trip leader will assess conditions and may modify activities if safety is a concern."
        },
        {
            question: "Is it safe to swim in the ocean?",
            answer: "Bali's beaches vary in conditions. Some beaches have strong currents and rip tides, particularly on the south coast. Always swim at patrolled beaches, check flag warnings, and never swim alone. Your trip leader will advise on the safest spots for swimming and snorkelling."
        },
        {
            question: "How do you handle COVID-19 and other illness outbreaks?",
            answer: "We follow all local government health regulations and WHO guidelines. Currently, vaccination is not required but recommended. If you feel unwell during the trip, inform your trip leader immediately — we have protocols for isolation, testing, and medical care. Flexible rebooking policies apply if you can't travel due to illness."
        }
    ],

};

const categories = Object.keys(faqData);

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState('Trip Basics');
    const [expandedIndex, setExpandedIndex] = useState(null);
    const contentRefs = useRef({});

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setExpandedIndex(null);
    };

    const currentFAQs = faqData[activeCategory] || [];

    return (
        <div className="trip-card faq-section">
            <h2 className="section-title">Frequently asked questions</h2>

            {/* Category Tabs */}
            <div className="faq-tabs">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`faq-tab ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* FAQ Accordion List */}
            <div className="faq-list">
                {currentFAQs.map((faq, index) => {
                    const isExpanded = expandedIndex === index;
                    return (
                        <div
                            className={`faq-item ${isExpanded ? 'expanded' : ''}`}
                            key={`${activeCategory}-${index}`}
                        >
                            <button
                                className="faq-header"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={isExpanded}
                            >
                                <span className="faq-question">{faq.question}</span>
                                <ChevronDown
                                    size={20}
                                    className={`faq-icon ${isExpanded ? 'rotated' : ''}`}
                                />
                            </button>

                            <div
                                className="faq-answer-wrapper"
                                ref={el => contentRefs.current[index] = el}
                                style={{
                                    maxHeight: isExpanded
                                        ? (contentRefs.current[index]?.scrollHeight || 300) + 'px'
                                        : '0px'
                                }}
                            >
                                <div className="faq-content">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;
