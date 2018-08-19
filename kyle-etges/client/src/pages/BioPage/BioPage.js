import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import "../../pages/MainPage/main.css";
import quote from "./coltrane-quote.jpg";


const BioPage = () => {
    return (
        <div>
            <Navbar />
            <div className="wrapper section-black">
                <img className="banner-img" alt="John Coltrane quote" src={quote} />
            </div>

        </div>
    )
}

export default BioPage;