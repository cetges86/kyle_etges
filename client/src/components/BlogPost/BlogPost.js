import React from 'react';

const BlogPost = (props) => {
    return (
        <div className="blog-post">
            <h2>{props.title}</h2>
            <h5>By Kyle Etges</h5>
            <br/>
            <p>{props.body}</p>
        </div>
    )
}

export default BlogPost;