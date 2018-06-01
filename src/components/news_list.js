import React from 'react'

const NewsList = (props) => {

  const news = props.news.map(item => {
    return (
      <div key={item.id}>
        <h2>{ item.title }</h2>
        <p>{ item.feed }</p>
      </div>
    )
    
  })

  return (
    <div>{ news }</div>
  )
}

export default NewsList