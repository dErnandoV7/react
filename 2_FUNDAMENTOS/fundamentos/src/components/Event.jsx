import React from 'react'

const Event = () => {

    const handleClick = e => {
        console.log("Executou", e)
    }

    // 7. Função de renderizaçao
    const renderSomething = x => {
        if (x) {
            return <h5>Renderizando isso!</h5>
        } else {
            return <h5>Renderizando outra coisa</h5>
        }
    }

    // return 10 > 2 && <p>Carregando...</p>

    return (
        <div>
            <div>
                <button onClick={() => console.log("testando um evento")}>
                    Clique aqui
                </button>
            </div>
            {/* 6. Evento com função */}
            <div>
                <button onClick={handleClick}>
                    Clique aqui - com função
                </button>
            </div>

            {/* 7. Função com render */}
            {renderSomething(true)}
            {renderSomething(false)}

        </div>
    )
}

export default Event