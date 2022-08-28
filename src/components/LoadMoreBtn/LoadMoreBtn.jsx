import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({ onButtonClick }) {
    return (
        <div className={styles.BtnContainer}>
            <button className={styles.Button} type='button' onClick={onButtonClick}>Load more</button>
        </div>
    )
}

LoadMoreBtn.propTypes = {
    onButtonClick: PropTypes.func,
}
