import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Movie = ({movie, movies}) => {

  const url = 'https://image.tmdb.org/t/p/w300';
  const voteAverage = movie.vote_average.toFixed(1)

  function getColorByVote(vote){
    if(vote >= 8){
      return 'green'

    }else if(vote >= 5){
      return 'orange'

    }else{
      return 'red'
    }
  }

  function handleClick(){
    const existingMovies = JSON.parse(localStorage.getItem('peliculas')) || [];

    const isMovieAlreadySaved = existingMovies.some((savedMovie) => savedMovie.id === movie.id);

    if(!isMovieAlreadySaved){
      const updateMovies = [...existingMovies, movie];
      localStorage.setItem('peliculas', JSON.stringify(updateMovies));
      alert('Se ha añadido correctamente')

    }else{
      alert('Esta película ya está en la lista.')
    }
  }

  function handleDelete(){
    const existingMovies = JSON.parse(localStorage.getItem('peliculas')) || [];
    const moviesFiltered = existingMovies.filter(moviesSaved => moviesSaved.id !== movie.id);
    localStorage.setItem('peliculas', JSON.stringify(moviesFiltered))
    alert('Se ha eliminado correctamente')
    window.location.reload();
  }
    
  return (
    <div className='movie-container' >
      <Link to={ movies ? `pelicula/${movie.id}` : ''}>
      <div className='poster-container'>
        <img src={url + movie.poster_path} alt='poster' />
      </div>
      <div className='info'>
        <div className='movie-title'>{movie.title}</div>
        <span style={{background: getColorByVote(voteAverage)}} className='vote'>{voteAverage}</span>
      </div>
      </Link>
      {
        movies 
        ? 
        <button onClick={handleDelete} className='deleteItem'><i className="fa-solid fa-trash"></i></button> 
        : 
        <button onClick={handleClick} className='add'><i className="fa-solid fa-plus"></i></button> 
      }
    </div>
  )
}
