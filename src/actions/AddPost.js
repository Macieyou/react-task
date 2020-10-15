import React, {useState, useContext} from 'react';
import { useParams } from 'react-router-dom'
import {PostsContext} from "../contexts/PostsContext";
import Input from "../components/Input";
import AddButton from "../components/AddButton";

const AddPost= () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [posts, setPosts] = useContext(PostsContext);

    const currentUserId  = useParams();
    const getCurrentUserId = `${Object.values(currentUserId)}`;
    const postsLength = posts.filter(post => `${post.userId}` ===  getCurrentUserId).length;

    const updateTitle = (e) => {
        setTitle(e.target.value);
    }

    const updateDesc = (e) => {
        setDesc(e.target.value);
    }

    const addPost = e => {
        e.preventDefault();
        console.log(postsLength);
        setPosts(prevPosts => [...prevPosts, {
            title: title,
            desc: desc,
            userId: getCurrentUserId,
            postId: postsLength + 1
        }])
    }

    return (
        <form onSubmit={addPost}>
            <Input
                label="Title"
                required={true}
                placeholder="Title"
                name="name"
                value={title}
                onChange={updateTitle}
            />
            <Input
                label="Contents"
                required={true}
                placeholder="Contents"
                name="desc"
                value={desc}
                onChange={updateDesc}
            />
            <AddButton title="Submit"/>
        </form>
    );
};

export default AddPost;