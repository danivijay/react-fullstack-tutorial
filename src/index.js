import React from 'react'
import ReactDOM from 'react-dom'

import JSON from './db.json'

import Header from './components/header'
import NewsList from './components/news_list'

class App extends React.Component {
  state= {
    news: JSON,
    filteredNews: [],
    keywords: ''
  }

  getKeyword = (e) => {
    console.log(e.target.value)
    let keywords = e.target.value.toLowerCase()
    let filteredNews = []
    filteredNews = this.state.news.filter(item => {
      return item.title.toLowerCase().indexOf(keywords) !== -1
    })
    this.setState({
      keywords,
      filteredNews
    })
  }

  render () {
    let keywords = this.state.keywords
    let filteredNews = this.state.filteredNews
    let news = this.state.news
    return (
      <div>
        <Header getKeywords={this.getKeyword} />
        <NewsList news={keywords ? filteredNews : news}>
          <div>
            <h3>The News are:</h3>
          </div>
        </NewsList>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))