import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import {UsersContext} from "../contexts/UsersContext";
import Container from "../components/Container";
import PostCard from '../components/PostCard';

const Posts = ({match, ...props}) => {
    const [users] = useContext(UsersContext);
    const history = useHistory();

    return (
        <Container>
            {users.filter(user => `${user.id}` === match.params.userId).map(user => (
                <section className="posts-cards-wrapper">
                    {user.posts.map(post => (
                        <PostCard className="post-card--short"
                            title={`${post.title.substring(0, 80)}...`}
                            event={() => history.push(`/user/${user.id}/post/${post.id}`)}
                        />
                    ))}
                </section>
            ))}
        </Container>
    );
}

export default Posts;