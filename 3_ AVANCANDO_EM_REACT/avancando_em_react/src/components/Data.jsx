import { useState } from 'react'

const Data = () => {
    let someData = 10

    const changeValueSomeData = () => someData = 15

    const [anotherNumber, setAnotherNumber] = useState(15)


    return (
        <>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={changeValueSomeData}>Mudar variável</button>
            </div>
            <div>
                <p>Valor: {anotherNumber}</p>
                <button onClick={() => setAnotherNumber(17)}>Mudar state</button>
            </div>
        </>
    )
}

export default Data