import "./menu.scss";
import React from 'react'

export default function Menu( { menuOpen, setMenuOpen } ) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#home">Tokyo</a>
                </li>
            </ul>
        </div>
    )
}
