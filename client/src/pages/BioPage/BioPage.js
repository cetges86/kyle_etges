import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "../../pages/MainPage/main.css";
import quote from "./coltrane-quote.jpg";
import portrait from "./kyle6.jpg";
import portrait2 from "./Kyle1.jpg";


const BioPage = () => {
    return (
        <div>
            <Navbar />
            <div className="grid-wrapper bio-section section-light">
                <img alt="portrait of Kyle Etges" className="image bio-item" src={portrait}></img>
                <p className="bio-paragraph bio-item">Kyle is a saxophonist, composer, educator, and bandleader in Nashville, TN. He began
playing music when he was 9 years old, and has been leading bands since he was 13. Kyle graduated Magna Cum Laude from the University of Northern Colorado in 2012, with a double major in Music Education and Jazz Studies. In the Spring of 2019, he completed his Master's
Degree in Jazz Studies at Middle Tennessee State University, under the tutelage of legendary saxophonist Don Aliquo.
                    <br />
                    <br />
                    During his studies at the University of Northern Colorado, he performed internationally with the UNC Jazz Lab Band One, appearing with artists including Jeff Coffin, Terell Stafford, The Clayton Brothers, Jeff Hamilton, The New York Voices, and many others. For two years in a row, he won the UNC Jazz Composer's Contest, and had an arrangement performed at the
2011 UNC/Greeley Jazz Festival. He also performed with the UNC Wind Ensemble at the Colorado Music Educators Association conference, and with UNC’s premiere saxophone quartet at the 2011 North American Saxophone Alliance conference in Las Vegas, NV. Three of his compositions were also featured at this conference.
                </p>
                <p className="bio-paragraph bio-item">
                    After graduating, Kyle taught music in Denver and participated extensively in the in the
    Denver music community. He had the opportunity to work with students at El Sistema Colorado,
    an orchestra program serving at-risk youth in Denver. In 2012, he performed as the baritone
    saxophone player with the Lionel Hampton Jazz Orchestra, a jazz ensemble composed of
    select musicians from around the country. In 2013, his group Bop Skizzum placed 2nd in the
    Hard Rock Cafe Worldwide Battle of the Bands, and 1st in the United States. In 2014, another
    one of his projects - The Messers - won the "Best of the West" competition, and performed at
    the famous Red Rocks Amphitheatre. He also played in the Metropolitan Jazz Orchestra
    -Denver's premiere big band- as well as Contraband, who have recorded several albums and
    travelled nationwide in 2013 and 2014.
                    <br />
                    <br />
                    In July 2015, Kyle became an Orchestra Musician with Celebrity and Princess cruises. He has completed three contracts playing saxophone, flute, and clarinet for various guest entertainers and jazz sets. During his first contract, Kyle researched the improvisations of legendary saxophonist Sonny Stitt, off of his landmark album <i>Personal Appearance</i>. Kyle's findings will be the subject of his first book, "Personal Appearance: The Sophistication of Sonny Stitt."
                    <br />
                    The Middle Tennessee State University School of Music selected Kyle Etges as the Graduate Student of the Year in 2019, due to his hard work and dedication during his graduate studies. He now teaches two courses at MTSU, and one course at Nashville State Community College. He can be seen playing in several bands throughout the Nashville area, including the Music City Big Band, Jonny Gowow & The Japanese Cowboys, Dr. Soul's, as well as leading a jazz quartet playing his original compositions and arrangements. The quartet has two releases, Jazz Might Happen (2019) and Vow (2020). He currently resides just outside of Nashville with his wife, Gwen.
<br/><br/>

                </p>
                <img alt="Kyle Etges playing with Citizen Dan" className="image bio-item" src={portrait2}>
                    </img>
                
            </div>
            <div className="wrapper section-light">
                <p id="final-para" className="bio-paragraph">Kyle is available for <a href="/commissions">commissions</a>, private lessons, group lessons, sectionals, album
                    production, and band consultation. Please visit the <a href="/contact">contact</a> page for more
                    information.</p>
            </div>
        
            <div className="wrapper section-black">
                <img className="banner-img" alt="John Coltrane quote" src={quote} />
            </div>

            <Footer />
        </div>
    )
}

export default BioPage;