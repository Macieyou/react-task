import React from 'react';
import {Route} from 'react-router-dom';
import {UsersProvider} from "./contexts/UsersContext";
import Main from './views/Main';
import Posts from './views/Posts';
import SinglePost from "./views/SinglePost";


const MainRouter = () => {

    return (
        <UsersProvider>
          <Route exact path="/" component={Main}/>
          <Route exact path='/user/:userId' component={Posts}/>
          <Route exact path='/user/:userId/post/:postId' component={SinglePost}/>
        </UsersProvider>
    )
}

export default MainRouter;