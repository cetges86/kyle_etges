import React from 'react';
import "../../pages/MainPage/main.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <h4 className="footer-follow">Follow</h4>
                <a className="icon fb-icon" rel="noopener noreferrer" target="_blank" href="http://www.facebook.com/etgesmusic"><i className="fab fa-facebook-f"></i></a>
                <a className="icon ig-icon" rel="noopener noreferrer" target="_blank" href="http://www.instagram.com/etgesofspain" ><i className="fab fa-instagram"></i></a>
                <a className="icon li-icon" rel="noopener noreferrer" target="_blank" href="http://www.linkedin.com/in/kyle-etges"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="white small-text center">&copy; 2018 Chris Etges Design &amp; Development</div>
        </footer>
    )
}

export default Footer;