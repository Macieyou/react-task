import React, {useContext} from 'react';
import {PostsContext} from "../contexts/PostsContext";
import {CommentsContext} from "../contexts/CommentsContext";
import Container from "../components/Container";
import PostCard from '../components/PostCard';
import AddComment from "../components/AddComment";

const SinglePost = ({match, ...props}) => {
    const [posts] = useContext(PostsContext);
    const [comments] = useContext(CommentsContext);
    const userHolder = match.params.userId;
    const postHolder = match.params.postId;

    return (
        <Container>
            <AddComment/>
            {posts.filter(post => `${post.userId}` ===  userHolder && `${post.postId}` === postHolder).map(post => (
                <section className="posts-cards-wrapper" key={post.postId}>
                    <PostCard
                        className="post-card--full"
                        title={post.title}
                        desc={post.desc}
                    />
                    {comments.filter(comment => `${comment.userId}` ===  userHolder && `${comment.postId}` === postHolder).map(comment => (
                        <PostCard key={comment.commentId}
                            className="post-card--full"
                            title={comment.title}
                            desc={comment.desc}
                        />
                    ))}
                </section>
            ))}
        </Container>
    );
}

export default SinglePost;