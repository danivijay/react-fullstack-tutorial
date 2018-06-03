import React from 'react'
import { Link } from 'react-router-dom'

const Posts = (props) => {

  const links = [
    { id: '1' , post: 'Post 1' },
    { id: '2' , post: 'Post 2' },
    { id: '3' , post: 'Post 3' }
  ]

  const linksJsx = links.map(item => {
    return (
      <Link to={`/posts/${item.id}`} key={item.id}>{item.post}</Link>
    )
  })

  return (
    <div>
      <h2>Posts</h2>
      { linksJsx }
    </div>
  )
}

export default Posts