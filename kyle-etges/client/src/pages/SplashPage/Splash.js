import React from 'react';
import "./splash.css";

const SplashPage = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="jumbotron">
                    <h1 id="name">Kyle Etges</h1>
                    <h3 id="header">Saxophonist based in Nashville, TN </h3>
                    <h4>Saxophonist | Composer | Educator | Band Leader</h4>
                </div>

                <div className="center">
                    <a className="link" href="/main">Learn More</a>
                </div>
            </div>
            
        </div>
    )
}



export default SplashPage;