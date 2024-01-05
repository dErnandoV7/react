import './App.css'

import { useState } from 'react'

// 2. CSS de componente
import MyComponent from './components/MyComponent'

// 6. classes modules
import Title from './components/Title'

function App() {

  const [x, setX] = useState(3)

  function changeX() {
    setX(1)
  }
  return (
    <>
    {/* 1. CSS Global */}
    <h1>CSS no React</h1>
    {/* 2. CSS de componente */}
    <MyComponent />
    <p>Pegou o css de outro componente</p>
    {/* 3. Estilos inline */}
    <h2 style={{color: "blue", padding: "30px", border: "2px solid red"}} >Este elemento tem estilos inline</h2>
    {/* 4. Estilos inline dinamico */}
    <h4 style={x > 2 ? {color: "red"} : {color: "purple"}}>Estilos inline dinámico</h4>
    <button onClick={changeX}>Clique aqui para mudar a cor do elemento acima</button>
    {/* 5. classes dinamicas */}
    <h3 className={x > 2 ? ("title-style") : ("")}>Este elemento tem classe de forma dinamica</h3>
    {/* 6. Classes module */}
    <Title />
    </>
  )
}

export default App
