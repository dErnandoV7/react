import React from 'react'

import { useState } from 'react'

import './MyForm.css'

const MyForm = () => {

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            {/* 1. Criação de form */}
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder='Insira seu nome' required onChange={handleName} />
                </div>
                {/* 2. Label envolvendo inputs */}
                <label htmlFor="password">
                    <span>Senha:</span>
                    <input type="password" name="password" placeholder='Insira sua senha' required onChange={handlePassword} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
            <div>
                <h3>Suas informações</h3>
                <p>Nome: {name}</p>
                <p>Senha: {password}</p>
            </div>
        </div>
    )
}

export default MyForm