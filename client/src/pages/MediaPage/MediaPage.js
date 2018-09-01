import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Player from "../../components/Player/Player";
import Footer from "../../components/Footer/Footer";
import listenImage from "./sax-cropped.jpg";
import galleryImages from "../../components/GalleryImage/images.json";
import GalleryImage from "../../components/GalleryImage/GalleryImage";
import "../MainPage/main.css"

const MediaPage = () => {

    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="container grid-wrapper section-dark">
                <img className="image" alt="cropped img of kyle with saxophone" src={listenImage} />
                <div>
                    <p className="center">Kyle does not have any solo releases, yet...</p>
                    <Player />
                </div>
            </div>
            <h1 className="small-caps center">Gallery</h1>
            <div className="img-gallery">
                {galleryImages.map(img => {
                    return <GalleryImage
                    key ={img.id}
                    path = {img.path} />
                })}
            </div>
            <div>

            </div>
            <Footer />
        </div>
    )

}

export default MediaPage;