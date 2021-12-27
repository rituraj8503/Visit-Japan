import "./menu.scss";
import React from 'react'
import { Link } from 'react-router-dom';

export default function Menu( { menuOpen, setMenuOpen } ) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/Tokyo">Tokyo</Link>
                </li>
            </ul>
        </div>
    )
}
