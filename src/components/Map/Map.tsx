import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 20,
  lng: 0,
};

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

const mapStyles = [
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "color": "#ededed"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#5773ff"
      }
    ]
  }
];

const Map: React.FC = () => {

    const onLoad = (map: google.maps.Map) => {
      console.log('Map loaded:', map);
    };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={2}
        onLoad={onLoad}
        options={{
          styles: mapStyles,
            disableDefaultUI: true, // すべてのデフォルトUIを無効化
            gestureHandling: "cooperative"
        }}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;