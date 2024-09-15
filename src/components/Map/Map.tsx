import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Map.css';
import mapStyle from '../../style/mapStyle.json';

const mapContainerStyle = {
  width: '100%',
  height: '46vh',
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
          mapContainerStyle={{
            ...mapContainerStyle,
          }}
          center={center}
          zoom={0.6}
          options={{
            styles: mapStyle,
            disableDefaultUI: true,
            gestureHandling: "none",
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
      </div>
    </div>
  );
};

export default Map;
