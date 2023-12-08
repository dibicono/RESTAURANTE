import './App.css'
import AppRouter from './routes/AppRouter'
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <>


      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div>
          <a className="navbar-brand"><NavLink to="/Home">HOME</NavLink></a>
        </div>
        <div>
          <a className="navbar-brand"><NavLink to="/Contacto">CONTACTO</NavLink></a>
        </div>
        <div>
          <a className="navbar-brand"><NavLink to="/Ubicacion">UBICACION</NavLink></a>
        </div>
      </nav>




      <AppRouter />
    </>

  )
}

export default App
