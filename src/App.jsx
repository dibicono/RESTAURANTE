import './App.css'
import AppRouter from './routes/AppRouter'
import { NavLink } from 'react-router-dom'

function App() {
  
  return (
    <>
      <ul>
        <li><NavLink to="/Home">Home</NavLink></li>
        <li><NavLink to="/Contacto">Contacto</NavLink></li>
        <li><NavLink to="/Ubicacion">Ubicacion</NavLink></li>
      </ul>

      <AppRouter />
    </>

  )
}

export default App
