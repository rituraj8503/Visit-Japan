import React, {useState} from 'react'
import ReactMapGL, {Marker} from "react-map-gl";
import Searched from '../searched/Searched';
import mapboxgl from 'mapbox-gl';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export default function Map({locations}) {
    console.log(locations);
    const [viewport, setViewport] = useState({
      latitude: 35.689487,
      longitude: 139.691711,
      zoom: 10,
      width: '100vw',
      height: '100vh'
    })
    return (
      <div style={{width: '100vw', height:'100vh'}}>
        <Searched></Searched>
        <ReactMapGL {...viewport} mapboxApiAccessToken="pk.eyJ1Ijoicml0dXJhajgiLCJhIjoiY2tycmp6eTZhMDlhbTJwbWwzM2o2OThlNiJ9.B5wX2j4qX1GelLaIb8RSlw"
        onViewportChange={(viewport) => {setViewport(viewport)}}>
          {locations.map(location => (
            <Marker key={location.id} latitude={location.latitude} longitude={location.longitude}>
              <div>
                <button>
                  <img src="https://homemadebuffetcompany.co.uk/wp-content/uploads/2015/01/map-marker-icon.png" alt="" className="marker"/>
                </button>
              </div>
            </Marker>

          ))}
        </ReactMapGL>
      </div>

    );
}



