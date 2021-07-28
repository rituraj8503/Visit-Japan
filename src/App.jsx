import React from 'react';
import "./app.scss";
import Home from './components/topbar/home/Home';
import Topbar from './components/topbar/Topbar';
import { useState } from 'react';
import Menu from './components/topbar/menu/Menu';
import Map from './components/topbar/map/Map';
import Tokyo from './components/topbar/Tokyo/Tokyo';
import Searched from './components/topbar/searched/Searched';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [clickedTourism, setClickedTourism] = useState(false);

  if (!clickedTourism) {
    return (
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
        {/* <Map id="map"></Map> */}
        <div className="sections">
          <Home></Home>
          <Tokyo clickedTourism={clickedTourism} setClickedTourism={setClickedTourism}></Tokyo>
        </div>
      </div>
    )
  } else {
    return (
      <Searched></Searched>
    );
  }

}

