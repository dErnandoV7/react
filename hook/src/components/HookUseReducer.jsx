import { useReducer, useState } from "react"

// 1. Inicando no useReducer

// 2. Avançando no useReducer
const initial = [
    {
        name: "Ernando",
        email: "ernando@gmail.com",
        job: "Desenvolvedor"
    }
]

import "./HookUseReducer.css"

const HookUseReducer = () => {
    const [{ number }, dispatch] = useReducer((state, action) => {
        return {
            ...state,
            number: Math.random(state.number)
        }
    }, {
        number: 1,
    })

    // Usuarios
    const [array, dispatch2] = useReducer((state, action) => {

        return [
            ...state,
            { name: "teste", email: "teste@gmail.com", job: "teste" }
        ]
    }, initial)

    // Tarefas
    const [tarefa, setTarefa] = useState("")

    const tarefas = [
        { id: 1, txt: "Fazer alguma coisa " },
        { id: 2, txt: "Fazer alguma coisa 2" },
    ]

    const tarefaReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                if (!tarefa) return

                const newTarefa = { id: Math.floor(Math.random() * 1000), txt: tarefa }

                setTarefa("")

                return [
                    ...state,
                    newTarefa
                ]
            case "DELETE":
                return state.filter((item, index) => index !== action.id)

            default:
                return state

        }
    }

    const [tarefasState, dispatch3] = useReducer(tarefaReducer, tarefas)

    const submitTarefa = (e) => {
        e.preventDefault()

        if (!e.target.tarefa.value) return
        dispatch3({ type: "ADD" })
    }

    const deleteTarefa = item => {
        dispatch3({ type: "DELETE", id: item })
    }

    return (
        <div>
            <div className="userReducer">
                <h2>useReducer</h2>
                <p>{number}</p>
                <button onClick={dispatch}>Mudar número</button>

                <div className="usuarios">
                    {array.map((item, index) => (
                        <div className="usuario" key={index}>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                            <p>{item.job}</p>
                        </div>
                    ))}
                    <button onClick={dispatch2}>Adicionar novo usuario</button>
                </div>

                <div className="tarefas">
                    {tarefasState.map((item, index) => (
                        <div className="tarefa" key={index} onDoubleClick={() => deleteTarefa(index)}>
                            <p>{item.txt}</p>
                        </div>
                    ))}
                    <form onSubmit={submitTarefa} >
                        <input name="tarefa" type="text" placeholder="Adicionar nova tarefa" onChange={(e) => setTarefa(e.target.value)} value={tarefa} />
                        <button>Adicionar nova tarefa</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HookUseReducer