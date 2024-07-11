import React from "react";
import './Button.css'

class Button extends React.Component {
    render() {
        const click = () => {
            this.props.changeColor(this.props.bgColor);
        };
        return <button onClick={click} className="btn" style={{ backgroundColor: this.props.bgColor }}>{this.props.bgColor}</button>
    }
}


export default Button;