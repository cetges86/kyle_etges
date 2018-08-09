import React from 'react';
import "./splash.css";

const SplashPage = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="jumbotron">
                    <h1 id="name">Kyle Etges</h1>
                    <h3 id="header">Saxophonist based in Nashville, TN </h3>
                </div>

                <div className="center">
                    <a href="/main">Learn More</a>
                </div>
            </div>
            
        </div>
    )
}



export default SplashPage;