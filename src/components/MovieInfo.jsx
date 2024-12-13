import React, { useEffect, useState } from 'react'
import { Principal } from './pages/Principal'
import { Link, useParams } from 'react-router-dom';

const MovieInfo = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const url = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjE0YzFhZDk1NzM1N2E5NzU5NmYzNDRmNzg0OTJhMCIsIm5iZiI6MTczMzMwNTQ4Mi44MDMsInN1YiI6IjY3NTAyNDhhYTkzYmRlYThjMjUwOTgzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.41oQjmoK08Oisql8JHoHwoyjV9g1r0Vfx4raVSWgnrc',
        'accept': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) throw new Error('Error en la respuesta de la api')
        return response.json()
      })
      .then(data => {
        setMovie(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error(error)
        setIsLoading(false)
      })

  }, [id])

  return (
    <Principal>
      {isLoading ? (
        <p className='loading'>Cargando información de la película...</p>
      ) : (
        <div className='info-container'>
          <div className='movieInfo-container'>
            <div className='info-poster'>
              <img src={url + movie.poster_path} alt='poster' />
            </div>
            <div className='info-container'>
              <p><strong>Título de la película: <span className='title-description'>{movie.title}</span></strong></p>
              <p><strong>Nota por la crítica: </strong>{movie.vote_average.toFixed(1)}</p>
              <p><strong>Genero: </strong>{movie.genres[0].name}{movie.genres[1] ? ',' : ''} {movie.genres[1]?.name}{movie.genres[2] ? ',' : ''} {movie.genres[2]?.name}</p>
              <p><strong>Sinopsis: </strong>{movie.overview}</p>
              <p><strong>Eslogán: </strong>{movie.tagline}</p>
            </div>
          </div>
          <Link to='/peliculas'><button className='btn'>Volver</button></Link>
        </div>
      )}

    </Principal>
  )
}

export default MovieInfo