import './App.css'

//  2. Importando componente
import FirstComponent from './components/FirstComponent'

// 4. Importanto template expression
import TemplateExpression from './components/TemplateExpression'

function App() {
  // 3. Comentários
  return <div className="App">
    {/* 3. Comentário JSX */}
    <h1>Fundamentos do React</h1>
    <FirstComponent />
    <TemplateExpression />
  </div>
}

export default App
