import { Component } from 'react';
// import './ImageGallery.css';


class ImageGallery extends Component {
    
    render() {
    return (
        <ul className="ImageGallery">
            {this.props.children}
        </ul>
    )
    }
}

export default ImageGallery;