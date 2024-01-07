import React from 'react'

import './CustomButton.css'

const CustomButton = ({classe, text}) => {
    return (
        <>
            <button className={classe}>{text}</button>
        </>
    )
}

export default CustomButton