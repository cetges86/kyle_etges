import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import jDillaFile from './J Dilla and the Future of Humanity.pdf'
import bigBandpdf from './Essential Artists of the Big Band era.pdf'
import earlyJazz from './Essential Artists of Early Jazz.pdf'
import bebopHardBop from './Essential Artists of Bebop & Hard Bop.pdf'
import avantGarde from './Essential Artists of Avant Garde & Free Jazz.pdf'
import fjHaydn from './A Schenkerian Analysis of Symphony No. 100,  Movement IV, mm.1-8, by Franz Joseph Haydn.pdf'
import felaKuti from './The Music and Activism of Fela Kuti, A Selective Annotated Bibliography.pdf'
import stravinsky from "./Stravinsky's Influence on the Jazz Idiom.pdf"


const BlogPage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="blog-banner">
                <h1 className="center">Blog</h1>
            </div>
            <div className="grid-wrapper">
            <div className="blog-post">
                    <h2>The Rite of Swing_ Stravinsky's Influence on the Jazz Idiom</h2>
                    <p>Click the icon to download / view this post</p>
                    <a id="blog-link" target="_blank" href={stravinsky}><i className="fas fa-file-invoice"></i></a>
                </div>
            <div className="blog-post">
                    <h2>The Music and Activism of Fela Kuti, A Selective Annotated Bibliography</h2>
                    <p>Click the icon to download / view this post</p>
                    <a id="blog-link" target="_blank" href={felaKuti}><i className="fas fa-file-invoice"></i></a>
                </div>
            <div className="blog-post">
                    <h2>A Schenkerian Analysis of Symphony No. 100,  Movement IV, mm.1-8, by Franz Joseph Haydn</h2>
                    <p>Click the icon to download / view this post</p>
                    <a id="blog-link" target="_blank" href={fjHaydn}><i className="fas fa-file-invoice"></i></a>
                </div>
                <div className="blog-post">
                    <h2>Essential Artists of Avant Garde & Free Jazz</h2>
                    <p>Click the icon to download / view this post</p>
                    <a id="blog-link" target="_blank" href={avantGarde}><i className="fas fa-file-invoice"></i></a>
                </div>
                <div className="blog-post">
                    <h2>Essential Artists of Bebop & Hard Bop</h2>
                    <p>Click the icon to download / view this post</p>
                    <a id="blog-link" target="_blank" href={bebopHardBop}><i className="fas fa-file-invoice"></i></a>
                </div>
                <div className="blog-post">
                    <h2>Essential Artists of the Big Band Era</h2>
                    <p>Click the icon to download / view this post</p>
                    <a id="blog-link" target="_blank" href={bigBandpdf}><i className="fas fa-file-invoice"></i></a>
                </div>
                <div className="blog-post">
                    <h2>Essential Artists of Early Jazz</h2>
                    <p>Click the icon to download / view this post</p>
                    <a id="blog-link" target="_blank" href={earlyJazz}><i className="fas fa-file-invoice"></i></a>
                </div>
                <div className="blog-post">
                    <h2>J Dilla and the Future of Humanity - Jan. 9, 2018</h2>
                    <p>Click the icon to download / view this post</p>
                    <a id="blog-link" target="_blank" href={jDillaFile}><i className="fas fa-file-invoice"></i></a>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default BlogPage;