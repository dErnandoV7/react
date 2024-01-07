import { useState } from 'react'
import './App.css'

import CustomInput from './components/CustomInput'
import CustomButton from './components/CustomButton'

function App() {

  return (
    <>
      <div className="container">
        <h1>Calculadora de IMC</h1>
        <CustomInput type="Altura" placeholder={"Exemplo 1,75"} />
        <CustomInput type="Peso" placeholder={"Exemplo 70,5"} />
        <div className='buttons'>
          <CustomButton classe="calcular" text="CALCULAR" />
          <CustomButton classe="limpar" text="LIMPAR" />
        </div>
      </div>
    </>
  )
}

export default App
