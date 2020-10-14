import React from 'react';
import AddIcon from "../../images/add.png";
import "./AddButton.scss"

const AddButton = ({onClick}) => (
    <button title="Add"
        className="add-button" onClick={onClick}>
        <img src={AddIcon} alt="Add"/>
    </button>
);

export default AddButton;