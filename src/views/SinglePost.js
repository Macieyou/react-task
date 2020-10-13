import React, {useContext} from 'react';
import {PostsContext} from "../contexts/PostsContext";
import Container from "../components/Container";
import PostCard from '../components/PostCard';

const SinglePost = ({match, ...props}) => {
    const [posts] = useContext(PostsContext);
    const userHolder = match.params.userId;
    const postHolder = match.params.postId;

    return (
        <Container>
            {posts.filter(post => `${post.userId}` ===  userHolder && `${post.postId}` === postHolder).map(post => (
                <section className="posts-cards-wrapper">
                    <PostCard className="post-card--full"
                        title={post.title}
                        desc={post.desc}
                    />
                </section>
            ))}
        </Container>
    );
}

export default SinglePost;