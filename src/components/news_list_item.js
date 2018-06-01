import React from 'react'

const NewsListItem = (props) => {
  return (
    <div>
      <h2>{props.news.title}</h2>
      <div>{props.news.feed}</div>
    </div>
  )
}

export default NewsListItem
