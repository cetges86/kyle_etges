import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Player from "../../components/Player/Player";
import Footer from "../../components/Footer/Footer";
import listenImage from "./jimi.jpg";
import galleryImages from "../../components/GalleryImage/images.json";
import GalleryImage from "../../components/GalleryImage/GalleryImage";
import "../MainPage/main.css"

const MediaPage = () => {

    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="grid-wrapper section-white">
                <div>
                    <h2 className="center">Audio</h2>
                    <img id="jimi-img" className="image" alt="cropped img of kyle with saxophone" src={listenImage} />
                    <p id="jimi-quote" className="center">"A lot of people believe in God. I believe in music." <br/>Jimi Hendrix</p>
                </div>
                <div>
                    <Player />
                </div>
            </div>
            <h1 className="small-caps center">Image Gallery</h1>
            <div className="container img-gallery">
                {galleryImages.map(img => {
                    return <GalleryImage
                        key={img.id}
                        path={img.path}
                        label={img.label}
                        alt={img.label} />
                })}
            </div>
            <div className="section-white quote-block center">
                <h2 className="cursive white-text media-quote">
                    “There is music wherever there is rhythm,
                    <br />
                    as there is life wherever there
                    <br />
                    beats a pulse”
                <br />
                    — Igor Stravinsky
                    </h2>
                <br />
                <br />
                {/* <a className="button" href="/bio">Hire Kyle</a> */}
            </div>
            <Footer />
        </div>
    )

}

export default MediaPage;