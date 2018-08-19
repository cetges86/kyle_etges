import React from 'react';
import "../../pages/MainPage/main.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <h4 className="footer-follow">Follow</h4>
                <i className="icon icon-1 fab fa-facebook-f"></i>
                <i className="icon icon-2 fab fa-instagram"></i>
                <i className="icon icon-3 fab fa-linkedin-in"></i>
            </div>
            <div className="white center">&copy; 2018 Chris Etges</div>
        </footer>
    )
}

export default Footer;