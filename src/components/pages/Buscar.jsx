import React, { createContext, useState } from 'react'
import { Principal } from './Principal'
import { getFilms } from '../../utils/getFilms'
import { Movie } from '../Movie'

export const Buscar = () => {

  const [value, setValue] = useState('')
  const [movies, setMovies] = useState([])

  async function handleSubmit(e) {
    e.preventDefault();

    const movies = await getFilms(value);
    setMovies(movies);
    e.target.input.value = '';
    e.target.input.focus();
  }

  return (
      <Principal>
        <div className='big-search-container'>
          <div className='search-container'>
            <h1 className='title'>Busca una película para añadir</h1>
            <form onSubmit={(e) => handleSubmit(e)} className='form'>
              <input
                type='text'
                name='input'
                placeholder='Introduce el título'
                onChange={(e) => setValue(e.target.value)}
              />
              <input type='submit' value='Buscar' />
            </form>
          </div>

          <div className='films-container'>
            {
              movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
              ))
            }
          </div>
        </div>
      </Principal>
  )
}
