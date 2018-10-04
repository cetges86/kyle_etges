import React from 'react';
import "./main.css";
import Navbar from "../../components/Navbar/Navbar";
import Player from "../../components/Player/Player";
import Jumbotron from "../../components/Jumbotron";
import Calendar from "react-calendar";
import Footer from "../../components/Footer/Footer";
import EventDetail from '../../components/EventDetail/EventDetail';

const events = [
    {
        venue: "Hanks's Hideaway, Denver, CO",
        date: "Aug 30, 2018",
        time: "7:00pm",
        link: "www.google.com"
    },
    {
        venue: "Tom's Bistro, Denver, CO",
        date: "Sept 6, 2018",
        time: "6:00pm",
        link: "www.google.com"
    },
    {
        venue: "Nissi's, Lafayette, CO",
        date: "Sept 15, 2018",
        time: "7:30pm",
        link: "www.google.com"
    }
]


const MainPage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <Jumbotron />
            <div className="section-light">
                <div className="grid-wrapper container">
                    <h2 className="center">Events Calendar</h2>
                    <h2 className="center">Upcoming Events</h2>
                    <div className="calendar">
                        <Calendar />
                    </div>
                    <div className="events">
                        <ul>
                            {
                                events.map(event => {
                                    return <EventDetail
                                        key={event.venue}
                                        {...event} />
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section-dark">
            <h1 className="center small-caps">Listen</h1>
                <Player />
            </div>
            <div className="section-white eintro-bio center">
                <h2 className="cursive white-text quote">
                    “Don’t play everything, or every time.
                    <br />
                    Let some things go by.
                    <br />
                    Some music is just imagined. ”
                <br />
                    — Thelonious Monk
                    </h2>
                <br />
                <br />
                <a className="button" href="/bio">Learn More About Kyle</a>
            </div>
            <Footer />
        </div>
    )
}


export default MainPage;