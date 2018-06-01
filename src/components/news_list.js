import React from 'react'

import NewsListItem from './news_list_item'

const NewsList = (props) => {

  const news = props.news.map(item => {
    return (
      <NewsListItem news={item} key={item.id}/>
    )
    
  })

  return (
    <div>{ news }</div>
  )
}

export default NewsList