const BadValue = (props) => {
    return (
        props.statusbadvalue ? <div className="main__content-badValue">
            <h1>Wprowadź prawidłowe dane</h1>
        </div> : null
    )
}
export default BadValue;