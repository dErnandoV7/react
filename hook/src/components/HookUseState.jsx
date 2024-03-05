import { useState } from "react"

import "./HookUseState.css"

const HookUseState = () => {
  // 1. useState
  const [name, setName] = useState("Ernando")
  const [age, setAge] = useState("18")

  const handleSubmit = e => {
    e.preventDefault()

    console.log(`Idade salva com sucesso \n${e.target.age.value}`)
  }
  return (
    <div>
      {/* 1. useState */}
      <div className="useState">
        <h2>useState</h2>
        <p>Nome: {name}</p>
        <form id="form_useState" onSubmit={(e) => changeName(e)}>
          <label htmlFor="name">
            <span>Mudar nome</span>
            <input type="text" placeholder="Insira o novo nome" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </form>
        <form id="form_useState" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span>Idade</span>
            <input type="number" placeholder="Insira sua idade" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
            <button>Salvar</button>
            <p>Idade: {age}</p>
          </label>
        </form>
      </div>
    </div>
  )
}

export default HookUseState
