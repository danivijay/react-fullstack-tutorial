import React from 'react'
import { Link } from 'react-router-dom'

const Profile = (props) => {
  const redir = () => {
    return props.history.push('/')
  }
  return (
    <div>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}>Posts</Link>
      {redir()}
    </div>
  )
}

export default Profile