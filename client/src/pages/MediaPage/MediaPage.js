import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import listenImage from "./sax-cropped.jpg";
import "../MainPage/main.css"

const MediaPage = () => {

    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="grid-wrapper section-dark">
                <img className="image" alt="cropped image of kyle with saxophone" src={listenImage} />
                <div>
                    <p>Kyle does not have any solo releases, yet...</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )

}

export default MediaPage;