import React from 'react'
import { connect } from 'react-redux'
import { movielist } from './actions'

class App extends React.Component{

  componentWillMount () {
    this.props.getMovies()
  }

  renderMovies = (movies) => (
    movies?
      movies.map(item => (
          <div key={ item.name }>
            { item.name }
          </div>
      )): null
  )

  render () {
    return (
      <div>{ this.renderMovies(this.props.data.movies)}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: ()=> {
      dispatch(movielist())
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)