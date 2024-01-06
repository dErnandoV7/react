import React from 'react'

import { useState } from 'react'

import './MyForm.css'

const MyForm = ({ userName, userEmail, userPassword, userBio, userRole }) => {

    // 3. Gerenciamento de dados
    const [name, setName] = useState(userName)
    const [password, setPassword] = useState(userPassword)
    const [email, setEmail] = useState(userEmail)
    const [bio, setBio] = useState(userBio)
    const [role, setRole] = useState(userRole)
    const [submit, setSubmit] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name, email, password, bio, role)
        setSubmit(true)
        postLocalStorage()
        // 6. Limpando formulário
        setEmail("")
        setPassword("")
        setName("")
        setBio("")
        setRole("")
    }

    // LocalStorage
    const postLocalStorage = () => {
        const dataUser = [name, email, password, bio, role]
        localStorage.setItem("users", JSON.stringify(dataUser))
    }

    return (
        <div className='container'>
            {/* 1. Criação de form */}
            {/* 5. Enviando formulário */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder='Insira seu nome' onChange={handleName} value={name || ""} />
                </div>
                {/* 2. Label envolvendo inputs */}
                <label htmlFor="password">
                    <span>Senha:</span>
                    <input type="password" name="password" placeholder='Insira sua senha' onChange={handlePassword} value={password || ""} />
                </label  >
                {/* 4. Simplificando coleta de dados em inputs */}
                <label htmlFor="email">
                    <span>Email:</span>
                    <input type="email" name="email" placeholder='Insira seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email || ""} />
                </label>
                {/* 7. textarea */}
                <label htmlFor="bio">
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição do usuário' value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                </label>
                {/* 8. select */}
                <label htmlFor="funcao">
                    <span>Função no sistema:</span>
                    <select name="funcao" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="editor">Editor</option>
                        <option value="adm">Adminstrador</option>
                        <option value="user">Usuário</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm