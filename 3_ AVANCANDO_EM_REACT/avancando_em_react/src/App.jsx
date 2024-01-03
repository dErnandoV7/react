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

// 12. Fragment
import Fragment from './components/Fragment'

// 13. Children prop
import Container from './components/Container'

// 11. Renderização de listas com componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Vermelho", km: 0 },
  { id: 2, brand: "VW", color: "Azul", km: 1000 },
  { id: 3, brand: "BMW", color: "Preto", km: 5000 }
]

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
      {/* 11. Renderização de listas com componentes*/}
      {cars.map(car => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km} />
      ))}
      {/* 12. Fragment */}
      <Fragment />
      {/* 13. Children prop */}
      <Container children={<Fragment />} />

      <Container>
        <p>Este é meu componente onde uso Children prop</p>
        <div>
          <h3>Div container</h3>
        </div>
      </Container>

      <Container>
        <h2>Completei aqui, meu chapa!</h2>
        
        {cars.map(car => (
          <CarDetails
            brand={car.brand}
            color={car.color}
            km={car.km} />
        ))}
      </Container>
    </div>
  )
}

export default App
