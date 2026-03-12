import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MeetingPoint.css';
import { MapPin, Copy, Maximize, Plus, Minus } from 'lucide-react';

// Mapbox Access Token from environment variable
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const MeetingPoint = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    // Sanur coords (Start)
    const startCoords = [115.2625, -8.6750];
    // Palau Bali coords (End) - Mapping to a landmark point in the South Bukit area
    const endCoords = [115.111, -8.814];

    useEffect(() => {
        if (!mapboxgl.accessToken) {
            console.warn('Mapbox access token is missing. Map will not be initialized.');
            return;
        }

        try {
            if (map.current) return;

            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/light-v11',
                center: [115.186, -8.744],
                zoom: 11,
                scrollZoom: false
            });

            map.current.on('load', () => {
                // Add Start Marker
                new mapboxgl.Marker({ color: '#ee2e24' })
                    .setLngLat(startCoords)
                    .setPopup(new mapboxgl.Popup().setHTML('<h4>Start: Sanur Bali</h4>'))
                    .addTo(map.current);

                // Add End Marker
                new mapboxgl.Marker({ color: '#1a1a1a' })
                    .setLngLat(endCoords)
                    .setPopup(new mapboxgl.Popup().setHTML('<h4>End: Palau Bali</h4>'))
                    .addTo(map.current);

                // Add Route Line (Dashed red line)
                map.current.addSource('route', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': [
                                startCoords,
                                [115.250, -8.700],
                                [115.220, -8.750],
                                [115.180, -8.780],
                                [115.150, -8.800],
                                endCoords
                            ]
                        }
                    }
                });

                map.current.addLayer({
                    'id': 'route',
                    'type': 'line',
                    'source': 'route',
                    'layout': {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    'paint': {
                        'line-color': '#ee2e24',
                        'line-width': 4,
                        'line-dasharray': [2, 1]
                    }
                });

                // Adjust bounds to show the full route
                const bounds = new mapboxgl.LngLatBounds()
                    .extend(startCoords)
                    .extend(endCoords);

                map.current.fitBounds(bounds, { padding: 40 });
            });
        } catch (error) {
            console.error('Error initializing Mapbox:', error);
        }

        return () => {
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, []);

    const copyAddress = () => {
        navigator.clipboard.writeText("No.13, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung");
        alert("Address copied to clipboard!");
    };

    return (
        <div className="trip-card meeting-point-section">
            <h2 className="section-title">Where we'll meet first</h2>

            <div className="location-header">
                <MapPin size={16} color="#ee2e24" className="pin-icon" />
                <span className="location-name">Starbucks Kerobokan</span>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Starbucks+Kerobokan" target="_blank" rel="noopener noreferrer" className="get-direction">Get direction</a>
            </div>

            <div className="location-address">
                <span className="address-text">No.13, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung</span>
                <button className="btn-copy" onClick={copyAddress} aria-label="Copy address">
                    <Copy size={16} />
                </button>
            </div>

            <div className="map-container">
                <div ref={mapContainer} className="mapbox-container" />
                <div className="map-controls">
                    <div className="zoom-controls">
                        <button className="map-btn" onClick={() => map.current?.zoomIn()} aria-label="Zoom in"><Plus size={18} /></button>
                        <div className="divider-vertical" />
                        <button className="map-btn" onClick={() => map.current?.zoomOut()} aria-label="Zoom out"><Minus size={18} /></button>
                    </div>
                    <button className="map-btn expand-btn" onClick={() => map.current?.getCanvas().requestFullscreen()}><Maximize size={18} /></button>
                </div>
            </div>

            <div className="route-endpoints">
                <div className="endpoint">
                    <span className="endpoint-label">Start</span>
                    <span className="endpoint-value">Sanur Bali</span>
                </div>
                <div className="endpoint">
                    <span className="endpoint-label">End</span>
                    <span className="endpoint-value">Palau Bali</span>
                </div>
            </div>
        </div>
    );
};

export default MeetingPoint;
