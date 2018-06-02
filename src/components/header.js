import React, { Component } from 'react'

import '../css/styles.css'

class Header extends Component {

  state = {
    keywords: '',
    active: 'active'
  }

  onInputChange = (e) => {
    const keywords = e.target.value
    const val = keywords ? 'active' : 'non-active' 
    this.setState ({
      active: val,
      keywords: e.target.value
    })
  }

  

  render () {
    return (
      <header className={this.state.active}>
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
