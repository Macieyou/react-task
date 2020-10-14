import React from 'react';
import {Route} from 'react-router-dom';
import {UsersProvider} from "./contexts/UsersContext";
import Users from './views/Users';
import Posts from './views/Posts';
import SinglePost from "./views/SinglePost";
import {PostsProvider} from "./contexts/PostsContext";
import {CommentsProvider} from "./contexts/CommentsContext";


const MainRouter = () => {

    return (
        <UsersProvider>
          <Route exact path="/" component={Users}/>
          <PostsProvider>
              <Route exact path='/user/:userId' component={Posts}/>
              <CommentsProvider>
                  <Route exact path='/user/:userId/post/:postId' component={SinglePost}/>
              </CommentsProvider>
          </PostsProvider>
        </UsersProvider>
    )
}

export default MainRouter;