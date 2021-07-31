import React from 'react';
import "./app.scss";
import Home from './components/topbar/home/Home';
import Topbar from './components/topbar/Topbar';
import { useState } from 'react';
import Menu from './components/topbar/menu/Menu';
import Map from "./components/topbar/map/Map";
import ReactMapGL, {Marker} from "react-map-gl";
import {WrappedMap} from "./components/topbar/map/Map";
import Tokyo from './components/topbar/Tokyo/Tokyo';
import Searched from './components/topbar/searched/Searched';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [clickedTourism, setClickedTourism] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 35.689487,
    longitude: 139.691711,
    zoom: 10,
    width: '100vw',
    height: '100vh'
  })
  const [locations, setLocations] = useState([]);

  function getLocations(data) {
    console.log(data);
    setLocations(data);
    // data.map(location => (
    //   <Marker key={location.id} latitude={location.latitude} longitude={location.longitude}></Marker>
    // ))
  }


  if (!clickedTourism) {
    return (
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
        {/* <Map id="map"></Map> */}
        <div className="sections">
          <Home></Home>
          <Tokyo clickedTourism={clickedTourism} setClickedTourism={setClickedTourism} getLocations={getLocations}></Tokyo>
        </div>
      </div>
    )
  } else {
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

}

