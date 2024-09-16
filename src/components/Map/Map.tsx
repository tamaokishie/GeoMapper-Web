import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Map.css';
import mapStyle from '../../style/mapStyle.json';
import MapStatus from '../MapStatus/MapStatus';

const mapContainerStyle = {
  width: '100%',
  height: '47vh',
};

const center = {
  lat: 0,
  lng: 0,
};

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

const Map: React.FC = () => {
  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={0.6}
          options={{
            styles: mapStyle,
            disableDefaultUI: true,
            gestureHandling: "greedy",  // Allow zooming gestures
            maxZoom: 10,                // Set the maximum zoom level
            minZoom: 0.4,               // Set the minimum zoom level
            restriction: {
              latLngBounds: {
                north: 85,     // Define the northernmost boundary (top)
                south: -85,    // Define the southernmost boundary (bottom)
                west: -180,    // Define the westernmost boundary (left)
                east: 180,     // Define the easternmost boundary (right)
              },
              strictBounds: false, // This ensures you cannot pan outside the defined bounds
            },
          }}
        />
      </LoadScript>
      <div style={{
        position: 'absolute', 
        top: '54%',
        bottom: 0, 
        width: '100%',
        paddingTop: '5%',
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
      }}>
        Good job!<br/>You have traveled to many countries.

        <div style={{ paddingTop: '20px', fontSize: '24px', fontWeight: 'bold' }}>
          Level 150
        </div>

        <MapStatus />
      </div>
    </div>
  );
};

export default Map;
