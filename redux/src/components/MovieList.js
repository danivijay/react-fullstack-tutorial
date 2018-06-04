import React from 'react';

const MovieList = (props) => {

  renderMovies = (movies) => (
    movies?
      movies.map(item => (
          <div key={ item.name }>
            { item.name }
          </div>
      )): null
  )

  return (
    <div>
      {renderMovies(props.data.movies)}
    </div>
  );
};

export default MovieList;