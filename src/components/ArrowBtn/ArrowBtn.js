import React from 'react';
import './ArrowBtn.scss';

const ArrowBtn = ({ className, onClick }) => (
    <button className={className ? `arrow-btn ${className}` : 'arrow-btn'}
        onClick={onClick}
    />
);

export default ArrowBtn;