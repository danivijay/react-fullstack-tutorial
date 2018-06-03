import React from 'react'

const Auth = (props) => {
  let pass = 'pass123'

  if (pass !== 'pass123') {
    return <h3>Auth failed</h3>
  } else {
    return props.children
  }
}

export default Auth