import React from 'react'

const Styler = (props) => {

  const styles = {
    background: 'lightgrey'
  }
  
  return (
    <div style={styles}>
      { props.children }
    </div>
  )
}

export default Styler