import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display.js";

const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "The harder you work for something, the greater you’ll feel when you achieve it.",
        author: "Unknown"
    },
    {
        quote: "Don’t watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    }
];

function Ex3() {
    const [index, setIndex] = useState(0);
    const nextQuote = () => {
        if (index === quotes.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    };
    return (
        <>
            <Button nextQuote={nextQuote}/>
            <Display quote={quotes[index].quote} author={quotes[index].author}/>
        </>
    );
}

export default Ex3;