import React from 'react';

const GalleryImage = (props) => {
    return (

        <figure>
            <img alt={props.label} src={props.path} className="gallery-image" />
            <label className="label">{props.label}</label>
        </figure>

    )
}

export default GalleryImage;