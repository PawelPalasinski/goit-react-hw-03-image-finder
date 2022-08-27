import React from 'react';
import PropTypes from 'prop-types';
// import './ImageGalleryItem.css';

export default function ImageGalleryItem({ articles, onImage }) {

    return (
        <>
            {articles.map(({ id, webformatURL, largeImageURL, tags}) => 
                    <li className="ImageGalleryItem" key={ id }>
                    <img src={webformatURL} alt="response from API" className="ImageGalleryItem-image" onClick={() => onImage(largeImageURL, tags, id)} />
                    </li>
            )}
        </>
    )

}

ImageGalleryItem.propTypes = {
    id: PropTypes.string,
    webformatURL: PropTypes.string,
}