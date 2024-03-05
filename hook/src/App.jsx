import { Outlet, Link } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <div className="App">
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contato</Link>
      </ul>
      <Outlet />
    </div>
  )
}

export default App
