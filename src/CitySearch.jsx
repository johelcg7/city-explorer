import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function CitySearch(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.displayLatLon();
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-3">
            <Form.Label>Ingresa cualquier dirección, no te limites:</Form.Label>
            <Form.Control onChange={props.updateCity} type="text" placeholder="Ingresa una dirección"/>
            <Button type= "submit" variant="outline-secondary" id="button-addon2">
                Explora
            </Button>
        </Form>
    )
}



export default CitySearch;