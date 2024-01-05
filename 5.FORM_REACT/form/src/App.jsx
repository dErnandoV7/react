import './App.css'

// 1. Criação de form
import MyForm from './components/MyForm'

function App() {

  // LocalStorage
  const dataLastUser = JSON.parse(localStorage.getItem("users") || "[]")
  const [name, email, password] = [dataLastUser[0] || "", dataLastUser[1] || "", dataLastUser[2] || ""]

  return (
    <>
      <div className='App'>
        <h1>Form em React</h1>
        {/* 1. Criaçao de form */}
        <MyForm userName={name} userEmail={email} userPassword={password} />
      </div>
    </>
  )
}

export default App
