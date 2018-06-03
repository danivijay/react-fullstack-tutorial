import React from 'react'

class LifeCycle extends React.Component {
  componentWillMount() {
    console.log('will')
  }

  componentDidMount () {
    console.log('did')
  }
  render () {
    return (
      <div>
        <h2>LifeCycle</h2>
      </div>
    )
  }
}

export default LifeCycle