

function LatLon(props) {
    return(
        <>
            <h1>{props.city}</h1>
            <p>Latitud: {props.lat}</p>

            <p>Longitud: {props.lon}</p>
        </>
    )
}

export default LatLon;