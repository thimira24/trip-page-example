import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import TripHero from '../components/TripHero/TripHero';
import TripInfo from '../components/TripInfo/TripInfo';
import Overview from '../components/Overview/Overview';
import Itinerary from '../components/Itinerary/Itinerary';
import MeetingPoint from '../components/MeetingPoint/MeetingPoint';
import Inclusions from '../components/Inclusions/Inclusions';
import DepartureDates from '../components/DepartureDates/DepartureDates';
import PreBookInfo from '../components/PreBookInfo/PreBookInfo';
import FAQ from '../components/FAQ/FAQ';
import PricingCard from '../components/PricingCard/PricingCard';
import USP from '../components/USP/USP';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';
import './TripPage.css';

const TripPage = () => {
    return (
        <div className="trip-page-root">
            <Navbar />

            <div className="trip-main-block">
                <main className="trip-main-content">
                    <Breadcrumb />
                    <div className="trip-grid">
                        <div className="trip-left-column">
                            <div id="trip-hero">
                                <TripHero />
                            </div>
                            <TripInfo />
                            <div id="overview">
                                <Overview />
                            </div>
                            <div id="itinerary">
                                <Itinerary />
                            </div>
                            <div id="meeting-point">
                                <MeetingPoint />
                            </div>
                            <div id="inclusions">
                                <Inclusions />
                            </div>
                            <div id="departure-dates">
                                <DepartureDates />
                            </div>
                            <PreBookInfo />
                            <div id="faq">
                                <FAQ />
                            </div>
                        </div>
                        <div className="trip-right-column">
                            <PricingCard />
                        </div>
                    </div>
                </main>
            </div>

            <USP />
            <div id="reviews">
                <Reviews />
            </div>
            <Footer />
        </div>
    );
};

export default TripPage;
