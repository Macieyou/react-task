import React from 'react';
import './UserCard.scss';

const UserCard = ({ name, email, phone, website, desc, event}) => (
    <div className="user-card">
        <span className="user-card__name">{name}</span>
        <div className="user-card__info">
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phone}`}>{phone}</a>
            <a href={website}>{website}</a>
        </div>
        <p className="user-card__desc">{desc}</p>
        <button onClick={event}>Details</button>
    </div>
);

export default UserCard;