import React from "react";
import Button from "./Button";
import Display from "./Display";
import './Ex2.css'

class Ex2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bgColor: 'transparent' };
    }

    render(){
        const changeColor = (bgColor) => {
            this.setState({ bgColor: bgColor });
        };
        const text = "Не волнуйтесь, если что-то не работает. Если бы все работало - вас бы уволили";
        return (
            <>
                <div className="buttons">
                    <Button changeColor={changeColor} bgColor="red" />
                    <Button changeColor={changeColor} bgColor="green" />
                    <Button changeColor={changeColor} bgColor="yellow" />
                </div>
                <Display text={text} bgColor={this.state.bgColor} />
            </>
        );
    }
}

export default Ex2;