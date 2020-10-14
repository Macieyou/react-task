import React, {useContext} from 'react';
import {PostsContext} from "../contexts/PostsContext";
import {CommentsContext} from "../contexts/CommentsContext";
import Container from "../components/Container";
import PostCard from '../components/PostCard';
import CommentCard from "../components/CommentCard";
import AddComment from "../components/AddComment";
import NavBar from "../components/NavBar";
import BackButton from "../components/BackButton";
import Modal from "../components/Modal";

const SinglePost = ({match, ...props}) => {
    const [posts] = useContext(PostsContext);
    const [comments] = useContext(CommentsContext);
    const userHolder = match.params.userId;
    const postHolder = match.params.postId;

    return (
        <Container>
            <NavBar>
                <BackButton/>
                <Modal title="Add comment">
                    <AddComment/>
                </Modal>
            </NavBar>

            {posts.filter(post => `${post.userId}` ===  userHolder && `${post.postId}` === postHolder).map(post => (
                <section className="posts-cards-wrapper" key={post.postId}>
                    <PostCard
                        className="post-card--full"
                        title={post.title}
                        desc={post.desc}
                    >
                        <span>Comments:</span>
                        {comments.filter(comment => `${comment.userId}` ===  userHolder && `${comment.postId}` === postHolder).map(comment => (
                            <CommentCard key={comment.commentId}
                                 author={comment.author}
                                 desc={comment.desc}
                            />
                        ))}
                    </PostCard>
                </section>
            ))}
        </Container>
    );
}

export default SinglePost;