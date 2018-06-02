import React from 'react'

import NewsListItem from './news_list_item'

const NewsList = (props) => {

  const news = props.news.map(item => {
    return (
      <NewsListItem news={item} key={item.id}/>
    )
    
  })

  return (
    <div>
      <div>{ props.children }</div>
      <div>{ news }</div>
    </div>
  )
}

export default NewsList