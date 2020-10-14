import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import {UsersContext} from "../contexts/UsersContext";
import {PostsContext} from "../contexts/PostsContext";
import Container from "../components/Container";
import NavBar from "../components/NavBar";
import PostCard from '../components/PostCard';
import AddPost from "../components/AddPost";
import BackButton from "../components/BackButton";
import Modal from "../components/Modal";
import RemovePost from "../components/RemovePost";

const Posts = ({match, ...props}) => {
    const [users] = useContext(UsersContext);
    const [posts] = useContext(PostsContext);
    const userHolder = match.params.userId;
    const history = useHistory();

    return (
        <Container>
            <NavBar>
                <BackButton/>
                <Modal title="Add post">
                    <AddPost/>
                </Modal>
            </NavBar>

            {users.filter(user => `${user.id}` === userHolder).map(user => (
                <section className="posts-cards-wrapper" key={user.id}>
                    {posts.filter(post => `${post.userId}` === userHolder).map(post => (
                        <PostCard key={post.postId}
                          className="post-card--short"
                          title={`${post.title.substring(0, 80)}...`}
                          event={() => history.push(`/user/${user.id}/post/${post.postId}`)}
                        >
                            <RemovePost/>
                        </PostCard>
                    ))}
                </section>
            ))}
        </Container>
    );
}

export default Posts;