import React from 'react';
import "../../pages/MainPage/main.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <h4 className="footer-follow">Follow</h4>
                <i className="icon fb-icon fab fa-facebook-f"></i>
                <i className="icon ig-icon fab fa-instagram"></i>
                <i className="icon li-icon fab fa-linkedin-in"></i>
            </div>
            <div className="white small-text center">&copy; 2018 Chris Etges Design &amp; Development</div>
        </footer>
    )
}

export default Footer;