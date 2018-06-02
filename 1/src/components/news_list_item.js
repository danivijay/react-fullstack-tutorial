import React from 'react'
import { css } from 'glamor'

const NewsListItem = (props) => {

  let news_item = css({
    padding: '20px',
    boxSizing: 'border-box',
    borderBottom: '1px solid grey',
    ':hover': {
      background: '#dae0ea'
    },
    '@media(max-width: 500px)': {
      padding: '10px'
    }
  })

  return (
    <div className={`${news_item}`}>
      <h2>{props.news.title}</h2>
      <div>{props.news.feed}</div>
    </div>
  )
}

export default NewsListItem
