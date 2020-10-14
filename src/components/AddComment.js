import React, {useState, useContext} from 'react';
import { useParams } from 'react-router-dom'
import {CommentsContext} from "../contexts/CommentsContext";
import Input from "./Input";
import AddButton from "./AddButton";

const AddComment= () => {
    const [author, setAuthor] = useState('');
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

    const updateDesc = (e) => {
        setDesc(e.target.value);
    }

    const addComment = e => {
        e.preventDefault();
        console.log(commentsLength);
        setComments(prevComments => [...prevComments, {
            author: author,
            desc: desc,
            userId: getCurrentUserId,
            postId: getCurrentPostId,
            commentId: commentsLength + 1
        }])
    }

    return (
        <form onSubmit={addComment}>
            <Input
                label="Name"
                required={true}
                placeholder="Name"
                name="name"
                value={author}
                onChange={updateAuthor}
            />
            <Input
                label="Text"
                required={true}
                placeholder="Text"
                name="desc"
                value={desc}
                onChange={updateDesc}
            />
            <AddButton title="Submit"/>
        </form>
    );
};

export default AddComment;