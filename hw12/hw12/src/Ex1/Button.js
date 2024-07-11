import React from "react";
import './Button.css'

function Button(props){
    const click = () => {
        props.changeColor(props.bgColor);
    };
    return <button onClick={click} className="btn" style={{backgroundColor:props.bgColor}}>{props.bgColor}</button>
}

export default Button;