import City from "./City";

function Cities(props) {
    const data = props.data;
    const cities = data.map(city => <City {...city} key={city.name}></City>)
    return <ul>{cities}</ul>
}

export default Cities;