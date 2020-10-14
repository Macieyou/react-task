import React from 'react';
import "./AddButton.scss"

const AddButton = ({onClick, title}) => (
    <button className="add-button" onClick={onClick}>
        {title}
    </button>
);

export default AddButton;