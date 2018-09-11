import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import sheetMusic1 from "./sheet_music1.jpg";
import sheetMusic2 from "./sheet_music2.jpg";
import saxophone from "./saxophone.jpg";
import coffee from "./coffee1.jpg";
import composing from "./composing.jpg"

const Commissions = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="commission-banner">
                <h1 className="center">Commission Work</h1>
                <h3 className="center">To commission a transcript from Kyle, click the links below to email Kyle </h3>
            </div>
            <div className="container grid-wrapper">
                <div className="commission-container">
                    <img className="commission-img" alt="commission-element" src={sheetMusic1} />
                    <div className="hover-box">
                        <div className="text"><a href="mailto:kyle.etges@gmail.com">Transcription (Full Band)</a> <br />
                        $300</div>
                    </div>
                </div>
                <div className="commission-container">
                    <img className="commission-img" alt="commission-element" src={sheetMusic2} />
                    <div className="hover-box">
                        <div className="text">Transcriptions (Partial) <br /> Starting at $150</div>
                    </div>
                </div>
                <div className="commission-container">
                    <img className="commission-img" alt="commission-element" src={saxophone} />
                    <div className="hover-box">
                        <div className="text">Transcriptions (Solo)<br />$75</div>
                    </div>
                </div>
                <div className="commission-container">
                    <img className="commission-img" alt="commission-element" src={coffee} />
                    <div className="hover-box">
                        <div className="text">Compositions (Full Band)<br />$500</div>
                    </div>
                </div>
                <div className="commission-container">
                    <img className="commission-img" alt="commission-element" src={composing} />
                    <div className="hover-box">
                        <div className="text">Compositions (Partial Band)<br />$150</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Commissions