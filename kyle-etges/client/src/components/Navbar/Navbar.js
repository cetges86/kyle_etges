import React, { Component } from 'react';
import "./navbar.css";

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
            <div className="navbar-banner">
            <h2>Kyle Etges</h2>
            </div>
                <div className="navbar-links">
                    <a className="links-right" href="/main">Home</a>
                    <a className="links-right" href="/bio">Bio</a>
                    <a className="links-right">Media</a>
                    <a className="links-right">Contact</a>
                    <a className="links-right">Commissions</a>
                    <a className="links-right">Blog</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;