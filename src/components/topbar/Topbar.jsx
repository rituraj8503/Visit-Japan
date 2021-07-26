import React from 'react'
import "./topbar.scss"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active") }>
            <div className="wrapper">
                <div className="left">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
                <div className="right">
                    <a href="#intro" className="logo">VISIT <span className="japan">JAPAN</span></a>
                </div>
            </div>
        </div>
    )
}
