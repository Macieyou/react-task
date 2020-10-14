import React from 'react';
import UserAvatar from "../../images/avatar-placeholder.png";
import './CommentCard.scss';

const CommentCard = ({ author, desc }) => (
    <section className="comment-card">
        <img src={UserAvatar} className="comment-card__avatar" alt="user-avatar"/>
        <div className="comment-card__body">
            <span className="comment-card__author">{author}</span>
            <p className="comment-card__desc">{desc}</p>
        </div>
    </section>
);

export default CommentCard;