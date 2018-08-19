import React from 'react';

const EventDetail = (props) => {
    return (
        <li> {props.venue}
            <ul>
                <li>{props.date}</li>
                <li>{props.time}</li>
                <li><a className="link" href={props.link}>Link</a></li>
            </ul>
        </li>
    )
}

export default EventDetail;