import React, { Component } from 'react';
//import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() =>  {
        return import('./NewPost/NewPost');
    });

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink 
                                 to="/posts"
                                 activeClassName="my-active"
                                 activeStyle={{
                                     color: '#fa923f',
                                     textDecoration: 'underline'
                                 }}
                                 exact>Posts</NavLink></li>
                            <li><NavLink to={
                                {
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }
                            }>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
               
                <Switch>
                    {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost}/>   : null}
                    <Route path="/posts" component={Posts} />  
                    {/* <Redirect from="/" to="/posts" /> */}
                    <Route render={()=> <h1>Not Fouund</h1>} />

                </Switch>
                
            </div>
        );
    }
}

export default Blog;