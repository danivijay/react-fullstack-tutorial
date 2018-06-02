import React from 'react'
import { Link } from 'react-router-dom'

const Profile = (props) => {
  return (
    <Link to={{
      pathname: `${props.match.url}/posts`
    }}>Posts</Link>
  )
}

export default Profile