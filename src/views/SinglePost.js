import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import {UsersContext} from "../contexts/UsersContext";
import Container from "../components/Container";
import PostCard from '../components/PostCard';

const SinglePost = ({match, ...props}) => {
    const [users] = useContext(UsersContext);
    const history = useHistory();

    return (
        <Container>
            {users.filter(user => `${user.id}` === match.params.userId).map(user => (
                <section className="posts-cards-wrapper">
                    {user.posts.filter(post => `${post.id}` === match.params.postId).map(post => (
                        <PostCard className="post-card--full"
                            title={post.title}
                            desc={post.desc}
                        />
                    ))}
                </section>
            ))}
        </Container>
    );
}

export default SinglePost;