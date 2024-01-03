import './App.css'

// 2. Imagem em assets
import night from './assets/night.jpg'

// 3. UseState
import Data from './components/Data'

// 4. Renderização de listas
import ListRender from './components/ListRender'

// 7. Render com condição
import ConditionalRender from './components/ConditionalRender'

// 8. Props
import ShowUserName from './components/ShowUserName'

// 9. Props desestruturadas
import CarDetails from './components/CarDetails'

function App() {
  return (
    <div className="App" style={{ paddingBottom: '500px' }}>
      <h1>Avançando em React</h1>
      {/* 1. Imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2. Imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 3. UseState */}
      <Data />
      {/* 4. Render de lista */}
      <ListRender />
      {/* 7. Render condicional */}
      <ConditionalRender />
      {/* 8. Props */}
      <ShowUserName name="Ernando" age={18} job="Programador" />
      {/* Props desestruturadas */}
      <CarDetails brand="VW" km={999} color="Vermelho" />
      {/* 9. Reaproveitamento de componentes */}
      <CarDetails brand="Audi" km={455} color="Preto" />
      <CarDetails brand="VW" km={455213} color="Azul" />
    </div>
  )
}

export default App
