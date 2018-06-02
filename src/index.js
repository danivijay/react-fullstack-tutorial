import React from 'react'
import ReactDOM from 'react-dom'

import JSON from './db.json'

import Header from './components/header'
import NewsList from './components/news_list'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <NewsList news={JSON}>
          <div>
            <h3>The News are:</h3>
          </div>
        </NewsList>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))