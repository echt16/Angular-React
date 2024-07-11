import React from "react";
import './Display.css';

function Display(props) {
    return <div className="display" style={{ backgroundColor: props.bgColor }}>{props.text}</div>
}

export default Display;