import React from 'react'

const UserHoc = (WrappedComponent, WrappedComponent2, arg1) => {
  return (props) => (
    <div>
      { arg1 }
      <WrappedComponent {...props} />
      <WrappedComponent2 />
    </div>
  )
}

export default UserHoc