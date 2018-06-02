import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Posts from './components/Posts'
import Profile from './components/Profile'
import PostsItem from './components/PostsItem'

const App = () => {
  return (
    <HashRouter>
    <div>
      <header>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/posts">Posts</Link>&nbsp;
        <Link to={{
          pathname: '/profile',
          hash: '#dani',
          search: '?param=1'
        }}>Profile</Link>&nbsp;
        <hr/>
      </header>
      <Route path="/" exact component={Home} />
      <Route path="/posts" component={Posts} />
      <Route path="/posts/:id/:user" component={PostsItem} />
      <Route path="/profile" component={Profile} />
    </div>
    </HashRouter>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)