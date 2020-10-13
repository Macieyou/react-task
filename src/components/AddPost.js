import React, {useState, useContext} from 'react';
import {PostsContext} from "../contexts/PostsContext";

const AddPost= () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [posts, setPosts] = useContext(PostsContext);

    const updateTitle = (e) => {
        setTitle(e.target.value);
    }

    const updateDesc = (e) => {
        setDesc(e.target.value);
    }

    const addPost = e => {
        e.preventDefault();
        setPosts(prevPosts => [...prevPosts, {
            title: title,
            desc: desc,
            postId: posts.length + 1
        }])
    }

    return (
        <form onSubmit={addPost}>
            <input type="text" name="name" value={title} onChange={updateTitle}/>
            <input type="text" name="name" value={desc} onChange={updateDesc}/>
            <button>Submit</button>
        </form>
    );
};

export default AddPost;