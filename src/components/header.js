import React from "react";
import '../styles/styles.css'
import logo from '../assets/images//logo.png'
import search from '../assets/images/search.png'

function Header() {
    return (
        <div className="header">
            <div className="header-main">
                <img alt="logo" className="logo" src={logo} />
                <ul className="header-list-main">
                    <li className="list"><a href="#">Courses</a></li>
                    <li className="list"><a href="#">Programs</a></li>
                </ul>
                <img alt="search" className="search" src={search} />
                <button className="login-text">Log In</button>
                <button className="join-now-button">
                    <text className="join-now">JOIN NOW</text>

                </button>
            </div>
        </div>
    )
}

export default Header;