import React from 'react'
import './Button.css'

function Button(props){
    const changeValue = () => {props.changeValue(props.btnVal)}
    return <button className='btn' onClick={changeValue}>{props.btnVal.toString()[0] !== '-' ? '+' + props.btnVal : props.btnVal }</button>
}

export default Button;