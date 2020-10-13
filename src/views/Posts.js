import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import {UsersContext} from "../contexts/UsersContext";
import {PostsContext} from "../contexts/PostsContext";
import Container from "../components/Container";
import PostCard from '../components/PostCard';
import AddPost from "../components/AddPost";

const Posts = ({match, ...props}) => {
    const [users] = useContext(UsersContext);
    const [posts] = useContext(PostsContext);
    const history = useHistory();

    return (
        <Container>
            <AddPost/>
            {users.filter(user => `${user.id}` === match.params.userId).map(user => (
                <section className="posts-cards-wrapper" key={user.id}>
                    <h2 className="post-card__name">{user.name}</h2>
                    {posts.filter(post => `${post.userId}` === match.params.userId).map(post => (
                        <PostCard key={post.postId}
                          className="post-card--short"
                          title={`${post.title.substring(0, 80)}...`}
                          event={() => history.push(`/user/${user.id}/post/${post.postId}`)}
                        />
                    ))}
                </section>
            ))}
        </Container>
    );
}

export default Posts;