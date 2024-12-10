import React, { createContext, useContext, useEffect, useState } from 'react'
import { Principal } from './Principal'
import { Movie } from '../Movie';

export const Mispeliculas = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesLoaded = JSON.parse(localStorage.getItem('peliculas')) || [];
    setMovies(moviesLoaded)
  }, [])

  return (
    <Principal>
      <div>
        {movies.length === 0
          ?
          <div className='count'>Aún no tienes ninguna película en tu colección</div>
          :
          <div className='myfilms-container'>
            <div className='count'>Tu colección cuenta con {movies.length} películas</div>
            <div className='films-container'>
              {
                movies.map(movie => (
                  <Movie key={movie.id} movies={movies} movie={movie} />
                ))
              }
            </div>
          </div>}
      </div>
    </Principal>
  )
}

