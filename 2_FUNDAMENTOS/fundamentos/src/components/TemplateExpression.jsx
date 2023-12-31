// 4. Template expression

const TemplateExpression = () => {
    const name = "Ernando"
    const date = {
        name: name,
        age: 31
    }

    return (
        <div>
            <p>A soma é {2 + 2}</p>
            <h3>{name}, seja bem vindo(a).</h3>
            <p>{name}, você tem {date.age} anos, certo?</p>
        </div>
    )
}

export default TemplateExpression