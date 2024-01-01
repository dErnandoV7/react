import './App.css'

//  2. Importando componente
import FirstComponent from './components/FirstComponent'

// 4. Importanto template expression
import TemplateExpression from './components/TemplateExpression'

// 5. Hierarquia de componentes
import MyComponent from './components/MyComponent'

import Event from './components/Event'

function App() {
  // 3. Comentários
  return <div className="App">
    {/* 3. Comentário JSX */}
    <h1>Fundamentos do React</h1>
    <FirstComponent />
    <TemplateExpression />
    <MyComponent />
    <Event />
  </div>
}

export default App
