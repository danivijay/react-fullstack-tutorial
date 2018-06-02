import React, { Component } from 'react'

import '../css/styles.css'

class Header extends Component {

  state = {
    keywords: ''
  }

  onInputChange = (e) => {
    // Todo
    this.setState ({
      keywords: e.target.value
    })
  }

  

  render () {
    const style = {
      background: 'red'
    }
    if (this.state.keywords !== '' ){
      style.background = 'blue'
    } else {
      style.background = 'red'
    }
    return (
      <header style={style}>
        <div className="logo">Logo</div>
        <input 
          type="text"
          onChange={this.onInputChange}
          />
      </header>
    )
  }
}

export default Header
