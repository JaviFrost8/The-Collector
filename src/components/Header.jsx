import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {


  return (
    <nav className='header-container'>
        <div className='logo'><Link to='/'>The Collector</Link></div>
        <div className='ul-container'>
            <ul>
                <li><Link to='/peliculas'>Mis películas</Link></li>
                <li><Link to='/buscar'>Buscar</Link></li>
            </ul>
        </div>
    </nav>
  )
}
