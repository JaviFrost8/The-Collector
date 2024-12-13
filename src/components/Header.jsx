import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

  function handleClick(){
    window.location.reload()
  }

  return (
    <nav className='header-container'>
        <div className='logo'><Link to='/'>The Collector</Link></div>
        <div className='ul-container'>
            <ul>
                <li onClick={handleClick}><Link to='/peliculas'>Mis películas</Link></li>
                <li><Link to='/buscar'>Buscar</Link></li>
            </ul>
        </div>
    </nav>
  )
}
