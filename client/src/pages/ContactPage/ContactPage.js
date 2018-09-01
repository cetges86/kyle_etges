import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import KyleCloseUp from "./KyleCloseUp.jpg";
import "../MainPage/main.css";


const ContactPage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="contact-banner">
                <img className="banner-img" alt="Banner of Kyle" src={KyleCloseUp}></img>
            </div>
            <div className="section-white contact-page">
                <div>
                    <h3 className="center small-caps">Booking</h3>
                    <p className="center">_</p>
                </div>
                <div>
                    <h3 className="center small-caps">Commissions</h3>
                    <p className="center">_</p>
                </div>
                <div>
                    <h3 className="center small-caps">Inquiries</h3>
                    <p className="center">_</p>
                </div>
                <div className="contact-info center">
                    <ul className="contact-list">
                        <li>Kyle Etges</li>
                        <li>(303)518-4399</li>
                        <li> <a className="link" target="_blank" rel="noopener noreferrer" href="mailto:kyle.etges@gmail.com">kyle.etges@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage;