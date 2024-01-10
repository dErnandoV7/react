import React, { useState } from 'react'

import './ImcCalc.css'
import Button from './Button'

const ImcCalc = ({calcImc}) => {

    // Gerenciamento de dados
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")

    const validDigit = (txt) => {
        return txt.replace(/[^0-9,.]/g, "")
    }

    const handleHeight = (e) => {
        e.target.value = validDigit(e.target.value)
        setHeight(e.target.value)
    }

    const handleWeight = (e) => {
        e.target.value = validDigit(e.target.value)
        setWeight(e.target.value)
    }

    const clearInputs = (e) => {
        e.preventDefault()
        setHeight("")
        setWeight("")
    }

    return (
        <div id='calc-container'>
            <h2>Calculadora de MC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Altura:</label>
                        <input
                            type="text"
                            name='height'
                            placeholder='Exemplo 1.75'
                            onChange={handleHeight}
                            value={height} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight">Peso:</label>
                        <input
                            type="text"
                            name='weight'
                            placeholder='Exemplo 70.5'
                            onChange={handleWeight}
                            value={weight} />
                    </div>
                </div>
                <div className="action-control">
                    <Button id={'calc-btn'} text={'Calcular'} action={(e) => calcImc(e, height, weight)}/>
                    <Button id={'clear-btn'} text={'Limpar'} action={clearInputs}/>
                </div>
            </form>
        </div>
    )
}

export default ImcCalc