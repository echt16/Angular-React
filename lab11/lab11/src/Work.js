function Name(props) {
    return <h2> {props.work}</h2>
}

function Review(props) {
    return <p>{props.text}</p>
}

function Work(props) {
    let { work, review } = props;
    return (
        <>
            <Name work={work} />
            <Review text={review} />
        </>
    );
}

export default Work;