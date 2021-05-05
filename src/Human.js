function Human(props) {
    return (
        <div>
            <p> My Name is {props.name}</p>
            <p>And I am from {props.location}</p>
        </div>
    )
}

export default Human;