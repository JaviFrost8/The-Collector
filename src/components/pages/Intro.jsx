import React from 'react'
import { Principal } from './Principal'

export const Intro = () => {
  return (
    <Principal>
      <div className='container-intro'>
        <h1 className='title-intro'>Bienvenido a "The Collector"</h1>

        <div className='container-p'>
          <p className='p'>"The Collector" es una aplicación para coleccionistas de cine.</p>
          <p className='p'>Busca y añade películas a tu colección y mantenla organizada en todo momento.</p>
          <p className='p'>Lleva el recuento de tus películas y el tamaño de tu colección fílmica.</p>
        </div>
      </div>
    </Principal>
  )
}
