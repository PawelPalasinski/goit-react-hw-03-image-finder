import React, { Component } from 'react';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
// import './Modal.css';

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        console.log('modal wczytany');
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown );
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdpropClick = e => {
        if(e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

  render() {
        const { url, alt} = this.props;
        return (
        <div className="Overlay" onClick={ this.handleBackdpropClick }>
                <div className="Modal" >
                    <img src={url}
                        alt={alt}
                    />
                    <button onClick={this.handleBackdpropClick}>Close</button>
            </div>
          </div>
        )
    }
}

export default Modal;