import React from 'react'

import UserHoc from '../hoc/UserHoc'

const User = (props) => {
  console.log(props)
  return (
    <h2>User</h2>
  )
}

const User2 = () => {
  return (
    <h2>User</h2>
  )
}

export default UserHoc(User , User2, 'blah')