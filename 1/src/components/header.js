import React from 'react'

import classes from '../css/styles.css'

const Header = (props) => {
  return (
    <header>
      <div className={classes.logo}>blah blah news</div>
      <input 
        type="text"
        onChange={props.getKeywords}
        />
    </header>
  )
}

export default Header
