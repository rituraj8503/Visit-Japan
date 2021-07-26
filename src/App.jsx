import React from 'react';
import "./app.scss";
import Home from './components/topbar/home/Home';
import Topbar from './components/topbar/Topbar';
import { useState } from 'react';
import Menu from './components/topbar/menu/Menu';
import Map from './components/topbar/map/Map';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Home></Home>
      </div>
    </div>
  )
}

