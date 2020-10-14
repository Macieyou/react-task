import React from 'react';
import './ArrowButton.scss';

const ArrowButton = ({ className, onClick, title }) => (
    <button title={title}
        className={className ? `arrow-button ${className}` : 'arrow-button'}
        onClick={onClick}
    />
);

export default ArrowButton;