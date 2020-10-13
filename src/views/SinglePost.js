import React, {useContext} from 'react';
import {PostsContext} from "../contexts/PostsContext";
import Container from "../components/Container";
import PostCard from '../components/PostCard';

const SinglePost = ({match, ...props}) => {
    const [posts] = useContext(PostsContext);

    return (
        <Container>
            {posts.filter(post => `${post.userId}` === match.params.userId && `${post.postId}` === match.params.postId).map(post => (
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