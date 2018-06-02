import React, { Component } from 'react'

import '../css/styles.css'

class Header extends Component {

  state = {
    keywords: '',
    active: false
  }

  onInputChange = (e) => {
    const keywords = e.target.value
    const val = keywords ? true : false 
    this.setState ({
      active: val,
      keywords: e.target.value
    })
  }

  

  render () {
    return (
      <header style={{background: `${this.state.active ? 'blue' : 'red'}`}}>
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
