import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BlogPost from '../../components/BlogPost/BlogPost';
import blogFile from './J Dilla and the Future of Humanity.pdf'

let testBlogPost = {
    "title": "J Dilla and the Future of Humanity",
    "body": `The first time one listens to the track “Swamp Thing” by Hiatus Kaiyote, your first thought might be “what the fuck am I listening to?” But then a weird thing happens: the groove envelops you, and for reasons you can’t quite articulate, your bobbing your head right along with Perrin Moss. This track, among many others from the last 20 years, is a perfect example of the wobble beat: a beat that feels like it’s constantly teetering on a complete trainwreck, and yet it gives us one of the deepest grooves found in all modern music. How can something so volatile be so much fun to listen to? The “wobble” or “Dilla” beat is not only an obvious indication of progressive neo-soul, but also a sign of a shift in our tastes in music, and our reactions to the progress of humanity itself.
    
    The wobble beat itself can be hard to describe, but as we delve further into its inner workings, it will become evident that that’s the whole idea. This drum beat is usually credited to J Dilla (aka James Dewitt Yancey), a hugely influential music producer from Detroit until his untimely death in 2006. During his career, J Dee worked with the likes of Erykah Badu, D’Angelo, The Pharcyde, and many many more, and has had a seminal impact on hip hop and neo-soul music in the 21st century. At the time of this writing, I am not sure of the specific session drummer who first laid down this complicated beat. However, we can surmise that they were thinking in a way that very few drummers before them have. Here is a rather rudimentary example of a Dilla beat: 
    
    There are a few things of note here. First off, notice that 8th notes and triplets are being played simultaneously. This requires the player to think in groupings of 2 (1+2+3+4+) as well as 3 (1+a 2+a 3+a 4+a) at the same time; certainly not an easy task. Also, the snare hit on 2 and 4 (usually played as a cross stick), is extended by a flam. This is accomplished by the drummer shifting their left hand from the hi hat to the snare and hitting the right-hand stick just before it strikes the rim of the snare. Therefore, and as notated, there is no hi-hat hit with the snare, adding to the general uneasiness of this beat. This also has the added effect of displacing 2 and 4. Is it on the beat (with the second hit) or just a little early (with the flam)? Again, this is a pretty simple example of the wobble beat, and many variations and complexities can exist within this umbrella term. The key takeaways are: there are multiple time feels happening simultaneously, and the beat is structured to throw the listener off of the time feel. Despite all this, this beat grooves hard, and it has backed up countless jams in the neo-soul scene, largely due to our man J Dilla. 
    
    Why is Dilla’s beat so important? Why do we like it so much, even though it skews our perception of where the groove is? For the answer, we must look at the broad scope of music history, and jazz history in the 20th century. At risk of boring you to death, here’s the down and dirty version- Music tastes exist on a pendulum. In the 1400’s, Josquin De Pres was writing such dense complex church music that people began to get overwhelmed and crave something simpler, hence the rise in popularity of good-old simple church composer Giovanni Palestrina. This happened again with Bach in the Baroque movement. It’s not that people didn’t like Bach’s work, it’s that after a while they needed to chase it with some Mozart. In the 19th century, Richard Wagner’s 5-hour opera extravaganzas made other composers want to give up tonality altogether (leading to an awful lot of weird shit in the 20th century). We’ve recently seen this in jazz and pop music. In the 70’s and 80’s, electronic instruments were on the rise, and everybody was experimenting with drum machines, synthesizers, and later autotune. Things got complicated, as they have several times before in music history, and eventually people grew distasteful of robotic-sounding music. Groups like Dave Matthews Band and Mumford & Sons are hugely popular because they specifically do not use these futuristic instruments, and people can easily connect to the “humanness” of their sound. Even bands that don’t reject electronic instruments all together are still adamantly advocating their humanity. Why does Snarky Puppy do ‘live in one take’ recording sessions, or Lake Street Dive’s Rachael Price do everything to ensure the audience she’s not lip syncing? Granted, canned pop music is absolutely still in vogue (these transitions in taste are never as clean as the history books make them out to be), but the general trend is that more and more artists has to pass a musical ‘captcha” to prove to the listener it’s not just coming from a bunch of robots. 
    
    Let’s get back to the Dilla beat. As I inadvertently pointed out earlier, this beat is extremely hard to notate, but there’s a great reason for this. Because this beat cannot be replicated by a machine. When you hear the Dilla beat, the listener knows beyond all doubt that the drummer is a living breathing human being. Dilla knew -though maybe not consciously- that any track with this beat behind it would instantly pass the “I am not a robot” litmus test. It is a testament to our tastes in music shifting away from technology and automation and towards hard-working musicians playing their hearts out. Have you noticed an aversion to automation anywhere else in our culture, aside from music? People prefer local breweries to grabbing a Budweiser; urban gardening and growing your own food has taken off as of late; everything from woodworking to hang-drying your clothes points to one obvious conclusion -we like technology, but we like doing things ourselves more. As soon as we feel like something is too robotic, or too automatic, the natural tendency is to crave a more human connection. So the wobble beat isn’t just something we thought up to outsmart a drum machine- it’s a reflection of humanity itself! And it’s an indication of where music is headed- technology is introduced, we play with it, and eventually we return to our roots. At the end of the day, we are all just humans, and we want to feel human. 
    
    As the saying goes, the more things change, the more they stay the same. When Dilla produced this beat, he wasn’t just creating a cool new sound. He was shifting our collective musical taste. Tastes throughout music history are a spinning wheel- always moving back and forth, yet always moving forward. We are undoubtedly moving forward as a species -perhaps now more than ever- but we will never let go of what makes us human. No matter what weird shit the future holds, we will always come back to our natural tendencies, our animal instincts, and our emotional connections to one another. So next time you throw on D’Angelo’s Live in Stockholm, or Hiatus Kaiyote’s Choose Your Weapon, or honestly any Dilla record, take a moment to be proud of your species. Listen with the full knowledge that a drum machine can’t groove like Perrin Moss can, or that autotune can’t connect with your emotions like Erykah Badu can, and that robots aren’t replacing us anytime soon.`
}

const BlogPage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="blog-banner">
                <h1 className="center">Blog</h1>
            </div>
            <div className="grid-wrapper">
                {/* <BlogPost title={testBlogPost.title} body={testBlogPost.body} /> */}
                <div className="blog-post">
                    <h2>J Dilla and the Future of Humanity - Jan. 9, 2018</h2>
                    <h5>By Kyle Etges</h5>
                    <p>Click the icon to download / view this post</p>
                    <a id="blog-link" target="_blank" href={blogFile}><i className="fas fa-file-invoice"></i></a>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default BlogPage;