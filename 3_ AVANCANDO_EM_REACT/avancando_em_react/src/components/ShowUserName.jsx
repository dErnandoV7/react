const ShowUserName = (prop) => {
    return (
        <div>
            <h3>Nome de usuário: {prop.name}</h3>
            <h4>Idada do usuário: {prop.age}</h4>
            <h4>Profissão do usuário: {prop.job}</h4>
        </div>
    )
}

export default ShowUserName