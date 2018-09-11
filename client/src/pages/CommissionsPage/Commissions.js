import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import sheetMusic1 from "./sheet_music1.jpg";
import sheetMusic2 from "./sheet_music2.jpg";
import saxophone from "./saxophone.jpg";
import coffee from "./coffee1.jpg";

const Commissions = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="commission-banner">
                <h1 className="center">Commissions</h1>
            </div>
            <div className="container grid-wrapper">
                <div className="commission-container">
                    <img className="commission-img" alt="commission-element" src={sheetMusic1} />
                    <div className="hover-box">
                        <div className="text">Transcription (Full Band) <br />
                        $300</div>
                    </div>
                </div>
                <div className="commission-container">
                    <img className="commission-img" alt="commission-element" src={sheetMusic2} />
                    <div className="hover-box">
                        <div className="text">Transcriptions (Full Band)</div>
                    </div>
                </div>
                <div className="commission-container">
                    <img className="commission-img" alt="commission-element" src={saxophone} />
                    <div className="hover-box">
                        <div className="text">Transcriptions (Full Band)</div>
                    </div>
                </div>
                <div className="commission-container">
                    <img className="commission-img" alt="commission-element" src={coffee} />
                    <div className="hover-box">
                        <div className="text">Transcriptions (Full Band)</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Commissions