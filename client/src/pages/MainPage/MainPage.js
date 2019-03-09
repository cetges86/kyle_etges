import React from 'react';
import "./main.css";
import Navbar from "../../components/Navbar/Navbar";
import Player from "../../components/Player/Player";
import Jumbotron from "../../components/Jumbotron";
//import Calendar from "react-calendar";
import Footer from "../../components/Footer/Footer";
import EventDetail from '../../components/EventDetail/EventDetail';




const MainPage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <Jumbotron />
            <div className="section-light">
                <div className="wrapper container">
                    <h2 className="center">Upcoming Events</h2>
                    <div className="events">
                        <EventDetail />
                    </div>
                </div>
            </div>
            <div className="section-dark">
                <h1 className="center small-caps">Listen</h1>
                <Player />
            </div>
            <div className="section-white intro-bio center">
                <h3 className="cursive white-text quote">
                    “Don’t play everything, or every time.
                    <br />
                    Let some things go by.
                    <br />
                    Some music is just imagined. ”
                <br /><br/>
                    — Thelonious Monk
                    </h3>
                <br />
                <br />
            <div>
            <a className="button" href="/bio">Learn More About Kyle</a>
            </div>
            </div>
            <Footer />
        </div>
    )
}


export default MainPage;