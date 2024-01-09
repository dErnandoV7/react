import React from 'react'
import './Button.css'

const Button = ({ id, text }) => {
    return (
        <button id={id}>{text}</button>
    )
}

export default Button