import React from 'react';


const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
const mapboxUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11.html?title=false&access_token=${MAPBOX_TOKEN}`;

const MapboxMap: React.FC = () => (
    <div style={{ width: '100%', height: '350px', borderRadius: '12px', overflow: 'hidden' }}>
        <iframe
            title="Carte Mapbox"
            src={mapboxUrl}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
        ></iframe>
    </div>
);

export default MapboxMap;
