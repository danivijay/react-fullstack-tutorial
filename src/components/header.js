import React from 'react'
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

const user = {
  name: 'dani',
  lastname: 'vijay',
  age: 24
}

const Header = () => {
  return (
    <div>
      <div>Name: {user.name} {user.lastname}</div>
      <div>Age: {user.age}</div>
    </div>
  )
}

export default Header
