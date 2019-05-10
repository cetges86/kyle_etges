import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import blogFile from './J Dilla and the Future of Humanity.pdf'

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