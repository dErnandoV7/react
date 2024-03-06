import { useEffect, useState } from "react"


const HookUseEffect = () => {

    // 1. useEffect sem dependências
    const [number, setNumber] = useState(1)

    useEffect(() => {
        console.log("useEffect executado. useEffect sem dependências")
    })

    // 2. useEffect com array de dependências vazio
    useEffect(() => {
        console.log("useEffect executado. useEffect com array de dependências vazio")
    }, [])

    // 3. useEffect com array de dependências com valores
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if (anotherNumber !== 0) {
            console.log("Sou executado apenas quando anotherNumber é alterado.")
        }
    }, [anotherNumber])

    // 4. cleanup do useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("cleanup do useEffect!")
            setAnotherNumber(anotherNumber + 2)
        }, 2000)

        return () => clearTimeout(timer)
    }, [anotherNumber])

    const changeSomething = () => {
        setNumber(number + 1)
    }

    const changeAnotherNumber = () => {
        setAnotherNumber(anotherNumber + 4)
    }

    return (
        <div>
            <h2>HookUseEffect</h2>
            <p>Número: {number}</p>

            <button onClick={changeSomething}>Executar</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={changeAnotherNumber}>Executar</button>
        </div>
    )
}

export default HookUseEffect