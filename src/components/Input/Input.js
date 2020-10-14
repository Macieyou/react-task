import React from 'react';
import "./Input.scss"

const Input = ({ label, placeholder, required, value, onChange }) => (
    <fieldset className="input">
        <input
            className="input__field"
            label={label}
            placeholder={placeholder}
            required={required}
            type={"text"}
            value={value}
            onChange={onChange}
        />
        <label className="input__label">{label}</label>
        <span className="input__bar"/>
    </fieldset>
)


export default Input;