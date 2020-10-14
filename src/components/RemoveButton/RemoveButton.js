import React from 'react';
import './RemoveButton.scss';
import RemoveIcon from '../../images/remove-icon.svg';

const RemoveButton = ({onClick}) => (
    <button className="remove-button" onClick={onClick}>
        <img src={RemoveIcon} alt="remove-icon"/>
    </button>
);

export default RemoveButton;