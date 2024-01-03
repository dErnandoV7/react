import React from 'react'

const ConditionalRender = () => {
    const x = false
    const name = "Ernando"
    return (

        <div>
            {/* 7. Render condicional */}
            <h3>Isso será exibido?</h3>
            {x && <p>se x for true sim</p>}
            {/* 8. else */}
            {name == "Ernando" ? (
                <>
                    <h3>Sim, pois o nome é Ernando</h3>
                    <h1>Olá, Ernando</h1>
                </>
            ) : (
                <>
                    <h3>Não, pois o nome não é Ernando</h3>
                </>
            )}
        </div>
    )
}

export default ConditionalRender