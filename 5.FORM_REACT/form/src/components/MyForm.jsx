import React from 'react'

import { useState } from 'react'

import './MyForm.css'

const MyForm = ({ userName, userEmail, userPassword }) => {

    // 3. Gerenciamento de dados
    const [name, setName] = useState(userName)
    const [password, setPassword] = useState(userPassword)
    const [email, setEmail] = useState(userEmail)

    const [submit, setSubmit] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmit(true)
        postLocalStorage()
    }

    // LocalStorage
    const postLocalStorage = () => {
        const dataUser = [name, email, password]
        localStorage.setItem("users", JSON.stringify(dataUser))
    }

    return (
        <div className='container'>
            {/* 1. Criação de form */}
            {/* 5. Enviando formulário */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder='Insira seu nome' required onChange={handleName} value={name || ""} />
                </div>
                {/* 2. Label envolvendo inputs */}
                <label htmlFor="password">
                    <span>Senha:</span>
                    <input type="password" name="password" placeholder='Insira sua senha' required onChange={handlePassword} value={password || ""} />
                </label  >
                {/* 4. Simplificando coleta de dados em inputs */}
                <label htmlFor="email">
                    <span>Email:</span>
                    <input type="email" name="email" placeholder='Insira seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email || ""} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
            <div>
                {submit && (
                    <>
                        <h3>Suas informações</h3>
                        <p>Nome: {name}</p>
                        <p>Senha: {password}</p>
                        <p>Email: {email}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default MyForm