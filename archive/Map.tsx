// import React from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import { backdropClasses } from '@mui/material';
// import './Map.css';
// import mapStyle from '../../style/mapStyle.json'

// const mapContainerStyle = {
//   width: '100%',
//   height: '50vh',
// };

// const center = {
//   lat: 0,
//   lng: 0,
// };

// const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;



// const Map: React.FC = () => {


    

//   return (
//     <div  className="map-container">
//       <LoadScript googleMapsApiKey={apiKey}>
//         <GoogleMap
//           mapContainerStyle={{
//             ...mapContainerStyle,
//             backgroundColor: 'transparent'  // 背景色を透明に
//           }}
//           center={center}
//           zoom={2}
//           options={{
//             styles: mapStyle,
//             disableDefaultUI: true,
//             gestureHandling: "greedy",
//             maxZoom: 10, // 必要に応じて最大ズームも設定
//             restriction: {
//               latLngBounds: {
//                 north: -5,
//                 south: 10,
//                 west: -180,
//                 east: 180,
//               },
//           }
//         }}
//       />
//       </LoadScript>
//     </div>
//   );
// };

// export default Map;
