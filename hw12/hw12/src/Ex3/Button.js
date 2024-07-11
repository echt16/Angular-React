import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Button(props) {
    const click = () => {
        props.nextQuote();
    };
    return <button className="btn btn-primary" onClick={click}>Next quote</button>
}

export default Button;