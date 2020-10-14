import React, {useState, useContext} from 'react';
import { useParams } from 'react-router-dom'
import {CommentsContext} from "../contexts/CommentsContext";

const AddComment= () => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [comments, setComments] = useContext(CommentsContext);

    const currentUserId  = useParams();
    const getCurrentUserId = `${Object.values(currentUserId)[0]}`;
    const getCurrentPostId = `${Object.values(currentUserId)[1]}`;
    const commentsLength = comments.filter(
        comment => `${comment.userId}` === getCurrentUserId && `${comment.postId}` ===  getCurrentPostId
    ).length;

    const updateAuthor = (e) => {
        setAuthor(e.target.value);
    }

    const updateTitle = (e) => {
        setTitle(e.target.value);
    }

    const updateDesc = (e) => {
        setDesc(e.target.value);
    }

    const addComment = e => {
        e.preventDefault();
        console.log(commentsLength);
        setComments(prevComments => [...prevComments, {
            author: author,
            title: title,
            desc: desc,
            userId: getCurrentUserId,
            postId: getCurrentPostId,
            commentId: commentsLength + 1
        }])
    }

    return (
        <form onSubmit={addComment}>
            <input type="text" name="name" value={author} onChange={updateAuthor}/>
            <input type="text" name="title" value={title} onChange={updateTitle}/>
            <input type="text" name="desc" value={desc} onChange={updateDesc}/>
            <button>Submit</button>
        </form>
    );
};

export default AddComment;