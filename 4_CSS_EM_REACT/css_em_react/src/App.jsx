import './App.css'

// 2. CSS de componente
import MyComponent from './components/MyComponent'

function App() {
  return (
    <>
    {/* 1. CSS Global */}
    <h1>CSS no React</h1>
    {/* 2. CSS de componente */}
    <MyComponent />
    <p>Pegou o css de outro componente</p>
    {/* 3. Estilos inline */}
    <h2 style={{color: "blue", padding: "30px", border: "2px solid red"}} >Este elemento tem estilos inline</h2>
    </>
  )
}

export default App
