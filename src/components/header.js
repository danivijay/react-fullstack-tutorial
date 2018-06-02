import React, { Component } from 'react'

import '../css/styles.css'

class Header extends Component {

  state = {
    keywords: ''
  }

  onInputChange = (e) => {
    this.setState ({
      keywords: e.target.value
    })
  }

  

  render () {
    return (
      <header>
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
