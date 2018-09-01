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
            <div className="grid-wrapper section-white">
                <div>
                    <h2 className="center">Audio</h2>
                    <img className="image" alt="cropped img of kyle with saxophone" src={listenImage} />
                    <p className="center">Kyle does not have any solo releases, yet...</p>
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
            <div>

            </div>
            <Footer />
        </div>
    )

}

export default MediaPage;