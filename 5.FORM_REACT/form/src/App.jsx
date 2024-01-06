import './App.css'

// 1. Criação de form
import MyForm from './components/MyForm'

function App() {

  // LocalStorage
  const dataLastUser = JSON.parse(localStorage.getItem("users") || "[]")
  const [name, email, password, bio, role] = [dataLastUser[0] || "", dataLastUser[1] || "", dataLastUser[2] || "", dataLastUser[3] || "", dataLastUser[4] || ""]

  return (
    <>
      <div className='App'>
        <h1>Form em React</h1>
        {/* 1. Criaçao de form */}
        <MyForm userName={name} userEmail={email} userPassword={password} userBio={bio} userRole={role} />
      </div>
    </>
  )
}

export default App
