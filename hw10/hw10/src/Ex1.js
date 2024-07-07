import React from 'react';

function HelloJSX() {
    return <p>Hello, React</p>;
}

function HelloJS() {
    return React.createElement('p', null, 'Hello, React');
}

function Ex1() {
    return (
        <>
            <HelloJSX/>
            <HelloJS/>
        </>
    );
}

export default Ex1;