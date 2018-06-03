import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

import Home from './components/Home'
import Posts from './components/Posts'
import Profile from './components/Profile'
import PostsItem from './components/PostsItem'
import LifeCycle from './components/LifeCycle'
import Conditionals from './components/Conditionals'

const App = () => {
  return (
    <BrowserRouter>
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
        <NavLink to="/lifecycle">LifeCycle</NavLink>&nbsp;
        <NavLink to="/conditionals">Conditionals</NavLink>&nbsp;
        <hr/>
      </header>
      <Switch>
        <Route path="/posts/:id/:user" component={PostsItem} />
        <Route path="/posts" component={Posts} />
        <Route path="/profile" component={Profile} />
        <Route path="/lifecycle" component={LifeCycle} />
        <Route path="/conditionals" component={Conditionals} />
        <Route path="/" exact component={Home} />
        <Route render={() => <h2>Oops! 404</h2> } />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)