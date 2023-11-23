import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'
import AppRouter from './routes/AppRouter'

function App() {
  
  return (
    <>
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
        <li><NavLink to="/ubicacion">Ubicacion</NavLink></li>
      </ul>

      <AppRouter />
    </>

  )
}

export default App;
