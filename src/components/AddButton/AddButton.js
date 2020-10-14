import React from 'react';
import AddIcon from "../../images/add.png";
import "./AddButton.scss"

const AddButton = ({onClick}) => (
    <button className="add-button" onClick={onClick}>
        <img src={AddIcon} alt="add"/>
    </button>
);

export default AddButton;