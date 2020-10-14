import React from 'react';
import './RemoveButton.scss';

const RemoveButton = ({onClick}) => {
    return (
        <button onClick={onClick}>
            Delete
        </button>
    );
};

export default RemoveButton;