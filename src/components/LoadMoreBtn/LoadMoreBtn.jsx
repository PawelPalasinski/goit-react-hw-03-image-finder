import React from 'react';
// import PropTypes from 'prop-types';
// import './Button.css';

export default function LoadMoreBtn({ onButtonClick }) {
    return (
        <button className='Button' type='button' onClick={ onButtonClick }>Load more</button>
    )
}

// Button.propTypes = {
//     onButtonClick: PropTypes.func,
// }