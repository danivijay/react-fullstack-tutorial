import React from 'react'

const PostsItem = (props) => {
  console.log(props.match)
  return (
    <div>
      <h2>PostsItem</h2>
      <div>{props.match.params.id} - {props.match.params.user}</div>
    </div>
  )
}

export default PostsItem