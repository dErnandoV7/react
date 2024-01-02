import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(["Ernando", "João", "Maria", "Joana"])

  const [users, setUsers] = useState([
    { id: 0, name: "Ernando", age: 18 },
    { id: 1, name: "João", age: 11 },
    { id: 2, name: "Maria", age: 38 },
    { id: 3, name: "Joana", age: 20 },
  ])

  const [msgDeleteUser, setMsgDeleteUser] = useState("Deletar usuario de forma aleatoria")

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)
    setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))

    if(!users.length) setMsgDeleteUser("Lista sem usuários para deletar!")
  }

  return (
    <div>
      {/* Render sem key */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* Render com key */}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.age} anos</li>
        ))}
      </ul>
      {/* 6. Previous state */}
      <button onClick={deleteRandom}>{msgDeleteUser}</button>
    </div>
  )
}

export default ListRender