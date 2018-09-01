import React from 'react';

const GalleryImage = (props) => {
    return (

        <figure>
            <img src={props.path} className="gallery-image" />
            <label className="label">Image of Kyle doing music stuff</label>
        </figure>

    )
}

export default GalleryImage;