import React from 'react'
import { Header } from '../Header'

export const Principal = ({ children }) => {

  return (
    <>
        <header>
          <Header />
        </header>
        
      <div className='container'>
        {children}
      </div>
    </>
  )
}
