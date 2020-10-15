import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {PostsContext} from "../contexts/PostsContext";
import RemoveButton from "./RemoveButton";

const RemovePost = () => {
    const [posts, setPosts] = useContext(PostsContext);

    const currentUserId  = useParams();
    const getCurrentUserId = `${Object.values(currentUserId)}`;
    const postsLength = posts.filter(post => `${post.userId}` ===  getCurrentUserId);

    const removePosts = (index) => {
        const remove = posts.splice(index, 1)
        console.log(postsLength.length);
        setPosts(prevPosts => [...prevPosts, {
            posts: remove
        }])
    }

    return (
        <RemoveButton onClick={removePosts}/>
    );
};

export default RemovePost;