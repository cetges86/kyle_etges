import React, {Fragment} from 'react';

const BlogPost = (props) => {
    return (
        <div className="blog-post">
            <h2>{props.title}</h2>
            <h5>By Kyle Etges</h5>
            <br/>
            <Fragment>
            {props.body}
            </Fragment>
        </div>
    )
}

export default BlogPost;