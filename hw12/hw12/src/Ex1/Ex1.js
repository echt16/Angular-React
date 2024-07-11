import { useState } from "react";
import React from "react";
import Button from "./Button";
import Display from "./Display";
import './Ex1.css'

function Ex1() {
    const [bgColor, setBgColor] = useState('transparent');
    const changeColor = (bgColor) => {
        setBgColor(bgColor);
    };
    const text = "Не волнуйтесь, если что-то не работает. Если бы все работало - вас бы уволили";
    return (
        <>
            <div className="buttons">
                <Button changeColor={changeColor} bgColor="red" />
                <Button changeColor={changeColor} bgColor="green" />
                <Button changeColor={changeColor} bgColor="yellow" />
            </div>
            <Display text={text} bgColor={bgColor} />
        </>
    );
}

export default Ex1;