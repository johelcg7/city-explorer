import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function CitySearch(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.displayLatLon();
    };

    return (
        <InputGroup onSubmit={handleSubmit} className="mb-3">
            <Form.Control
                onChange={props.updateCity}
                placeholder="Ingresa una dirección"
                aria-label="Ingresa una dirección"
                aria-describedby="basic-addon2"
            />
            <Button type= "submit" variant="outline-secondary" id="button-addon2">
                Explora
            </Button>
        </InputGroup>
    )
}



export default CitySearch;