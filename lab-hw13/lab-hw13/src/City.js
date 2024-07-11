function City(props) {
    return (
        <li>
            <div>
                <p>{props.name}</p>
                <p>{props.text}</p>
            </div>
        </li>
    )
}

export default City;