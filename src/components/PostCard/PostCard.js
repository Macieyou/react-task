import React from 'react';
import ArrowBtn from "../ArrowBtn";
import './PostCard.scss';

const PostCard = ({ className, title, desc, event, children }) => (
    <article className={className ? ` post-card ${className}` : 'post-card'}>
        <h3 className="post-card__title">{title}</h3>
        <p className="post-card__desc">{desc}</p>
        {className === "post-card--short" && <ArrowBtn className="post-card__cta" onClick={event}/>}
        {children}
    </article>
);

export default PostCard;