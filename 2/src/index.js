import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Posts from './components/Posts'
import Profile from './components/Profile'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/posts">Posts</Link>&nbsp;
        <Link to="/profile">Profile</Link>&nbsp;
        <hr/>
      </header>
      <Route path="/" exact component={Home} />
      <Route path="/posts" component={Posts} />
      <Route path="/profile" component={Profile} />
    </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)