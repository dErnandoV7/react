import React from 'react'
import './CustomInput.css'

const CustomInput = ({type, placeholder}) => {
    return (
        <>
            <label htmlFor={type}>
                <span>{type}:</span>
                <input type="text" placeholder={placeholder}/>
            </label>
        </>
    )
}

export default CustomInput