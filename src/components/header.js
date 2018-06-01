import React, { Component } from 'react'

import '../css/styles.css'

class Header extends Component {
  
  state = {
    keywords: "hello"
  }

  onInputChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      keywords: e.target.value
    })
  }

  render () {
    console.log(this.state.keywords)
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
