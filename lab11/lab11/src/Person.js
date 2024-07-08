function Name(props) {
    return <h1>{props.author}</h1>
}

function Biografy(props) {
    return (
        <p>{props.text}</p>
    );
}

function Person(props) {
    let { author, biografy } = props;
    return (
        <>
            <Name author={author} />
            <Biografy text={biografy} />
        </>
    );
}

export default Person;