// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// // withGoogleMap takes a react component and returns one. We call these "Higher Order Components"
// const MyMap = withGoogleMap((props) => (
//   <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom={4}
//     defaultCenter={{ lat: 25.7392, lng: -104.9903 }}
//     onClick={props.onMapClick}
//   >
//     {props.markers.map((marker) => (
//       <Marker
//         key={marker.key}
//         {...marker}
//         onRightClick={() => props.onMarkerRightClick(marker)}
//       />
//     ))}
//   </GoogleMap>
// ));

// export default function Map({ locations, getLocations }) {  
//     return (
//       <MyMap
//         className="test"
//         containerElement={<div style={{ height: `100%` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//         onMapLoad={() => {}}
//         onMapClick={() => {}}
//       />
//     );
//   }
  