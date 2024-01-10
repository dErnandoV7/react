import { data } from './data/data'

import { useState } from 'react'

import './App.css'

import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable'

function App() {
  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  const calcImc = (e, height, weight) => {
    e.preventDefault()

    if (!weight || !height) return

    const weightFloat = Number(weight.replace(",", "."))
    const heightFloat = Number(height.replace(",", "."))

    const imcResult = (weightFloat / Math.pow(heightFloat, 2)).toFixed(1)
    setImc(imcResult)

    data.forEach(item => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })

  }

  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable data={data} setImc={setImc} info={info} infoClass={infoClass} imc={imc} />
      )}
    </div>
  )
}

export default App
