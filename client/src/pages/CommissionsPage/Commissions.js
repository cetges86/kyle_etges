import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import sheetMusic1 from "./sheet_music1.jpg";
import sheetMusic2 from "./sheet_music2.jpg";
import saxophone from "./saxophone.jpg";
import coffee from "./coffee1.jpg";
import composing from "./composing.jpg";
import guitar from './guitar.jpg';

const Commissions = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="commission-banner">
                <h1 className="center">Commission Work</h1>
                <h3 className="center">To commission a transcription or composition,<br /> click the links below to email Kyle </h3>
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
                        <div className="text"><a href="mailto:kyle.etges@gmail.com">Transcriptions (Partial)</a> <br />Starting at $150 <br /><br />
                            Horn charts or rhythm charts only, or some variation thereof</div>
                    </div>
                </div>
                <div className="commission-container">
                    <img className="commission-img" alt="commission-element" src={saxophone} />
                    <div className="hover-box">
                        <div className="text"><a href="mailto:kyle.etges@gmail.com">Transcriptions (Solo)</a><br />$75</div>
                    </div>
                </div>
                <div className="commission-container">
                    <img className="commission-img" alt="commission-element" src={coffee} />
                    <div className="hover-box">
                        <div className="text"><a href="mailto:kyle.etges@gmail.com">Compositions (Full Band)</a><br />$500<br /><br />
                            I'll write a song for your band that matches the style and feel of the rest of your music!
                        </div>
                    </div>
                </div>
                <div className="commission-container">
                    <img className="commission-img" alt="commission-element" src={guitar} />
                    <div className="hover-box">
                        <div className="text"><a href="mailto:kyle.etges@gmail.com">
                            Compositions (Partial Band)</a><br />$150 <br /><br />Need some horns? Want the perfect guitar solo?
                        </div>
                    </div>
                </div>
                <div className="commission-container">
                    <img className="commission-img" alt="commission-element" src={composing} />
                    <div className="hover-box">
                        <div className="text"><a href="mailto:kyle.etges@gmail.com">
                            SE Discount</a><br />$100 <br /><br /> Do you have a chart that's so awful you can't even use it? Are the harmonies whack, or the notes in the wrong font? Was it arranged by somebody who's initials happen to be "SE" or "SN"? Send it my way and I'll clean it up and tweak the harmonies for $100 flat. Your band will thank you!

                        </div>
                    </div>
                </div>
            </div>
            <div className="section-white commission-block center">
                <h2 className="cursive white-text commission-quote">
                "There is nothing to keeping a band together. <br />You simply have to have a gimmick,<br /> and the gimmick I use is to pay them money!" <br />-Duke Ellington
                    </h2>
                <br />
                <br />
                {/* <a className="button" href="/bio">Hire Kyle</a> */}
            </div>
            <Footer />
        </div>
    )
}


export default Commissions