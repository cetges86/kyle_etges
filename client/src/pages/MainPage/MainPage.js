import React from 'react';
import "./main.css";
import Navbar from "../../components/Navbar/Navbar";
import Player from "../../components/Player/Player";
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
        <div>
            <Navbar />
            <div className="section-dark grid-wrapper">
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
            <div>
                <Player />
            </div>
            <div className="section-white">
                <div className="feature">
                    <h3 className="subheading">Classically Trained</h3>
                    <p className="center">
                        Bacon ipsum dolor amet cow pastrami frankfurter swine, meatball flank rump landjaeger fatback pork loin jerky sausage turducken pancetta. Shoulder venison ham hock burgdoggen ground round, ribeye capicola flank meatball. Pork chop tongue porchetta sirloin pork belly landjaeger capicola salami brisket ham pork loin strip steak. Tri-tip meatloaf ground round porchetta burgdoggen. Flank shank bacon, jowl bresaola brisket biltong chuck ham filet mignon ground round. Pancetta flank sirloin alcatra, tongue filet mignon tenderloin strip steak t-bone landjaeger bacon cupim leberkas meatball.
                        <br />
                        <br />
                <a className="link" href="/bio">Learn More About Kyle</a>
                </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default MainPage;