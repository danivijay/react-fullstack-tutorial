import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom'

import Home from './components/Home'
import Posts from './components/Posts'
import Profile from './components/Profile'
import PostsItem from './components/PostsItem'

const App = () => {
  return (
    <HashRouter>
    <div>
      <header>
        <NavLink to="/">Home</NavLink>&nbsp;
        <NavLink 
          to="/posts"
          activeStyle={{color: 'red'}}
          >Posts</NavLink>&nbsp;
        <NavLink to={{
          pathname: '/profile',
          hash: '#dani',
          search: '?param=1'
        }}>Profile</NavLink>&nbsp;
        <hr/>
      </header>
      <Switch>
        <Route path="/posts/:id/:user" component={PostsItem} />
        <Route path="/posts" component={Posts} />
        <Route path="/profile" component={Profile} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
    </HashRouter>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)