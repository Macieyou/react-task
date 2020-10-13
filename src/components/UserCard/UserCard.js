import React from 'react';
import UserAvatar from '../../images/avatar-placeholder.png';
import './UserCard.scss';

const UserCard = ({ name, email, phone, desc, event}) => (
    <div className="user-card">
        <figure className="user-card__info">
            <img src={UserAvatar} className="user-card__avatar" alt="user-avatar"/>
            <figcaption className="user-card__details">
                <span className="user-card__name">{name}</span>
                <a href={`mailto:${email}`}>{email}</a>
                <a href={`tel:${phone}`}>{phone}</a>
                <p className="user-card__desc">{desc}</p>
            </figcaption>
        </figure>
        <div className="user-card__cta">
            <button className="user-card__btn" onClick={event}>Details</button>
        </div>
    </div>
);

export default UserCard;