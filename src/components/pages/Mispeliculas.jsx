import React, { createContext, useContext, useEffect, useState } from 'react'
import { Principal } from './Principal'
import { Movie } from '../Movie';
import MovieInfo from '../MovieInfo';

export const Mispeliculas = () => {

  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');
  const [myMovie, setMyMovie] = useState([]);
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const moviesLoaded = JSON.parse(localStorage.getItem('peliculas')) || [];
    setMovies(moviesLoaded)
  }, [])

  function handleSearch(e) {
    e.preventDefault();

    const searchValue = e.target.search.value.toLowerCase().trim();
    const moviesLoaded = JSON.parse(localStorage.getItem('peliculas')) || [];
    const movieFound = moviesLoaded.filter(item =>
      item.title.toLowerCase().includes(searchValue)

    )

    if (movieFound.length === 0) {
      setIsActive(false)
      return
    }

    setMyMovie(movieFound)
    setIsActive(true)
  }

  return (
    <Principal>
      <div>
        {movies.length === 0
          ?
          <div className='count'>Aún no tienes ninguna película en tu colección</div>
          :
          <div className='myfilms-container'>
            <div className='count'>Tu colección cuenta con {movies.length} películas</div>
            <form onSubmit={handleSearch} className='searchFilmForm'>
              <input
                className='search'
                name='search'
                type='text'
                placeholder='Busca en tu colección...'
                onChange={(e) => (setValue(e.target.value))}
              />
              <input type='submit' value='Buscar' />
            </form>

            <div className='films-container'>
              {
                !isActive ?
                  movies.map(movie => (
                    <Movie key={movie.id} movies={movies} movie={movie} />
                  ))
                  :
                  myMovie.map(movie => (
                    <Movie key={myMovie.id} movies={myMovie} movie={movie} />
                  ))
              }
            </div>
          </div>}
      </div>
    </Principal>
  )
}

