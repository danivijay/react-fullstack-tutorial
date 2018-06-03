import React from 'react'
import { Link } from 'react-router-dom'

import Styler from '../hoc/Styler'
import Auth from '../hoc/Auth'

const Profile = (props) => {
  
  const redir = () => {
    return true
    // return props.history.push('/')
  }

  return (
    <Auth>
      <Styler>
        <Link to={{
          pathname: `${props.match.url}/posts`
        }}>Posts</Link>
        {redir()}
      </Styler>
    </Auth>
  )
}

export default Profile