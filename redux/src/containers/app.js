import React from 'react'
import { connect } from 'react-redux'
import { movieslist, directorslist } from '../actions'
import { bindActionCreators } from 'redux'
import MovieList from '../components/MovieList'

class App extends React.Component{

  componentWillMount () {
    this.props.movieslist()
    this.props.directorslist()
  }

  render () {
    return (
      <MovieList {...this.state.movies}/>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    data: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    movieslist, directorslist
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)