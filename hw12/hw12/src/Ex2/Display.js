import React from "react";
import './Display.css';

class Display extends React.Component{
    render(){
        return <div className="display" style={{ backgroundColor: this.props.bgColor }}>{this.props.text}</div>
    }
}

export default Display;