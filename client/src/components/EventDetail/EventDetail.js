import React, { Component } from 'react';


class EventDetail extends Component {

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://widget.bandsintown.com/main.min.js";
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                <a class="bit-widget-initializer" data-artist-name="Kyle Etges Music" data-display-local-dates="true" data-display-past-dates="true" data-auto-style="false" data-text-color="#FFFFFF" data-link-color="#E67A00" data-popup-background-color="#000000" data-background-color="#000000" data-display-limit="15" data-link-text-color="#FFFFFF">.</a>
            </div>
        )
    }
}
export default EventDetail;