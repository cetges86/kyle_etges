import React from 'react';

const EventDetail = (props) => {
    return (
        <li className="event-item"> {props.venue}
            <ul>
                <li className="event-item">{props.date}</li>
                <li className="event-item">{props.time}</li>
                <li className="event-item"><a className="link" href={props.link}>Link</a></li>
                <li className="event-item">_____________________________</li>
                <br />
            </ul>
        </li>
    )
}

export default EventDetail;