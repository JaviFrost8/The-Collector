import './App.css'
import MovieInfo from './components/MovieInfo';
import { Buscar } from './components/pages/Buscar';
import { Intro } from './components/pages/Intro';
import { Mispeliculas } from './components/pages/Mispeliculas';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/peliculas' element={<Mispeliculas />} />
          <Route path='/buscar' element={<Buscar />} />
          <Route path='/peliculas/pelicula/:id' element={<MovieInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
